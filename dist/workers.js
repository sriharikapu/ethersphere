/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var path = __webpack_require__(8);
var settingsPublic = __webpack_require__(9);
var ROOT_DIR = void 0;

if (typeof ROOT_DIR === 'undefined') {
  ROOT_DIR = null;
}

var __ROOT_DIR__ = process.env.ROOT_DIR || ROOT_DIR || process.env.PWD || process.cwd();
var ENV_FILE_PATH = path.resolve(__ROOT_DIR__, '.env');

__webpack_require__(4).config({ path: ENV_FILE_PATH });

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ioredis");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(34);

__webpack_require__(35);

__webpack_require__(36);

__webpack_require__(37);

__webpack_require__(38);

__webpack_require__(39);

__webpack_require__(40);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(43);

__webpack_require__(44);

__webpack_require__(45);

__webpack_require__(46);

__webpack_require__(47);

__webpack_require__(48);

__webpack_require__(49);

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(52);

__webpack_require__(53);

__webpack_require__(54);

__webpack_require__(55);

__webpack_require__(56);

__webpack_require__(57);

__webpack_require__(58);

__webpack_require__(59);

__webpack_require__(60);

__webpack_require__(61);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(65);

__webpack_require__(66);

__webpack_require__(67);

__webpack_require__(68);

__webpack_require__(69);

__webpack_require__(70);

__webpack_require__(71);

__webpack_require__(72);

__webpack_require__(73);

__webpack_require__(74);

__webpack_require__(75);

__webpack_require__(76);

__webpack_require__(77);

__webpack_require__(78);

__webpack_require__(79);

__webpack_require__(80);

__webpack_require__(81);

__webpack_require__(82);

__webpack_require__(83);

__webpack_require__(84);

__webpack_require__(85);

__webpack_require__(86);

__webpack_require__(87);

__webpack_require__(88);

__webpack_require__(89);

__webpack_require__(90);

__webpack_require__(91);

__webpack_require__(92);

__webpack_require__(93);

__webpack_require__(94);

__webpack_require__(95);

__webpack_require__(96);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(99);

__webpack_require__(100);

__webpack_require__(101);

__webpack_require__(102);

__webpack_require__(103);

__webpack_require__(104);

__webpack_require__(105);

__webpack_require__(106);

__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(109);

__webpack_require__(110);

__webpack_require__(111);

__webpack_require__(112);

__webpack_require__(113);

__webpack_require__(114);

__webpack_require__(115);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(119);

__webpack_require__(120);

__webpack_require__(121);

__webpack_require__(122);

__webpack_require__(123);

__webpack_require__(124);

__webpack_require__(125);

__webpack_require__(5);

var _runAll = __webpack_require__(126);

var _runAll2 = _interopRequireDefault(_runAll);

var _chainFilter = __webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(); /* eslint-disable import/no-unresolved, no-console */


if (args.length >= 2) {
  args.shift();
  args.shift();
}

var workerArg = args.find(function (a) {
  return (/^worker=./.test(a)
  );
});

if (workerArg) {
  var which = workerArg.split('=')[1];

  switch (which) {
    case 'head-worker':
      (0, _chainFilter.initHeadWorker)();
      break;
    case 'chain-worker':
      (0, _chainFilter.initChainWorker)();
      break;
    default:
      console.log('Invalid worker id: ' + which);
  }
} else {
  (0, _runAll2.default)();
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.array-buffer");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int8-array");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint8-array");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint8-clamped-array");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int16-array");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint16-array");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.int32-array");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.uint32-array");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.float32-array");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.typed.float64-array");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.map");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.set");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.weak-map");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.weak-set");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.apply");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.construct");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.define-property");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.delete-property");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get-own-property-descriptor");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.get-prototype-of");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.has");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.is-extensible");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.own-keys");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.prevent-extensions");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.set");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.reflect.set-prototype-of");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.symbol");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.freeze");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.seal");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.prevent-extensions");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.is-frozen");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.is-sealed");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.is-extensible");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.get-own-property-descriptor");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.get-prototype-of");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.keys");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.get-own-property-names");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.assign");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.is");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.set-prototype-of");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.raw");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.from-code-point");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.code-point-at");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.repeat");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.starts-with");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.ends-with");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.includes");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.flags");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.match");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.split");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.search");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.from");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.of");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.copy-within");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find-index");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.fill");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.is-finite");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.is-integer");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.is-safe-integer");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.is-nan");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.epsilon");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.min-safe-integer");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.number.max-safe-integer");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.acosh");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.asinh");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.atanh");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.cbrt");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.clz32");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.cosh");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.expm1");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.fround");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.hypot");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.imul");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.log1p");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.log10");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.log2");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.sign");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.sinh");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.tanh");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.math.trunc");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.array.includes");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.values");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.entries");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.get-own-property-descriptors");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.string.pad-start");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.string.pad-end");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.timers");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.immediate");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable");

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = initAllWokers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winston__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winston___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_winston__);

var i = 1;
function initAllWokers() {
    return workerRecurser(i);
}
function workerRecurser(id) {
    switch (id) {
        default:
            i = 1;
            return workerRecurser(i);
    }
}
function recurse() {
    i++;
    return workerRecurser(i);
}
function catchError(e) {
    __WEBPACK_IMPORTED_MODULE_0_winston___default.a.error("Worker error: " + e.message);
    return recurse();
}


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony export (immutable) */ __webpack_exports__["initHeadWorker"] = initHeadWorker;
/* harmony export (immutable) */ __webpack_exports__["initChainWorker"] = initChainWorker;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ioredis__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ioredis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ioredis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_net__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_net___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_net__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_winston__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_winston___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_winston__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chalk__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web3__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_settings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_abi_decoder__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_abi_decoder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_abi_decoder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_human_standard_token_abi__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_human_standard_token_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_human_standard_token_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(133);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var range = function (min, max) { return max < min
    ? []
    : Array(max + 1 - min).fill(0).map(function (_, i) { return min + i; }); };
