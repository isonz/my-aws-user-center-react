import { myConstants } from './my.constant';

export class MyActions {

    static myInfo() {
        return {type: myConstants.GET_REQUEST}
    }

    static myUpdate() {
        return {type: myConstants.UPDATE_REQUEST}
    }
}
