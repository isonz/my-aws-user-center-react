import { put, call, delay, takeLatest } from 'redux-saga/effects'
import {alertConstant} from "./alert.constant";

export function* alertSuccessSaga(message) {
    yield put({ type: alertConstant.SUCCESS, message });
}

export function* alertErrorSaga(message) {
    yield put({ type: alertConstant.ERROR, message });
}

export function* alertClearSaga() {
    yield put({ type: alertConstant.CLEAR });
}
