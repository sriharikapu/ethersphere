import 'regenerator-runtime/runtime';
import React from 'react';
import chalk from 'chalk';
import express from 'express';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';
import winston from 'winston';
import expressWinston from 'express-winston';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import { renderToString } from 'react-dom/server';
import settings from 'settings';
import Redis from 'ioredis';
import Index from 'server/lib/index';

/**
 * Configure logging
 */
winston.configure({
  transports: [
    new (winston.transports.Console)({
      formatter(options) {
        const { message, level } = options;

        return `${level === 'info' ? '' : `${level}: `}${message}`;
      }
    })
  ]
});

/**
 * Initialize the database.
 */
mongoose.connect(settings.MONGO_URI, {
  useMongoClient: true
});
mongoose.Promise = Promise;

/**
 * Initialize the application.
 */
const app = module.exports = express(); // eslint-disable-line


/**
 * Tell nginx to read the X-Forwarded-For header for logging IP addresses which
 * will contain the real IP.
 */
app.enable('trust proxy');

/**
 * Initialize a cache.
 */
export const redis = new Redis(settings.REDIS_URI);

/**
 * Support json & urlencoded requests.
 */
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: false }));


/**
 * Session support
 */
const MongoStore = connectMongo(session);

app.use(session({
  secret: 'nfy06nf!mX4hd8',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: true,
  cookie: { path: '/', httpOnly: true, secure: false, maxAge: null }
}));

/**
 * Initialize api
 */
require('server/api');

/**
 * Setup logging
 */
winston.configure({
  transports: [
    new (winston.transports.Console)({
      handleExceptions: true,
      humanReadableUnhandledException: true,
      formatter(options) {
        const { message, level } = options;
        let prefix = '';

        if (level === 'info') {
          prefix = chalk.blue('[info]');
        } else if (level === 'warn') {
          prefix = chalk.yellow('[warn]');
        } else if (level === 'error') {
          prefix = chalk.red('[error]');
        }

        return `${prefix} ${message}`;
      }
    })
  ]
});

if (!settings.DEBUG) {
  app.use(expressWinston.logger({
    winstonInstance: winston
  }));
}


/**
 * Serve files in the /public directory as static files.
 */
app.use(express.static(`${settings.APP_ROOT}/public`));

/**
 * Byh default, serve our index.html file
 */
app.get('*', (req, res) => {
  const preloadedState = {
    app: {
      user: req.user,
    },
  };

  res.send(renderToString(
    <Index preloadedState={preloadedState} path={req.path} />
  ));
});

/**
 * Run the server
 */
app.listen(settings.APP_PORT, '0.0.0.0', () => {
  winston.info(`
============================================================================
ΞTHΞRSPHΞRΞ
============================================================================

Environment variables:
NODE_ENv:  ${process.env.NODE_ENV}
__dirname: ${__dirname}
cwd:       ${process.cwd()}

Settings:
APP_ROOT:  ${settings.APP_ROOT}
APP_PORT: ${settings.APP_PORT}
DEBUG:     ${settings.DEBUG}
ROOT_DIR   ${settings.ROOT_DIR}
  `);
  winston.info(
    chalk.white.bgGreen.bold(`App listening on port ${settings.APP_PORT}!`)
  );
});


/**
 * Handle errors
 */
app.use(expressWinston.errorLogger({
  winstonInstance: winston
}));
