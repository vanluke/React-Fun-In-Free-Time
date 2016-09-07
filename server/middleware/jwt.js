import jwtFactory from 'jwt-simple';
import config from '../../server.config';

const secret = config.get('secret');

export const createJWT = (payload) => {
  return jwtFactory.encode(payload, secret);
};

export const readJWT = (jwt) => {
  return jwtFactory.decode(jwt, secret);
};
