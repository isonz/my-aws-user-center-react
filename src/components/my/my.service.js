import { authHeader } from '../../helpers/auth-header';
import {handleResponse} from "../../helpers/headler";

export function userGetById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${process.env.API_HOST}/users/${id}`, requestOptions).then(handleResponse);
}

export function userUpdate(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${process.env.API_HOST}/users/${user.id}`, requestOptions).then(handleResponse);
}
