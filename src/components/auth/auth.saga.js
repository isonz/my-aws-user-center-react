import { put, call, delay, takeLatest, fork } from 'redux-saga/effects'
import {authConstants} from "./auth.constant";
import {AuthService} from "./auth.service";
import { history } from '../../helpers/history';
import {AlertActions} from "../alert/alert.action";
import {alertErrorSaga} from "../alert/alert.saga";
import {alertConstant} from "../alert/alert.constant";


export default function* watchAuthSaga() {
    yield takeLatest(authConstants.LOGIN_REQUEST, authLoginSaga);
    yield takeLatest(authConstants.REGISTER_REQUEST, authRegisterSaga);
}

export function* authLoginSaga(loginUser) {
    yield delay(1000);
    try {
        const user = yield call(AuthService.login(loginUser));
        console.log(user);
        yield put({ type: authConstants.LOGIN_SUCCESS, user });
    } catch(error) {
        alertErrorSaga(error.toString());
        yield put({ type: authConstants.LOGIN_FAILURE, error });
    }
}

export function* authRegisterSaga(regUser) {
    yield delay(1000);
    try {
        const user = yield call(AuthService.register(regUser));
        yield put({ type: authConstants.REGISTER_SUCCESS, user });
    } catch(error) {
        yield put({ type: authConstants.REGISTER_FAILURE, error });
    }
}


