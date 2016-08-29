import { News } from '../models';
import config from '../news.config';

export const get = function() {
  const url = config.get('api').url;
  return window.fetch(`${url}`, {
    mode: 'cors'
  })
    .then(response => response.json())
    .then(json => {
      return json && Array.isArray(json.pageItems)
        ? json.pageItems.map(e => new News(e))
        : [];
    });
};
