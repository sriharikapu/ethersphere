const webpack = require('webpack');
const client = require('./base/client.base.config.js');
const server = require('./base/server.base.config.js');
const path = require('path');
const settings = require('../../settings.js');
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
        'window.ETHEREUM_NODE_URL': JSON.stringify(settings.ETHEREUM_NODE_URL)
      })
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
      })
    ])
  }),
];
