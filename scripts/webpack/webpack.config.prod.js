const webpack = require('webpack');
const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const client = require('./base/client.base.config.js');
const server = require('./base/server.base.config.js');
const ROOT_DIR = path.resolve(__dirname, '../../');
const ENV_FILE_PATH = path.resolve(ROOT_DIR, '.env');

require('dotenv').config({ path: ENV_FILE_PATH });

module.exports = [
  Object.assign({}, client, {
    performance: {
      hints: 'warning'
    },
    // watchOptions: {
    //   poll: true
    // },
    plugins: client.plugins.concat([
      new webpack.DefinePlugin({
        // ROOT_DIR: JSON.stringify(ROOT_DIR),
        APP_HOST: JSON.stringify(process.env.APP_HOST || 'http://localhost:3000'),
        DEBUG: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify(true)
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new UglifyJSPlugin()
    ])
  }),
  Object.assign({}, server, {
    performance: {
      hints: 'warning'
    },
    // watchOptions: {
    //   poll: true
    // },
    plugins: server.plugins.concat([
      new webpack.DefinePlugin({
        APP_HOST: JSON.stringify(process.env.APP_HOST || 'http://localhost:3000'),
        DEBUG: JSON.stringify(true)
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new UglifyJSPlugin()
    ])
  }),
];
