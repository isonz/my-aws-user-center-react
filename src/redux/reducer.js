import { combineReducers } from 'redux';

import { authReducer, registerReducer } from '../components/auth/auth.reducer';
import { usersReducer } from '../components/user/users.reducer';
import { alertReducer } from '../components/alert/alert.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  usersReducer,
  alertReducer
});

export default rootReducer;
