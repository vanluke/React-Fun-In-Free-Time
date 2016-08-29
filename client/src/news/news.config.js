// import convict from 'convict';
//
// const newsConfig = convict({
//   env: {
//     doc: 'The applicaton environment.',
//     format: ['production', 'development', 'test'],
//     default: 'development',
//     env: 'NODE_ENV'
//   },
//   api: {
//     url: {
//       doc: 'API.',
//       format: String,
//       default: 'undefined',
//       env: 'api'
//     }
//   }
// });

const env = process.env.NODE_ENV; // newsConfig.get('env');
const config = require(`./config/${env}.json`);

// console.log(env);
// newsConfig.load(env === 'test'
//   ? `client/src/news/config/${env}.json`
//   : `./config/${env}.json`);
// newsConfig.validate({ strict: true });

const resolver = {
  get(key) {
    return config[key];
  }
};


export default resolver;
