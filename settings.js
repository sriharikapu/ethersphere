/* eslint-disable */
const path = require('path');
const settingsPublic = require('./settings-public.js');
let ROOT_DIR;

if (typeof ROOT_DIR === 'undefined') {
  ROOT_DIR = null;
}

const __ROOT_DIR__ = process.env.ROOT_DIR || ROOT_DIR || process.env.PWD || process.cwd();
const ENV_FILE_PATH = path.resolve(__ROOT_DIR__, '.env');

require('dotenv').config({ path: ENV_FILE_PATH });

module.exports = Object.assign({}, settingsPublic, {
  APP_HOST: process.env.APP_HOST || 'http://localhost:3000',
  NODE_HOST: process.env.NODE_HOST || '127.0.0.1',
  APP_ROOT: __ROOT_DIR__,
  ROOT_DIR: __ROOT_DIR__,
  APP_PORT: process.env.PORT || 3000,
  DEBUG: isDebug(),
  MONGO_URI: process.env.MONGO_URI || 'mongodb://mongo/app',
  MONGO_TEST_URI: process.env.MONGO_TEST_URI || 'mongodb://mongo/app_test',
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  REDIS_URI: process.env.REDIS_URI || 'redis://redis:6379/0',
  ETHEREUM_NODE_URL: process.env.ETHEREUM_NODE_URL || 'https://mainnet.infura.io'
});

function isDebug() {
  if (process.env.NODE_ENV === 'production') {
    return false;
  }

  if (typeof process.env.DEBUG !== 'undefined') {
    return !!process.env.DEBUG;
  }

  return true;
}
