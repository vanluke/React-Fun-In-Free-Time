const env = process.env.NODE_ENV; // newsConfig.get('env');
const config = require(`./config/${env}.json`);
const resolver = {
  get(key) {
    return config[key];
  }
};


export default resolver;
