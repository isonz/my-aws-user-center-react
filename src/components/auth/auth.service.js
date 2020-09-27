import { authHeader } from '../../helpers/auth-header';
import {AlertActions} from "../alert/alert.action";
import { history } from '../../helpers/history';

const HEADERS = { 'Content-Type': 'application/json' };

export class AuthService {

    static register(regUser) {
        const requestOptions = { method: 'POST', headers: HEADERS, body: JSON.stringify(regUser)};
        return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_REGISTER_ENTRANCE}`, requestOptions).then(
            response => this.handleResponse(response),
        ).then(
            response => this.successResponse(response),
        ).catch(
            error => AlertActions.error(error.toString()),
        );
    }

    static login(loginUser) {
        const requestOptions = { method: 'POST', headers: HEADERS, body: JSON.stringify(loginUser)};
        const { keepSign } = loginUser.data;
        return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_LOGIN_ENTRANCE}`, requestOptions).then(
            response => this.handleResponse(response),
        ).then(
            response => this.successResponse(response, keepSign),
        ).catch(
            error => AlertActions.error(error.toString()),
        );
    }

    static update(user) {
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        return fetch(`${process.env.REACT_APP_API_HOST}/auth/${user.id}`, requestOptions).then(
            response => this.handleResponse(response),
        ).then(
            user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
        ).catch(
            error => AlertActions.error(error.toString()),
        );
    }

    static logout() {
        sessionStorage.removeItem('user');
        localStorage.removeItem('user');
    }

    static _delete(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader()
        };

        return fetch(`${process.env.REACT_APP_API_HOST}/users/${id}`, requestOptions).then(
            response => this.handleResponse(response),
        ).then(
            user => {
                localStorage.setItem('user', {});
            }
        ).catch(
            error => AlertActions.error(error.toString()),
        );
    }

    static handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    this.logout();
                    window.location.reload(true);
                }
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        });
    }

    static successResponse(response, keepSign= false){
        //console.log(response);
        if('undefined' === typeof response){
            AlertActions.error('Response empty');
            return null;
        }
        if ('undefined' !== typeof response.errorCode){
            AlertActions.error(response.message);
            return null;
        }

        const user = {
            id: response.id,
            username: response.username,
        };
        if( keepSign ){
            localStorage.setItem('user', JSON.stringify(user));
        }else{
            sessionStorage.setItem('user', JSON.stringify(user));
        }
        AlertActions.success('Success!');
        history.push('/');

        return response;
    }
}

