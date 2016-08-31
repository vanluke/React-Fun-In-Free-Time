import { create, getToken } from './auth';

export default function(router) {
  router.post('/auth/create', create);
  router.post('/auth', getToken);
  return router;
}
