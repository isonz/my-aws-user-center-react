import { authHeader } from '../../helpers/auth-header';
import {AlertActions} from "../alert/alert.action";
import { history } from '../../helpers/history';
import { handleResponse } from '../../helpers/headler';

const HEADERS = { 'Content-Type': 'application/json' };

export function authRegister(regUser) {
    const requestOptions = { method: 'POST', headers: HEADERS, body: JSON.stringify(regUser)};
    return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_REGISTER_ENTRANCE}`, requestOptions).then(
        response => handleResponse(response),
    ).then(
        response => authSuccessResponse(response),
    ).catch(
        error => AlertActions.error(error.toString()),
    );
}

export function authLogin(loginUser) {
    const requestOptions = { method: 'POST', headers: HEADERS, body: JSON.stringify(loginUser)};
    const { keepSign } = loginUser.data;
    return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_LOGIN_ENTRANCE}`, requestOptions).then(
        response => handleResponse(response),
    ).then(
        response => authSuccessResponse(response, keepSign),
    ).catch(
        error => AlertActions.error(error.toString()),
    );
}

export function authUpdate(user) {
    const requestOptions = { method: 'PUT', headers: { ...authHeader(), HEADERS }, body: JSON.stringify(user) };
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

export function  authLogout() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
}

export function  authDelete(id) {
    const requestOptions = { method: 'DELETE', headers: authHeader() };
    return fetch(`${process.env.REACT_APP_API_HOST}/users/${id}`, requestOptions).then(
        response => handleResponse(response),
    ).then(
        user => {
            localStorage.setItem('user', {});
        }
    ).catch(
        error => AlertActions.error(error.toString()),
    );
}

export function authSuccessResponse(response, keepSign= false){
    //console.log(response);
    if('undefined' === typeof response){
        AlertActions.error('Response empty');
        return null;
    }
    if ('undefined' !== typeof response.errorCode){
        AlertActions.error(response.message);
        return null;
    }

    if( keepSign ){
        localStorage.setItem('user', JSON.stringify(response));
    }else{
        sessionStorage.setItem('user', JSON.stringify(response));
    }
    AlertActions.success('Success!');
    history.push('/');
    window.location.reload(true);
    return response;
}

