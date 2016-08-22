import { browserHistory } from 'react-router';
import { authenticate } from '../login/services';

import { SET_LOGIN_STATE,
  AUTH_USER,
  AUTH_ERROR,
  AUTH_IN_PROGRESS,
  SIDEBAR_IS_OPEN } from './const';

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
      setToken(tokenKey, response);
      dispatch(authenticateUser(response));
      window.location = 'http://localhost:3000/#/dashboard';
    }).catch(error => {
      dispatch(authenticationError(error));
    });
  };
}

export const sideBarToggle = function(isVisible) {
  return {
    type: SIDEBAR_IS_OPEN,
    isVisible
  };
};

const removeToken = (key) => {
  return new Promise((resolve) => {
    try {
      window.localStorage.removeItem(key);
      return resolve();
    } catch (e) {
      return resolve();
    }
  });
};

const setToken = (key, user, fn = (dt) => JSON.stringify(dt)) => {
  removeToken().then(() => {
    window.localStorage.setItem(key, fn(user));
  });
};

const checkIfObjectIsEmpty = (obj) => {
  return new Promise((resolve, reject) => {
    const isEmpty = Object.keys(obj).length <= 0;
    return isEmpty ? reject(false) : resolve(true);
  });
};

const getToken = (key) => {
  const token = window.localStorage.getItem(key);
  return JSON.parse(!!token ? token : `{}`);
};

export const checkAuthentication = function() {
  const user = getToken('user');
  return function(dispatch) {
    checkIfObjectIsEmpty(user).then(() => {
      dispatch(authenticateUser(user));
      browserHistory.push('#/dashboard');
    }, () => {
    }).catch();
  };
};
