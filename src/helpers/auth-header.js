import {getLocalUser} from "./local";

export function authHeader() {
    // return authorization header with jwt token
    const local = getLocalUser();
    if(!local) return {};

    if('undefined' === local.user) return {};

    const user = local.user;
    //console.log(user);
    if (user && user.token) {
        //return { 'Authorization': 'Bearer ' + user.token };
        return { 'Authorization': user.token };
    } else {
        return {};
    }
}
