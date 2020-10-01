import { put, call, takeLatest } from 'redux-saga/effects'
import {userConstants} from "./user.constant";
import {userGetAll, userDelete} from "./user.service";
import {AlertActions} from "../alert/alert.action";

export default function* watchUserSaga() {
    yield takeLatest(userConstants.GET_ALL_REQUEST, userGetAllSaga);
    yield takeLatest(userConstants.DELETE_REQUEST, userDeleteSaga);
}

export function* userGetAllSaga(paging) {
    //console.log(paging);
    //yield delay(1000);
    try {
        const users = yield call( userGetAll, paging);
        if(users){
            // AlertActions.success('Success');
            yield put({ type: userConstants.GET_ALL_SUCCESS, users });
        }else{
            yield put({ type: userConstants.GET_ALL_FAILURE });
        }
    } catch(error) {
        AlertActions.error(error.toString());
        yield put({ type: userConstants.GET_ALL_FAILURE, error });
    }
}

export function* userDeleteSaga(user) {
    try {
        const rs = yield call(userDelete, user.id);
        yield put({ type: userConstants.DELETE_SUCCESS, rs });
    } catch(error) {
        yield put({ type: userConstants.DELETE_FAILURE, error });
    }
}


