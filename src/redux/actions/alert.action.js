import { alertConstant } from '../../constants/alert.constant';

export class AlertActions {

    success(message) {
        return { type: alertConstant.SUCCESS, message };
    }

    error(message) {
        return { type: alertConstant.ERROR, message };
    }

    clear() {
        return { type: alertConstant.CLEAR };
    }

}
