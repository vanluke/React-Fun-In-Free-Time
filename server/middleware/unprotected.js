export default function* (next) {
  if (this.url.match(/^\/auth/)) {
    this.body = 'unprotected\n';
  } else {
    yield next;
  }
}
