import { authConstants } from './auth.constant';
import { AuthService } from './auth.service';
import { AlertActions } from '../alert/alert.action';
import { history } from '../../helpers/history';

export class AuthActions {

    static login(loginUser) {
        return {type: authConstants.LOGIN_REQUEST, loginUser}
    }


    // static login(username, password) {
    //     return dispatch => {
    //         dispatch(request({ username } ) );
    //
    //         AuthService.login(username, password)
    //             .then(
    //                 user => {
    //                     dispatch(success(user));
    //                     history.push('/');
    //                 },
    //                 error => {
    //                     dispatch(failure(error.toString()));
    //                     dispatch(AlertActions.error(error.toString()));
    //                 }
    //             );
    //     };
    //
    //     function request(user) { return { type: authConstants.LOGIN_REQUEST, user } }
    //     function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    //     function failure(error) { return { type: authConstants.LOGIN_FAILURE, error } }
    // }


    static register(regUser) {
        return { type: authConstants.REGISTER_REQUEST, regUser };
    }

    // static register(user) {
    //     return dispatch => {
    //         dispatch(request(user));
    //
    //         AuthService.register(user)
    //             .then(
    //                 user => {
    //                     dispatch(success());
    //                     history.push(process.env.REACT_APP_LOGIN_ENTRANCE);
    //                     dispatch(AlertActions.success('Registration successful'));
    //                 },
    //                 error => {
    //                     dispatch(failure(error.toString()));
    //                     dispatch(AlertActions.error(error.toString()));
    //                 }
    //             );
    //     };
    //
    //     function request(user) { return { type: authConstants.REGISTER_REQUEST, user } }
    //     function success(user) { return { type: authConstants.REGISTER_SUCCESS, user } }
    //     function failure(error) { return { type: authConstants.REGISTER_FAILURE, error } }
    // }

    static logout() {
        AuthService.logout();
        return { type: authConstants.LOGOUT };
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

        function request(id) { return { type: authConstants.DELETE_REQUEST, id } }
        function success(id) { return { type: authConstants.DELETE_SUCCESS, id } }
        function failure(id, error) { return { type: authConstants.DELETE_FAILURE, id, error } }
    }
}
