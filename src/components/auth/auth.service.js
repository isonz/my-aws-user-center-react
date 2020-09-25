import { authHeader } from '../../helpers/auth-header';
import {AlertActions} from "../alert/alert.action";

export class AuthService {

    static login(loginUser) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginUser)
        };

        return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_LOGIN_ENTRANCE}`, requestOptions).then(
            response => this.handleResponse(response),
        ).then(
            user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
        ).catch(
            error => AlertActions.error(error.toString()),
        );
    }

    static logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    }


    static register(regUser) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(regUser)
        };
        return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_REGISTER_ENTRANCE}`, requestOptions).then(
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
        console.log(response);
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

    // static handleResponse(response) {
    //     return response.text().then(text => {
    //         const data = text && JSON.parse(text);
    //         if (!response.ok) {
    //             if (response.status === 401) {
    //                 // auto logout if 401 response returned from api
    //                 this.logout();
    //                 window.location.reload(true);
    //             }
    //
    //             const error = (data && data.message) || response.statusText;
    //             return Promise.reject(error);
    //         }
    //
    //         return data;
    //     });
    // }
}

