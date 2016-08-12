import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Split from 'webpack-split-by-path';
import Copy from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const sourceMap = process.env.TEST
? [new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.ts$/ })]
: [];

export default [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV':
      JSON.stringify(process.env.NODE_ENV || 'development'),
    dev: process.env.NODE_ENV !== 'production',
    production: process.env.NODE_ENV === 'production',
    test: JSON.stringify(process.env.TEST || false)
  }),
  // new webpack.ProvidePlugin({
  //   $: 'jquery',
  //   jQuery: 'jquery'
  // }),
  new Split([
    { name: 'vendor', path: [path.join(__dirname, '/node_modules/')] }
  ]),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: 'body',
    minify: false
  }),
  new webpack.NoErrorsPlugin(),
  new Copy([
    { from: 'client/assets', to: 'dist/assets' }
  ]),
  new ExtractTextPlugin('bundle.css')
].concat(sourceMap);
