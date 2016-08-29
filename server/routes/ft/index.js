import { getFtNews } from './get';

export default function(router) {
  router.get('/ft', getFtNews);
  return router;
}
