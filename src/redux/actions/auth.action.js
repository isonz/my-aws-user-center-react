import { userConstants } from '../../constants/user.constant';
import { AuthService } from '../../services/auth.service';
import { AlertActions } from './alert.action';
import { history } from '../../helpers/history';

export class AuthActions {

    static login(username, password) {
        return dispatch => {
            dispatch(request({ username } ) );

            AuthService.login(username, password)
                .then(
                    user => {
                        dispatch(success(user));
                        history.push('/');
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(AlertActions.error(error.toString()));
                    }
                );
        };

        function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
        function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    }

    static logout() {
        AuthService.logout();
        return { type: userConstants.LOGOUT };
    }

    static register(user) {
        return dispatch => {
            dispatch(request(user));

            AuthService.register(user)
                .then(
                    user => {
                        dispatch(success());
                        history.push(process.env.REACT_APP_LOGIN_ENTRANCE);
                        dispatch(AlertActions.success('Registration successful'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(AlertActions.error(error.toString()));
                    }
                );
        };

        function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
        function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
        function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
    }


    // delete is a reserved word in javascript
    static _delete(id) {
        return dispatch => {
            dispatch(request(id));

            AuthService.delete(id)
                .then(
                    user => dispatch(success(id)),
                    error => dispatch(failure(id, error.toString()))
                );
        };

        function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
        function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
        function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
    }
}
