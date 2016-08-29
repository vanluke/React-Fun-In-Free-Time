import mount from 'koa-mount';
import json from 'koa-json';
import cors from 'koa-cors';

export { default as app } from './app';

export const configureApp = function(app, routes, config) {
  app.use(json());
  app.use(cors());
  app.use(mount(config.mount, routes.middleware()));
};
