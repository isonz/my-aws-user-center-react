import { userConstants } from './user.constant';


export class UserActions {

    static getAll(pageNumber, pageSize) {
        //console.log(pageNumber, pageSize);
        return {type: userConstants.GET_ALL_REQUEST, pageNumber, pageSize}
    }

    static _delete(id) {
        return {type: userConstants.GET_ALL_REQUEST, id}
    }
}

