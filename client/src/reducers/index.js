import { combineReducers } from 'redux';
import authenticationReducer from './authentication-reducer';
import loginReducer from './authentication-reducer-set-state';

export default combineReducers({
  authenticationReducer,
  loginReducer
});
