export const httpGet = function(url) {
  return fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(json => json);
};

export {
  createJWT,
  readJWT
} from './jwt';

export { MongoClient, ObjectID, composeObject } from './mongodb';
export { connect } from './mongodb-connect';
export { default as _protected } from './protected';
export { default as _unprotected } from './unprotected';
