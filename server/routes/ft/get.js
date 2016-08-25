import { httpGet } from '../../middleware';
import config from '../../../server.config';
import data from './ft-response-uk.json';

const fakeGet = () => {
  return new Promise((resolve) => resolve(data));
};

export const getFtNews = async function() {
  const env = config.get('env');
  const ftEndPoint = config.get('ft').url;
  const response = env.production
    ? await httpGet(`${ftEndPoint}`)
    : await fakeGet();
  this.body = response;
  this.status = 201;
  return response;
};
