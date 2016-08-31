import config from '../login.config';

export const authenticate = (credentials) => {
  const url = config.get('auth').url;
  return window.fetch(`${url}`, {
    mode: 'cors',
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    body: JSON.stringify(credentials)
  })
  .then(response => response.json())
  .then(token => token);
};
