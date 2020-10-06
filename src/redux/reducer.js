import { combineReducers } from 'redux';

import { authReducer, registerReducer } from '../components/auth/auth.reducer';
import { usersReducer } from '../components/user/users.reducer';
import { alertReducer } from '../components/alert/alert.reducer';
import {myReducer} from "../components/my/my.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  usersReducer,
  myReducer,
  alertReducer
});

export default rootReducer;