var info = function (str) { return __WEBPACK_IMPORTED_MODULE_2_winston___default.a.info(__WEBPACK_IMPORTED_MODULE_3_chalk___default.a.blue('[chain-filter]') + " " + str); };
var error = function (str) { return __WEBPACK_IMPORTED_MODULE_2_winston___default.a.error(__WEBPACK_IMPORTED_MODULE_3_chalk___default.a.red('[chain-filter] ERROR:') + " " + str); };
var db = Object(__WEBPACK_IMPORTED_MODULE_9__utils__["a" /* connectMongoose */])();
var provider = new __WEBPACK_IMPORTED_MODULE_4_web3___default.a.providers.IpcProvider('/root/.ethereum/geth.ipc', __WEBPACK_IMPORTED_MODULE_1_net___default.a);
var web3 = new __WEBPACK_IMPORTED_MODULE_4_web3___default.a(provider);
var fetchLatestBlock = Promise.promisify(web3.eth.getBlockNumber);
var fetchBlock = Promise.promisify(web3.eth.getBlock);
var fetchTransactionReceipt = Promise.promisify(web3.eth.getTransactionReceipt);
var args = process.argv.slice();
__WEBPACK_IMPORTED_MODULE_6_abi_decoder___default.a.addABI(__WEBPACK_IMPORTED_MODULE_7_human_standard_token_abi___default.a);
args.shift();
args.shift();
var workerIdArg = args.find(function (a) { return /^id=./.test(a); }) || '';
var workerIdArgParts = workerIdArg.split('=');
var workerId = workerIdArgParts.length && workerIdArgParts[1];
var redis = new __WEBPACK_IMPORTED_MODULE_0_ioredis___default.a(__WEBPACK_IMPORTED_MODULE_5_settings___default.a.REDIS_URI);
function normalizeTransaction(transaction, block) {
    var normalized = {
        blockHash: transaction.blockHash,
        blockNumber: transaction.blockNumber,
        from: transaction.from,
        gas: transaction.gas,
        gasPrice: transaction.gasPrice.toFixed(),
        hash: transaction.hash,
        input: transaction.input,
        nonce: transaction.nonce,
        to: transaction.to,
        transactionIndex: transaction.transactionIndex,
        value: transaction.value.toFixed(),
        v: transaction.v,
        r: transaction.r,
        s: transaction.s,
        timestamp: block.timestamp
    };
    return normalized;
}
function handleTransactions(block) {
    return __awaiter(this, void 0, void 0, function () {
        var res, i, transaction, _transactionReceipt, transactionReceipt, preparedTransaction, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < block.transactions.length)) return [3, 5];
                    transaction = block.transactions[i];
                    return [4, fetchTransactionReceipt(transaction.hash)];
                case 3:
                    _transactionReceipt = _a.sent();
                    transactionReceipt = _transactionReceipt;
                    preparedTransaction = __assign({}, normalizeTransaction(transaction, block), { cumulativeGasUsed: transactionReceipt.cumulativeGasUsed, gasUsed: transactionReceipt.gasUsed, contractAddress: transactionReceipt.contractAddress, Logs: transactionReceipt.logs.map(function (log, i) { return ({
                            address: log.address,
                            blockHash: log.blockHash,
                            blockNumber: log.blockNumber,
                            data: log.data,
                            logIndex: log.logIndex,
                            transactionHash: log.transactionHash,
                            transactionIndex: log.transactionIndex,
                            removed: log.removed,
                            key: log.transactionHash + "-" + i,
                            logTopic0: log.topics[0] || null,
                            logTopic1: log.topics[1] || null,
                            logTopic2: log.topics[2] || null,
                            logTopic3: log.topics[3] || null
                        }); }) });
                    res.push(preparedTransaction);
                    _a.label = 4;
                case 4:
                    i++;
                    return [3, 2];
                case 5: return [2, res];
                case 6:
                    err_1 = _a.sent();
                    throw Error(err_1.message);
                case 7: return [2];
            }
        });
    });
}
;
function isBlockBeingProcessed(blockNumber, workerState) {
    return Object.keys(workerState)
        .filter(function (key) { return key !== workerId; })
        .map(function (key) { return workerState[key]; })
        .some(function (n) { return n === blockNumber; });
}
function addBlock(blockNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var workerStateJSON, workerState, e_1, timerId, _block, block, transactions_1, logs_1, doc_1, workerStateJSON, workerState, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4, redis.get('chain-worker-state')];
                case 1:
                    workerStateJSON = _a.sent();
                    workerState = workerStateJSON ? JSON.parse(workerStateJSON) : {};
                    if (!isBlockBeingProcessed(blockNumber, workerState)) return [3, 2];
                    return [2];
                case 2:
                    workerState[workerId] = blockNumber;
                    return [4, redis.set('chain-worker-state', JSON.stringify(workerState))];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3, 6];
                case 5:
                    e_1 = _a.sent();
                    throw Error(e_1.message);
                case 6:
                    timerId = workerId + "-block-" + blockNumber;
                    _a.label = 7;
                case 7:
                    _a.trys.push([7, 13, 14, 15]);
                    return [4, fetchBlock(blockNumber, true)];
                case 8:
                    _block = _a.sent();
                    block = _block;
                    console.time(timerId);
                    info("Processing block " + blockNumber + " -- total tx count in block: " + block.transactions.length);
                    return [4, handleTransactions(block)];
                case 9:
                    transactions_1 = _a.sent();
                    logs_1 = [];
                    transactions_1.forEach(function (t) {
                        t.Logs.forEach(function (l) { return logs_1.push(l); });
                    });
                    doc_1 = {
                        number: block.number,
                        difficulty: block.difficulty.toFixed(),
                        extraData: block.extraData,
                        gasLimit: block.gasLimit,
                        gasUsed: block.gasUsed,
                        hash: block.hash,
                        logsBloom: block.logsBloom,
                        miner: block.miner,
                        mixHash: block.mixHash,
                        nonce: block.nonce,
                        parentHash: block.parentHash,
                        receiptsRoot: block.receiptsRoot,
                        sha3Uncles: block.sha3Uncles,
                        size: block.size,
                        stateRoot: block.stateRoot,
                        timestamp: block.timestamp,
                        totalDifficulty: block.totalDifficulty.toFixed(),
                        transactionsRoot: block.transactionsRoot
                    };
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["d" /* sequelize */].transaction(function (transaction) {
                            return __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["a" /* Block */].create(doc_1, {
                                logging: false,
                                transaction: transaction
                            }).then(function (block) {
                                var opts = { transaction: transaction, logging: false };
                                return __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["c" /* Transaction */].bulkCreate(transactions_1, opts).then(function (txDocs) {
                                    var opts = { transaction: transaction, logging: false };
                                    return __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["b" /* Log */].bulkCreate(logs_1, opts);
                                });
                            });
                        }).catch(function (err) { return error(JSON.stringify(err, null, '  ')); })];
                case 10:
                    _a.sent();
                    return [4, redis.get('chain-worker-state')];
                case 11:
                    workerStateJSON = _a.sent();
                    workerState = JSON.parse(workerStateJSON);
                    delete workerState[workerId];
                    return [4, redis.set('chain-worker-state', JSON.stringify(workerState))];
                case 12:
                    _a.sent();
                    return [3, 15];
                case 13:
                    err_2 = _a.sent();
                    throw Error(err_2.message);
                case 14:
                    console.timeEnd(timerId);
                    return [7];
                case 15: return [2];
            }
        });
    });
}
function fetchMissingBlockNumbers() {
    return __awaiter(this, void 0, void 0, function () {
        var latestBlock, latestReliableBlock, max, gaps, res_1, maxBlockNum, head, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4, fetchLatestBlock()];
                case 1:
                    latestBlock = _a.sent();
                    latestReliableBlock = latestBlock - 5;
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["d" /* sequelize */].query("\n      SELECT number FROM \"public\".\"eth_blocks\" ORDER BY number DESC LIMIT 1\n    ", { type: __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["d" /* sequelize */].QueryTypes.SELECT })];
                case 2:
                    max = _a.sent();
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["d" /* sequelize */].query("\n      SELECT gap_start, gap_end FROM (select number + 1 as gap_start,\n       next_nr - 1 as gap_end\n      from (\n        select number, lead(number) over (order by number) as next_nr\n        from \"eth_blocks\"\n      ) nr\n      where nr.number + 1 <> nr.next_nr) as g\n      UNION ALL (SELECT 0 as gap_start, number as gap_end FROM \"eth_blocks\" ORDER BY number ASC LIMIT 1)\n      ORDER BY gap_start\n    ", { type: __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["d" /* sequelize */].QueryTypes.SELECT })];
                case 3:
                    gaps = _a.sent();
                    res_1 = [];
                    gaps.forEach(function (gap) {
                        var additional = range(gap.gap_start, gap.gap_end);
                        res_1 = res_1.concat(additional);
                    });
                    maxBlockNum = max.length ? max[0].number : 0;
                    head = range(maxBlockNum, latestReliableBlock);
                    res_1 = res_1.concat(head);
                    return [2, res_1];
                case 4:
                    e_2 = _a.sent();
                    throw Error(e_2.message);
                case 5: return [2];
            }
        });
    });
}
function scanEntireChain() {
    return __awaiter(this, void 0, void 0, function () {
        var blockNumbers, i, n, existing, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    info("Starting chain filter");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 12, , 13]);
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["d" /* sequelize */].authenticate({ logging: false })];
                case 2:
                    _a.sent();
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["a" /* Block */].sync({ logging: false })];
                case 3:
                    _a.sent();
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["c" /* Transaction */].sync({ logging: false })];
                case 4:
                    _a.sent();
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["b" /* Log */].sync({ logging: false })];
                case 5:
                    _a.sent();
                    return [4, fetchMissingBlockNumbers()];
                case 6:
                    blockNumbers = _a.sent();
                    i = blockNumbers.length - 1;
                    _a.label = 7;
                case 7:
                    if (!(i >= 0)) return [3, 11];
                    n = blockNumbers[i];
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["a" /* Block */].findOne({
                            where: {
                                number: n
                            }
                        })];
                case 8:
                    existing = _a.sent();
                    if (!!existing) return [3, 10];
                    return [4, addBlock(n)];
                case 9:
                    _a.sent();
                    _a.label = 10;
                case 10:
                    i--;
                    return [3, 7];
                case 11: return [3, 13];
                case 12:
                    e_3 = _a.sent();
                    error("(chain-filter) " + e_3.message);
                    return [3, 13];
                case 13: return [2];
            }
        });
    });
}
function scanHead() {
    return __awaiter(this, void 0, void 0, function () {
        var blockNumbers, offset, head, i, n, existing, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 11, , 12]);
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["d" /* sequelize */].authenticate({ logging: false })];
                case 1:
                    _a.sent();
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["a" /* Block */].sync({ logging: false })];
                case 2:
                    _a.sent();
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["c" /* Transaction */].sync({ logging: false })];
                case 3:
                    _a.sent();
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["b" /* Log */].sync({ logging: false })];
                case 4:
                    _a.sent();
                    return [4, fetchMissingBlockNumbers()];
                case 5:
                    blockNumbers = _a.sent();
                    offset = 10;
                    head = blockNumbers.slice(blockNumbers.length - offset);
                    i = 0;
                    _a.label = 6;
                case 6:
                    if (!(i < head.length)) return [3, 10];
                    n = head[i];
                    return [4, __WEBPACK_IMPORTED_MODULE_8_server_models_postgres__["a" /* Block */].findOne({
                            where: {
                                number: n
                            }
                        })];
                case 7:
                    existing = _a.sent();
                    if (!!existing) return [3, 9];
                    return [4, addBlock(n)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    i++;
                    return [3, 6];
                case 10: return [3, 12];
                case 11:
                    e_4 = _a.sent();
                    error("(head-worker) " + e_4.message);
                    throw Error(e_4);
                case 12: return [2];
            }
        });
    });
}
function initHeadWorker() {
    return scanHead()
        .then(initHeadWorker)
        .catch(function (e) {
        error(e.message);
        return initHeadWorker();
    });
}
function initChainWorker() {
    return scanEntireChain()
        .then(initChainWorker)
        .catch(function (e) {
        error(e.message);
        return initChainWorker();
    });
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("abi-decoder");

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = require("human-standard-token-abi");

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sequelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Log; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pg__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sequelize__);


