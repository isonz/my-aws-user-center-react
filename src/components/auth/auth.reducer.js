import { authConstants } from './auth.constant';
import {getLocalUser} from "../../helpers/local";

const initialState = getLocalUser();
export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.data
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case authConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: {}
      };
    case authConstants.LOGOUT:
      return {
        loggedIn: false,
        user: {}
      };
    default:
      return state
  }
}

export * from './register.reducer';
