
import { News } from '../models';
import config from '../news.config';

export const get = function() {
  const url = config.get('api').url;
  const token = JSON.parse(window.localStorage.getItem('user'));
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  return window.fetch(`${url}`, {
  //  mode: 'cors',
    headers,
    method: 'get'
  })
    .then(response => response.json())
    .then(json => {
      return json && Array.isArray(json.pageItems)
        ? json.pageItems.map(e => new News(e))
        : [];
    });
};