__WEBPACK_IMPORTED_MODULE_0_pg___default.a.defaults.parseInt8 = true;
var sequelize = new __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a('postgres://awsuser:mttsJpJu7Fia4GzhbWsfcK@ethereum-blockchain.cmeuocvz0fpb.us-west-2.rds.amazonaws.com:5432/blockchain', {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
        supportBigNumbers: true
    }
});
var Block = sequelize.define('eth_block', {
    difficulty: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.DECIMAL,
    extraData: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    gasLimit: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    gasUsed: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    hash: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    logsBloom: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.TEXT,
    miner: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    mixHash: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    nonce: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    number: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    parentHash: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    receiptsRoot: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    sha3Uncles: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    size: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    stateRoot: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    timestamp: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    totalDifficulty: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.DECIMAL,
    transactionsRoot: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING
}, {
    indexes: [
        {
            fields: ['number'],
            unique: true,
            primaryKey: true
        }
    ]
});
var Transaction = sequelize.define('eth_transaction', {
    blockHash: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    blockNumber: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    from: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    gas: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    gasPrice: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.DECIMAL,
    hash: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    input: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.TEXT,
    nonce: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    to: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    transactionIndex: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    value: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.DECIMAL,
    v: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    r: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    s: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    timestamp: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    cumulativeGasUsed: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.DECIMAL,
    gasUsed: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.DECIMAL,
    contractAddress: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    isTokenTransfer: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.BOOLEAN,
    tokenTransferTo: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    tokenTransferValue: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.DECIMAL
}, {
    indexes: [
        {
            fields: ['hash'],
            unique: true,
            primaryKey: true
        },
        {
            name: 'eth_transactions_from_index',
            method: 'BTREE',
            fields: ['from']
        },
        {
            name: 'eth_transactions_to_index',
            method: 'BTREE',
            fields: ['to']
        },
        {
            name: 'eth_transactions_tokenTransferTo_index',
            method: 'BTREE',
            fields: ['tokenTransferTo']
        }
    ]
});
var Log = sequelize.define('eth_log', {
    address: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    blockHash: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    blockNumber: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    data: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.TEXT,
    logIndex: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    removed: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.BOOLEAN,
    transactionHash: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING,
    transactionIndex: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.INTEGER,
    logTopic0: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.TEXT,
    logTopic1: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.TEXT,
    logTopic2: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.TEXT,
    logTopic3: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.TEXT,
    key: __WEBPACK_IMPORTED_MODULE_1_sequelize___default.a.STRING
}, {
    indexes: [
        {
            fields: ['key'],
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        {
            name: 'eth_logs_address_index',
            method: 'BTREE',
            fields: ['address']
        }
    ]
});
Transaction.belongsTo(Block, { foreignKey: 'blockNumber', targetKey: 'number' });
Log.belongsTo(Transaction, { foreignKey: 'transactionHash', targetKey: 'hash' });


/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export collectGarbage */
/* harmony export (immutable) */ __webpack_exports__["a"] = connectMongoose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_settings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_settings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_settings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);


