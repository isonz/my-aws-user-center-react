import { userConstants } from './user.constant';


export class UserActions {

    static getAll(lastId, pageSize) {
        //console.log(pageNumber, pageSize);
        return {type: userConstants.GET_ALL_REQUEST, lastId, pageSize}
    }

    static _delete(id) {
        return {type: userConstants.GET_ALL_REQUEST, id}
    }
}

