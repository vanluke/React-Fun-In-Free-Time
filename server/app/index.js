import mount from 'koa-mount';
import json from 'koa-json';
import cors from 'koa-cors';
import secure from 'koa-jwt';
import authRoutes from '../routes/auth';

export { default as app } from './app';


export const configureApp = function(app, routes, config) {
  app.use(json());
  app.use(cors());
  app.use(secure({ secret: config.secret }));//.unless({ path: [/^\/auth/] }));
  const unprotectedRoutes = authRoutes(routes);
  app.use(unprotectedRoutes.routes());
  app.use(mount(config.mount, routes.middleware()));
};
