export const httpGet = function(url) {
  return fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(json => json);
};
