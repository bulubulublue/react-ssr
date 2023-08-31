import { combineReducers } from 'redux';

import userReducers from './userReducers';
import authReducers from './authReducers';

export default combineReducers({
  users: userReducers,
  auth: authReducers,
});
