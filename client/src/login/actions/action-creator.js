import { SET_LOGIN_STATE,
  AUTH_ERROR,
  AUTH_USER,
  VALIDATE_APP_STATE,
  AUTH_IN_PROGRESS } from './consts';
import { authenticate } from '../services';
import { toggleModal } from '../../shared/actions';
import { setItemInLocalstorage,
  getItemFromLocalstorage,
  readJWT,
  checkIfObjectIsEmpty } from '../../middleware';

export const setLoginState = function(userName, password) {
  return {
    type: SET_LOGIN_STATE,
    userName,
    password
  };
};
const tokenKey = 'user';

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

export const checkAuthentication = function() {
  const user = getItemFromLocalstorage('user');
  return function(dispatch) {
    checkIfObjectIsEmpty(user).then(() => {
      dispatch(authenticateUser(user));
    }, () => {
    }).catch();
  };
};

export function loginUser({ userName, password }) {
  return function(dispatch) {
    dispatch(Object.assign({}, {
      type: AUTH_IN_PROGRESS
    }));
    authenticate({ userName, password }).then((response) => {
      const readable = readJWT(response);
      setItemInLocalstorage(tokenKey, response);
      dispatch(authenticateUser(readable));
      window.location = 'http://localhost:3000/';
    }).catch(error => {
      dispatch(authenticationError(error));
      dispatch(toggleModal(false));
    });
  };
}

export const validateState = () => {
  const user = getItemFromLocalstorage('user');
  if (Object.keys(user).length) {
    const readable = readJWT(user);
    return {
      type: VALIDATE_APP_STATE,
      user: readable
    };
  }
  return {
    type: AUTH_ERROR,
    error: 'Not auth'
  };
};
