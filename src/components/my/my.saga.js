import { put, call, takeLatest } from 'redux-saga/effects'
import {myConstants} from "./my.constant";
import {myInfo, myUpdate} from "./my.service";
import {AlertActions} from "../alert/alert.action";

export default function* watchUserSaga() {
    yield takeLatest(myConstants.GET_REQUEST, myInfo);
    yield takeLatest(myConstants.UPDATE_REQUEST, myUpdate);
}

export function* myInfo() {
    //console.log(paging);
    //yield delay(1000);
    try {
        const users = yield call( myInfo);
        if(users){
            // AlertActions.success('Success');
            yield put({ type: myConstants.GET_SUCCESS, users });
        }else{
            yield put({ type: myConstants.GET_FAILURE });
        }
    } catch(error) {
        AlertActions.error(error.toString());
        yield put({ type: myConstants.GET_FAILURE, error });
    }
}

export function* myUpdate(user) {
    try {
        const rs = yield call(myUpdate, user.id);
        yield put({ type: myConstants.UPDATE_SUCCESS, rs });
    } catch(error) {
        yield put({ type: myConstants.UPDATE_FAILURE, error });
    }
}


