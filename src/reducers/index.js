import { combineReducers } from 'redux';

import { authReducer } from '../components/auth/auth.reducer';
import { registerReducer } from '../components/auth/register.reducer';
import { usersReducer } from '../components/user/users.reducer';
import { alertReducer } from '../components/alert/alert.reducer';

const rootReducer = combineReducers({
  authenticationReducer: authReducer,
  registrationReducer: registerReducer,
  usersReducer,
  alertReducer
});

export default rootReducer;
