import jwtFactory from 'jwt-simple';
import config from '../app.config';

const secret = config.get('secret');

export const removeFromLocalstorage = (key) => {
  window.localStorage.removeItem(key);
};

export const setItemInLocalstorage = (key, user,
  fn = (dt) => JSON.stringify(dt)) => {
  removeFromLocalstorage(key);
  window.localStorage.setItem(key, fn(user));
};

export const checkIfObjectIsEmpty = (obj) => {
  return new Promise((resolve) => {
    const isEmpty = Object.keys(obj).length === 0;
    return isEmpty ? resolve(true) : resolve(false);
  });
};

export const getItemFromLocalstorage = (key) => {
  const token = window.localStorage.getItem(key);
  return JSON.parse(!!token ? token : `{}`);
};

export const readJWT = (jwt) => {
  return jwtFactory.decode(jwt, secret);
};
