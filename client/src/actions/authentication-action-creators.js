import { authenticate } from '../login/services';
import { SET_LOGIN_STATE,
  AUTH_USER,
  AUTH_ERROR,
  AUTH_IN_PROGRESS,
  SIDEBAR_IS_OPEN } from './const';

export const setLoginState = function(userName, password) {
  return {
    type: SET_LOGIN_STATE,
    userName,
    password
  };
};

export function loginUser({ userName, password }) {
  return function(dispatch) {
    dispatch(Object.assign({}, {
      type: AUTH_IN_PROGRESS
    }));
    authenticate({ userName, password }).then((response) => {
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(response));
      dispatch(Object.assign({}, {
        type: AUTH_USER,
        payload: Object.assign({}, {
          token: response.token
        })
      }));
      window.location = 'http://localhost:3000/#/dashboard';
    }).catch(error => {
      dispatch(Object.assign({}, {
        type: AUTH_ERROR,
        error
      }));
    });
  };
}

export const sideBarToggle = function(isVisible) {
  return {
    type: SIDEBAR_IS_OPEN,
    isVisible
  };
};
