import { SET_LOGIN_STATE } from './const';

export const setLoginState = function(userName, password) {
  return {
    type: SET_LOGIN_STATE,
    userName,
    password
  };
};
