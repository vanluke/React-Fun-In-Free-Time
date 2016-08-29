import { combineReducers } from 'redux';
import authenticationReducer from './authentication-reducer';
import loginReducer from './authentication-reducer-set-state';
import sideBarReducer from './side-bar-reducer';
import modalReducer from './modal-reducer';
import { newsReducer } from '../news/reducers';

export default combineReducers({
  authenticationReducer,
  loginReducer,
  sideBarReducer,
  modalReducer,
  newsReducer
});
