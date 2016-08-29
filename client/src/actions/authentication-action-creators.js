import { authenticate } from '../login/services';
import { setItemInLocalstorage,
  getItemFromLocalstorage,
  checkIfObjectIsEmpty } from '../middleware';

import { SET_LOGIN_STATE,
  AUTH_USER,
  AUTH_ERROR,
  AUTH_IN_PROGRESS,
  TOGGLE_MODAL } from './const';

const tokenKey = 'user';

export const setLoginState = function(userName, password) {
  return {
    type: SET_LOGIN_STATE,
    userName,
    password
  };
};

export const authenticateUser = function(token) {
  return {
    type: AUTH_USER,
    payload: Object.assign({}, {
      token
    })
  };
};

export const authenticationError = function(error) {
  return {
    type: AUTH_ERROR,
    error
  };
};

export function loginUser({ userName, password }) {
  return function(dispatch) {
    dispatch(Object.assign({}, {
      type: AUTH_IN_PROGRESS
    }));
    authenticate({ userName, password }).then((response) => {
      setItemInLocalstorage(tokenKey, response);
      dispatch(authenticateUser(response));
      window.location = 'http://localhost:3000/#/dashboard';
    }).catch(error => {
      dispatch(authenticationError(error));
      dispatch(toggleModal(false));
    });
  };
}

export const checkAuthentication = function() {
  const user = getItemFromLocalstorage('user');
  return function(dispatch) {
    checkIfObjectIsEmpty(user).then(() => {
      dispatch(authenticateUser(user));
    }, () => {
    }).catch();
  };
};

export const toggleModal = function(isOpen) {
  return {
    type: TOGGLE_MODAL,
    isOpen
  };
};
