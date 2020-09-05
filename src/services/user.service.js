import config from 'config';
import { authHeader } from '../helpers/auth-header';

export class UserService {

    login(username, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
            .then(handleResponse)
            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    }

    getAll() {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
    }

    getById(id) {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
    }

    register(user) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
    }

    update(user) {
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
    }

    _delete(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader()
        };

        return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
    }

    handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }
}

