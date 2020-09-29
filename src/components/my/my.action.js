import { myConstants } from './my.constant';


export class MyActions {

    static myInfo(id) {
        return {type: myConstants.GET_REQUEST, id}
    }

    static myUpdate(id) {
        return {type: myConstants.UPDATE_REQUEST, id}
    }
}
