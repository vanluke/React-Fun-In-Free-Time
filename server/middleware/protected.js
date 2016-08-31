export default function* () {
  if (this.url.match(/^\/api/)) {
    this.body = 'protected\n';
  }
}
