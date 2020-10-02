import { authHeader } from '../../helpers/auth-header';
import {handleResponse} from "../../helpers/headler";

export function myInfo() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${process.env.API_HOST}/users/${id}`, requestOptions).then(handleResponse);
}

export function myUpdate() {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${process.env.API_HOST}/users/${id}`, requestOptions).then(handleResponse);
}
