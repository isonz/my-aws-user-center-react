import { alertConstant } from './alert.constant';
import {storeRedux} from "../../redux/store";

export class AlertActions {

    static success(message) {
        storeRedux.dispatch({ type: alertConstant.SUCCESS, message });
        // return dispatch => { dispatch({ type: alertConstant.SUCCESS, message }) };
    }

    static error(message) {
        storeRedux.dispatch({ type: alertConstant.ERROR, message });
        // return dispatch => { dispatch ({ type: alertConstant.ERROR, message }) };
    }

    static clear() {
        storeRedux.dispatch({ type: alertConstant.CLEAR });
        // return dispatch => { dispatch({ type: alertConstant.CLEAR }) };
    }

}
