import { alertConstant } from './alert.constant';

export function alertReducer(state = {}, action) {
  switch (action.type) {
    case alertConstant.SUCCESS:
      return {
        alertType: 'alert-success',
        alertMsg: action.message
      };
    case alertConstant.ERROR:
      return {
        alertType: 'alert-danger',
        alertMsg: action.message
      };
    case alertConstant.CLEAR:
      return {};
    default:
      return state
  }
}

