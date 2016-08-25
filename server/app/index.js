import mount from 'koa-mount';
import json from 'koa-json';

export { default as app } from './app';

export const configureApp = function(app, routes, config) {
  app.use(json());
  app.use(mount(config.mount, routes.middleware()));
};
