import path from 'path';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import { loaders, jslint } from './webpack-configuration/loaders';
import plugins from './webpack-configuration/plugins';

const devEntry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server',
  './client/src/index.js'
];

export default {
  entry: process.env.NODE_ENV !== 'production'
    ? devEntry
    : './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js'
  },
  devtool: process.env.NODE_ENV === 'production'
    ? 'source-map'
    : 'inline-source-map',
  resolve: { extensions: ['', '.js', '.jsx'] },
  plugins,
  devServer: {
    contentBase: './public',
    quite: false,
    noInfo: false,
    stats: {
      colors: true,
      timings: true
    },
    hot: true,
    historyApiFallback: { index: '/' }
  },
  module: {
    preLoaders: [
      jslint
    ],
    loaders
  },
  postcss() {
    return [precss, autoprefixer];
  }
};
