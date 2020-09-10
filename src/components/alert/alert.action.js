import { alertConstant } from './alert.constant';

export class AlertActions {

    static success(message) {
        return { type: alertConstant.SUCCESS, message };
    }

    static error(message) {
        return { type: alertConstant.ERROR, message };
    }

    static clear() {
        return { type: alertConstant.CLEAR };
    }

}
