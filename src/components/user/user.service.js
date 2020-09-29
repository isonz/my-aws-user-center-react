import { authHeader } from '../../helpers/auth-header';
import { handleResponse } from '../../helpers/headler';

export function userGetAll(paging) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };
    return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_GET_ALL_USERS}?pageNumber=${paging.pageNumber}&pageSize=${paging.pageSize}`, requestOptions).then(handleResponse);
}

export function userDelete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_GET_ALL_USERS}/${id}`, requestOptions).then(handleResponse);
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





