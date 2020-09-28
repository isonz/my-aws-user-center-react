import { authConstants } from './auth.constant';

let user;
try {
  user = JSON.parse(localStorage.getItem('user'));
}catch (e) {
  localStorage.removeItem('user');
}
if(!user){
  try {
    user = JSON.parse(sessionStorage.getItem('user'));
  }catch (e) {
    sessionStorage.removeItem('user');
  }
}

const initialState = user ? { loggedIn: true, user } : {};

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
