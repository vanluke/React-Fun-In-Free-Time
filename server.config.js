import convict from 'convict';

const conf = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS'
  },
  port: {
    doc: 'The port.',
    format: 'port',
    default: 1337,
    env: 'PORT'
  },
  host: {
    doc: 'The host.',
    format: '*',
    default: 'localhost',
    env: 'HOST'
  },
  version: {
    doc: 'Version.',
    format: '*',
    default: '0',
    env: 'VERSION'
  },
  ft: {
    url: {
      doc: 'Financial Times.',
      format: String,
      default: 'undefined',
      env: 'FT'
    }
  }
});

const env = conf.get('env') || 'development';
conf.loadFile(`./config/${env}.json`);
conf.validate({ strict: true });

export default conf;
