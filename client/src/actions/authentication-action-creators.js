import { SET_USER_NAME, SET_PASSWORD } from './const';

export const setUsername = function(username) {
  return {
    type: SET_USER_NAME,
    payload: username
  };
};

export const setPassword = function(password) {
  return {
    type: SET_PASSWORD,
    payload: password
  };
};
