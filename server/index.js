import config from '../server.config';
import { app, configureApp } from './app';
import routes from './routes';

process.on('uncaughtException', (err) => {
  console.error(err);
});

const appConfig = {
  mount: `/api/v${config.get('version')}`
};

const port = config.get('port');
const host = config.get('host');

configureApp(app, routes, appConfig);

app.listen(port, host, function() {
  console.info(`listening on ${host}/${port}`);
});
