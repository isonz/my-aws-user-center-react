import { authHeader } from '../../helpers/auth-header';
import { handleResponse } from '../../helpers/headler';
import {AlertActions} from "../alert/alert.action";

export function userGetAll(paging) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_GET_ALL_USERS}?lastId=${paging.lastId}&pageSize=${paging.pageSize}`, requestOptions).then(handleResponse);
}

export function userDelete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_USER_ACTION}/${id}`, requestOptions).then(handleResponse).then(
        response => window.location.reload(true),
    ).catch(
        window.location.reload(true),
        error => AlertActions.error(error.toString()),
    );
}

export function userGetById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${process.env.REACT_APP_API_HOST}/users/${id}`, requestOptions).then(handleResponse);
}

export function userUpdate(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${process.env.REACT_APP_API_HOST}/users/${user.id}`, requestOptions).then(handleResponse);
}





