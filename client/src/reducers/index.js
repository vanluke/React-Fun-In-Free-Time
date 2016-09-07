import { combineReducers } from 'redux';
import { loginReducer, authenticationReducer } from '../login/reducers';
import { sideBarReducer,
  modalReducer,
  userNavInfoReducer } from '../shared/reducers';
import { newsReducer } from '../news/reducers';

export default combineReducers({
  authenticationReducer,
  loginReducer,
  sideBarReducer,
  modalReducer,
  newsReducer,
  userNavInfoReducer
});
