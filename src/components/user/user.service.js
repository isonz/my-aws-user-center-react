import { authHeader } from '../../helpers/auth-header';
import {AuthService} from "../auth/auth.service";

export class UserService {

    static getAll() {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        return fetch(`${process.env.API_HOST}/users`, requestOptions).then(this.handleResponse);
    }

    static getById(id) {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
        return fetch(`${process.env.API_HOST}/users/${id}`, requestOptions).then(this.handleResponse);
    }

    static update(user) {
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        return fetch(`${process.env.API_HOST}/users/${user.id}`, requestOptions).then(this.handleResponse);
    }

    static _delete(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader()
        };

        return fetch(`${process.env.API_HOST}/users/${id}`, requestOptions).then(this.handleResponse);
    }

    static handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    AuthService.logout();
                    window.location.reload(true);
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }
}