var connection;
function collectGarbage(_db) {
    var db = _db;
    if (db.models) {
        Object.keys(db.models).forEach(function (key) { return delete db.models[key]; });
    }
    if (db.collections && db.collections) {
        Object.keys(db.collections).forEach(function (key) { return delete db.collections[key]; });
    }
    if (db.base && db.base.modelSchemas && db.base.modelSchemas) {
        Object.keys(db.base.modelSchemas).forEach(function (key) { return delete db.base.modelSchemas[key]; });
    }
}
function connectMongoose() {
    if (!connection) {
        connection = __WEBPACK_IMPORTED_MODULE_1_mongoose__["connect"](__WEBPACK_IMPORTED_MODULE_0_settings__["MONGO_URI"], { useMongoClient: true });
    }
    return connection;
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDM1MzEyMjM5ZDZhYTY5ZGEwODEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmx1ZWJpcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vLi9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zZXR0aW5ncy1wdWJsaWMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW9yZWRpc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3dvcmtlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtY29yZS9yZWdpc3RlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50OC1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtY2xhbXBlZC1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MTYtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQxNi1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MzItYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQzMi1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQzMi1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LndlYWstbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2ZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jbHozMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2lnblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtc3RhcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtZW5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmltbWVkaWF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCIiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy93b3JrZXJzL3J1bi1hbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy93b3JrZXJzL2NoYWluLWZpbHRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhYmktZGVjb2RlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh1bWFuLXN0YW5kYXJkLXRva2VuLWFiaVwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvbW9kZWxzL3Bvc3RncmVzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnXCIiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy93b3JrZXJzL3V0aWxzLnRzIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwic2V0dGluZ3NQdWJsaWMiLCJST09UX0RJUiIsIl9fUk9PVF9ESVJfXyIsInByb2Nlc3MiLCJlbnYiLCJQV0QiLCJjd2QiLCJFTlZfRklMRV9QQVRIIiwicmVzb2x2ZSIsImNvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJPYmplY3QiLCJhc3NpZ24iLCJBUFBfSE9TVCIsIk5PREVfSE9TVCIsIkFQUF9ST09UIiwiQVBQX1BPUlQiLCJQT1JUIiwiREVCVUciLCJpc0RlYnVnIiwiTU9OR09fVVJJIiwiTU9OR09fVEVTVF9VUkkiLCJNT05HT19VU0VSTkFNRSIsIk1PTkdPX1BBU1NXT1JEIiwiUkVESVNfVVJJIiwiRVRIRVJFVU1fTk9ERV9VUkwiLCJOT0RFX0VOViIsImFyZ3MiLCJhcmd2Iiwic2xpY2UiLCJsZW5ndGgiLCJzaGlmdCIsIndvcmtlckFyZyIsImZpbmQiLCJ0ZXN0Iiwi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O0FDQUEsc0U7Ozs7OztBQ0FBLGlFOzs7Ozs7QUNBQSwyRTs7Ozs7O0FDQUEsNEQ7Ozs7OztBQ0FBLHlFOzs7Ozs7QUNBQSx3RDs7Ozs7O0FDQUEsdUQ7Ozs7OztBQ0FBLDhEOzs7Ozs7QUNBQSw0RDs7Ozs7O0FDQUEsMEU7Ozs7OztBQ0FBLGlFOzs7Ozs7QUNBQSxpRTs7Ozs7O0FDQUEscUU7Ozs7OztBQ0FBLG1GOzs7Ozs7QUNBQSx3RTs7Ozs7O0FDQUEsNEQ7Ozs7OztBQ0FBLDhFOzs7Ozs7QUNBQSw4RDs7Ozs7O0FDQUEsMEQ7Ozs7OztBQ0FBLHdFOzs7Ozs7QUNBQSw4RDs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLHVFOzs7Ozs7QUNBQSxxRTs7Ozs7O0FDQUEsOEQ7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxpRTs7Ozs7O0FDQUEsZ0U7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsK0Q7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw4RDs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLHlEOzs7Ozs7QUNBQSxrRTs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLGlFOzs7Ozs7QUNBQSwyRDs7Ozs7O0FDQUEsK0Q7Ozs7OztBQ0FBLGlFOzs7Ozs7QUNBQSxrRTs7Ozs7O0FDQUEsdUU7Ozs7OztBQ0FBLDhEOzs7Ozs7QUNBQSwrRDs7Ozs7O0FDQUEsd0U7Ozs7OztBQ0FBLHdFOzs7Ozs7QUNBQSwyRDs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLDJEOzs7Ozs7QUNBQSwwRDs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLDBEOzs7Ozs7QUNBQSwyRDs7Ozs7O0FDQUEsNEQ7Ozs7OztBQ0FBLDJEOzs7Ozs7QUNBQSwwRDs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLDJEOzs7Ozs7QUNBQSwwRDs7Ozs7O0FDQUEsMEQ7Ozs7OztBQ0FBLDBEOzs7Ozs7QUNBQSwwRDs7Ozs7O0FDQUEsMkQ7Ozs7OztBQ0FBLCtEOzs7Ozs7QUNBQSw4RDs7Ozs7O0FDQUEsK0Q7Ozs7OztBQ0FBLG9GOzs7Ozs7QUNBQSxpRTs7Ozs7O0FD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QUksY0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FDdkMsYUFBRyxJQUFJLGNBQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQWhDLENBQWdDLENBQ3hDLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUdLO0lBQ0osRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLFVBQVUsR0FBRyxpREFBZ0IsQ0FBQyxtREFBa0IsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3BCLENBQUMiLCJmaWxlIjoiZGlzdC93b3JrZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQzNTMxMjIzOWQ2YWE2OWRhMDgxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmx1ZWJpcmRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJibHVlYmlyZFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndpbnN0b25cIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludC1kaXNhYmxlICovXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3Qgc2V0dGluZ3NQdWJsaWMgPSByZXF1aXJlKCcuL3NldHRpbmdzLXB1YmxpYy5qcycpO1xubGV0IFJPT1RfRElSO1xuXG5pZiAodHlwZW9mIFJPT1RfRElSID09PSAndW5kZWZpbmVkJykge1xuICBST09UX0RJUiA9IG51bGw7XG59XG5cbmNvbnN0IF9fUk9PVF9ESVJfXyA9IHByb2Nlc3MuZW52LlJPT1RfRElSIHx8IFJPT1RfRElSIHx8IHByb2Nlc3MuZW52LlBXRCB8fCBwcm9jZXNzLmN3ZCgpO1xuY29uc3QgRU5WX0ZJTEVfUEFUSCA9IHBhdGgucmVzb2x2ZShfX1JPT1RfRElSX18sICcuZW52Jyk7XG5cbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZyh7IHBhdGg6IEVOVl9GSUxFX1BBVEggfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3NQdWJsaWMsIHtcbiAgQVBQX0hPU1Q6IHByb2Nlc3MuZW52LkFQUF9IT1NUIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxuICBOT0RFX0hPU1Q6IHByb2Nlc3MuZW52Lk5PREVfSE9TVCB8fCAnMTI3LjAuMC4xJyxcbiAgQVBQX1JPT1Q6IF9fUk9PVF9ESVJfXyxcbiAgUk9PVF9ESVI6IF9fUk9PVF9ESVJfXyxcbiAgQVBQX1BPUlQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCxcbiAgREVCVUc6IGlzRGVidWcoKSxcbiAgTU9OR09fVVJJOiBwcm9jZXNzLmVudi5NT05HT19VUkkgfHwgJ21vbmdvZGI6Ly9tb25nby9hcHAnLFxuICBNT05HT19URVNUX1VSSTogcHJvY2Vzcy5lbnYuTU9OR09fVEVTVF9VUkkgfHwgJ21vbmdvZGI6Ly9tb25nby9hcHBfdGVzdCcsXG4gIE1PTkdPX1VTRVJOQU1FOiBwcm9jZXNzLmVudi5NT05HT19VU0VSTkFNRSxcbiAgTU9OR09fUEFTU1dPUkQ6IHByb2Nlc3MuZW52Lk1PTkdPX1BBU1NXT1JELFxuICBSRURJU19VUkk6IHByb2Nlc3MuZW52LlJFRElTX1VSSSB8fCAncmVkaXM6Ly9yZWRpczo2Mzc5LzAnLFxuICBFVEhFUkVVTV9OT0RFX1VSTDogcHJvY2Vzcy5lbnYuRVRIRVJFVU1fTk9ERV9VUkwgfHwgJ2h0dHBzOi8vbWFpbm5ldC5pbmZ1cmEuaW8nXG59KTtcblxuZnVuY3Rpb24gaXNEZWJ1ZygpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodHlwZW9mIHByb2Nlc3MuZW52LkRFQlVHICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAhIXByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zZXR0aW5ncy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRvdGVudlwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYWxrXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXF1ZWxpemVcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2V0dGluZ3MtcHVibGljLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW9yZWRpc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlvcmVkaXNcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2ViM1wiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkLCBuby1jb25zb2xlICovXG5pbXBvcnQgJ2JhYmVsLWNvcmUvcmVnaXN0ZXInO1xuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCc7XG5pbXBvcnQgcnVuQWxsV29ya2VycyBmcm9tICcuL3J1bi1hbGwnO1xuaW1wb3J0IHsgaW5pdEhlYWRXb3JrZXIsIGluaXRDaGFpbldvcmtlciB9IGZyb20gJy4vY2hhaW4tZmlsdGVyJztcblxuY29uc3QgYXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgpO1xuXG5pZiAoYXJncy5sZW5ndGggPj0gMikge1xuICBhcmdzLnNoaWZ0KCk7XG4gIGFyZ3Muc2hpZnQoKTtcbn1cblxuY29uc3Qgd29ya2VyQXJnID0gYXJncy5maW5kKGEgPT4gL153b3JrZXI9Li8udGVzdChhKSk7XG5cbmlmICh3b3JrZXJBcmcpIHtcbiAgY29uc3Qgd2hpY2ggPSB3b3JrZXJBcmcuc3BsaXQoJz0nKVsxXTtcblxuICBzd2l0Y2ggKHdoaWNoKSB7XG4gICAgY2FzZSAnaGVhZC13b3JrZXInOlxuICAgICAgaW5pdEhlYWRXb3JrZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NoYWluLXdvcmtlcic6XG4gICAgICBpbml0Q2hhaW5Xb3JrZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCB3b3JrZXIgaWQ6ICR7d2hpY2h9YCk7XG4gIH1cbn0gZWxzZSB7XG4gIHJ1bkFsbFdvcmtlcnMoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvd29ya2Vycy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLWNvcmUvcmVnaXN0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1jb3JlL3JlZ2lzdGVyXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuYXJyYXktYnVmZmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5hcnJheS1idWZmZXJcIlxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQ4LWFycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQ4LWFycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtY2xhbXBlZC1hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDgtY2xhbXBlZC1hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDE2LWFycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5pbnQxNi1hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLnVpbnQxNi1hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDE2LWFycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuaW50MzItYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnR5cGVkLmludDMyLWFycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQudWludDMyLWFycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC51aW50MzItYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi50eXBlZC5mbG9hdDMyLWFycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYudHlwZWQuZmxvYXQ2NC1hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWFwXCJcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zZXRcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXBcIlxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYud2Vhay1zZXRcIlxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5XCJcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0XCJcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5XCJcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5XCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0XCJcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2ZcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXNcIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZVwiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXNcIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9uc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnNcIlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXRcIlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2ZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZlwiXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2xcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemVcIlxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWxcIlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zXCJcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plblwiXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWRcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGVcIlxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2ZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mXCJcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzXCJcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzXCJcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnblwiXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzXCJcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2ZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mXCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZVwiXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXdcIlxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50XCJcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0XCJcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdFwiXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoXCJcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aFwiXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzXCJcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3NcIlxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZVwiXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0XCJcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaFwiXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb21cIlxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2ZcIlxuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW5cIlxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kXCJcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleFwiXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGxcIlxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlXCJcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlclwiXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW5cIlxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmVwc2lsb25cIlxuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXJcIlxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXJcIlxuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoXCJcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmhcIlxuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hdGFuaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hdGFuaFwiXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydFwiXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyXCJcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY29zaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoXCJcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTFcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTFcIlxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kXCJcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaHlwb3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaHlwb3RcIlxuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWxcIlxuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxcFwiXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwXCJcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyXCJcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2lnblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduXCJcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2luaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oXCJcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oXCJcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmNcIlxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzXCJcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXNcIlxuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzXCJcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yc1wiXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXN0YXJ0XCJcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtZW5kXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWVuZFwiXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVyc1wiXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL3dlYi5pbW1lZGlhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmltbWVkaWF0ZVwiXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNwIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgeyBpbml0Q2hhaW5Xb3JrZXIgfSBmcm9tICcuL2NoYWluLWZpbHRlcic7XG5cbmxldCBpID0gMTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj0gICAgSW5pdFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRBbGxXb2tlcnMoKSB7XG4gIC8vIGNvbnN0IGh3ID0gY3AuZm9yaygnZGlzdC93b3JrZXJzLmpzJywgWyd3b3JrZXI9aGVhZC13b3JrZXInXSk7XG4gIC8vIGNvbnN0IGN3ID0gY3AuZm9yaygnZGlzdC93b3JrZXJzLmpzJywgWyd3b3JrZXI9Y2hhaW4td29ya2VyJ10pO1xuICAvL1xuICAvLyBody5vbignZXJyb3InLCB3aW5zdG9uLmVycm9yKTtcbiAgLy8gY3cub24oJ2Vycm9yJywgd2luc3Rvbi5lcnJvcik7XG4gIC8vIGh3Lm9uKCdjbG9zZScsICgpID0+IHdpbnN0b24uaW5mbygnQ2xvc2VkIGhlYWQgd29ya2VyJykpO1xuICAvLyBjdy5vbignY2xvc2UnLCAoKSA9PiB3aW5zdG9uLmluZm8oJ0Nsb3NlZCBjaGFpbiB3b3JrZXInKSk7XG5cbiAgcmV0dXJuIHdvcmtlclJlY3Vyc2VyKGkpO1xufVxuXG5mdW5jdGlvbiB3b3JrZXJSZWN1cnNlcihpZCkge1xuICBzd2l0Y2ggKGlkKSB7XG4gICAgLy8gUnVuIHRoaW5ncyB0aGF0IHdyaXRlIHRvIGRiIGZpcnN0XG5cbiAgICAvLyBUaGVuIHJ1biB0aGUgdGhpbmdzIHRoYXQgcmVmcmVzaCB0aGUgY2FjaGVcblxuICAgIGRlZmF1bHQ6XG4gICAgICBpID0gMTtcbiAgICAgIHJldHVybiB3b3JrZXJSZWN1cnNlcihpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNlKCkge1xuXG4gIGkrKztcblxuICByZXR1cm4gd29ya2VyUmVjdXJzZXIoaSk7XG59XG5cbmZ1bmN0aW9uIGNhdGNoRXJyb3IoZSkge1xuICB3aW5zdG9uLmVycm9yKGBXb3JrZXIgZXJyb3I6ICR7ZS5tZXNzYWdlfWApO1xuICByZXR1cm4gcmVjdXJzZSgpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy93b3JrZXJzL3J1bi1hbGwudHMiLCJpbXBvcnQgUmVkaXMgZnJvbSAnaW9yZWRpcyc7XG5pbXBvcnQgbmV0IGZyb20gJ25ldCc7XG5pbXBvcnQgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCBzZXR0aW5ncyBmcm9tICdzZXR0aW5ncyc7XG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XG5pbXBvcnQgYWJpRGVjb2RlciBmcm9tICdhYmktZGVjb2Rlcic7XG5pbXBvcnQgZXJjMjBBQkkgZnJvbSAnaHVtYW4tc3RhbmRhcmQtdG9rZW4tYWJpJztcbmltcG9ydCB7IEJsb2NrLCBUcmFuc2FjdGlvbiwgTG9nLCBzZXF1ZWxpemUgfSBmcm9tICdzZXJ2ZXIvbW9kZWxzL3Bvc3RncmVzJztcbmltcG9ydCB7IGNvbm5lY3RNb25nb29zZSB9IGZyb20gJy4uL3V0aWxzJztcblxuaW50ZXJmYWNlIElUcmFuc2FjdGlvbiB7XG4gIGJsb2NrSGFzaDogc3RyaW5nO1xuICBibG9ja051bWJlcjogbnVtYmVyO1xuICBmcm9tOiBzdHJpbmc7XG4gIGdhczogbnVtYmVyO1xuICBnYXNQcmljZTogQmlnTnVtYmVyO1xuICBoYXNoOiBzdHJpbmc7XG4gIGlucHV0OiBzdHJpbmc7XG4gIG5vbmNlOiBudW1iZXI7XG4gIHRvOiBzdHJpbmc7XG4gIHRyYW5zYWN0aW9uSW5kZXg6IG51bWJlcjtcbiAgdmFsdWU6IEJpZ051bWJlcjtcbiAgdjogc3RyaW5nO1xuICByOiBzdHJpbmc7XG4gIHM6IHN0cmluZztcbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJTG9nIHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBibG9ja0hhc2g6IHN0cmluZztcbiAgYmxvY2tOdW1iZXI6IG51bWJlcjtcbiAgZGF0YTogc3RyaW5nO1xuICBsb2dJbmRleDogbnVtYmVyO1xuICByZW1vdmVkOiBib29sZWFuO1xuICB0b3BpY3M6IHN0cmluZ1tdO1xuICB0cmFuc2FjdGlvbkhhc2g6IHN0cmluZztcbiAgdHJhbnNhY3Rpb25JbmRleDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVRyYW5zYWN0aW9uUmVjZWlwdCB7XG4gIGJsb2NrSGFzaDogc3RyaW5nO1xuICBibG9ja051bWJlcjogbnVtYmVyO1xuICBjb250cmFjdEFkZHJlc3M6IHN0cmluZztcbiAgY3VtdWxhdGl2ZUdhc1VzZWQ6IG51bWJlcjtcbiAgZ2FzVXNlZDogbnVtYmVyO1xuICBsb2dzOiBJTG9nW107XG4gIGxvZ3NCbG9vbTogc3RyaW5nO1xuICByb290OiBzdHJpbmc7XG4gIHN0YXR1czogbnVtYmVyO1xuICB0cmFuc2FjdGlvbkhhc2g6IHN0cmluZztcbiAgdHJhbnNhY3Rpb25JbmRleDogbnVtYmVyO1xuICBmcm9tOiBzdHJpbmc7XG4gIHRvOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQmxvY2sge1xuICBkaWZmaWN1bHR5OiBCaWdOdW1iZXI7XG4gIGV4dHJhRGF0YTogc3RyaW5nO1xuICBnYXNMaW1pdDogbnVtYmVyO1xuICBnYXNVc2VkOiBudW1iZXI7XG4gIGhhc2g6IHN0cmluZztcbiAgbG9nc0Jsb29tOiBzdHJpbmc7XG4gIG1pbmVyOiBzdHJpbmc7XG4gIG1peEhhc2g6IHN0cmluZztcbiAgbm9uY2U6IHN0cmluZztcbiAgbnVtYmVyOiBudW1iZXI7XG4gIHBhcmVudEhhc2g6IHN0cmluZztcbiAgcmVjZWlwdHNSb290OiBzdHJpbmc7XG4gIHNoYTNVbmNsZXM6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICBzdGF0ZVJvb3Q6IHN0cmluZztcbiAgdG90YWxEaWZmaWN1bHR5OiBCaWdOdW1iZXI7XG4gIHRyYW5zYWN0aW9uc1Jvb3Q6IHN0cmluZztcbiAgdHJhbnNhY3Rpb25zOiBJVHJhbnNhY3Rpb25bXTtcbiAgdGltZXN0YW1wOiBudW1iZXI7XG59XG5cbmNvbnN0IHJhbmdlID0gKG1pbiwgbWF4KSA9PiBtYXggPCBtaW5cbiAgPyBbXVxuICA6IEFycmF5KG1heCArIDEgLSBtaW4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBtaW4gKyBpKTtcblxuXG5jb25zdCBpbmZvID0gc3RyID0+IHdpbnN0b24uaW5mbyhgJHtjaGFsay5ibHVlKCdbY2hhaW4tZmlsdGVyXScpfSAke3N0cn1gKTtcbmNvbnN0IGVycm9yID0gc3RyID0+IHdpbnN0b24uZXJyb3IoYCR7Y2hhbGsucmVkKCdbY2hhaW4tZmlsdGVyXSBFUlJPUjonKX0gJHtzdHJ9YCk7XG5cbi8qKlxuICogSW5pdGlhbGl6YXRpb25cbiAqL1xuY29uc3QgZGIgPSBjb25uZWN0TW9uZ29vc2UoKTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLklwY1Byb3ZpZGVyKCcvcm9vdC8uZXRoZXJldW0vZ2V0aC5pcGMnLCBuZXQpO1xuY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbmNvbnN0IGZldGNoTGF0ZXN0QmxvY2sgPSBQcm9taXNlLnByb21pc2lmeSh3ZWIzLmV0aC5nZXRCbG9ja051bWJlcik7XG5jb25zdCBmZXRjaEJsb2NrID0gUHJvbWlzZS5wcm9taXNpZnkod2ViMy5ldGguZ2V0QmxvY2spO1xuY29uc3QgZmV0Y2hUcmFuc2FjdGlvblJlY2VpcHQgPSBQcm9taXNlLnByb21pc2lmeSh3ZWIzLmV0aC5nZXRUcmFuc2FjdGlvblJlY2VpcHQpXG5jb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKCk7XG5cbmFiaURlY29kZXIuYWRkQUJJKGVyYzIwQUJJKTtcblxuXG4vKipcbiAqIFNldHVwIFJlZGlzXG4gKi9cbmFyZ3Muc2hpZnQoKTtcbmFyZ3Muc2hpZnQoKTtcblxuY29uc3Qgd29ya2VySWRBcmcgPSBhcmdzLmZpbmQoYSA9PiAvXmlkPS4vLnRlc3QoYSkpIHx8ICcnO1xuY29uc3Qgd29ya2VySWRBcmdQYXJ0cyA9IHdvcmtlcklkQXJnLnNwbGl0KCc9Jyk7XG5jb25zdCB3b3JrZXJJZCA9IHdvcmtlcklkQXJnUGFydHMubGVuZ3RoICYmIHdvcmtlcklkQXJnUGFydHNbMV1cbmNvbnN0IHJlZGlzID0gbmV3IFJlZGlzKHNldHRpbmdzLlJFRElTX1VSSSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBJVHJhbnNhY3Rpb24sIGJsb2NrOiBJQmxvY2spIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICBibG9ja0hhc2g6IHRyYW5zYWN0aW9uLmJsb2NrSGFzaCxcbiAgICBibG9ja051bWJlcjogdHJhbnNhY3Rpb24uYmxvY2tOdW1iZXIsXG4gICAgZnJvbTogdHJhbnNhY3Rpb24uZnJvbSxcbiAgICBnYXM6IHRyYW5zYWN0aW9uLmdhcyxcbiAgICBnYXNQcmljZTogdHJhbnNhY3Rpb24uZ2FzUHJpY2UudG9GaXhlZCgpLFxuICAgIGhhc2g6IHRyYW5zYWN0aW9uLmhhc2gsXG4gICAgaW5wdXQ6IHRyYW5zYWN0aW9uLmlucHV0LFxuICAgIG5vbmNlOiB0cmFuc2FjdGlvbi5ub25jZSxcbiAgICB0bzogdHJhbnNhY3Rpb24udG8sXG4gICAgdHJhbnNhY3Rpb25JbmRleDogdHJhbnNhY3Rpb24udHJhbnNhY3Rpb25JbmRleCxcbiAgICB2YWx1ZTogdHJhbnNhY3Rpb24udmFsdWUudG9GaXhlZCgpLFxuICAgIHY6IHRyYW5zYWN0aW9uLnYsXG4gICAgcjogdHJhbnNhY3Rpb24ucixcbiAgICBzOiB0cmFuc2FjdGlvbi5zLFxuICAgIHRpbWVzdGFtcDogYmxvY2sudGltZXN0YW1wXG4gIH0gYXMgYW55O1xuXG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG4vLyBGZXRjaCBtZXRhZGF0YSBhbmQgbG9ncyBmb3IgdHJhbnNhY3Rpb25zIGFuZCBwcmVwYXJlIGl0IGZvciBkYiBpbnNlcnRcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVRyYW5zYWN0aW9ucyhibG9jazogSUJsb2NrKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICAvLyBjb25zdCB0cmFuc2FjdGlvbnMgPSBibG9jay50cmFuc2FjdGlvbnMubWFwKHQgPT4gbm9ybWFsaXplVHJhbnNhY3Rpb24odCwgYmxvY2spKTtcblxuICB0cnkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGJsb2NrLnRyYW5zYWN0aW9uc1tpXTtcbiAgICAgIGNvbnN0IF90cmFuc2FjdGlvblJlY2VpcHQgPSBhd2FpdCAoZmV0Y2hUcmFuc2FjdGlvblJlY2VpcHQgYXMgYW55KSh0cmFuc2FjdGlvbi5oYXNoKTtcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uUmVjZWlwdCA9IF90cmFuc2FjdGlvblJlY2VpcHQgYXMgSVRyYW5zYWN0aW9uUmVjZWlwdDtcblxuICAgICAgY29uc3QgcHJlcGFyZWRUcmFuc2FjdGlvbiA9IHtcbiAgICAgICAgLi4ubm9ybWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24sIGJsb2NrKSxcbiAgICAgICAgY3VtdWxhdGl2ZUdhc1VzZWQ6IHRyYW5zYWN0aW9uUmVjZWlwdC5jdW11bGF0aXZlR2FzVXNlZCxcbiAgICAgICAgZ2FzVXNlZDogdHJhbnNhY3Rpb25SZWNlaXB0Lmdhc1VzZWQsXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzczogdHJhbnNhY3Rpb25SZWNlaXB0LmNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgTG9nczogdHJhbnNhY3Rpb25SZWNlaXB0LmxvZ3MubWFwKChsb2csIGkpID0+ICh7XG4gICAgICAgICAgYWRkcmVzczogbG9nLmFkZHJlc3MsXG4gICAgICAgICAgYmxvY2tIYXNoOiBsb2cuYmxvY2tIYXNoLFxuICAgICAgICAgIGJsb2NrTnVtYmVyOiBsb2cuYmxvY2tOdW1iZXIsXG4gICAgICAgICAgZGF0YTogbG9nLmRhdGEsXG4gICAgICAgICAgbG9nSW5kZXg6IGxvZy5sb2dJbmRleCxcbiAgICAgICAgICB0cmFuc2FjdGlvbkhhc2g6IGxvZy50cmFuc2FjdGlvbkhhc2gsXG4gICAgICAgICAgdHJhbnNhY3Rpb25JbmRleDogbG9nLnRyYW5zYWN0aW9uSW5kZXgsXG4gICAgICAgICAgcmVtb3ZlZDogbG9nLnJlbW92ZWQsXG4gICAgICAgICAga2V5OiBgJHtsb2cudHJhbnNhY3Rpb25IYXNofS0ke2l9YCxcbiAgICAgICAgICBsb2dUb3BpYzA6IGxvZy50b3BpY3NbMF0gfHwgbnVsbCxcbiAgICAgICAgICBsb2dUb3BpYzE6IGxvZy50b3BpY3NbMV0gfHwgbnVsbCxcbiAgICAgICAgICBsb2dUb3BpYzI6IGxvZy50b3BpY3NbMl0gfHwgbnVsbCxcbiAgICAgICAgICBsb2dUb3BpYzM6IGxvZy50b3BpY3NbM10gfHwgbnVsbFxuICAgICAgICB9KSlcbiAgICAgIH1cblxuICAgICAgcmVzLnB1c2gocHJlcGFyZWRUcmFuc2FjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgRXJyb3IoZXJyLm1lc3NhZ2UpO1xuICB9XG59XG5cbmludGVyZmFjZSBXb3JrZXJTdGF0ZSB7XG4gIFt3b3JrZXJJZDogc3RyaW5nXTogbnVtYmVyXG59O1xuXG5mdW5jdGlvbiBpc0Jsb2NrQmVpbmdQcm9jZXNzZWQoYmxvY2tOdW1iZXI6IG51bWJlciwgd29ya2VyU3RhdGU6IFdvcmtlclN0YXRlKTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh3b3JrZXJTdGF0ZSlcbiAgICAuZmlsdGVyKGtleSA9PiBrZXkgIT09IHdvcmtlcklkKSAvLyBJZ25vcmUgb3Vyc2VsZlxuICAgIC5tYXAoa2V5ID0+IHdvcmtlclN0YXRlW2tleV0pXG4gICAgLnNvbWUobiA9PiBuID09PSBibG9ja051bWJlcik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZEJsb2NrKGJsb2NrTnVtYmVyOiBudW1iZXIpIHtcblxuICAvKipcbiAgICogTGV0IHJlZGlzIGtub3cgd2hhdCBibG9jayB3ZSdyZSB3b3JraW5nIG9uXG4gICAqL1xuICB0cnkge1xuICAgIGNvbnN0IHdvcmtlclN0YXRlSlNPTiA9IGF3YWl0IHJlZGlzLmdldCgnY2hhaW4td29ya2VyLXN0YXRlJyk7XG4gICAgY29uc3Qgd29ya2VyU3RhdGU6IGFueSA9IHdvcmtlclN0YXRlSlNPTiA/IEpTT04ucGFyc2Uod29ya2VyU3RhdGVKU09OKSA6IHt9O1xuXG4gICAgaWYgKGlzQmxvY2tCZWluZ1Byb2Nlc3NlZChibG9ja051bWJlciwgd29ya2VyU3RhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHdvcmtlclN0YXRlW3dvcmtlcklkXSA9IGJsb2NrTnVtYmVyO1xuICAgICAgYXdhaXQgcmVkaXMuc2V0KCdjaGFpbi13b3JrZXItc3RhdGUnLCBKU09OLnN0cmluZ2lmeSh3b3JrZXJTdGF0ZSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IEVycm9yKGUubWVzc2FnZSk7XG4gIH1cblxuICBjb25zdCB0aW1lcklkID0gYCR7d29ya2VySWR9LWJsb2NrLSR7YmxvY2tOdW1iZXJ9YDtcblxuICB0cnkge1xuICAgIGNvbnN0IF9ibG9jayA9IGF3YWl0IChmZXRjaEJsb2NrIGFzIGFueSkoYmxvY2tOdW1iZXIsIHRydWUpOyAvLyAybmQgcGFyYW0gPSBnZXQgZnVsbCB0eFxuICAgIGNvbnN0IGJsb2NrID0gX2Jsb2NrIGFzIElCbG9jaztcblxuICAgIGNvbnNvbGUudGltZSh0aW1lcklkKTtcblxuICAgIGluZm8oYFByb2Nlc3NpbmcgYmxvY2sgJHtibG9ja051bWJlcn0gLS0gdG90YWwgdHggY291bnQgaW4gYmxvY2s6ICR7YmxvY2sudHJhbnNhY3Rpb25zLmxlbmd0aH1gKTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBoYW5kbGVUcmFuc2FjdGlvbnMoYmxvY2spO1xuXG4gICAgY29uc3QgbG9ncyA9IFtdO1xuXG4gICAgdHJhbnNhY3Rpb25zLmZvckVhY2godCA9PiB7XG4gICAgICB0LkxvZ3MuZm9yRWFjaChsID0+IGxvZ3MucHVzaChsKSlcbiAgICB9KVxuXG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgbnVtYmVyOiBibG9jay5udW1iZXIsXG4gICAgICBkaWZmaWN1bHR5OiBibG9jay5kaWZmaWN1bHR5LnRvRml4ZWQoKSxcbiAgICAgIGV4dHJhRGF0YTogYmxvY2suZXh0cmFEYXRhLFxuICAgICAgZ2FzTGltaXQ6IGJsb2NrLmdhc0xpbWl0LFxuICAgICAgZ2FzVXNlZDogYmxvY2suZ2FzVXNlZCxcbiAgICAgIGhhc2g6IGJsb2NrLmhhc2gsXG4gICAgICBsb2dzQmxvb206IGJsb2NrLmxvZ3NCbG9vbSxcbiAgICAgIG1pbmVyOiBibG9jay5taW5lcixcbiAgICAgIG1peEhhc2g6IGJsb2NrLm1peEhhc2gsXG4gICAgICBub25jZTogYmxvY2subm9uY2UsXG4gICAgICBwYXJlbnRIYXNoOiBibG9jay5wYXJlbnRIYXNoLFxuICAgICAgcmVjZWlwdHNSb290OiBibG9jay5yZWNlaXB0c1Jvb3QsXG4gICAgICBzaGEzVW5jbGVzOiBibG9jay5zaGEzVW5jbGVzLFxuICAgICAgc2l6ZTogYmxvY2suc2l6ZSxcbiAgICAgIHN0YXRlUm9vdDogYmxvY2suc3RhdGVSb290LFxuICAgICAgdGltZXN0YW1wOiBibG9jay50aW1lc3RhbXAsXG4gICAgICB0b3RhbERpZmZpY3VsdHk6IGJsb2NrLnRvdGFsRGlmZmljdWx0eS50b0ZpeGVkKCksXG4gICAgICB0cmFuc2FjdGlvbnNSb290OiBibG9jay50cmFuc2FjdGlvbnNSb290XG4gICAgfSBhcyBhbnk7XG5cbiAgICBhd2FpdCBzZXF1ZWxpemUudHJhbnNhY3Rpb24odHJhbnNhY3Rpb24gPT5cbiAgICAgIEJsb2NrLmNyZWF0ZShkb2MsIHtcbiAgICAgICAgbG9nZ2luZzogZmFsc2UsXG4gICAgICAgIHRyYW5zYWN0aW9uXG4gICAgICB9KS50aGVuKGJsb2NrID0+IHtcbiAgICAgICAgY29uc3Qgb3B0cyA9IHsgdHJhbnNhY3Rpb24sIGxvZ2dpbmc6IGZhbHNlIH07XG5cbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uLmJ1bGtDcmVhdGUodHJhbnNhY3Rpb25zLCBvcHRzKS50aGVuKHR4RG9jcyA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0cyA9IHsgdHJhbnNhY3Rpb24sIGxvZ2dpbmc6IGZhbHNlIH07XG5cbiAgICAgICAgICByZXR1cm4gTG9nLmJ1bGtDcmVhdGUobG9ncywgb3B0cyk7XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICkuY2F0Y2goZXJyID0+IGVycm9yKEpTT04uc3RyaW5naWZ5KGVyciwgbnVsbCwgJyAgJykpKTtcblxuICAgIHtcbiAgICAgIGNvbnN0IHdvcmtlclN0YXRlSlNPTiA9IGF3YWl0IHJlZGlzLmdldCgnY2hhaW4td29ya2VyLXN0YXRlJyk7XG4gICAgICBjb25zdCB3b3JrZXJTdGF0ZSA9IEpTT04ucGFyc2Uod29ya2VyU3RhdGVKU09OKTtcblxuICAgICAgZGVsZXRlIHdvcmtlclN0YXRlW3dvcmtlcklkXTtcblxuICAgICAgYXdhaXQgcmVkaXMuc2V0KCdjaGFpbi13b3JrZXItc3RhdGUnLCBKU09OLnN0cmluZ2lmeSh3b3JrZXJTdGF0ZSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgRXJyb3IoZXJyLm1lc3NhZ2UpO1xuICB9IGZpbmFsbHkge1xuICAgIGNvbnNvbGUudGltZUVuZCh0aW1lcklkKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgR2FwIHtcbiAgZ2FwX3N0YXJ0OiBudW1iZXI7XG4gIGdhcF9lbmQ6IG51bWJlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNaXNzaW5nQmxvY2tOdW1iZXJzKCk6IFByb21pc2U8bnVtYmVyW10+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsYXRlc3RCbG9jayA9IGF3YWl0IGZldGNoTGF0ZXN0QmxvY2soKTtcbiAgICAvLyBQcmV2ZW50IGhhbmRsaW5nIG9ycGhhbmVkIGJsb2Nrcy5cbiAgICBjb25zdCBsYXRlc3RSZWxpYWJsZUJsb2NrID0gKGxhdGVzdEJsb2NrIGFzIG51bWJlcikgLSA1O1xuICAgIGNvbnN0IG1heCA9IGF3YWl0IHNlcXVlbGl6ZS5xdWVyeShgXG4gICAgICBTRUxFQ1QgbnVtYmVyIEZST00gXCJwdWJsaWNcIi5cImV0aF9ibG9ja3NcIiBPUkRFUiBCWSBudW1iZXIgREVTQyBMSU1JVCAxXG4gICAgYCwgeyB0eXBlOiBzZXF1ZWxpemUuUXVlcnlUeXBlcy5TRUxFQ1QgfSk7XG4gICAgY29uc3QgZ2FwczogR2FwW10gPSBhd2FpdCBzZXF1ZWxpemUucXVlcnkoYFxuICAgICAgU0VMRUNUIGdhcF9zdGFydCwgZ2FwX2VuZCBGUk9NIChzZWxlY3QgbnVtYmVyICsgMSBhcyBnYXBfc3RhcnQsXG4gICAgICAgbmV4dF9uciAtIDEgYXMgZ2FwX2VuZFxuICAgICAgZnJvbSAoXG4gICAgICAgIHNlbGVjdCBudW1iZXIsIGxlYWQobnVtYmVyKSBvdmVyIChvcmRlciBieSBudW1iZXIpIGFzIG5leHRfbnJcbiAgICAgICAgZnJvbSBcImV0aF9ibG9ja3NcIlxuICAgICAgKSBuclxuICAgICAgd2hlcmUgbnIubnVtYmVyICsgMSA8PiBuci5uZXh0X25yKSBhcyBnXG4gICAgICBVTklPTiBBTEwgKFNFTEVDVCAwIGFzIGdhcF9zdGFydCwgbnVtYmVyIGFzIGdhcF9lbmQgRlJPTSBcImV0aF9ibG9ja3NcIiBPUkRFUiBCWSBudW1iZXIgQVNDIExJTUlUIDEpXG4gICAgICBPUkRFUiBCWSBnYXBfc3RhcnRcbiAgICBgLCB7IHR5cGU6IHNlcXVlbGl6ZS5RdWVyeVR5cGVzLlNFTEVDVCB9KTtcblxuICAgIGxldCByZXMgPSBbXTtcblxuICAgIC8vIEFkZCBnYXBzXG4gICAgZ2Fwcy5mb3JFYWNoKChnYXA6IEdhcCkgPT4ge1xuICAgICAgY29uc3QgYWRkaXRpb25hbCA9IHJhbmdlKGdhcC5nYXBfc3RhcnQsIGdhcC5nYXBfZW5kKTtcblxuICAgICAgcmVzID0gWy4uLnJlcywgLi4uYWRkaXRpb25hbF07XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXhCbG9ja051bSA9IG1heC5sZW5ndGggPyBtYXhbMF0ubnVtYmVyIDogMDtcbiAgICAvLyBBZGQgYmxvY2tzIGJldHdlZW4gbWF4IGFuZCBjdXJyZW50IGxhdGVzdFxuICAgIGNvbnN0IGhlYWQgPSByYW5nZShtYXhCbG9ja051bSwgbGF0ZXN0UmVsaWFibGVCbG9jayk7XG4gICAgcmVzID0gWy4uLnJlcywgLi4uaGVhZF07XG5cbiAgICByZXR1cm4gcmVzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgRXJyb3IoZS5tZXNzYWdlKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzY2FuRW50aXJlQ2hhaW4oKSB7XG4gIGluZm8oYFN0YXJ0aW5nIGNoYWluIGZpbHRlcmApO1xuXG4gIHRyeSB7XG4gICAgYXdhaXQgc2VxdWVsaXplLmF1dGhlbnRpY2F0ZSh7IGxvZ2dpbmc6IGZhbHNlIH0pO1xuICAgIGF3YWl0IEJsb2NrLnN5bmMoeyBsb2dnaW5nOiBmYWxzZSB9KTtcbiAgICBhd2FpdCBUcmFuc2FjdGlvbi5zeW5jKHsgbG9nZ2luZzogZmFsc2UgfSk7XG4gICAgYXdhaXQgTG9nLnN5bmMoeyBsb2dnaW5nOiBmYWxzZSB9KTtcblxuICAgIGNvbnN0IGJsb2NrTnVtYmVycyA9IGF3YWl0IGZldGNoTWlzc2luZ0Jsb2NrTnVtYmVycygpO1xuXG4gICAgZm9yIChsZXQgaSA9IGJsb2NrTnVtYmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgbiA9IGJsb2NrTnVtYmVyc1tpXTtcblxuICAgICAgLy8gMS4gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIHRoaXMgYmxvY2suXG4gICAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IEJsb2NrLmZpbmRPbmUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIG51bWJlcjogblxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICBhd2FpdCBhZGRCbG9jayhuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlcnJvcihgKGNoYWluLWZpbHRlcikgJHtlLm1lc3NhZ2V9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb25zdGFudGx5IHNjYW5zIHRoZSBsYXRlc3QgYmxvY2tzLlxuICovXG5hc3luYyBmdW5jdGlvbiBzY2FuSGVhZCgpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBzZXF1ZWxpemUuYXV0aGVudGljYXRlKHsgbG9nZ2luZzogZmFsc2UgfSk7XG4gICAgYXdhaXQgQmxvY2suc3luYyh7IGxvZ2dpbmc6IGZhbHNlIH0pO1xuICAgIGF3YWl0IFRyYW5zYWN0aW9uLnN5bmMoeyBsb2dnaW5nOiBmYWxzZSB9KTtcbiAgICBhd2FpdCBMb2cuc3luYyh7IGxvZ2dpbmc6IGZhbHNlIH0pO1xuXG4gICAgY29uc3QgYmxvY2tOdW1iZXJzID0gYXdhaXQgZmV0Y2hNaXNzaW5nQmxvY2tOdW1iZXJzKCk7XG4gICAgbGV0IG9mZnNldCA9IDEwO1xuICAgIGNvbnN0IGhlYWQgPSBibG9ja051bWJlcnMuc2xpY2UoYmxvY2tOdW1iZXJzLmxlbmd0aCAtIG9mZnNldCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG4gPSBoZWFkW2ldO1xuXG4gICAgICAvLyAxLiBDaGVjayBpZiB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBibG9jay5cbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgQmxvY2suZmluZE9uZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgbnVtYmVyOiBuXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgICAgIGF3YWl0IGFkZEJsb2NrKG4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGVycm9yKGAoaGVhZC13b3JrZXIpICR7ZS5tZXNzYWdlfWApO1xuICAgIHRocm93IEVycm9yKGUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0SGVhZFdvcmtlcigpIHtcbiAgcmV0dXJuIHNjYW5IZWFkKClcbiAgICAudGhlbihpbml0SGVhZFdvcmtlcilcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgIGVycm9yKGUubWVzc2FnZSlcbiAgICAgIHJldHVybiBpbml0SGVhZFdvcmtlcigpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2hhaW5Xb3JrZXIoKSB7XG4gIHJldHVybiBzY2FuRW50aXJlQ2hhaW4oKVxuICAgIC50aGVuKGluaXRDaGFpbldvcmtlcilcbiAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgIGVycm9yKGUubWVzc2FnZSlcbiAgICAgIHJldHVybiBpbml0Q2hhaW5Xb3JrZXIoKTtcbiAgICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy93b3JrZXJzL2NoYWluLWZpbHRlci9pbmRleC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5ldFwiXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWJpLWRlY29kZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhYmktZGVjb2RlclwiXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHVtYW4tc3RhbmRhcmQtdG9rZW4tYWJpXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaHVtYW4tc3RhbmRhcmQtdG9rZW4tYWJpXCJcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcGcgZnJvbSAncGcnO1xuaW1wb3J0IFNlcXVlbGl6ZSBmcm9tICdzZXF1ZWxpemUnO1xuXG5wZy5kZWZhdWx0cy5wYXJzZUludDggPSB0cnVlO1xuXG5leHBvcnQgY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZSgncG9zdGdyZXM6Ly9hd3N1c2VyOm10dHNKcEp1N0ZpYTRHemhiV3NmY0tAZXRoZXJldW0tYmxvY2tjaGFpbi5jbWV1b2N2ejBmcGIudXMtd2VzdC0yLnJkcy5hbWF6b25hd3MuY29tOjU0MzIvYmxvY2tjaGFpbicsIHtcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gIGRpYWxlY3Q6ICdwb3N0Z3JlcycsXG4gIGRpYWxlY3RPcHRpb25zOiB7XG4gICAgc3VwcG9ydEJpZ051bWJlcnM6IHRydWVcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBCbG9jayA9IHNlcXVlbGl6ZS5kZWZpbmUoJ2V0aF9ibG9jaycsIHtcbiAgZGlmZmljdWx0eTogU2VxdWVsaXplLkRFQ0lNQUwsXG4gIGV4dHJhRGF0YTogU2VxdWVsaXplLlNUUklORyxcbiAgZ2FzTGltaXQ6IFNlcXVlbGl6ZS5JTlRFR0VSLFxuICBnYXNVc2VkOiBTZXF1ZWxpemUuSU5URUdFUixcbiAgaGFzaDogU2VxdWVsaXplLlNUUklORyxcbiAgbG9nc0Jsb29tOiBTZXF1ZWxpemUuVEVYVCxcbiAgbWluZXI6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIG1peEhhc2g6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIG5vbmNlOiBTZXF1ZWxpemUuU1RSSU5HLFxuICBudW1iZXI6IFNlcXVlbGl6ZS5JTlRFR0VSLFxuICBwYXJlbnRIYXNoOiBTZXF1ZWxpemUuU1RSSU5HLFxuICByZWNlaXB0c1Jvb3Q6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIHNoYTNVbmNsZXM6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIHNpemU6IFNlcXVlbGl6ZS5JTlRFR0VSLFxuICBzdGF0ZVJvb3Q6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIHRpbWVzdGFtcDogU2VxdWVsaXplLklOVEVHRVIsXG4gIHRvdGFsRGlmZmljdWx0eTogU2VxdWVsaXplLkRFQ0lNQUwsXG4gIHRyYW5zYWN0aW9uc1Jvb3Q6IFNlcXVlbGl6ZS5TVFJJTkdcbn0sIHtcbiAgaW5kZXhlczogW1xuICAgIC8vIGJsb2NrIG51bWJlciBpcyB1bmlxdWVcbiAgICB7XG4gICAgICBmaWVsZHM6IFsnbnVtYmVyJ10sXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfVxuICBdXG59KTtcblxuZXhwb3J0IGNvbnN0IFRyYW5zYWN0aW9uID0gc2VxdWVsaXplLmRlZmluZSgnZXRoX3RyYW5zYWN0aW9uJywge1xuICBibG9ja0hhc2g6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIGJsb2NrTnVtYmVyOiBTZXF1ZWxpemUuSU5URUdFUixcbiAgZnJvbTogU2VxdWVsaXplLlNUUklORyxcbiAgZ2FzOiBTZXF1ZWxpemUuSU5URUdFUixcbiAgZ2FzUHJpY2U6IFNlcXVlbGl6ZS5ERUNJTUFMLFxuICBoYXNoOiBTZXF1ZWxpemUuU1RSSU5HLFxuICBpbnB1dDogU2VxdWVsaXplLlRFWFQsXG4gIG5vbmNlOiBTZXF1ZWxpemUuSU5URUdFUixcbiAgdG86IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIHRyYW5zYWN0aW9uSW5kZXg6IFNlcXVlbGl6ZS5JTlRFR0VSLFxuICB2YWx1ZTogU2VxdWVsaXplLkRFQ0lNQUwsXG4gIHY6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIHI6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIHM6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIHRpbWVzdGFtcDogU2VxdWVsaXplLklOVEVHRVIsXG4gIC8vIEJlbG93IGZpZWxkcyBhcmUgYWRkZWQgYnkgcXVlcnlpbmcgdGhlIHRyYW5zYWN0aW9uIHJlY2VpcHRcbiAgY3VtdWxhdGl2ZUdhc1VzZWQ6IFNlcXVlbGl6ZS5ERUNJTUFMLFxuICBnYXNVc2VkOiBTZXF1ZWxpemUuREVDSU1BTCxcbiAgY29udHJhY3RBZGRyZXNzOiBTZXF1ZWxpemUuU1RSSU5HLFxuICAvLyBiZWxvdyBmaWVsZHMgYXJlIG5vdCByZXR1cm5lZCBieSBkZWZhdWx0IGJ5IHRoZSBKU09OIFJQQyBBUEkuXG4gIGlzVG9rZW5UcmFuc2ZlcjogU2VxdWVsaXplLkJPT0xFQU4sXG4gIHRva2VuVHJhbnNmZXJUbzogU2VxdWVsaXplLlNUUklORyxcbiAgdG9rZW5UcmFuc2ZlclZhbHVlOiBTZXF1ZWxpemUuREVDSU1BTFxufSwge1xuICBpbmRleGVzOiBbXG4gICAgLy8gaGFzaCBpcyB1bmlxdWVcbiAgICB7XG4gICAgICBmaWVsZHM6IFsnaGFzaCddLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gSW5kZXggJ2Zyb20nIGZpZWxkXG4gICAge1xuICAgICAgbmFtZTogJ2V0aF90cmFuc2FjdGlvbnNfZnJvbV9pbmRleCcsXG4gICAgICBtZXRob2Q6ICdCVFJFRScsXG4gICAgICBmaWVsZHM6IFsnZnJvbSddXG4gICAgfSxcbiAgICAvLyBJbmRleCAndG8nIGZpZWxkXG4gICAge1xuICAgICAgbmFtZTogJ2V0aF90cmFuc2FjdGlvbnNfdG9faW5kZXgnLFxuICAgICAgbWV0aG9kOiAnQlRSRUUnLFxuICAgICAgZmllbGRzOiBbJ3RvJ11cbiAgICB9LFxuICAgIC8vIEluZGV4ICd0b2tlblRyYW5zZmV0VG8nIGZpZWxkXG4gICAge1xuICAgICAgbmFtZTogJ2V0aF90cmFuc2FjdGlvbnNfdG9rZW5UcmFuc2ZlclRvX2luZGV4JyxcbiAgICAgIG1ldGhvZDogJ0JUUkVFJyxcbiAgICAgIGZpZWxkczogWyd0b2tlblRyYW5zZmVyVG8nXVxuICAgIH1cbiAgXVxufSk7XG5cbmV4cG9ydCBjb25zdCBMb2cgPSBzZXF1ZWxpemUuZGVmaW5lKCdldGhfbG9nJywge1xuICBhZGRyZXNzOiBTZXF1ZWxpemUuU1RSSU5HLFxuICBibG9ja0hhc2g6IFNlcXVlbGl6ZS5TVFJJTkcsXG4gIGJsb2NrTnVtYmVyOiBTZXF1ZWxpemUuSU5URUdFUixcbiAgZGF0YTogU2VxdWVsaXplLlRFWFQsXG4gIGxvZ0luZGV4OiBTZXF1ZWxpemUuSU5URUdFUixcbiAgcmVtb3ZlZDogU2VxdWVsaXplLkJPT0xFQU4sXG4gIHRyYW5zYWN0aW9uSGFzaDogU2VxdWVsaXplLlNUUklORyxcbiAgdHJhbnNhY3Rpb25JbmRleDogU2VxdWVsaXplLklOVEVHRVIsXG4gIGxvZ1RvcGljMDogU2VxdWVsaXplLlRFWFQsXG4gIGxvZ1RvcGljMTogU2VxdWVsaXplLlRFWFQsXG4gIGxvZ1RvcGljMjogU2VxdWVsaXplLlRFWFQsXG4gIGxvZ1RvcGljMzogU2VxdWVsaXplLlRFWFQsXG4gIC8vIHVuaXF1ZSBrZXkgd2hpY2ggaXMgY29uY2F0ZW5hdGlvbiBvZiB0eCBoYXNoICsgbG9nIGluZGV4XG4gIGtleTogU2VxdWVsaXplLlNUUklOR1xufSwge1xuICBpbmRleGVzOiBbXG4gICAge1xuICAgICAgZmllbGRzOiBbJ2tleSddLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdldGhfbG9nc19hZGRyZXNzX2luZGV4JyxcbiAgICAgIG1ldGhvZDogJ0JUUkVFJyxcbiAgICAgIGZpZWxkczogWydhZGRyZXNzJ11cbiAgICB9XG4gIF1cbn0pO1xuXG5UcmFuc2FjdGlvbi5iZWxvbmdzVG8oQmxvY2ssIHsgZm9yZWlnbktleTogJ2Jsb2NrTnVtYmVyJywgdGFyZ2V0S2V5OiAnbnVtYmVyJyB9KTtcbkxvZy5iZWxvbmdzVG8oVHJhbnNhY3Rpb24sIHsgZm9yZWlnbktleTogJ3RyYW5zYWN0aW9uSGFzaCcsIHRhcmdldEtleTogJ2hhc2gnIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9tb2RlbHMvcG9zdGdyZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBnXCJcbi8vIG1vZHVsZSBpZCA9IDEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tICdzZXR0aW5ncyc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmxldCBjb25uZWN0aW9uO1xuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdEdhcmJhZ2UoX2RiKSB7XG4gIGNvbnN0IGRiID0gKF9kYiBhcyBhbnkpO1xuXG4gIGlmIChkYi5tb2RlbHMpIHtcbiAgICBPYmplY3Qua2V5cyhkYi5tb2RlbHMpLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBkYi5tb2RlbHNba2V5XSk7XG4gIH1cblxuICBpZiAoZGIuY29sbGVjdGlvbnMgJiYgZGIuY29sbGVjdGlvbnMpIHtcbiAgICBPYmplY3Qua2V5cyhkYi5jb2xsZWN0aW9ucykuZm9yRWFjaChrZXkgPT4gZGVsZXRlIGRiLmNvbGxlY3Rpb25zW2tleV0pO1xuICB9XG5cbiAgaWYgKGRiLmJhc2UgJiYgZGIuYmFzZS5tb2RlbFNjaGVtYXMgJiYgZGIuYmFzZS5tb2RlbFNjaGVtYXMpIHtcbiAgICBPYmplY3Qua2V5cyhkYi5iYXNlLm1vZGVsU2NoZW1hcykuZm9yRWFjaChcbiAgICAgIGtleSA9PiBkZWxldGUgZGIuYmFzZS5tb2RlbFNjaGVtYXNba2V5XVxuICAgICk7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdE1vbmdvb3NlKCkge1xuICBpZiAoIWNvbm5lY3Rpb24pIHtcbiAgICBjb25uZWN0aW9uID0gbW9uZ29vc2UuY29ubmVjdChzZXR0aW5ncy5NT05HT19VUkksIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XG4gIH1cblxuICByZXR1cm4gY29ubmVjdGlvbjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvd29ya2Vycy91dGlscy50cyJdLCJzb3VyY2VSb290IjoiIn0=