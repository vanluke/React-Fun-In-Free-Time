import { combineReducers } from 'redux';
import authenticationReducer from './authentication-reducer';
import { loginReducer } from '../login/reducers';
import { sideBarReducer, modalReducer } from '../shared/reducers';
import { newsReducer } from '../news/reducers';

export default combineReducers({
  authenticationReducer,
  loginReducer,
  sideBarReducer,
  modalReducer,
  newsReducer
});
