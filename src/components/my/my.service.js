import { authHeader } from '../../helpers/auth-header';
import {handleResponse} from "../../helpers/headler";

export function myInfo() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_MY_ACTION}`, requestOptions).then(handleResponse);
}

export function myUpdate(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${process.env.REACT_APP_API_HOST}${process.env.REACT_APP_API_MY_ACTION}`, requestOptions).then(handleResponse);
}
