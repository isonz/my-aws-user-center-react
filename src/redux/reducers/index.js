import { combineReducers } from 'redux';

import { authenticationReducer } from './authentication.reducer';
import { registrationReducer } from './registration.reducer';
import { usersReducer } from './users.reducer';
import { alertReducer } from './alert.reducer';

const rootReducer = combineReducers({
  authenticationReducer,
  registrationReducer,
  usersReducer,
  alertReducer
});

export default rootReducer;
