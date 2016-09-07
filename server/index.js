import config from '../server.config';
import { app, configureApp } from './app';
import routes from './routes';

process.on('uncaughtException', (err) => {
  console.error(err);
});

const headers = function* (next) {
  yield next;
  this.set('Access-Control-Allow-Origin', '*');
  this.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  this.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
};

app.use(headers);

const appConfig = {
  mount: `/api/v${config.get('version')}`,
  secret: config.get('secret')
};

const port = config.get('port');
const host = config.get('host');

configureApp(app, routes, appConfig);

app.listen(port, host, function() {
  console.info(`listening on ${host}/${port}`);
});
