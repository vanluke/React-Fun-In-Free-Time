const env = process.env.NODE_ENV; // newsConfig.get('env');
const config = require(`./config/${env}.json`);
console.log(config);
const resolver = {
  get(key) {
    return config[key];
  }
};


export default resolver;
