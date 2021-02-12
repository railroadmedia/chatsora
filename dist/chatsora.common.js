module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "0676":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "07ac":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $values = __webpack_require__("6f53").values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var buildURL = __webpack_require__("30b5");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");
var mergeConfig = __webpack_require__("4a7b");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0df6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "11b0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("d28b");

__webpack_require__("a630");

__webpack_require__("e260");

__webpack_require__("d3b7");

__webpack_require__("3ca3");

__webpack_require__("ddb0");

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");
var CHROME_VERSION = __webpack_require__("2d00");
var IS_NODE = __webpack_require__("605d");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "1fb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "2236":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("5a43");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "278c":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("c135");

var iterableToArrayLimit = __webpack_require__("9b42");

var unsupportedIterableToArray = __webpack_require__("6613");

var nonIterableRest = __webpack_require__("c240");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "29d8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");
var IS_NODE = __webpack_require__("605d");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "36c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, process) {/* unused harmony export Allow */
/* unused harmony export AllowAll */
/* unused harmony export AnyResource */
/* unused harmony export AnyRole */
/* unused harmony export BuiltinPermissions */
/* unused harmony export BuiltinRoles */
/* unused harmony export Channel */
/* unused harmony export ChannelState */
/* unused harmony export CheckSignature */
/* unused harmony export ClientState */
/* unused harmony export Deny */
/* unused harmony export DenyAll */
/* unused harmony export DevToken */
/* unused harmony export EVENT_MAP */
/* unused harmony export JWTServerToken */
/* unused harmony export JWTUserToken */
/* unused harmony export MaxPriority */
/* unused harmony export MinPriority */
/* unused harmony export Permission */
/* unused harmony export StableWSConnection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamChat; });
/* unused harmony export TokenManager */
/* unused harmony export UserFromToken */
/* unused harmony export chatCodes */
/* unused harmony export decodeBase64 */
/* unused harmony export encodeBase64 */
/* unused harmony export isOwnUser */
/* unused harmony export isValidEventType */
/* unused harmony export logChatPromiseExecution */
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1fb5");
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(base64_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a559");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7037");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4082");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("448a");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a34a");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("c973");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("970b");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("5bc3");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("9523");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("ff91");
/* harmony import */ var seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(seamless_immutable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("278c");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("e556");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var isomorphic_ws__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("3fe3");
/* harmony import */ var isomorphic_ws__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_ws__WEBPACK_IMPORTED_MODULE_14__);
















function isString(arrayOrString) {
  return typeof arrayOrString === 'string';
}

function isMapStringCallback(arrayOrString, callback) {
  return callback && isString(arrayOrString);
} // source - https://github.com/beatgammit/base64-js/blob/master/test/convert.js#L72


function map(arrayOrString, callback) {
  var res = [];

  if (isString(arrayOrString) && isMapStringCallback(arrayOrString, callback)) {
    for (var k = 0, len = arrayOrString.length; k < len; k++) {
      if (arrayOrString.charAt(k)) {
        var kValue = arrayOrString.charAt(k);
        var mappedValue = callback(kValue, k, arrayOrString);
        res[k] = mappedValue;
      }
    }
  } else if (!isString(arrayOrString) && !isMapStringCallback(arrayOrString, callback)) {
    for (var _k = 0, _len = arrayOrString.length; _k < _len; _k++) {
      if (_k in arrayOrString) {
        var _kValue = arrayOrString[_k];

        var _mappedValue = callback(_kValue, _k, arrayOrString);

        res[_k] = _mappedValue;
      }
    }
  }

  return res;
}

var encodeBase64 = function encodeBase64(data) {
  return Object(base64_js__WEBPACK_IMPORTED_MODULE_0__["fromByteArray"])(new Uint8Array(map(data, function (char) {
    return char.charCodeAt(0);
  })));
}; // base-64 decoder throws exception if encoded string is not padded by '=' to make string length
// in multiples of 4. So gonna use our own method for this purpose to keep backwards compatibility
// https://github.com/beatgammit/base64-js/blob/master/index.js#L26

var decodeBase64 = function decodeBase64(s) {
  var e = {},
      w = String.fromCharCode,
      L = s.length;
  var i,
      b = 0,
      c,
      x,
      l = 0,
      a,
      r = '';
  var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  for (i = 0; i < 64; i++) {
    e[A.charAt(i)] = i;
  }

  for (x = 0; x < L; x++) {
    c = e[s.charAt(x)];
    b = (b << 6) + c;
    l += 6;

    while (l >= 8) {
      ((a = b >>> (l -= 8) & 0xff) || x < L - 2) && (r += w(a));
    }
  }

  return r;
};

var https = null;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * ChannelState - A container class for the channel state.
 */
var ChannelState = /*#__PURE__*/function () {
  /**
   * Flag which indicates if channel state contain latest/recent messages or no.
   * This flag should be managed by UI sdks using a setter - setIsUpToDate.
   * When false, any new message (received by websocket event - message.new) will not
   * be pushed on to message list.
   */
  function ChannelState(channel) {
    var _this = this,
        _channel$state;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, ChannelState);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_channel", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "watcher_count", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "typing", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "read", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "messages", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "pinnedMessages", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "threads", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "mutedUsers", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "watchers", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "members", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "unreadCount", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "membership", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "last_message_at", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "isUpToDate", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "setIsUpToDate", function (isUpToDate) {
      _this.isUpToDate = isUpToDate;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "removeMessageFromArray", function (msgArray, msg) {
      var result = msgArray.filter(function (message) {
        return !(!!message.id && !!msg.id && message.id === msg.id);
      });
      return {
        removed: result.length < msgArray.length,
        result: result
      };
    });

    this._channel = channel;
    this.watcher_count = 0;
    this.typing = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({});
    this.read = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({});
    this.messages = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()([]);
    this.pinnedMessages = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()([]);
    this.threads = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({}); // a list of users to hide messages from

    this.mutedUsers = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()([]);
    this.watchers = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({});
    this.members = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({});
    this.membership = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({});
    this.unreadCount = 0;
    /**
     * Flag which indicates if channel state contain latest/recent messages or no.
     * This flag should be managed by UI sdks using a setter - setIsUpToDate.
     * When false, any new message (received by websocket event - message.new) will not
     * be pushed on to message list.
     */

    this.isUpToDate = true;
    this.last_message_at = (channel === null || channel === void 0 ? void 0 : (_channel$state = channel.state) === null || _channel$state === void 0 ? void 0 : _channel$state.last_message_at) != null ? new Date(channel.state.last_message_at) : null;
  }
  /**
   * addMessageSorted - Add a message to the state
   *
   * @param {MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} newMessage A new message
   * @param {boolean} timestampChanged Whether updating a message with changed created_at value.
   *
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(ChannelState, [{
    key: "addMessageSorted",
    value: function addMessageSorted(newMessage) {
      var timestampChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.addMessagesSorted([newMessage], timestampChanged);
    }
    /**
     * messageToImmutable - Takes the message object. Parses the dates, sets __html
     * and sets the status to received if missing. Returns an immutable message object
     *
     * @param {MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} message an Immutable message object
     *
     */

  }, {
    key: "messageToImmutable",
    value: function messageToImmutable(message) {
      return seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()(_objectSpread(_objectSpread({}, message), {}, {
        __html: message.html,
        // parse the date..
        pinned_at: message.pinned_at ? new Date(message.pinned_at) : null,
        created_at: message.created_at ? new Date(message.created_at) : new Date(),
        updated_at: message.updated_at ? new Date(message.updated_at) : new Date(),
        status: message.status || 'received'
      }));
    }
    /**
     * addMessagesSorted - Add the list of messages to state and resorts the messages
     *
     * @param {Array<MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} newMessages A list of messages
     * @param {boolean} timestampChanged Whether updating messages with changed created_at value.
     * @param {boolean} initializing Whether channel is being initialized.
     *
     */

  }, {
    key: "addMessagesSorted",
    value: function addMessagesSorted(newMessages) {
      var timestampChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var initializing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      for (var i = 0; i < newMessages.length; i += 1) {
        var message = this.messageToImmutable(newMessages[i]);

        if (initializing && message.id && this.threads[message.id]) {
          // If we are initializing the state of channel (e.g., in case of connection recovery),
          // then in that case we remove thread related to this message from threads object.
          // This way we can ensure that we don't have any stale data in thread object
          // and consumer can refetch the replies.
          this.threads = this.threads.without(message.id);
        }

        if (!this.last_message_at) {
          this.last_message_at = new Date(message.created_at.getTime());
        }

        if (message.created_at.getTime() > this.last_message_at.getTime()) {
          this.last_message_at = new Date(message.created_at.getTime());
        } // update or append the messages...


        var parentID = message.parent_id; // add to the main message list

        if (!parentID || message.show_in_channel) {
          this.messages = this._addToMessageList(this.messages, message, timestampChanged);
        } // add to the thread if applicable..


        if (parentID) {
          var thread = this.threads[parentID] || seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()([]);

          var threadMessages = this._addToMessageList(thread, message, timestampChanged);

          this.threads = this.threads.set(parentID, threadMessages);
        }
      }
    }
    /**
     * addPinnedMessages - adds messages in pinnedMessages property
     *
     * @param {Array<MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} pinnedMessages A list of pinned messages
     *
     */

  }, {
    key: "addPinnedMessages",
    value: function addPinnedMessages(pinnedMessages) {
      for (var i = 0; i < pinnedMessages.length; i += 1) {
        this.addPinnedMessage(pinnedMessages[i]);
      }
    }
    /**
     * addPinnedMessage - adds message in pinnedMessages
     *
     * @param {MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} pinnedMessage message to update
     *
     */

  }, {
    key: "addPinnedMessage",
    value: function addPinnedMessage(pinnedMessage) {
      this.pinnedMessages = this._addToMessageList(this.pinnedMessages, this.messageToImmutable(pinnedMessage), false, 'pinned_at');
    }
    /**
     * removePinnedMessage - removes pinned message from pinnedMessages
     *
     * @param {MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} message message to remove
     *
     */

  }, {
    key: "removePinnedMessage",
    value: function removePinnedMessage(message) {
      var _this$removeMessageFr = this.removeMessageFromArray(this.pinnedMessages, message),
          result = _this$removeMessageFr.result;

      this.pinnedMessages = result;
    }
  }, {
    key: "addReaction",
    value: function addReaction(reaction, message, enforce_unique) {
      var messages = this.messages;
      if (!message) return;
      var parent_id = message.parent_id,
          show_in_channel = message.show_in_channel;

      if (parent_id && this.threads[parent_id]) {
        var thread = this.threads[parent_id];

        for (var i = 0; i < thread.length; i++) {
          var msg = thread[i];

          var messageWithReaction = this._addReactionToMessage(msg, reaction, enforce_unique);

          if (!messageWithReaction) {
            continue;
          } // @ts-expect-error - ImmutableArray.set exists in the documentation but not in the DefinitelyTyped types


          this.threads = this.threads.set(parent_id, thread.set(i, messageWithReaction));
          break;
        }
      }

      if (!show_in_channel && !parent_id || show_in_channel) {
        for (var _i = 0; _i < messages.length; _i++) {
          var _msg = messages[_i];

          var _messageWithReaction = this._addReactionToMessage(_msg, reaction, enforce_unique);

          if (!_messageWithReaction) {
            continue;
          } // @ts-expect-error - ImmutableArray.set exists in the documentation but not in the DefinitelyTyped types


          this.messages = messages.set(_i, _messageWithReaction);
          break;
        }
      }
    }
  }, {
    key: "_addReactionToMessage",
    value: function _addReactionToMessage(message, reaction, enforce_unique) {
      var _reaction$user;

      var idMatch = !!message.id && message.id === reaction.message_id;

      if (!idMatch) {
        return false;
      }

      var newMessage = this._removeReactionFromMessage(message, reaction, enforce_unique);

      if (this._channel.getClient().userID === ((_reaction$user = reaction.user) === null || _reaction$user === void 0 ? void 0 : _reaction$user.id)) {
        newMessage = newMessage.update('own_reactions', function (old) {
          return old.concat([reaction]);
        });
      }

      newMessage = newMessage.update('latest_reactions', function (old) {
        return old.concat([reaction]);
      });
      newMessage = newMessage.updateIn(['reaction_counts', reaction.type], function (old) {
        return old ? old + 1 : 1;
      });
      return newMessage;
    }
  }, {
    key: "_removeReactionFromMessage",
    value: function _removeReactionFromMessage(message, reaction, enforce_unique) {
      var filterReaction = function filterReaction(old) {
        return old.filter(function (item) {
          var _item$user, _reaction$user2, _item$user2, _reaction$user3;

          return enforce_unique ? ((_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.id) !== ((_reaction$user2 = reaction.user) === null || _reaction$user2 === void 0 ? void 0 : _reaction$user2.id) : item.type !== reaction.type || ((_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.id) !== ((_reaction$user3 = reaction.user) === null || _reaction$user3 === void 0 ? void 0 : _reaction$user3.id);
        });
      };

      var newMessage = message.update('own_reactions', filterReaction);
      newMessage = newMessage.update('latest_reactions', filterReaction);

      if (enforce_unique) {
        var _message$own_reaction;

        var oldReaction = (_message$own_reaction = message.own_reactions) === null || _message$own_reaction === void 0 ? void 0 : _message$own_reaction.find(function (_ref) {
          var type = _ref.type;
          return type === reaction.type;
        });

        if (oldReaction) {
          newMessage = newMessage.updateIn(['reaction_counts', oldReaction.type], function (old) {
            return old ? old - 1 : 0;
          });
        }
      }

      return newMessage;
    }
  }, {
    key: "removeReaction",
    value: function removeReaction(reaction, message) {
      var messages = this.messages;
      if (!message) return;
      var parent_id = message.parent_id,
          show_in_channel = message.show_in_channel;

      if (parent_id && this.threads[parent_id]) {
        var thread = this.threads[parent_id];

        for (var i = 0; i < thread.length; i++) {
          var msg = thread[i];
          var idMatch = !!msg.id && msg.id === reaction.message_id;

          if (!idMatch) {
            continue;
          }

          var messageWithReaction = this._removeReactionFromMessage(msg, reaction);

          messageWithReaction = messageWithReaction.updateIn(['reaction_counts', reaction.type], function (old) {
            return old ? old - 1 : 0;
          }); // @ts-expect-error - ImmutableArray.set exists in the documentation but not in the DefinitelyTyped types

          this.threads = this.threads.set(parent_id, thread.set(i, messageWithReaction));
          break;
        }
      }

      if (!show_in_channel && !parent_id || show_in_channel) {
        for (var _i2 = 0; _i2 < messages.length; _i2++) {
          var _msg2 = messages[_i2];

          var _idMatch = !!_msg2.id && _msg2.id === reaction.message_id;

          if (!_idMatch) {
            continue;
          }

          var _messageWithReaction2 = this._removeReactionFromMessage(_msg2, reaction);

          _messageWithReaction2 = _messageWithReaction2.updateIn(['reaction_counts', reaction.type], function (old) {
            return old ? old - 1 : 0;
          }); // @ts-expect-error - ImmutableArray.set exists in the documentation but not in the DefinitelyTyped types

          this.messages = messages.set(_i2, _messageWithReaction2);
          break;
        }
      }
    }
    /**
     * Setter for isUpToDate.
     *
     * @param isUpToDate  Flag which indicates if channel state contain latest/recent messages or no.
     *                    This flag should be managed by UI sdks using a setter - setIsUpToDate.
     *                    When false, any new message (received by websocket event - message.new) will not
     *                    be pushed on to message list.
     */

  }, {
    key: "_addToMessageList",

    /**
     * _addToMessageList - Adds a message to a list of messages, tries to update first, appends if message isn't found
     *
     * @param {Immutable.ImmutableArray<ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['messageToImmutable']>>} messages A list of messages
     * @param message
     * @param {boolean} timestampChanged Whether updating a message with changed created_at value.
     * @param {string} sortBy field name to use to sort the messages by
     */
    value: function _addToMessageList(messages, message) {
      var timestampChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var sortBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'created_at';
      var messageArr = messages; // if created_at has changed, message should be filtered and re-inserted in correct order
      // slow op but usually this only happens for a message inserted to state before actual response with correct timestamp

      if (timestampChanged) {
        messageArr = messageArr.filter(function (msg) {
          return !(msg.id && message.id === msg.id);
        });
      } // for empty list just concat and return


      if (messageArr.length === 0) return messageArr.concat(message);
      var messageTime = message[sortBy].getTime(); // if message is newer than last item in the list concat and return

      if (messageArr[messageArr.length - 1][sortBy].getTime() < messageTime) return messageArr.concat(message); // find the closest index to push the new message

      var left = 0;
      var middle = 0;
      var right = messageArr.length - 1;

      while (left <= right) {
        middle = Math.floor((right + left) / 2);
        if (messageArr[middle][sortBy].getTime() <= messageTime) left = middle + 1;else right = middle - 1;
      } // message already exists and not filtered due to timestampChanged, update and return


      if (!timestampChanged && message.id) {
        if (messageArr[left] && message.id === messageArr[left].id) // @ts-expect-error - ImmutableArray.set exists in the documentation but not in the DefinitelyTyped types
          return messageArr.set(left, message);
        if (messageArr[left - 1] && message.id === messageArr[left - 1].id) // @ts-expect-error - ImmutableArray.set exists in the documentation but not in the DefinitelyTyped types
          return messageArr.set(left - 1, message);
      }

      var mutable = messageArr.asMutable();
      mutable.splice(left, 0, message);
      return seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()(mutable);
    }
    /**
     * removeMessage - Description
     *
     * @param {{ id: string; parent_id?: string }} messageToRemove Object of the message to remove. Needs to have at id specified.
     *
     * @return {boolean} Returns if the message was removed
     */

  }, {
    key: "removeMessage",
    value: function removeMessage(messageToRemove) {
      var isRemoved = false;

      if (messageToRemove.parent_id && this.threads[messageToRemove.parent_id]) {
        var _this$removeMessageFr2 = this.removeMessageFromArray(this.threads[messageToRemove.parent_id], messageToRemove),
            removed = _this$removeMessageFr2.removed,
            threadMessages = _this$removeMessageFr2.result; // @ts-expect-error - ImmutableArray.set exists in the documentation but not in the DefinitelyTyped types


        this.threads = this.threads[messageToRemove.parent_id].set(messageToRemove.parent_id, threadMessages);
        isRemoved = removed;
      } else {
        var _this$removeMessageFr3 = this.removeMessageFromArray(this.messages, messageToRemove),
            _removed = _this$removeMessageFr3.removed,
            messages = _this$removeMessageFr3.result;

        this.messages = messages;
        isRemoved = _removed;
      }

      return isRemoved;
    }
  }, {
    key: "filterErrorMessages",

    /**
     * filterErrorMessages - Removes error messages from the channel state.
     *
     */
    value: function filterErrorMessages() {
      var filteredMessages = this.messages.filter(function (message) {
        return message.type !== 'error';
      });
      this.messages = filteredMessages;
    }
    /**
     * clean - Remove stale data such as users that stayed in typing state for more than 5 seconds
     */

  }, {
    key: "clean",
    value: function clean() {
      var now = new Date(); // prevent old users from showing up as typing

      for (var _i3 = 0, _Object$entries = Object.entries(this.typing); _i3 < _Object$entries.length; _i3++) {
        var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default()(_Object$entries[_i3], 2),
            userID = _Object$entries$_i[0],
            lastEvent = _Object$entries$_i[1];

        var since = typeof lastEvent.received_at === 'string' && now.getTime() - new Date(lastEvent.received_at).getTime();

        if (since > 7000) {
          this.typing = this.typing.without(userID);

          this._channel.getClient().dispatchEvent({
            type: 'typing.stop',
            user: {
              id: userID
            },
            cid: this._channel.cid
          });
        }
      }
    }
  }, {
    key: "clearMessages",
    value: function clearMessages() {
      this.messages = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()([]);
    }
  }]);

  return ChannelState;
}();

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var EVENT_MAP = {
  'channel.created': true,
  'channel.deleted': true,
  'channel.hidden': true,
  'channel.muted': true,
  'channel.truncated': true,
  'channel.unmuted': true,
  'channel.updated': true,
  'channel.visible': true,
  'health.check': true,
  'member.added': true,
  'member.removed': true,
  'member.updated': true,
  'message.deleted': true,
  'message.new': true,
  'message.read': true,
  'message.updated': true,
  'notification.added_to_channel': true,
  'notification.channel_deleted': true,
  'notification.channel_mutes_updated': true,
  'notification.channel_truncated': true,
  'notification.invite_accepted': true,
  'notification.invite_rejected': true,
  'notification.invited': true,
  'notification.mark_read': true,
  'notification.message_new': true,
  'notification.mutes_updated': true,
  'notification.removed_from_channel': true,
  'reaction.deleted': true,
  'reaction.new': true,
  'reaction.updated': true,
  'typing.start': true,
  'typing.stop': true,
  'user.banned': true,
  'user.deleted': true,
  'user.presence.changed': true,
  'user.unbanned': true,
  'user.updated': true,
  'user.watching.start': true,
  'user.watching.stop': true,
  // local events
  'connection.changed': true,
  'connection.recovered': true
};

var IS_VALID_EVENT_MAP_TYPE = _objectSpread$1(_objectSpread$1({}, EVENT_MAP), {}, {
  all: true
});

var isValidEventType = function isValidEventType(eventType) {
  return IS_VALID_EVENT_MAP_TYPE[eventType] || false;
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * logChatPromiseExecution - utility function for logging the execution of a promise..
 *  use this when you want to run the promise and handle errors by logging a warning
 *
 * @param {Promise<T>} promise The promise you want to run and log
 * @param {string} name    A descriptive name of what the promise does for log output
 *
 */
function logChatPromiseExecution(promise, name) {
  promise.then().catch(function (error) {
    console.warn("failed to do ".concat(name, ", ran into error: "), error);
  });
}
var sleep = function sleep(m) {
  return new Promise(function (r) {
    return setTimeout(r, m);
  });
};
function isFunction(value) {
  return value && (Object.prototype.toString.call(value) === '[object Function]' || 'function' === typeof value || value instanceof Function);
}
var chatCodes = {
  TOKEN_EXPIRED: 40,
  WS_CLOSED_SUCCESS: 1000
};

function isReadableStream(obj) {
  return obj !== null && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(obj) === 'object' && (obj.readable || typeof obj._read === 'function');
}

function isBuffer(obj) {
  return obj != null && obj.constructor != null && // @ts-expect-error
  typeof obj.constructor.isBuffer === 'function' && // @ts-expect-error
  obj.constructor.isBuffer(obj);
}

function isFileWebAPI(uri) {
  return typeof window !== 'undefined' && 'File' in window && uri instanceof File;
}

function isOwnUser(user) {
  return (user === null || user === void 0 ? void 0 : user.total_unread_count) !== undefined;
}
function addFileToFormData(uri, name, contentType) {
  var data = new form_data__WEBPACK_IMPORTED_MODULE_13___default.a();

  if (isReadableStream(uri) || isBuffer(uri) || isFileWebAPI(uri)) {
    if (name) data.append('file', uri, name);else data.append('file', uri);
  } else {
    data.append('file', {
      uri: uri,
      name: name || uri.split('/').reverse()[0],
      contentType: contentType || undefined,
      type: contentType || undefined
    });
  }

  return data;
}
function normalizeQuerySort(sort) {
  var sortFields = [];
  var sortArr = Array.isArray(sort) ? sort : [sort];

  var _iterator = _createForOfIteratorHelper(sortArr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var entries = Object.entries(item);

      if (entries.length > 1) {
        console.warn("client._buildSort() - multiple fields in a single sort object detected. Object's field order is not guaranteed");
      }

      for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
        var _entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default()(_entries[_i], 2),
            field = _entries$_i[0],
            direction = _entries$_i[1];

        sortFields.push({
          field: field,
          direction: direction
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return sortFields;
}
/** adopted from https://github.com/ai/nanoid/blob/master/non-secure/index.js */

var alphabet = 'ModuleSymbhasOwnPr0123456789ABCDEFGHNRVfgctiUvzKqYTJkLxpZXIjQW';
function randomId() {
  var id = '';

  for (var i = 0; i < 21; i++) {
    id += alphabet[Math.random() * 64 | 0];
  }

  return id;
}

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Channel - The Channel class manages it's own state.
 */
var Channel = /*#__PURE__*/function () {
  /**
   * constructor - Create a channel
   *
   * @param {StreamChat<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} client the chat client
   * @param {string} type  the type of channel
   * @param {string} [id]  the id of the chat
   * @param {ChannelData<ChannelType>} data any additional custom params
   *
   * @return {Channel<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} Returns a new uninitialized channel
   */
  function Channel(client, type, id, data) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Channel);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_client", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "type", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "id", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "data", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_data", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "cid", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "listeners", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "state", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "initialized", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "lastKeyStroke", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "lastTypingEvent", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "isTyping", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "disconnected", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "create", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
      var options;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = {
                watch: false,
                state: false,
                presence: false
              };
              _context.next = 3;
              return _this.query(options);

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_callChannelListeners", function (event) {
      var channel = _this; // gather and call the listeners

      var listeners = [];

      if (channel.listeners.all) {
        listeners.push.apply(listeners, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4___default()(channel.listeners.all));
      }

      if (channel.listeners[event.type]) {
        listeners.push.apply(listeners, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4___default()(channel.listeners[event.type]));
      } // call the event and send it to the listeners


      for (var _i = 0, _listeners = listeners; _i < _listeners.length; _i++) {
        var listener = _listeners[_i];

        if (typeof listener !== 'string') {
          listener(event);
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_channelURL", function () {
      if (!_this.id) {
        throw new Error('channel id is not defined');
      }

      return "".concat(_this.getClient().baseURL, "/channels/").concat(_this.type, "/").concat(_this.id);
    });

    var validTypeRe = /^[\w_-]+$/;
    var validIDRe = /^[\w!_-]+$/;

    if (!validTypeRe.test(type)) {
      throw new Error("Invalid chat type ".concat(type, ", letters, numbers and \"_-\" are allowed"));
    }

    if (typeof id === 'string' && !validIDRe.test(id)) {
      throw new Error("Invalid chat id ".concat(id, ", letters, numbers and \"!-_\" are allowed"));
    }

    this._client = client;
    this.type = type;
    this.id = id; // used by the frontend, gets updated:

    this.data = data; // this._data is used for the requests...

    this._data = _objectSpread$2({}, data);
    this.cid = "".concat(type, ":").concat(id);
    this.listeners = {}; // perhaps the state variable should be private

    this.state = new ChannelState(this);
    this.initialized = false;
    this.lastTypingEvent = null;
    this.isTyping = false;
    this.disconnected = false;
  }
  /**
   * getClient - Get the chat client for this channel. If client.disconnect() was called, this function will error
   *
   * @return {StreamChat<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>}
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Channel, [{
    key: "getClient",
    value: function getClient() {
      if (this.disconnected === true) {
        throw Error("You can't use a channel after client.disconnect() was called");
      }

      return this._client;
    }
    /**
     * getConfig - Get the configs for this channel type
     *
     * @return {Record<string, unknown>}
     */

  }, {
    key: "getConfig",
    value: function getConfig() {
      var client = this.getClient();
      return client.configs[this.type];
    }
    /**
     * sendMessage - Send a message to this channel
     *
     * @param {Message<AttachmentType, MessageType, UserType>} message The Message object
     *
     * @return {Promise<SendMessageAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The Server Response
     */

  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(message) {
        var sendMessageResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getClient().post(this._channelURL() + '/message', {
                  message: message
                });

              case 2:
                sendMessageResponse = _context2.sent;
                // Reset unreadCount to 0.
                this.state.unreadCount = 0;
                return _context2.abrupt("return", sendMessageResponse);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sendMessage(_x) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "sendFile",
    value: function sendFile(uri, name, contentType, user) {
      return this.getClient().sendFile("".concat(this._channelURL(), "/file"), uri, name, contentType, user);
    }
  }, {
    key: "sendImage",
    value: function sendImage(uri, name, contentType, user) {
      return this.getClient().sendFile("".concat(this._channelURL(), "/image"), uri, name, contentType, user);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(url) {
      return this.getClient().delete("".concat(this._channelURL(), "/file"), {
        url: url
      });
    }
  }, {
    key: "deleteImage",
    value: function deleteImage(url) {
      return this.getClient().delete("".concat(this._channelURL(), "/image"), {
        url: url
      });
    }
    /**
     * sendEvent - Send an event on this channel
     *
     * @param {Event<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} event for example {type: 'message.read'}
     *
     * @return {Promise<EventAPIResponse<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>>} The Server Response
     */

  }, {
    key: "sendEvent",
    value: function () {
      var _sendEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this._checkInitialized();

                _context3.next = 3;
                return this.getClient().post(this._channelURL() + '/event', {
                  event: event
                });

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sendEvent(_x2) {
        return _sendEvent.apply(this, arguments);
      }

      return sendEvent;
    }()
    /**
     * search - Query messages
     *
     * @param {MessageFilters<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType> | string}  query search query or object MongoDB style filters
     * @param {{client_id?: string; connection_id?: string; limit?: number; offset?: number; query?: string; message_filter_conditions?: MessageFilters<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>}} options Option object, {user_id: 'tommaso'}
     *
     * @return {Promise<SearchAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} search messages response
     */

  }, {
    key: "search",
    value: function () {
      var _search = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4(query) {
        var options,
            payload,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                // Return a list of channels
                payload = _objectSpread$2({
                  filter_conditions: {
                    cid: this.cid
                  }
                }, options);

                if (!(typeof query === 'string')) {
                  _context4.next = 6;
                  break;
                }

                payload.query = query;
                _context4.next = 11;
                break;

              case 6:
                if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(query) === 'object')) {
                  _context4.next = 10;
                  break;
                }

                payload.message_filter_conditions = query;
                _context4.next = 11;
                break;

              case 10:
                throw Error("Invalid type ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(query), " for query parameter"));

              case 11:
                _context4.next = 13;
                return this.getClient().wsPromise;

              case 13:
                _context4.next = 15;
                return this.getClient().get(this.getClient().baseURL + '/search', {
                  payload: payload
                });

              case 15:
                return _context4.abrupt("return", _context4.sent);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function search(_x3) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
    /**
     * queryMembers - Query Members
     *
     * @param {UserFilters<UserType>}  filterConditions object MongoDB style filters
     * @param {UserSort<UserType>} [sort] Sort options, for instance [{created_at: -1}].
     * When using multiple fields, make sure you use array of objects to guarantee field order, for instance [{last_active: -1}, {created_at: 1}]
     * @param {{ limit?: number; offset?: number }} [options] Option object, {limit: 10, offset:10}
     *
     * @return {Promise<ChannelMemberAPIResponse<UserType>>} Query Members response
     */

  }, {
    key: "queryMembers",
    value: function () {
      var _queryMembers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5(filterConditions) {
        var _this$data;

        var sort,
            options,
            id,
            type,
            members,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                sort = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : [];
                options = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
                type = this.type;

                if (this.id) {
                  id = this.id;
                } else if ((_this$data = this.data) !== null && _this$data !== void 0 && _this$data.members && Array.isArray(this.data.members)) {
                  members = this.data.members;
                } // Return a list of members


                _context5.next = 6;
                return this.getClient().get(this.getClient().baseURL + '/members', {
                  payload: _objectSpread$2({
                    type: type,
                    id: id,
                    members: members,
                    sort: normalizeQuerySort(sort),
                    filter_conditions: filterConditions
                  }, options)
                });

              case 6:
                return _context5.abrupt("return", _context5.sent);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function queryMembers(_x4) {
        return _queryMembers.apply(this, arguments);
      }

      return queryMembers;
    }()
    /**
     * sendReaction - Send a reaction about a message
     *
     * @param {string} messageID the message id
     * @param {Reaction<ReactionType, UserType>} reaction the reaction object for instance {type: 'love'}
     * @param {string} [user_id] the id of the user (used only for server side request) default null
     * @param {boolean} [enforce_unique] set true to overwrite existing reactions if any
     *
     * @return {Promise<ReactionAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The Server Response
     */

  }, {
    key: "sendReaction",
    value: function () {
      var _sendReaction = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6(messageID, reaction, user_id, enforce_unique) {
        var body;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (messageID) {
                  _context6.next = 2;
                  break;
                }

                throw Error("Message id is missing");

              case 2:
                if (!(!reaction || Object.keys(reaction).length === 0)) {
                  _context6.next = 4;
                  break;
                }

                throw Error("Reaction object is missing");

              case 4:
                body = {
                  reaction: reaction,
                  enforce_unique: enforce_unique
                };

                if (user_id != null) {
                  body.reaction = _objectSpread$2(_objectSpread$2({}, reaction), {}, {
                    user: {
                      id: user_id
                    }
                  });
                }

                _context6.next = 8;
                return this.getClient().post(this.getClient().baseURL + "/messages/".concat(messageID, "/reaction"), body);

              case 8:
                return _context6.abrupt("return", _context6.sent);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function sendReaction(_x5, _x6, _x7, _x8) {
        return _sendReaction.apply(this, arguments);
      }

      return sendReaction;
    }()
    /**
     * deleteReaction - Delete a reaction by user and type
     *
     * @param {string} messageID the id of the message from which te remove the reaction
     * @param {string} reactionType the type of reaction that should be removed
     * @param {string} [user_id] the id of the user (used only for server side request) default null
     *
     * @return {Promise<ReactionAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The Server Response
     */

  }, {
    key: "deleteReaction",
    value: function deleteReaction(messageID, reactionType, user_id) {
      this._checkInitialized();

      if (!reactionType || !messageID) {
        throw Error('Deleting a reaction requires specifying both the message and reaction type');
      }

      var url = this.getClient().baseURL + "/messages/".concat(messageID, "/reaction/").concat(reactionType); //provided when server side request

      if (user_id) {
        return this.getClient().delete(url, {
          user_id: user_id
        });
      }

      return this.getClient().delete(url, {});
    }
    /**
     * update - Edit the channel's custom properties
     *
     * @param {ChannelData<ChannelType>} channelData The object to update the custom properties of this channel with
     * @param {Message<AttachmentType, MessageType, UserType>} [updateMessage] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee7() {
        var channelData,
            updateMessage,
            reserved,
            data,
            _args7 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                channelData = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
                updateMessage = _args7.length > 1 ? _args7[1] : undefined;
                // Strip out reserved names that will result in API errors.
                reserved = ['config', 'cid', 'created_by', 'id', 'member_count', 'type', 'created_at', 'updated_at', 'last_message_at'];
                reserved.forEach(function (key) {
                  delete channelData[key];
                });
                _context7.next = 6;
                return this.getClient().post(this._channelURL(), {
                  message: updateMessage,
                  data: channelData
                });

              case 6:
                data = _context7.sent;
                this.data = data.channel;
                return _context7.abrupt("return", data);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
    /**
     * updatePartial - partial update channel properties
     *
     * @param {PartialUpdateChannel<ChannelType>} partial update request
     *
     * @return {Promise<PartialUpdateChannelAPIResponse<ChannelType,CommandType, UserType>>}
     */

  }, {
    key: "updatePartial",
    value: function () {
      var _updatePartial = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee8(update) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getClient().patch(this._channelURL(), update);

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function updatePartial(_x9) {
        return _updatePartial.apply(this, arguments);
      }

      return updatePartial;
    }()
    /**
     * enableSlowMode - enable slow mode
     *
     * @param {number} coolDownInterval the cooldown interval in seconds
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "enableSlowMode",
    value: function () {
      var _enableSlowMode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee9(coolDownInterval) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getClient().post(this._channelURL(), {
                  cooldown: coolDownInterval
                });

              case 2:
                data = _context9.sent;
                this.data = data.channel;
                return _context9.abrupt("return", data);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function enableSlowMode(_x10) {
        return _enableSlowMode.apply(this, arguments);
      }

      return enableSlowMode;
    }()
    /**
     * disableSlowMode - disable slow mode
     *
     * @return {Promise<UpdateChannelAPIResponse<ChannelType, AttachmentType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "disableSlowMode",
    value: function () {
      var _disableSlowMode = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee10() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getClient().post(this._channelURL(), {
                  cooldown: 0
                });

              case 2:
                data = _context10.sent;
                this.data = data.channel;
                return _context10.abrupt("return", data);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function disableSlowMode() {
        return _disableSlowMode.apply(this, arguments);
      }

      return disableSlowMode;
    }()
    /**
     * delete - Delete the channel. Messages are permanently removed.
     *
     * @return {Promise<DeleteChannelAPIResponse<ChannelType, CommandType, UserType>>} The server response
     */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getClient().delete(this._channelURL(), {});

              case 2:
                return _context11.abrupt("return", _context11.sent);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /**
     * truncate - Removes all messages from the channel
     *
     * @return {Promise<TruncateChannelAPIResponse<ChannelType, CommandType, UserType>>} The server response
     */

  }, {
    key: "truncate",
    value: function () {
      var _truncate = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee12() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getClient().post(this._channelURL() + '/truncate', {});

              case 2:
                return _context12.abrupt("return", _context12.sent);

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function truncate() {
        return _truncate.apply(this, arguments);
      }

      return truncate;
    }()
    /**
     * acceptInvite - accept invitation to the channel
     *
     * @param {InviteOptions<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} [options] The object to update the custom properties of this channel with
     *
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "acceptInvite",
    value: function () {
      var _acceptInvite = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee13() {
        var options,
            data,
            _args13 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                options = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {};
                _context13.next = 3;
                return this.getClient().post(this._channelURL(), _objectSpread$2({
                  accept_invite: true
                }, options));

              case 3:
                data = _context13.sent;
                this.data = data.channel;
                return _context13.abrupt("return", data);

              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function acceptInvite() {
        return _acceptInvite.apply(this, arguments);
      }

      return acceptInvite;
    }()
    /**
     * rejectInvite - reject invitation to the channel
     *
     * @param {InviteOptions<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} [options] The object to update the custom properties of this channel with
     *
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "rejectInvite",
    value: function () {
      var _rejectInvite = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee14() {
        var options,
            data,
            _args14 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                options = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
                _context14.next = 3;
                return this.getClient().post(this._channelURL(), _objectSpread$2({
                  reject_invite: true
                }, options));

              case 3:
                data = _context14.sent;
                this.data = data.channel;
                return _context14.abrupt("return", data);

              case 6:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function rejectInvite() {
        return _rejectInvite.apply(this, arguments);
      }

      return rejectInvite;
    }()
    /**
     * addMembers - add members to the channel
     *
     * @param {string[]} members An array of member identifiers
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "addMembers",
    value: function () {
      var _addMembers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee15(members, message) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.getClient().post(this._channelURL(), {
                  add_members: members,
                  message: message
                });

              case 2:
                data = _context15.sent;
                this.data = data.channel;
                return _context15.abrupt("return", data);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function addMembers(_x11, _x12) {
        return _addMembers.apply(this, arguments);
      }

      return addMembers;
    }()
    /**
     * addModerators - add moderators to the channel
     *
     * @param {string[]} members An array of member identifiers
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "addModerators",
    value: function () {
      var _addModerators = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee16(members, message) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.getClient().post(this._channelURL(), {
                  add_moderators: members,
                  message: message
                });

              case 2:
                data = _context16.sent;
                this.data = data.channel;
                return _context16.abrupt("return", data);

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function addModerators(_x13, _x14) {
        return _addModerators.apply(this, arguments);
      }

      return addModerators;
    }()
    /**
     * inviteMembers - invite members to the channel
     *
     * @param {string[]} members An array of member identifiers
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "inviteMembers",
    value: function () {
      var _inviteMembers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee17(members, message) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.getClient().post(this._channelURL(), {
                  invites: members,
                  message: message
                });

              case 2:
                data = _context17.sent;
                this.data = data.channel;
                return _context17.abrupt("return", data);

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function inviteMembers(_x15, _x16) {
        return _inviteMembers.apply(this, arguments);
      }

      return inviteMembers;
    }()
    /**
     * removeMembers - remove members from channel
     *
     * @param {string[]} members An array of member identifiers
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "removeMembers",
    value: function () {
      var _removeMembers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee18(members, message) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.getClient().post(this._channelURL(), {
                  remove_members: members,
                  message: message
                });

              case 2:
                data = _context18.sent;
                this.data = data.channel;
                return _context18.abrupt("return", data);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function removeMembers(_x17, _x18) {
        return _removeMembers.apply(this, arguments);
      }

      return removeMembers;
    }()
    /**
     * demoteModerators - remove moderator role from channel members
     *
     * @param {string[]} members An array of member identifiers
     * @param {Message<AttachmentType, MessageType, UserType>} [message] Optional message object for channel members notification
     * @return {Promise<UpdateChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "demoteModerators",
    value: function () {
      var _demoteModerators = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee19(members, message) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.getClient().post(this._channelURL(), {
                  demote_moderators: members,
                  message: message
                });

              case 2:
                data = _context19.sent;
                this.data = data.channel;
                return _context19.abrupt("return", data);

              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function demoteModerators(_x19, _x20) {
        return _demoteModerators.apply(this, arguments);
      }

      return demoteModerators;
    }()
    /**
     * mute - mutes the current channel
     * @param {{ user_id?: string, expiration?: string }} opts expiration in minutes or user_id
     * @return {Promise<MuteChannelAPIResponse<ChannelType, CommandType, UserType>>} The server response
     *
     * example with expiration:
     * await channel.mute({expiration: moment.duration(2, 'weeks')});
     *
     * example server side:
     * await channel.mute({user_id: userId});
     *
     */

  }, {
    key: "mute",
    value: function () {
      var _mute = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee20() {
        var opts,
            _args20 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                opts = _args20.length > 0 && _args20[0] !== undefined ? _args20[0] : {};
                _context20.next = 3;
                return this.getClient().post(this.getClient().baseURL + '/moderation/mute/channel', _objectSpread$2({
                  channel_cid: this.cid
                }, opts));

              case 3:
                return _context20.abrupt("return", _context20.sent);

              case 4:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function mute() {
        return _mute.apply(this, arguments);
      }

      return mute;
    }()
    /**
     * unmute - mutes the current channel
     * @param {{ user_id?: string}} opts user_id
     * @return {Promise<APIResponse>} The server response
     *
     * example server side:
     * await channel.unmute({user_id: userId});
     */

  }, {
    key: "unmute",
    value: function () {
      var _unmute = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee21() {
        var opts,
            _args21 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                opts = _args21.length > 0 && _args21[0] !== undefined ? _args21[0] : {};
                _context21.next = 3;
                return this.getClient().post(this.getClient().baseURL + '/moderation/unmute/channel', _objectSpread$2({
                  channel_cid: this.cid
                }, opts));

              case 3:
                return _context21.abrupt("return", _context21.sent);

              case 4:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function unmute() {
        return _unmute.apply(this, arguments);
      }

      return unmute;
    }()
    /**
     * muteStatus - returns the mute status for the current channel
     * @return {{ muted: boolean; createdAt?: string | null; expiresAt?: string | null }} { muted: true | false, createdAt: Date | null, expiresAt: Date | null}
     */

  }, {
    key: "muteStatus",
    value: function muteStatus() {
      this._checkInitialized();

      return this.getClient()._muteStatus(this.cid);
    }
  }, {
    key: "sendAction",
    value: function sendAction(messageID, formData) {
      this._checkInitialized();

      if (!messageID) {
        throw Error("Message id is missing");
      }

      return this.getClient().post(this.getClient().baseURL + "/messages/".concat(messageID, "/action"), {
        message_id: messageID,
        form_data: formData,
        id: this.id,
        type: this.type
      });
    }
    /**
     * keystroke - First of the typing.start and typing.stop events based on the users keystrokes.
     * Call this on every keystroke
     * @see {@link https://getstream.io/chat/docs/typing_indicators/?language=js|Docs}
     * @param {string} [parent_id] set this field to `message.id` to indicate that typing event is happening in a thread
     */

  }, {
    key: "keystroke",
    value: function () {
      var _keystroke = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee22(parent_id) {
        var _this$getConfig;

        var now, diff;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if ((_this$getConfig = this.getConfig()) !== null && _this$getConfig !== void 0 && _this$getConfig.typing_events) {
                  _context22.next = 2;
                  break;
                }

                return _context22.abrupt("return");

              case 2:
                now = new Date();
                diff = this.lastTypingEvent && now.getTime() - this.lastTypingEvent.getTime();
                this.lastKeyStroke = now;
                this.isTyping = true; // send a typing.start every 2 seconds

                if (!(diff === null || diff > 2000)) {
                  _context22.next = 10;
                  break;
                }

                this.lastTypingEvent = new Date();
                _context22.next = 10;
                return this.sendEvent({
                  type: 'typing.start',
                  parent_id: parent_id
                });

              case 10:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function keystroke(_x21) {
        return _keystroke.apply(this, arguments);
      }

      return keystroke;
    }()
    /**
     * stopTyping - Sets last typing to null and sends the typing.stop event
     * @see {@link https://getstream.io/chat/docs/typing_indicators/?language=js|Docs}
     * @param {string} [parent_id] set this field to `message.id` to indicate that typing event is happening in a thread
     */

  }, {
    key: "stopTyping",
    value: function () {
      var _stopTyping = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee23(parent_id) {
        var _this$getConfig2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if ((_this$getConfig2 = this.getConfig()) !== null && _this$getConfig2 !== void 0 && _this$getConfig2.typing_events) {
                  _context23.next = 2;
                  break;
                }

                return _context23.abrupt("return");

              case 2:
                this.lastTypingEvent = null;
                this.isTyping = false;
                _context23.next = 6;
                return this.sendEvent({
                  type: 'typing.stop',
                  parent_id: parent_id
                });

              case 6:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function stopTyping(_x22) {
        return _stopTyping.apply(this, arguments);
      }

      return stopTyping;
    }()
    /**
     * lastMessage - return the last message, takes into account that last few messages might not be perfectly sorted
     *
     * @return {Immutable.Immutable<ReturnType<ChannelState<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>['messageToImmutable']>> | undefined} Description
     */

  }, {
    key: "lastMessage",
    value: function lastMessage() {
      // get last 5 messages, sort, return the latest
      // get a slice of the last 5
      var min = this.state.messages.length - 5;

      if (min < 0) {
        min = 0;
      }

      var max = this.state.messages.length + 1;
      var messageSlice = this.state.messages.slice(min, max).asMutable(); // sort by pk desc

      messageSlice.sort(function (a, b) {
        return b.created_at.getTime() - a.created_at.getTime();
      });
      var lastMessage;

      if (messageSlice.length > 0) {
        lastMessage = messageSlice[0];
      }

      return lastMessage;
    }
    /**
     * markRead - Send the mark read event for this user, only works if the `read_events` setting is enabled
     *
     * @param {MarkReadOptions<UserType>} data
     * @return {Promise<EventAPIResponse<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType> | null>} Description
     */

  }, {
    key: "markRead",
    value: function () {
      var _markRead = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee24() {
        var _this$getConfig3;

        var data,
            _args24 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                data = _args24.length > 0 && _args24[0] !== undefined ? _args24[0] : {};

                this._checkInitialized();

                if ((_this$getConfig3 = this.getConfig()) !== null && _this$getConfig3 !== void 0 && _this$getConfig3.read_events) {
                  _context24.next = 4;
                  break;
                }

                return _context24.abrupt("return", Promise.resolve(null));

              case 4:
                _context24.next = 6;
                return this.getClient().post(this._channelURL() + '/read', _objectSpread$2({}, data));

              case 6:
                return _context24.abrupt("return", _context24.sent);

              case 7:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function markRead() {
        return _markRead.apply(this, arguments);
      }

      return markRead;
    }()
    /**
     * clean - Cleans the channel state and fires stop typing if needed
     */

  }, {
    key: "clean",
    value: function clean() {
      if (this.lastKeyStroke) {
        var now = new Date();
        var diff = now.getTime() - this.lastKeyStroke.getTime();

        if (diff > 1000 && this.isTyping) {
          logChatPromiseExecution(this.stopTyping(), 'stop typing event');
        }
      }

      this.state.clean();
    }
    /**
     * watch - Loads the initial channel state and watches for changes
     *
     * @param {ChannelQueryOptions<ChannelType, CommandType, UserType>} options additional options for the query endpoint
     *
     * @return {Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The server response
     */

  }, {
    key: "watch",
    value: function () {
      var _watch = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee25(options) {
        var defaultOptions, combined, state;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                defaultOptions = {
                  state: true,
                  watch: true,
                  presence: false
                }; // Make sure we wait for the connect promise if there is a pending one

                _context25.next = 3;
                return this.getClient().wsPromise;

              case 3:
                if (!this.getClient()._hasConnectionID()) {
                  defaultOptions.watch = false;
                }

                combined = _objectSpread$2(_objectSpread$2({}, defaultOptions), options);
                _context25.next = 7;
                return this.query(combined);

              case 7:
                state = _context25.sent;
                this.initialized = true;
                this.data = state.channel;

                this._client.logger('info', "channel:watch() - started watching channel ".concat(this.cid), {
                  tags: ['channel'],
                  channel: this
                });

                return _context25.abrupt("return", state);

              case 12:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function watch(_x23) {
        return _watch.apply(this, arguments);
      }

      return watch;
    }()
    /**
     * stopWatching - Stops watching the channel
     *
     * @return {Promise<APIResponse>} The server response
     */

  }, {
    key: "stopWatching",
    value: function () {
      var _stopWatching = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee26() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this.getClient().post(this._channelURL() + '/stop-watching', {});

              case 2:
                response = _context26.sent;

                this._client.logger('info', "channel:watch() - stopped watching channel ".concat(this.cid), {
                  tags: ['channel'],
                  channel: this
                });

                return _context26.abrupt("return", response);

              case 5:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function stopWatching() {
        return _stopWatching.apply(this, arguments);
      }

      return stopWatching;
    }()
    /**
     * getReplies - List the message replies for a parent message
     *
     * @param {string} parent_id The message parent id, ie the top of the thread
     * @param {PaginationOptions & { user?: UserResponse<UserType>; user_id?: string }} options Pagination params, ie {limit:10, id_lte: 10}
     *
     * @return {Promise<GetRepliesAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} A response with a list of messages
     */

  }, {
    key: "getReplies",
    value: function () {
      var _getReplies = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee27(parent_id, options) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return this.getClient().get(this.getClient().baseURL + "/messages/".concat(parent_id, "/replies"), _objectSpread$2({}, options));

              case 2:
                data = _context27.sent;

                // add any messages to our thread state
                if (data.messages) {
                  this.state.addMessagesSorted(data.messages);
                }

                return _context27.abrupt("return", data);

              case 5:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function getReplies(_x24, _x25) {
        return _getReplies.apply(this, arguments);
      }

      return getReplies;
    }()
    /**
     * getReactions - List the reactions, supports pagination
     *
     * @param {string} message_id The message id
     * @param {{ limit?: number; offset?: number }} options The pagination options
     *
     * @return {Promise<GetReactionsAPIResponse<ReactionType, UserType>>} Server response
     */

  }, {
    key: "getReactions",
    value: function getReactions(message_id, options) {
      return this.getClient().get(this.getClient().baseURL + "/messages/".concat(message_id, "/reactions"), _objectSpread$2({}, options));
    }
    /**
     * getMessagesById - Retrieves a list of messages by ID
     *
     * @param {string[]} messageIds The ids of the messages to retrieve from this channel
     *
     * @return {Promise<GetMultipleMessagesAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} Server response
     */

  }, {
    key: "getMessagesById",
    value: function getMessagesById(messageIds) {
      return this.getClient().get(this._channelURL() + '/messages', {
        ids: messageIds.join(',')
      });
    }
    /**
     * lastRead - returns the last time the user marked the channel as read if the user never marked the channel as read, this will return null
     * @return {Immutable.ImmutableDate | null | undefined}
     */

  }, {
    key: "lastRead",
    value: function lastRead() {
      this._checkInitialized();

      var _this$getClient = this.getClient(),
          userID = _this$getClient.userID;

      if (userID) {
        return this.state.read[userID] ? this.state.read[userID].last_read : null;
      }
    }
  }, {
    key: "_countMessageAsUnread",
    value: function _countMessageAsUnread(message) {
      var _message$user, _message$user2;

      if (message.shadowed) return false;
      if (message.silent) return false;
      if (((_message$user = message.user) === null || _message$user === void 0 ? void 0 : _message$user.id) === this.getClient().userID) return false;
      if ((_message$user2 = message.user) !== null && _message$user2 !== void 0 && _message$user2.id && this.getClient().userMuteStatus(message.user.id)) return false;
      return true;
    }
    /**
     * countUnread - Count of unread messages
     *
     * @param {Date | Immutable.ImmutableDate | null} [lastRead] lastRead the time that the user read a message, defaults to current user's read state
     *
     * @return {number} Unread count
     */

  }, {
    key: "countUnread",
    value: function countUnread(lastRead) {
      if (!lastRead) return this.state.unreadCount;
      var count = 0;

      for (var i = 0; i < this.state.messages.length; i += 1) {
        var message = this.state.messages[i];

        if (message.created_at > lastRead && this._countMessageAsUnread(message)) {
          count++;
        }
      }

      return count;
    }
    /**
     * countUnread - Count the number of unread messages mentioning the current user
     *
     * @return {number} Unread mentions count
     */

  }, {
    key: "countUnreadMentions",
    value: function countUnreadMentions() {
      var lastRead = this.lastRead();
      var userID = this.getClient().userID;
      var count = 0;

      for (var i = 0; i < this.state.messages.length; i += 1) {
        var _message$mentioned_us;

        var message = this.state.messages[i];

        if (this._countMessageAsUnread(message) && (!lastRead || message.created_at > lastRead) && (_message$mentioned_us = message.mentioned_users) !== null && _message$mentioned_us !== void 0 && _message$mentioned_us.find(function (u) {
          return u.id === userID;
        })) {
          count++;
        }
      }

      return count;
    }
    /**
     * create - Creates a new channel
     *
     * @return {Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} The Server Response
     */

  }, {
    key: "query",

    /**
     * query - Query the API, get messages, members or other channel fields
     *
     * @param {ChannelQueryOptions<ChannelType, CommandType, UserType>} options The query options
     *
     * @return {Promise<ChannelAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} Returns a query response
     */
    value: function () {
      var _query = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee28(options) {
        var queryURL, state, _state$members$map, membersStr, tempChannelCid;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this.getClient().wsPromise;

              case 2:
                queryURL = "".concat(this.getClient().baseURL, "/channels/").concat(this.type);

                if (this.id) {
                  queryURL += "/".concat(this.id);
                }

                _context28.next = 6;
                return this.getClient().post(queryURL + '/query', _objectSpread$2({
                  data: this._data,
                  state: true
                }, options));

              case 6:
                state = _context28.sent;

                // update the channel id if it was missing
                if (!this.id) {
                  this.id = state.channel.id;
                  this.cid = state.channel.cid; // set the channel as active...

                  membersStr = (_state$members$map = state.members.map(function (m) {
                    return m.user_id;
                  })) === null || _state$members$map === void 0 ? void 0 : _state$members$map.sort().join(',');
                  tempChannelCid = "".concat(this.type, ":!members-").concat(membersStr);

                  if (tempChannelCid in this.getClient().activeChannels) {
                    // This gets set in `client.channel()` function, when channel is created
                    // using members, not id.
                    delete this.getClient().activeChannels[tempChannelCid];
                  }

                  if (!(this.cid in this.getClient().activeChannels)) {
                    this.getClient().activeChannels[this.cid] = this;
                  }
                }

                this.getClient()._addChannelConfig(state); // add any messages to our channel state


                this._initializeState(state);

                return _context28.abrupt("return", state);

              case 11:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function query(_x26) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
    /**
     * banUser - Bans a user from a channel
     *
     * @param {string} targetUserID
     * @param {BanUserOptions<UserType>} options
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "banUser",
    value: function () {
      var _banUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee29(targetUserID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                this._checkInitialized();

                _context29.next = 3;
                return this.getClient().banUser(targetUserID, _objectSpread$2(_objectSpread$2({}, options), {}, {
                  type: this.type,
                  id: this.id
                }));

              case 3:
                return _context29.abrupt("return", _context29.sent);

              case 4:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function banUser(_x27, _x28) {
        return _banUser.apply(this, arguments);
      }

      return banUser;
    }()
    /**
     * hides the channel from queryChannels for the user until a message is added
     * If clearHistory is set to true - all messages will be removed for the user
     *
     * @param {string | null} userId
     * @param {boolean} clearHistory
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "hide",
    value: function () {
      var _hide = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee30() {
        var userId,
            clearHistory,
            _args30 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                userId = _args30.length > 0 && _args30[0] !== undefined ? _args30[0] : null;
                clearHistory = _args30.length > 1 && _args30[1] !== undefined ? _args30[1] : false;

                this._checkInitialized();

                _context30.next = 5;
                return this.getClient().post("".concat(this._channelURL(), "/hide"), {
                  user_id: userId,
                  clear_history: clearHistory
                });

              case 5:
                return _context30.abrupt("return", _context30.sent);

              case 6:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function hide() {
        return _hide.apply(this, arguments);
      }

      return hide;
    }()
    /**
     * removes the hidden status for a channel
     *
     * @param {string | null} userId
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "show",
    value: function () {
      var _show = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee31() {
        var userId,
            _args31 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                userId = _args31.length > 0 && _args31[0] !== undefined ? _args31[0] : null;

                this._checkInitialized();

                _context31.next = 4;
                return this.getClient().post("".concat(this._channelURL(), "/show"), {
                  user_id: userId
                });

              case 4:
                return _context31.abrupt("return", _context31.sent);

              case 5:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function show() {
        return _show.apply(this, arguments);
      }

      return show;
    }()
    /**
     * unbanUser - Removes the bans for a user on a channel
     *
     * @param {string} targetUserID
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "unbanUser",
    value: function () {
      var _unbanUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee32(targetUserID) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                this._checkInitialized();

                _context32.next = 3;
                return this.getClient().unbanUser(targetUserID, {
                  type: this.type,
                  id: this.id
                });

              case 3:
                return _context32.abrupt("return", _context32.sent);

              case 4:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function unbanUser(_x29) {
        return _unbanUser.apply(this, arguments);
      }

      return unbanUser;
    }()
    /**
     * shadowBan - Shadow bans a user from a channel
     *
     * @param {string} targetUserID
     * @param {BanUserOptions<UserType>} options
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "shadowBan",
    value: function () {
      var _shadowBan = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee33(targetUserID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                this._checkInitialized();

                _context33.next = 3;
                return this.getClient().shadowBan(targetUserID, _objectSpread$2(_objectSpread$2({}, options), {}, {
                  type: this.type,
                  id: this.id
                }));

              case 3:
                return _context33.abrupt("return", _context33.sent);

              case 4:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function shadowBan(_x30, _x31) {
        return _shadowBan.apply(this, arguments);
      }

      return shadowBan;
    }()
    /**
     * removeShadowBan - Removes the shadow ban for a user on a channel
     *
     * @param {string} targetUserID
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "removeShadowBan",
    value: function () {
      var _removeShadowBan = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee34(targetUserID) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                this._checkInitialized();

                _context34.next = 3;
                return this.getClient().removeShadowBan(targetUserID, {
                  type: this.type,
                  id: this.id
                });

              case 3:
                return _context34.abrupt("return", _context34.sent);

              case 4:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function removeShadowBan(_x32) {
        return _removeShadowBan.apply(this, arguments);
      }

      return removeShadowBan;
    }()
    /**
     * on - Listen to events on this channel.
     *
     * channel.on('message.new', event => {console.log("my new message", event, channel.state.messages)})
     * or
     * channel.on(event => {console.log(event.type)})
     *
     * @param {EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType> | EventTypes} callbackOrString  The event type to listen for (optional)
     * @param {EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} [callbackOrNothing] The callback to call
     */

  }, {
    key: "on",
    value: function on(callbackOrString, callbackOrNothing) {
      var key = callbackOrNothing ? callbackOrString : 'all';
      var valid = isValidEventType(key);

      if (!valid) {
        throw Error("Invalid event type ".concat(key));
      }

      var callback = callbackOrNothing ? callbackOrNothing : callbackOrString;

      if (!(key in this.listeners)) {
        this.listeners[key] = [];
      }

      this._client.logger('info', "Attaching listener for ".concat(key, " event on channel ").concat(this.cid), {
        tags: ['event', 'channel'],
        channel: this
      });

      this.listeners[key].push(callback);
    }
    /**
     * off - Remove the event handler
     *
     */

  }, {
    key: "off",
    value: function off(callbackOrString, callbackOrNothing) {
      var key = callbackOrNothing ? callbackOrString : 'all';
      var valid = isValidEventType(key);

      if (!valid) {
        throw Error("Invalid event type ".concat(key));
      }

      var callback = callbackOrNothing ? callbackOrNothing : callbackOrString;

      if (!(key in this.listeners)) {
        this.listeners[key] = [];
      }

      this._client.logger('info', "Removing listener for ".concat(key, " event from channel ").concat(this.cid), {
        tags: ['event', 'channel'],
        channel: this
      });

      this.listeners[key] = this.listeners[key].filter(function (value) {
        return value !== callback;
      });
    } // eslint-disable-next-line sonarjs/cognitive-complexity

  }, {
    key: "_handleChannelEvent",
    value: function _handleChannelEvent(event) {
      var _event$user, _event$user2, _event$user3, _event$user5, _event$user6, _event$member, _event$user9;

      var channel = this;

      this._client.logger('info', "channel:_handleChannelEvent - Received event of type { ".concat(event.type, " } on ").concat(this.cid), {
        tags: ['event', 'channel'],
        channel: this
      });

      var s = channel.state;

      switch (event.type) {
        case 'typing.start':
          if ((_event$user = event.user) !== null && _event$user !== void 0 && _event$user.id) {
            s.typing = s.typing.set(event.user.id, seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()(event));
          }

          break;

        case 'typing.stop':
          if ((_event$user2 = event.user) !== null && _event$user2 !== void 0 && _event$user2.id) {
            s.typing = s.typing.without(event.user.id);
          }

          break;

        case 'message.read':
          if ((_event$user3 = event.user) !== null && _event$user3 !== void 0 && _event$user3.id) {
            var _event$user4, _this$getClient$user;

            s.read = s.read.set(event.user.id, seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({
              user: _objectSpread$2({}, event.user),
              last_read: event.received_at
            }));

            if (((_event$user4 = event.user) === null || _event$user4 === void 0 ? void 0 : _event$user4.id) === ((_this$getClient$user = this.getClient().user) === null || _this$getClient$user === void 0 ? void 0 : _this$getClient$user.id)) {
              s.unreadCount = 0;
            }
          }

          break;

        case 'user.watching.start':
        case 'user.updated':
          if ((_event$user5 = event.user) !== null && _event$user5 !== void 0 && _event$user5.id) {
            s.watchers = s.watchers.set(event.user.id, seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()(event.user));
          }

          break;

        case 'user.watching.stop':
          if ((_event$user6 = event.user) !== null && _event$user6 !== void 0 && _event$user6.id) {
            s.watchers = s.watchers.without(event.user.id);
          }

          break;

        case 'message.deleted':
          if (event.message) {
            if (event.hard_delete) s.removeMessage(event.message);else s.addMessageSorted(event.message);

            if (event.message.pinned) {
              s.removePinnedMessage(event.message);
            }
          }

          break;

        case 'message.new':
          if (event.message) {
            var _event$user7, _this$getClient$user2, _event$user8;

            /* if message belongs to current user, always assume timestamp is changed to filter it out and add again to avoid duplication */
            var ownMessage = ((_event$user7 = event.user) === null || _event$user7 === void 0 ? void 0 : _event$user7.id) === ((_this$getClient$user2 = this.getClient().user) === null || _this$getClient$user2 === void 0 ? void 0 : _this$getClient$user2.id);
            var isThreadMessage = event.message.parent_id && !event.message.show_in_channel;

            if (this.state.isUpToDate || isThreadMessage) {
              s.addMessageSorted(event.message, ownMessage);
            }

            if (event.message.pinned) {
              s.addPinnedMessage(event.message);
            }

            if (ownMessage && (_event$user8 = event.user) !== null && _event$user8 !== void 0 && _event$user8.id) {
              s.unreadCount = 0;
              s.read = s.read.set(event.user.id, seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({
                user: _objectSpread$2({}, event.user),
                last_read: new Date(event.created_at)
              }));
            } else if (this._countMessageAsUnread(event.message)) {
              s.unreadCount = s.unreadCount + 1;
            }
          }

          break;

        case 'message.updated':
          if (event.message) {
            s.addMessageSorted(event.message);

            if (event.message.pinned) {
              s.addPinnedMessage(event.message);
            } else {
              s.removePinnedMessage(event.message);
            }
          }

          break;

        case 'channel.truncated':
          s.clearMessages();
          s.unreadCount = 0;
          break;

        case 'member.added':
        case 'member.updated':
          if ((_event$member = event.member) !== null && _event$member !== void 0 && _event$member.user_id) {
            var _event$member2;

            s.members = s.members.set((_event$member2 = event.member) === null || _event$member2 === void 0 ? void 0 : _event$member2.user_id, seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()(event.member));
          }

          break;

        case 'member.removed':
          if ((_event$user9 = event.user) !== null && _event$user9 !== void 0 && _event$user9.id) {
            s.members = s.members.without(event.user.id);
          }

          break;

        case 'channel.updated':
          if (event.channel) {
            channel.data = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()(event.channel);
          }

          break;

        case 'reaction.new':
          if (event.reaction) {
            s.addReaction(event.reaction, event.message);
          }

          break;

        case 'reaction.deleted':
          if (event.reaction) {
            s.removeReaction(event.reaction, event.message);
          }

          break;

        case 'reaction.updated':
          if (event.reaction) {
            // assuming reaction.updated is only called if enforce_unique is true
            s.addReaction(event.reaction, event.message, true);
          }

          break;

        case 'channel.hidden':
          if (event.clear_history) {
            s.clearMessages();
          }

          break;
      } // any event can send over the online count


      if (event.watcher_count !== undefined) {
        channel.state.watcher_count = event.watcher_count;
      }
    }
  }, {
    key: "_checkInitialized",
    value: function _checkInitialized() {
      if (!this.initialized && !this.getClient()._isUsingServerAuth()) {
        throw Error("Channel ".concat(this.cid, " hasn't been initialized yet. Make sure to call .watch() and wait for it to resolve"));
      }
    } // eslint-disable-next-line sonarjs/cognitive-complexity

  }, {
    key: "_initializeState",
    value: function _initializeState(state) {
      // add the Users
      if (state.members) {
        var _iterator = _createForOfIteratorHelper$1(state.members),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var m = _step.value;

            if (m.user) {
              this.getClient().state.updateUserReference(m.user, this.cid);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.state.membership = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()(state.membership ? state.membership : {}); // TODO: CHECK WATCHERS TYPE!!!!!!
      // if (state.watchers) {
      //   for (const watcher of state.watchers) {
      //     if (watcher) {
      //       this.getClient().state.updateUserReference(watcher, this.cid);
      //     }
      //   }
      // }
      // immutable list of maps

      var messages = state.messages || [];

      if (!this.state.messages) {
        this.state.messages = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()([]);
      }

      this.state.addMessagesSorted(messages, false, true);

      if (!this.state.pinnedMessages) {
        this.state.pinnedMessages = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()([]);
      }

      this.state.addPinnedMessages(state.pinned_messages || []);
      this.state.watcher_count = state.watcher_count ? state.watcher_count : 0; // convert the arrays into objects for easier syncing...

      if (state.watchers) {
        var _iterator2 = _createForOfIteratorHelper$1(state.watchers),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var watcher = _step2.value;

            if (watcher) {
              this.getClient().state.updateUserReference(watcher, this.cid);
              this.state.watchers = this.state.watchers.set(watcher.id, watcher);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } // initialize read state to last message or current time if the channel is empty
      // if the user is a member, this value will be overwritten later on otherwise this ensures
      // that everything up to this point is not marked as unread


      if (this.getClient().userID != null) {
        var last_read = this.state.last_message_at != null ? this.state.last_message_at : new Date();

        var _this$getClient2 = this.getClient(),
            user = _this$getClient2.user;

        if (user) {
          this.state.read = this.state.read.set(user.id, {
            user: this.getClient().user,
            last_read: last_read
          });
        }
      } // apply read state if part of the state


      if (state.read) {
        var _iterator3 = _createForOfIteratorHelper$1(state.read),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _this$getClient$user3;

            var read = _step3.value;

            var parsedRead = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread$2({}, read));

            parsedRead.last_read = new Date(read.last_read);
            this.state.read = this.state.read.set(read.user.id, parsedRead);

            if (read.user.id === ((_this$getClient$user3 = this.getClient().user) === null || _this$getClient$user3 === void 0 ? void 0 : _this$getClient$user3.id)) {
              this.state.unreadCount = parsedRead.unread_messages;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      if (state.members) {
        var _iterator4 = _createForOfIteratorHelper$1(state.members),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _m = _step4.value;

            if (_m.user) {
              this.state.members = this.state.members.set(_m.user.id, _m);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }, {
    key: "_disconnect",
    value: function _disconnect() {
      this._client.logger('info', "channel:disconnect() - Disconnecting the channel ".concat(this.cid), {
        tags: ['connection', 'channel'],
        channel: this
      });

      this.disconnected = true;
    }
  }]);

  return Channel;
}();

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * ClientState - A container class for the client state.
 */
var ClientState = /*#__PURE__*/function () {
  function ClientState() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, ClientState);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "users", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "userChannelReferences", void 0);

    // show the status for a certain user...
    // ie online, offline etc
    this.users = seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()({}); // store which channels contain references to the specified user...

    this.userChannelReferences = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(ClientState, [{
    key: "updateUsers",
    value: function updateUsers(users) {
      var _iterator = _createForOfIteratorHelper$2(users),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var user = _step.value;
          this.updateUser(user);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "updateUser",
    value: function updateUser(user) {
      if (user != null) {
        this.users = this.users.set(user.id, seamless_immutable__WEBPACK_IMPORTED_MODULE_11___default()(user));
      }
    }
  }, {
    key: "updateUserReference",
    value: function updateUserReference(user, channelID) {
      if (user == null) {
        return;
      }

      this.updateUser(user);

      if (!this.userChannelReferences[user.id]) {
        this.userChannelReferences[user.id] = {};
      }

      this.userChannelReferences[user.id][channelID] = true;
    }
  }]);

  return ClientState;
}();

// Type guards to check WebSocket error type
var isCloseEvent = function isCloseEvent(res) {
  return res.code !== undefined;
};

var isErrorEvent = function isErrorEvent(res) {
  return res.error !== undefined;
};

/**
 * StableWSConnection - A WS connection that reconnects upon failure.
 * - the browser will sometimes report that you're online or offline
 * - the WS connection can break and fail (there is a 30s health check)
 * - sometimes your WS connection will seem to work while the user is in fact offline
 * - to speed up online/offline detection you can use the window.addEventListener('offline');
 *
 * There are 4 ways in which a connection can become unhealthy:
 * - websocket.onerror is called
 * - websocket.onclose is called
 * - the health check fails and no event is received for ~40 seconds
 * - the browser indicates the connection is now offline
 *
 * There are 2 assumptions we make about the server:
 * - state can be recovered by querying the channel again
 * - if the servers fails to publish a message to the client, the WS connection is destroyed
 */
var StableWSConnection = /*#__PURE__*/function () {
  function StableWSConnection(_ref) {
    var _this = this;

    var apiKey = _ref.apiKey,
        authType = _ref.authType,
        clientID = _ref.clientID,
        eventCallback = _ref.eventCallback,
        logger = _ref.logger,
        messageCallback = _ref.messageCallback,
        recoverCallback = _ref.recoverCallback,
        tokenManager = _ref.tokenManager,
        user = _ref.user,
        userAgent = _ref.userAgent,
        userID = _ref.userID,
        wsBaseURL = _ref.wsBaseURL;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, StableWSConnection);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "apiKey", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "authType", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "clientID", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "eventCallback", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "logger", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "messageCallback", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "recoverCallback", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "tokenManager", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "user", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "userAgent", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "userID", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "wsBaseURL", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "connectionID", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "connectionOpen", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "consecutiveFailures", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "healthCheckInterval", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "healthCheckIntervalRef", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "isConnecting", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "isHealthy", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "isResolved", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "lastEvent", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "monitorInterval", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "monitorIntervalRef", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "rejectPromise", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "resolvePromise", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "totalFailures", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "ws", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "wsID", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_buildUrl", function () {
      var params = {
        user_id: _this.user.id,
        user_details: _this.user,
        user_token: _this.tokenManager.getToken(),
        server_determines_connection_id: true
      };
      var qs = encodeURIComponent(JSON.stringify(params));

      var token = _this.tokenManager.getToken();

      return "".concat(_this.wsBaseURL, "/connect?json=").concat(qs, "&api_key=").concat(_this.apiKey, "&authorization=").concat(token, "&stream-auth-type=").concat(_this.authType, "&x-stream-client=").concat(_this.userAgent);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "onlineStatusChanged", function (event) {
      if (event.type === 'offline') {
        // mark the connection as down
        _this.logger('info', 'connection:onlineStatusChanged() - Status changing to offline', {
          tags: ['connection']
        });

        _this._setHealth(false);
      } else if (event.type === 'online') {
        // retry right now...
        // We check this.isHealthy, not sure if it's always
        // smart to create a new WS connection if the old one is still up and running.
        // it's possible we didn't miss any messages, so this process is just expensive and not needed.
        _this.logger('info', "connection:onlineStatusChanged() - Status changing to online. isHealthy: ".concat(_this.isHealthy), {
          tags: ['connection']
        });

        if (!_this.isHealthy) {
          _this._reconnect({
            interval: 10
          });
        }
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "onopen", function (wsID) {
      if (_this.wsID !== wsID) return;

      _this.logger('info', 'connection:onopen() - onopen callback', {
        tags: ['connection'],
        wsID: wsID
      }); // set healthy..


      _this._setHealth(true);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "onmessage", function (wsID, event) {
      if (_this.wsID !== wsID) return; // we wait till the first message before we consider the connection open..
      // the reason for this is that auth errors and similar errors trigger a ws.onopen and immediately
      // after that a ws.onclose..

      if (!_this.isResolved && typeof event.data === 'string') {
        var data = JSON.parse(event.data);

        if (data.error != null) {
          var _this$rejectPromise;

          (_this$rejectPromise = _this.rejectPromise) === null || _this$rejectPromise === void 0 ? void 0 : _this$rejectPromise.call(_this, _this._errorFromWSEvent(data, false));
          return;
        } else {
          var _this$resolvePromise;

          (_this$resolvePromise = _this.resolvePromise) === null || _this$resolvePromise === void 0 ? void 0 : _this$resolvePromise.call(_this, event);
        }
      } // trigger the event..


      _this.lastEvent = new Date();

      _this.logger('info', 'connection:onmessage() - onmessage callback', {
        tags: ['connection'],
        event: event,
        wsID: wsID
      });

      _this.messageCallback(event);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "onclose", function (wsID, event) {
      _this.logger('info', 'connection:onclose() - onclose callback - ' + event.code, {
        tags: ['connection'],
        event: event,
        wsID: wsID
      });

      if (_this.wsID !== wsID) return;

      if (event.code === chatCodes.WS_CLOSED_SUCCESS) {
        var _this$rejectPromise2;

        // this is a permanent error raised by stream..
        // usually caused by invalid auth details
        var error = new Error("WS connection reject with error ".concat(event.reason));
        error.reason = event.reason;
        (_this$rejectPromise2 = _this.rejectPromise) === null || _this$rejectPromise2 === void 0 ? void 0 : _this$rejectPromise2.call(_this, error);

        _this.logger('info', "connection:onclose() - WS connection reject with error ".concat(event.reason), {
          tags: ['connection'],
          event: event
        });
      } else {
        var _this$rejectPromise3;

        _this.consecutiveFailures += 1;
        _this.totalFailures += 1;

        _this._setHealth(false);

        (_this$rejectPromise3 = _this.rejectPromise) === null || _this$rejectPromise3 === void 0 ? void 0 : _this$rejectPromise3.call(_this, _this._errorFromWSEvent(event));

        _this.logger('info', "connection:onclose() - WS connection closed. Calling reconnect ...", {
          tags: ['connection'],
          event: event
        }); // reconnect if its an abnormal failure


        _this._reconnect();
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "onerror", function (wsID, event) {
      var _this$rejectPromise4;

      if (_this.wsID !== wsID) return;
      _this.consecutiveFailures += 1;
      _this.totalFailures += 1;

      _this._setHealth(false);

      (_this$rejectPromise4 = _this.rejectPromise) === null || _this$rejectPromise4 === void 0 ? void 0 : _this$rejectPromise4.call(_this, _this._errorFromWSEvent(event));

      _this.logger('info', "connection:onerror() - WS connection resulted into error", {
        tags: ['connection'],
        event: event
      });

      _this._reconnect();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_setHealth", function (healthy) {
      if (healthy && !_this.isHealthy) {
        // yes we are online:
        _this.isHealthy = true;

        _this.eventCallback({
          type: 'connection.changed',
          online: true
        });
      }

      if (!healthy && _this.isHealthy) {
        // bummer we are offline
        _this.isHealthy = false;
        setTimeout(function () {
          if (!_this.isHealthy) {
            _this.eventCallback({
              type: 'connection.changed',
              online: false
            });
          }
        }, 5000);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_errorFromWSEvent", function (event) {
      var isWSFailure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var code;
      var statusCode;
      var message;

      if (isCloseEvent(event)) {
        code = event.code;
        statusCode = 'unknown';
        message = event.reason;
      }

      if (isErrorEvent(event)) {
        code = event.error.code;
        statusCode = event.error.StatusCode;
        message = event.error.message;
      } // Keeping this `warn` level log, to avoid cluttering of error logs from ws failures.


      _this.logger('warn', "connection:_errorFromWSEvent() - WS failed with code ".concat(code), {
        tags: ['connection'],
        event: event
      });

      var error = new Error("WS failed with code ".concat(code, " and reason - ").concat(message));
      error.code = code;
      /**
       * StatusCode does not exist on any event types but has been left
       * as is to preserve JS functionality during the TS implementation
       */

      error.StatusCode = statusCode;
      error.isWSFailure = isWSFailure;
      return error;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_listenForConnectionChanges", function () {
      if (typeof window !== 'undefined' && window != null && window.addEventListener != null) {
        window.addEventListener('offline', _this.onlineStatusChanged);
        window.addEventListener('online', _this.onlineStatusChanged);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_removeConnectionListeners", function () {
      if (typeof window !== 'undefined' && window != null && window.addEventListener != null) {
        window.removeEventListener('offline', _this.onlineStatusChanged);
        window.removeEventListener('online', _this.onlineStatusChanged);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_retryInterval", function () {
      // try to reconnect in 0-5 seconds (random to spread out the load from failures)
      var max = Math.min(500 + _this.consecutiveFailures * 2000, 25000);
      var min = Math.min(Math.max(250, (_this.consecutiveFailures - 1) * 2000), 25000);
      return Math.floor(Math.random() * (max - min) + min);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_setupConnectionPromise", function () {
      var that = _this;
      _this.isResolved = false;
      /** a promise that is resolved once ws.open is called */

      _this.connectionOpen = new Promise(function (resolve, reject) {
        that.resolvePromise = resolve;
        that.rejectPromise = reject;
      }).then(function (e) {
        if (e.data && typeof e.data === 'string') {
          var data = JSON.parse(e.data);

          if (data && data.error != null) {
            throw new Error(JSON.stringify(data.error));
          }

          return data;
        } else {
          return undefined;
        }
      }, function (error) {
        throw error;
      });
    });

    this.wsBaseURL = wsBaseURL;
    this.clientID = clientID;
    this.userID = userID;
    this.user = user;
    this.authType = authType;
    this.userAgent = userAgent;
    this.apiKey = apiKey;
    this.tokenManager = tokenManager;
    /** consecutive failures influence the duration of the timeout */

    this.consecutiveFailures = 0;
    /** keep track of the total number of failures */

    this.totalFailures = 0;
    /** We only make 1 attempt to reconnect at the same time.. */

    this.isConnecting = false;
    /** Boolean that indicates if we have a working connection to the server */

    this.isHealthy = false;
    /** Callback when the connection fails and recovers */

    this.recoverCallback = recoverCallback;
    this.messageCallback = messageCallback;
    this.eventCallback = eventCallback;
    this.logger = logger;
    /** Incremented when a new WS connection is made */

    this.wsID = 1;
    /** Store the last event time for health checks */

    this.lastEvent = null;
    /** Send a health check message every 30 seconds */

    this.healthCheckInterval = 30 * 1000;
    /** Every second we verify that we didn't miss any health checks */

    this.monitorInterval = 1 * 1000;

    this._listenForConnectionChanges();
  }
  /**
   * connect - Connect to the WS URL
   *
   * @return {ConnectAPIResponse<ChannelType, CommandType, UserType>} Promise that completes once the first health check message is received
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(StableWSConnection, [{
    key: "connect",
    value: function () {
      var _connect2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var healthCheck;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.isConnecting) {
                  _context.next = 2;
                  break;
                }

                throw Error("You've called connect twice, can only attempt 1 connection at the time");

              case 2:
                _context.prev = 2;
                this.isConnecting = true;
                _context.next = 6;
                return this._connect();

              case 6:
                healthCheck = _context.sent;
                this.isConnecting = false;
                this.consecutiveFailures = 0;

                this._startMonitor();

                this._startHealthCheck();

                this.logger('info', "connection:connect() - Established ws connection with healthcheck: ".concat(healthCheck), {
                  tags: ['connection']
                });
                return _context.abrupt("return", healthCheck);

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);
                this.isConnecting = false;
                this.isHealthy = false;
                this.consecutiveFailures += 1;

                if (!(_context.t0.code === chatCodes.TOKEN_EXPIRED && !this.tokenManager.isStatic())) {
                  _context.next = 23;
                  break;
                }

                this.logger('info', 'connection:connect() - WS failure due to expired token, so going to try to reload token and reconnect', {
                  tags: ['connection']
                });
                return _context.abrupt("return", this._reconnect({
                  refreshToken: true
                }));

              case 23:
                if (_context.t0.isWSFailure) {
                  _context.next = 25;
                  break;
                }

                throw new Error(JSON.stringify({
                  code: _context.t0.code,
                  StatusCode: _context.t0.StatusCode,
                  message: _context.t0.message,
                  isWSFailure: _context.t0.isWSFailure
                }));

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 15]]);
      }));

      function connect() {
        return _connect2.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "disconnect",

    /**
     * disconnect - Disconnect the connection and doesn't recover...
     *
     */
    value: function disconnect(timeout) {
      var _this2 = this;

      this.logger('info', "connection:disconnect() - Closing the websocket connection for wsID ".concat(this.wsID), {
        tags: ['connection']
      });
      this.wsID += 1; // start by removing all the listeners

      if (this.healthCheckIntervalRef) {
        clearInterval(this.healthCheckIntervalRef);
      }

      if (this.monitorIntervalRef) {
        clearInterval(this.monitorIntervalRef);
      }

      this._removeConnectionListeners();

      this.isHealthy = false; // remove ws handlers...

      if (this.ws && this.ws.removeAllListeners) {
        this.ws.removeAllListeners();
      }

      var isClosedPromise; // and finally close...
      // Assigning to local here because we will remove it from this before the
      // promise resolves.

      var ws = this.ws;

      if (ws && ws.close && ws.readyState === ws.OPEN) {
        isClosedPromise = new Promise(function (resolve) {
          var onclose = function onclose(event) {
            _this2.logger('info', "connection:disconnect() - resolving isClosedPromise ".concat(event ? 'with' : 'without', " close frame"), {
              tags: ['connection'],
              event: event
            });

            resolve();
          };

          ws.onclose = onclose; // In case we don't receive close frame websocket server in time,
          // lets not wait for more than 1 seconds.

          setTimeout(onclose, timeout != null ? timeout : 1000);
        });
        this.logger('info', "connection:disconnect() - Manually closed connection by calling client.disconnect()", {
          tags: ['connection']
        });
        ws.close(chatCodes.WS_CLOSED_SUCCESS, 'Manually closed connection by calling client.disconnect()');
      } else {
        this.logger('info', "connection:disconnect() - ws connection doesn't exist or it is already closed.", {
          tags: ['connection']
        });
        isClosedPromise = Promise.resolve();
      }

      delete this.ws;
      return isClosedPromise;
    }
    /**
     * _connect - Connect to the WS endpoint
     *
     * @return {ConnectAPIResponse<ChannelType, CommandType, UserType>} Promise that completes once the first health check message is received
     */

  }, {
    key: "_connect",
    value: function () {
      var _connect3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var wsURL, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.tokenManager.tokenReady();

              case 2:
                this._setupConnectionPromise();

                wsURL = this._buildUrl();
                this.ws = new isomorphic_ws__WEBPACK_IMPORTED_MODULE_14___default.a(wsURL);
                this.ws.onopen = this.onopen.bind(this, this.wsID);
                this.ws.onclose = this.onclose.bind(this, this.wsID);
                this.ws.onerror = this.onerror.bind(this, this.wsID);
                this.ws.onmessage = this.onmessage.bind(this, this.wsID);
                _context2.next = 11;
                return this.connectionOpen;

              case 11:
                response = _context2.sent;

                if (!response) {
                  _context2.next = 15;
                  break;
                }

                this.connectionID = response.connection_id;
                return _context2.abrupt("return", response);

              case 15:
                return _context2.abrupt("return", undefined);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _connect() {
        return _connect3.apply(this, arguments);
      }

      return _connect;
    }()
    /**
     * _reconnect - Retry the connection to WS endpoint
     *
     * @param {{ interval?: number; refreshToken?: boolean }} options Following options are available
     *
     * - `interval`	{int}			number of ms that function should wait before reconnecting
     * - `refreshToken` {boolean}	reload/refresh user token be refreshed before attempting reconnection.
     */

  }, {
    key: "_reconnect",
    value: function () {
      var _reconnect2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3() {
        var options,
            interval,
            _open,
            _args3 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
                this.logger('info', 'connection:_reconnect() - Initiating the reconnect', {
                  tags: ['connection']
                }); // only allow 1 connection at the time

                if (!(this.isConnecting || this.isHealthy)) {
                  _context3.next = 5;
                  break;
                }

                this.logger('info', 'connection:_reconnect() - Abort (1) since already connecting or healthy', {
                  tags: ['connection']
                });
                return _context3.abrupt("return");

              case 5:
                // reconnect in case of on error or on close
                // also reconnect if the health check cycle fails
                interval = options.interval;

                if (!interval) {
                  interval = this._retryInterval();
                } // reconnect, or try again after a little while...


                _context3.next = 9;
                return sleep(interval);

              case 9:
                if (!(this.isConnecting || this.isHealthy)) {
                  _context3.next = 12;
                  break;
                }

                this.logger('info', 'connection:_reconnect() - Abort (2) since already connecting or healthy', {
                  tags: ['connection']
                });
                return _context3.abrupt("return");

              case 12:
                this.isConnecting = true; // cleanup the old connection

                this.logger('info', 'connection:_reconnect() - Destroying current WS connection', {
                  tags: ['connection']
                });

                this._destroyCurrentWSConnection();

                if (!options.refreshToken) {
                  _context3.next = 18;
                  break;
                }

                _context3.next = 18;
                return this.tokenManager.loadToken();

              case 18:
                _context3.prev = 18;
                _context3.next = 21;
                return this._connect();

              case 21:
                _open = _context3.sent;

                if (!this.recoverCallback) {
                  _context3.next = 27;
                  break;
                }

                this.logger('info', 'connection:_reconnect() - Waiting for recoverCallBack', {
                  tags: ['connection']
                });
                _context3.next = 26;
                return this.recoverCallback(_open);

              case 26:
                this.logger('info', 'connection:_reconnect() - Finished recoverCallBack', {
                  tags: ['connection']
                });

              case 27:
                this.isConnecting = false;
                this.consecutiveFailures = 0;
                _context3.next = 40;
                break;

              case 31:
                _context3.prev = 31;
                _context3.t0 = _context3["catch"](18);
                this.isConnecting = false;
                this.isHealthy = false;
                this.consecutiveFailures += 1;

                if (!(_context3.t0.code === chatCodes.TOKEN_EXPIRED && !this.tokenManager.isStatic())) {
                  _context3.next = 39;
                  break;
                }

                this.logger('info', 'connection:_reconnect() - WS failure due to expired token, so going to try to reload token and reconnect', {
                  tags: ['connection']
                });
                return _context3.abrupt("return", this._reconnect({
                  refreshToken: true
                }));

              case 39:
                // reconnect on WS failures, don't reconnect if there is a code bug
                if (_context3.t0.isWSFailure) {
                  this.logger('info', 'connection:_reconnect() - WS failure, so going to try to reconnect', {
                    tags: ['connection']
                  });

                  this._reconnect();
                }

              case 40:
                this.logger('info', 'connection:_reconnect() - == END ==', {
                  tags: ['connection']
                });

              case 41:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[18, 31]]);
      }));

      function _reconnect() {
        return _reconnect2.apply(this, arguments);
      }

      return _reconnect;
    }()
    /**
     * onlineStatusChanged - this function is called when the browser connects or disconnects from the internet.
     *
     * @param {Event} event Event with type online or offline
     *
     */

  }, {
    key: "_destroyCurrentWSConnection",

    /**
     * _destroyCurrentWSConnection - Removes the current WS connection
     *
     */
    value: function _destroyCurrentWSConnection() {
      // increment the ID, meaning we will ignore all messages from the old
      // ws connection from now on.
      this.wsID += 1;

      try {
        if (this.ws && this.ws.removeAllListeners) {
          this.ws.removeAllListeners();
        }

        if (this.ws && this.ws.close) {
          this.ws.close();
        }
      } catch (e) {// we don't care
      }
    }
    /**
     * _retryInterval - A retry interval which increases after consecutive failures
     *
     * @return {number} Duration to wait in milliseconds
     */

  }, {
    key: "_startHealthCheck",

    /**
     * _startHealthCheck - Sends a message every 30s or so to see if the ws connection still works
     *
     */
    value: function _startHealthCheck() {
      var that = this; // 30 seconds is the recommended interval (messenger uses this)

      this.healthCheckIntervalRef = setInterval(function () {
        // send the healthcheck.., server replies with a health check event
        var data = [{
          type: 'health.check',
          client_id: that.clientID,
          user_id: that.userID
        }]; // try to send on the connection

        try {
          var _that$ws;

          (_that$ws = that.ws) === null || _that$ws === void 0 ? void 0 : _that$ws.send(JSON.stringify(data));
        } catch (e) {// error will already be detected elsewhere
        }
      }, that.healthCheckInterval);
    }
    /**
     * _startMonitor - Verifies we didn't miss any events. Marks the connection as failed in case we did.
     *
     */

  }, {
    key: "_startMonitor",
    value: function _startMonitor() {
      var _this3 = this;

      var that = this;
      this.monitorIntervalRef = setInterval(function () {
        var now = new Date(); // means we missed a health check

        if (that.lastEvent && now.getTime() - that.lastEvent.getTime() > _this3.healthCheckInterval + 10 * 1000) {
          _this3.logger('info', 'connection:_startMonitor - going to reconnect', {
            tags: ['connection']
          });

          that._setHealth(false);

          that._reconnect();
        }
      }, that.monitorInterval);
    }
  }]);

  return StableWSConnection;
}();

var jwt = null;

var crypto = null;

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Creates the JWT token that can be used for a UserSession
 * @method JWTUserToken
 * @memberof signing
 * @private
 * @param {Secret} apiSecret - API Secret key
 * @param {string} userId - The user_id key in the JWT payload
 * @param {UnknownType} [extraData] - Extra that should be part of the JWT token
 * @param {SignOptions} [jwtOptions] - Options that can be past to jwt.sign
 * @return {string} JWT Token
 */
function JWTUserToken(apiSecret, userId) {
  var extraData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var jwtOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof userId !== 'string') {
    throw new TypeError('userId should be a string');
  }

  var payload = _objectSpread$3({
    user_id: userId
  }, extraData); // make sure we return a clear error when jwt is shimmed (ie. browser build)


  {
    throw Error("Unable to find jwt crypto, if you are getting this error is probably because you are trying to generate tokens on browser or React Native (or other environment where crypto functions are not available). Please Note: token should only be generated server-side.");
  }

  var opts = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    algorithm: 'HS256',
    noTimestamp: true
  }, jwtOptions);
}
function JWTServerToken(apiSecret) {
  var jwtOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var payload = {
    server: true
  };

  var opts = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    algorithm: 'HS256',
    noTimestamp: true
  }, jwtOptions);

  return jwt.sign(payload, apiSecret, opts);
}
function UserFromToken(token) {
  var fragments = token.split('.');

  if (fragments.length !== 3) {
    return '';
  }

  var b64Payload = fragments[1];
  var payload = decodeBase64(b64Payload);
  var data = JSON.parse(payload);
  return data.user_id;
}
/**
 *
 * @param {string} userId the id of the user
 * @return {string}
 */

function DevToken(userId) {
  return ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', //{"alg": "HS256", "typ": "JWT"}
  encodeBase64(JSON.stringify({
    user_id: userId
  })), 'devtoken' // hardcoded signature
  ].join('.');
}
/**
 *
 * @param {string} body the signed message
 * @param {string} secret the shared secret used to generate the signature (Stream API secret)
 * @param {string} signature the signature to validate
 * @return {boolean}
 */

function CheckSignature(body, secret, signature) {
  var key = Buffer.from(secret, 'ascii');
  var hash = crypto.createHmac('sha256', key).update(body).digest('hex');
  return hash === signature;
}

/**
 * TokenManager
 *
 * Handles all the operations around user token.
 */
var TokenManager =
/**
 * Constructor
 *
 * @param {Secret} secret
 */
function TokenManager(secret) {
  var _this = this;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, TokenManager);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "loadTokenPromise", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "type", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "secret", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "token", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "tokenProvider", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "user", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "setTokenOrProvider", /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(tokenOrProvider, user) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.validateToken(tokenOrProvider, user);

              _this.user = user;

              if (isFunction(tokenOrProvider)) {
                _this.tokenProvider = tokenOrProvider;
                _this.type = 'provider';
              }

              if (typeof tokenOrProvider === 'string') {
                _this.token = tokenOrProvider;
                _this.type = 'static';
              }

              if (!tokenOrProvider && _this.user && _this.secret) {
                _this.token = JWTUserToken(_this.secret, user.id, {}, {});
                _this.type = 'static';
              }

              _context.next = 7;
              return _this.loadToken();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "reset", function () {
    _this.token = undefined;
    _this.user = undefined;
    _this.loadTokenPromise = null;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "validateToken", function (tokenOrProvider, user) {
    // allow empty token for anon user
    if (user && user.anon && !tokenOrProvider) return; // Don't allow empty token for non-server side client.

    if (!_this.secret && !tokenOrProvider) {
      throw new Error('User token can not be empty');
    }

    if (tokenOrProvider && typeof tokenOrProvider !== 'string' && !isFunction(tokenOrProvider)) {
      throw new Error('user token should either be a string or a function');
    }

    if (typeof tokenOrProvider === 'string') {
      // Allow empty token for anonymous users
      if (user.anon && tokenOrProvider === '') return;
      var tokenUserId = UserFromToken(tokenOrProvider);

      if (tokenOrProvider != null && (tokenUserId == null || tokenUserId === '' || tokenUserId !== user.id)) {
        throw new Error('userToken does not have a user_id or is not matching with user.id');
      }
    }
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "tokenReady", function () {
    return _this.loadTokenPromise;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "loadToken", function () {
    // eslint-disable-next-line no-async-promise-executor
    _this.loadTokenPromise = new Promise( /*#__PURE__*/function () {
      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(resolve) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this.type === 'static')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", resolve(_this.token));

              case 2:
                if (!(_this.tokenProvider && typeof _this.tokenProvider !== 'string')) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 5;
                return _this.tokenProvider();

              case 5:
                _this.token = _context2.sent;
                resolve(_this.token);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());
    return _this.loadTokenPromise;
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "getToken", function () {
    if (_this.token) {
      return _this.token;
    }

    if (_this.user && _this.user.anon && !_this.token) {
      return _this.token;
    }

    if (_this.secret) {
      return JWTServerToken(_this.secret);
    }

    throw new Error("Both secret and user tokens are not set. Either client.setUser wasn't called or client.disconnect was called");
  });

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "isStatic", function () {
    return _this.type === 'static';
  });

  this.loadTokenPromise = null;

  if (secret) {
    this.secret = secret;
  }

  this.type = 'static';

  if (this.secret) {
    this.token = JWTServerToken(this.secret);
  }
}
/**
 * Set the static string token or token provider.
 * Token provider should return a token string or a promise which resolves to string token.
 *
 * @param {TokenOrProvider} tokenOrProvider
 * @param {UserResponse<UserType>} user
 */
;

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function isString$1(x) {
  return typeof x === 'string' || x instanceof String;
}

var StreamChat = /*#__PURE__*/function () {
  function StreamChat(_key, secretOrOptions, _options) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, StreamChat);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_user", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "activeChannels", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "anonymous", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "axiosInstance", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "baseURL", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "browser", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "cleaningIntervalRef", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "clientID", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "configs", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "connecting", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "connectionEstablishedCount", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "connectionID", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "failures", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "key", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "listeners", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "logger", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "recoverStateOnReconnect", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "mutedChannels", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "mutedUsers", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "node", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "options", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "secret", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "setUserPromise", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "state", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "tokenManager", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "user", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "userAgent", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "userID", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "wsBaseURL", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "wsConnection", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "wsPromise", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_setupConnection", function () {
      _this.clientID = "".concat(_this.userID, "--").concat(randomId());
      _this.wsPromise = _this.connect();

      _this._startCleaning();

      return _this.wsPromise;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_hasConnectionID", function () {
      return Boolean(_this.connectionID);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "connectUser", function (user, userTokenOrProvider) {
      if (_this.userID) {
        throw new Error('Use client.disconnect() before trying to connect as a different user. connectUser was called twice.');
      }

      if ((_this._isUsingServerAuth() || _this.node) && !_this.options.allowServerSideConnect) {
        console.warn('Please do not use connectUser server side. connectUser impacts MAU and concurrent connection usage and thus your bill. If you have a valid use-case, add "allowServerSideConnect: true" to the client options to disable this warning.');
      } // we generate the client id client side


      _this.userID = user.id;

      if (!_this.userID) {
        throw new Error('The "id" field on the user is missing');
      }

      var setTokenPromise = _this._setToken(user, userTokenOrProvider);

      _this._setUser(user);

      var wsPromise = _this._setupConnection();

      _this.anonymous = false;
      _this.setUserPromise = Promise.all([setTokenPromise, wsPromise]).then(function (result) {
        return result[1];
      }) // We only return connection promise;
      .catch(function (e) {
        throw e;
      });
      return _this.setUserPromise;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "setUser", function (user, userTokenOrProvider) {
      return _this.connectUser(user, userTokenOrProvider);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_setToken", function (user, userTokenOrProvider) {
      return _this.tokenManager.setTokenOrProvider(userTokenOrProvider, user);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "connectAnonymousUser", function () {
      if ((_this._isUsingServerAuth() || _this.node) && !_this.options.allowServerSideConnect) {
        console.warn('Please do not use connectUser server side. connectUser impacts MAU and concurrent connection usage and thus your bill. If you have a valid use-case, add "allowServerSideConnect: true" to the client options to disable this warning.');
      }

      _this.anonymous = true;
      _this.userID = randomId();
      var anonymousUser = {
        id: _this.userID,
        anon: true
      };

      _this._setToken(anonymousUser, '');

      _this._setUser(anonymousUser);

      return _this._setupConnection();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "setAnonymousUser", function () {
      return _this.connectAnonymousUser();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "doAxiosRequest", /*#__PURE__*/function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(type, url, data) {
        var options,
            requestConfig,
            response,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
                _context.next = 3;
                return _this.tokenManager.tokenReady();

              case 3:
                requestConfig = _this._enrichAxiosOptions(options);
                _context.prev = 4;

                _this._logApiRequest(type, url, data, requestConfig);

                _context.t0 = type;
                _context.next = _context.t0 === 'get' ? 9 : _context.t0 === 'delete' ? 13 : _context.t0 === 'post' ? 17 : _context.t0 === 'put' ? 21 : _context.t0 === 'patch' ? 25 : _context.t0 === 'options' ? 29 : 33;
                break;

              case 9:
                _context.next = 11;
                return _this.axiosInstance.get(url, requestConfig);

              case 11:
                response = _context.sent;
                return _context.abrupt("break", 34);

              case 13:
                _context.next = 15;
                return _this.axiosInstance.delete(url, requestConfig);

              case 15:
                response = _context.sent;
                return _context.abrupt("break", 34);

              case 17:
                _context.next = 19;
                return _this.axiosInstance.post(url, data, requestConfig);

              case 19:
                response = _context.sent;
                return _context.abrupt("break", 34);

              case 21:
                _context.next = 23;
                return _this.axiosInstance.put(url, data, requestConfig);

              case 23:
                response = _context.sent;
                return _context.abrupt("break", 34);

              case 25:
                _context.next = 27;
                return _this.axiosInstance.patch(url, data, requestConfig);

              case 27:
                response = _context.sent;
                return _context.abrupt("break", 34);

              case 29:
                _context.next = 31;
                return _this.axiosInstance.options(url, requestConfig);

              case 31:
                response = _context.sent;
                return _context.abrupt("break", 34);

              case 33:
                throw new Error('Invalid request type');

              case 34:
                _this._logApiResponse(type, url, response);

                return _context.abrupt("return", _this.handleResponse(response));

              case 38:
                _context.prev = 38;
                _context.t1 = _context["catch"](4);

                _this._logApiError(type, url, _context.t1);

                if (!_context.t1.response) {
                  _context.next = 50;
                  break;
                }

                if (!(_context.t1.response.data.code === chatCodes.TOKEN_EXPIRED && !_this.tokenManager.isStatic())) {
                  _context.next = 47;
                  break;
                }

                _this.tokenManager.loadToken();

                _context.next = 46;
                return _this.doAxiosRequest(type, url, data, options);

              case 46:
                return _context.abrupt("return", _context.sent);

              case 47:
                return _context.abrupt("return", _this.handleResponse(_context.t1.response));

              case 50:
                throw _context.t1;

              case 51:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 38]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "dispatchEvent", function (event) {
      // client event handlers
      _this._handleClientEvent(event); // channel event handlers


      var cid = event.cid;
      var channel = cid ? _this.activeChannels[cid] : undefined;

      if (channel) {
        channel._handleChannelEvent(event);
      }

      _this._callClientListeners(event);

      if (channel) {
        channel._callChannelListeners(event);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "handleEvent", function (messageEvent) {
      // dispatch the event to the channel listeners
      var jsonString = messageEvent.data;
      var event = JSON.parse(jsonString);
      event.received_at = new Date();

      _this.dispatchEvent(event);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_callClientListeners", function (event) {
      var client = _this; // gather and call the listeners

      var listeners = [];

      if (client.listeners.all) {
        listeners.push.apply(listeners, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4___default()(client.listeners.all));
      }

      if (client.listeners[event.type]) {
        listeners.push.apply(listeners, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4___default()(client.listeners[event.type]));
      } // call the event and send it to the listeners


      for (var _i = 0, _listeners = listeners; _i < _listeners.length; _i++) {
        var listener = _listeners[_i];
        listener(event);
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "recoverState", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
      var _this$wsConnection, _this$wsConnection2;

      var cids;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.logger('info', "client:recoverState() - Start of recoverState with connectionID ".concat((_this$wsConnection = _this.wsConnection) === null || _this$wsConnection === void 0 ? void 0 : _this$wsConnection.connectionID), {
                tags: ['connection']
              });

              _this.connectionID = (_this$wsConnection2 = _this.wsConnection) === null || _this$wsConnection2 === void 0 ? void 0 : _this$wsConnection2.connectionID;
              cids = Object.keys(_this.activeChannels);

              if (!(cids.length && _this.recoverStateOnReconnect)) {
                _context2.next = 11;
                break;
              }

              _this.logger('info', "client:recoverState() - Start the querying of ".concat(cids.length, " channels"), {
                tags: ['connection', 'client']
              });

              _context2.next = 7;
              return _this.queryChannels({
                cid: {
                  $in: cids
                }
              }, {
                last_message_at: -1
              }, {
                limit: 30
              });

            case 7:
              _this.logger('info', 'client:recoverState() - Querying channels finished', {
                tags: ['connection', 'client']
              });

              _this.dispatchEvent({
                type: 'connection.recovered'
              });

              _context2.next = 12;
              break;

            case 11:
              _this.dispatchEvent({
                type: 'connection.recovered'
              });

            case 12:
              _this.wsPromise = Promise.resolve();
              _this.setUserPromise = Promise.resolve();

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "getChannelByMembers", function (channelType, custom) {
      // Check if the channel already exists.
      // Only allow 1 channel object per cid
      var membersStr = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_4___default()(custom.members || []).sort().join(',');

      var tempCid = "".concat(channelType, ":!members-").concat(membersStr);

      if (!membersStr) {
        throw Error('Please specify atleast one member when creating unique conversation');
      } // channel could exist in `activeChannels` list with either one of the following two keys:
      // 1. cid - Which gets set on channel only after calling channel.query or channel.watch or channel.create
      // 2. Sorted membersStr - E.g., "messaging:amin,vishal" OR "messaging:amin,jaap,tom"
      //                        This is set when you create a channel, but haven't queried yet. After query,
      //                        we will replace it with `cid`


      for (var _key2 in _this.activeChannels) {
        var _channel = _this.activeChannels[_key2];

        if (_key2 === tempCid) {
          return _channel;
        }

        if (_key2.indexOf("".concat(channelType, ":!members-")) === 0) {
          var membersStrInExistingChannel = Object.keys(_channel.state.members).sort().join(',');

          if (membersStrInExistingChannel === membersStr) {
            return _channel;
          }
        }
      }

      var channel = new Channel(_this, channelType, undefined, custom); // For the time being set the key as membersStr, since we don't know the cid yet.
      // In channel.query, we will replace it with 'cid'.

      _this.activeChannels[tempCid] = channel;
      return channel;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "getChannelById", function (channelType, channelID, custom) {
      if (typeof channelID === 'string' && ~channelID.indexOf(':')) {
        throw Error("Invalid channel id ".concat(channelID, ", can't contain the : character"));
      } // only allow 1 channel object per cid


      var cid = "".concat(channelType, ":").concat(channelID);

      if (cid in _this.activeChannels) {
        var _channel2 = _this.activeChannels[cid];

        if (Object.keys(custom).length > 0) {
          _channel2.data = custom;
          _channel2._data = custom;
        }

        return _channel2;
      }

      var channel = new Channel(_this, channelType, channelID, custom);
      _this.activeChannels[channel.cid] = channel;
      return channel;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "_isUsingServerAuth", function () {
      return !!_this.secret;
    });

    // set the key
    this.key = _key;
    this.listeners = {};
    this.state = new ClientState(); // a list of channels to hide ws events from

    this.mutedChannels = [];
    this.mutedUsers = []; // set the secret

    if (secretOrOptions && isString$1(secretOrOptions)) {
      this.secret = secretOrOptions;
    } // set the options... and figure out defaults...


    var inputOptions = _options ? _options : secretOrOptions && !isString$1(secretOrOptions) ? secretOrOptions : {};
    this.browser = typeof inputOptions.browser !== 'undefined' ? inputOptions.browser : typeof window !== 'undefined';
    this.node = !this.browser;
    this.options = _objectSpread$4({
      timeout: 3000,
      withCredentials: false,
      // making sure cookies are not sent
      warmUp: false,
      recoverStateOnReconnect: true
    }, inputOptions);

    if (this.node) {
      this.options.httpsAgent = new https.Agent({
        keepAlive: true,
        keepAliveMsecs: 3000
      });
    }

    this.axiosInstance = axios__WEBPACK_IMPORTED_MODULE_10___default.a.create(this.options);
    this.setBaseURL('https://chat-us-east-1.stream-io-api.com');

    if (typeof process !== 'undefined' && Object({"NODE_ENV":"production","BASE_URL":"/"}).STREAM_LOCAL_TEST_RUN) {
      this.setBaseURL('http://localhost:3030');
    }

    if (typeof process !== 'undefined' && Object({"NODE_ENV":"production","BASE_URL":"/"}).STREAM_LOCAL_TEST_HOST) {
      this.setBaseURL('http://' + Object({"NODE_ENV":"production","BASE_URL":"/"}).STREAM_LOCAL_TEST_HOST);
    } // WS connection is initialized when setUser is called


    this.wsConnection = null;
    this.wsPromise = null;
    this.setUserPromise = null; // keeps a reference to all the channels that are in use

    this.activeChannels = {}; // mapping between channel groups and configs

    this.configs = {};
    this.anonymous = false; // If its a server-side client, then lets initialize the tokenManager, since token will be
    // generated from secret.

    this.tokenManager = new TokenManager(this.secret);
    /**
     * logger function should accept 3 parameters:
     * @param logLevel string
     * @param message   string
     * @param extraData object
     *
     * e.g.,
     * const client = new StreamChat('api_key', {}, {
     * 		logger = (logLevel, message, extraData) => {
     * 			console.log(message);
     * 		}
     * })
     *
     * extraData contains tags array attached to log message. Tags can have one/many of following values:
     * 1. api
     * 2. api_request
     * 3. api_response
     * 4. client
     * 5. channel
     * 6. connection
     * 7. event
     *
     * It may also contains some extra data, some examples have been mentioned below:
     * 1. {
     * 		tags: ['api', 'api_request', 'client'],
     * 		url: string,
     * 		payload: object,
     * 		config: object
     * }
     * 2. {
     * 		tags: ['api', 'api_response', 'client'],
     * 		url: string,
     * 		response: object
     * }
     * 3. {
     * 		tags: ['api', 'api_response', 'client'],
     * 		url: string,
     * 		error: object
     * }
     * 4. {
     * 		tags: ['event', 'client'],
     * 		event: object
     * }
     * 5. {
     * 		tags: ['channel'],
     * 		channel: object
     * }
     */

    this.logger = isFunction(inputOptions.logger) ? inputOptions.logger : function () {
      return null;
    };
    this.recoverStateOnReconnect = this.options.recoverStateOnReconnect;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(StreamChat, [{
    key: "devToken",
    value: function devToken(userID) {
      return DevToken(userID);
    }
  }, {
    key: "getAuthType",
    value: function getAuthType() {
      return this.anonymous ? 'anonymous' : 'jwt';
    }
  }, {
    key: "setBaseURL",
    value: function setBaseURL(baseURL) {
      this.baseURL = baseURL;
      this.wsBaseURL = this.baseURL.replace('http', 'ws');
    }
  }, {
    key: "_setUser",
    value: function _setUser(user) {
      // this one is used by the frontend
      this.user = user; // this one is actually used for requests...

      this._user = _objectSpread$4({}, user);
    }
    /**
    * updateAppSettings - updates application settings
    *
    * @param {AppSettings} options App settings.
    * 		IE: {
     			"apn_config": {
    			"auth_type": "token",
    			"auth_key": fs.readFileSync(
    				'./apn-push-auth-key.p8',
    				'utf-8',
    			),
    			"key_id": "keyid",
    			"team_id": "teamid", //either ALL these 3
    			"notification_template": "notification handlebars template",
    			"bundle_id": "com.apple.your.app",
    			"development": true
    		},
    		"firebase_config": {
    			"server_key": "server key from fcm",
    			"notification_template": "notification handlebars template"
    			"data_template": "data handlebars template"
    		},
    		"webhook_url": "https://acme.com/my/awesome/webhook/"
    	}
    */

  }, {
    key: "updateAppSettings",
    value: function () {
      var _updateAppSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(options) {
        var _options$apn_config;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if ((_options$apn_config = options.apn_config) !== null && _options$apn_config !== void 0 && _options$apn_config.p12_cert) {
                  options.apn_config.p12_cert = Buffer.from(options.apn_config.p12_cert).toString('base64');
                }

                _context3.next = 3;
                return this.patch(this.baseURL + '/app', options);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function updateAppSettings(_x4) {
        return _updateAppSettings.apply(this, arguments);
      }

      return updateAppSettings;
    }()
    /**
     * getAppSettings - retrieves application settings
     */

  }, {
    key: "getAppSettings",
    value: function () {
      var _getAppSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.get(this.baseURL + '/app');

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getAppSettings() {
        return _getAppSettings.apply(this, arguments);
      }

      return getAppSettings;
    }()
    /**
    * testPushSettings - Tests the push settings for a user with a random chat message and the configured push templates
    *
    * @param {string} userID User ID. If user has no devices, it will error
    * @param {TestPushDataInput} [data] Overrides for push templates/message used
    * 		IE: {
    		  messageID: 'id-of-message',//will error if message does not exist
    		  apnTemplate: '{}', //if app doesn't have apn configured it will error
    		  firebaseTemplate: '{}', //if app doesn't have firebase configured it will error
    		  firebaseDataTemplate: '{}', //if app doesn't have firebase configured it will error
    		  skipDevices: true, // skip config/device checks and sending to real devices
    	}
    */

  }, {
    key: "testPushSettings",
    value: function () {
      var _testPushSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5(userID) {
        var data,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                _context5.next = 3;
                return this.post(this.baseURL + '/check_push', _objectSpread$4(_objectSpread$4(_objectSpread$4(_objectSpread$4(_objectSpread$4({
                  user_id: userID
                }, data.messageID ? {
                  message_id: data.messageID
                } : {}), data.apnTemplate ? {
                  apn_template: data.apnTemplate
                } : {}), data.firebaseTemplate ? {
                  firebase_template: data.firebaseTemplate
                } : {}), data.firebaseDataTemplate ? {
                  firebase_data_template: data.firebaseDataTemplate
                } : {}), data.skipDevices ? {
                  skip_devices: true
                } : {}));

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function testPushSettings(_x5) {
        return _testPushSettings.apply(this, arguments);
      }

      return testPushSettings;
    }()
    /**
     * testSQSSettings - Tests that the given or configured SQS configuration is valid
     *
     * @param {string} userID User ID. If user has no devices, it will error
     * @param {TestPushDataInput} [data] Overrides for push templates/message used
     * 		IE: {
    		  messageID: 'id-of-message',//will error if message does not exist
    		  apnTemplate: '{}', //if app doesn't have apn configured it will error
    		  firebaseTemplate: '{}', //if app doesn't have firebase configured it will error
    		  firebaseDataTemplate: '{}', //if app doesn't have firebase configured it will error
    	}
     */

  }, {
    key: "testSQSSettings",
    value: function () {
      var _testSQSSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6() {
        var data,
            _args6 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
                _context6.next = 3;
                return this.post(this.baseURL + '/check_sqs', data);

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function testSQSSettings() {
        return _testSQSSettings.apply(this, arguments);
      }

      return testSQSSettings;
    }()
    /**
     * disconnect - closes the WS connection
     */

  }, {
    key: "disconnect",
    value: function disconnect(timeout) {
      this.logger('info', 'client:disconnect() - Disconnecting the client', {
        tags: ['connection', 'client']
      }); // remove the user specific fields

      delete this.user;
      delete this._user;
      delete this.userID;

      if (this.cleaningIntervalRef != null) {
        clearInterval(this.cleaningIntervalRef);
        this.cleaningIntervalRef = undefined;
      }

      this.anonymous = false;
      this.connectionEstablishedCount = 0;

      for (var _i2 = 0, _Object$values = Object.values(this.activeChannels); _i2 < _Object$values.length; _i2++) {
        var _channel3 = _Object$values[_i2];

        _channel3._disconnect();
      } // ensure we no longer return inactive channels


      this.activeChannels = {}; // reset client state

      this.state = new ClientState(); // reset token manager

      this.tokenManager.reset(); // close the WS connection

      if (this.wsConnection) {
        return this.wsConnection.disconnect(timeout);
      }

      return Promise.resolve();
    }
    /**
     * connectAnonymousUser - Set an anonymous user and open a WebSocket connection
     */

  }, {
    key: "setGuestUser",

    /**
     * setGuestUser - Setup a temporary guest user
     *
     * @param {UserResponse<UserType>} user Data about this user. IE {name: "john"}
     *
     * @return {ConnectAPIResponse<ChannelType, CommandType, UserType>} Returns a promise that resolves when the connection is setup
     */
    value: function () {
      var _setGuestUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee7(user) {
        var response, _response$user, guestUser;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.anonymous = true;
                _context7.prev = 1;
                _context7.next = 4;
                return this.post(this.baseURL + '/guest', {
                  user: user
                });

              case 4:
                response = _context7.sent;
                _context7.next = 11;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                this.anonymous = false;
                throw _context7.t0;

              case 11:
                this.anonymous = false; // eslint-disable-next-line @typescript-eslint/no-unused-vars

                _response$user = response.user, _response$user.created_at, _response$user.updated_at, _response$user.last_active, _response$user.online, guestUser = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_response$user, ["created_at", "updated_at", "last_active", "online"]);
                _context7.next = 15;
                return this.connectUser(guestUser, response.access_token);

              case 15:
                return _context7.abrupt("return", _context7.sent);

              case 16:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));

      function setGuestUser(_x6) {
        return _setGuestUser.apply(this, arguments);
      }

      return setGuestUser;
    }()
    /**
     * createToken - Creates a token to authenticate this user. This function is used server side.
     * The resulting token should be passed to the client side when the users registers or logs in
     *
     * @param {string} userID The User ID
     * @param {number} [exp] The expiration time for the token expressed in the number of seconds since the epoch
     *
     * @return {string} Returns a token
     */

  }, {
    key: "createToken",
    value: function createToken(userID, exp) {
      if (this.secret == null) {
        throw Error("tokens can only be created server-side using the API Secret");
      }

      var extra = {};

      if (exp) {
        extra.exp = exp;
      }

      return JWTUserToken(this.secret, userID, extra, {});
    }
    /**
     * on - Listen to events on all channels and users your watching
     *
     * client.on('message.new', event => {console.log("my new message", event, channel.state.messages)})
     * or
     * client.on(event => {console.log(event.type)})
     *
     * @param {EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType> | string} callbackOrString  The event type to listen for (optional)
     * @param {EventHandler<AttachmentType, ChannelType, CommandType, EventType, MessageType, ReactionType, UserType>} [callbackOrNothing] The callback to call
     *
     * @return {{ unsubscribe: () => void }} Description
     */

  }, {
    key: "on",
    value: function on(callbackOrString, callbackOrNothing) {
      var _this2 = this;

      var key = callbackOrNothing ? callbackOrString : 'all';
      var valid = isValidEventType(key);

      if (!valid) {
        throw Error("Invalid event type ".concat(key));
      }

      var callback = callbackOrNothing ? callbackOrNothing : callbackOrString;

      if (!(key in this.listeners)) {
        this.listeners[key] = [];
      }

      this.logger('info', "Attaching listener for ".concat(key, " event"), {
        tags: ['event', 'client']
      });
      this.listeners[key].push(callback);
      return {
        unsubscribe: function unsubscribe() {
          _this2.listeners[key] = _this2.listeners[key].filter(function (el) {
            return el !== callback;
          });
        }
      };
    }
    /**
     * off - Remove the event handler
     *
     */

  }, {
    key: "off",
    value: function off(callbackOrString, callbackOrNothing) {
      var key = callbackOrNothing ? callbackOrString : 'all';
      var valid = isValidEventType(key);

      if (!valid) {
        throw Error("Invalid event type ".concat(key));
      }

      var callback = callbackOrNothing ? callbackOrNothing : callbackOrString;

      if (!(key in this.listeners)) {
        this.listeners[key] = [];
      }

      this.logger('info', "Removing listener for ".concat(key, " event"), {
        tags: ['event', 'client']
      });
      this.listeners[key] = this.listeners[key].filter(function (value) {
        return value !== callback;
      });
    }
  }, {
    key: "_logApiRequest",
    value: function _logApiRequest(type, url, data, config) {
      this.logger('info', "client: ".concat(type, " - Request - ").concat(url), {
        tags: ['api', 'api_request', 'client'],
        url: url,
        payload: data,
        config: config
      });
    }
  }, {
    key: "_logApiResponse",
    value: function _logApiResponse(type, url, response) {
      this.logger('info', "client:".concat(type, " - Response - url: ").concat(url, " > status ").concat(response.status), {
        tags: ['api', 'api_response', 'client'],
        url: url,
        response: response
      });
    }
  }, {
    key: "_logApiError",
    value: function _logApiError(type, url, error) {
      this.logger('error', "client:".concat(type, " - Error - url: ").concat(url), {
        tags: ['api', 'api_response', 'client'],
        url: url,
        error: error
      });
    }
  }, {
    key: "get",
    value: function get(url, params) {
      return this.doAxiosRequest('get', url, null, {
        params: params
      });
    }
  }, {
    key: "put",
    value: function put(url, data) {
      return this.doAxiosRequest('put', url, data);
    }
  }, {
    key: "post",
    value: function post(url, data) {
      return this.doAxiosRequest('post', url, data);
    }
  }, {
    key: "patch",
    value: function patch(url, data) {
      return this.doAxiosRequest('patch', url, data);
    }
  }, {
    key: "delete",
    value: function _delete(url, params) {
      return this.doAxiosRequest('delete', url, null, {
        params: params
      });
    }
  }, {
    key: "sendFile",
    value: function sendFile(url, uri, name, contentType, user) {
      var data = addFileToFormData(uri, name, contentType);
      if (user != null) data.append('user', JSON.stringify(user));
      return this.doAxiosRequest('post', url, data, {
        headers: data.getHeaders ? data.getHeaders() : {},
        // node vs browser
        config: {
          timeout: 0,
          maxContentLength: Infinity,
          maxBodyLength: Infinity
        }
      });
    }
  }, {
    key: "errorFromResponse",
    value: function errorFromResponse(response) {
      var err;
      err = new Error("StreamChat error HTTP code: ".concat(response.status));

      if (response.data && response.data.code) {
        err = new Error("StreamChat error code ".concat(response.data.code, ": ").concat(response.data.message));
        err.code = response.data.code;
      }

      err.response = response;
      err.status = response.status;
      return err;
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(response) {
      var data = response.data;

      if ((response.status + '')[0] !== '2') {
        throw this.errorFromResponse(response);
      }

      return data;
    }
  }, {
    key: "_handleClientEvent",
    value: function _handleClientEvent(event) {
      var _event$me, _event$me2;

      var client = this;
      this.logger('info', "client:_handleClientEvent - Received event of type { ".concat(event.type, " }"), {
        tags: ['event', 'client'],
        event: event
      }); // update the client.state with any changes to users

      if (event.user && (event.type === 'user.presence.changed' || event.type === 'user.updated')) {
        var _event$user;

        if (((_event$user = event.user) === null || _event$user === void 0 ? void 0 : _event$user.id) === this.userID) {
          this.user = this.user && _objectSpread$4(_objectSpread$4({}, this.user), event.user); // Updating only available properties in _user object.

          Object.keys(event.user).forEach(function (key) {
            if (client._user && key in client._user) {
              // @ts-expect-error
              client._user[key] = event.user[key];
            }
          });
        }

        client.state.updateUser(event.user);

        client._updateUserReferences(event.user);
      }

      if (event.type === 'health.check' && event.me) {
        client.user = event.me;
        client.state.updateUser(event.me);
        client.mutedChannels = event.me.channel_mutes;
        client.mutedUsers = event.me.mutes;
      }

      if (event.channel && event.type === 'notification.message_new') {
        this.configs[event.channel.type] = event.channel.config;
      }

      if (event.type === 'notification.channel_mutes_updated' && (_event$me = event.me) !== null && _event$me !== void 0 && _event$me.channel_mutes) {
        this.mutedChannels = event.me.channel_mutes;
      }

      if (event.type === 'notification.mutes_updated' && (_event$me2 = event.me) !== null && _event$me2 !== void 0 && _event$me2.mutes) {
        this.mutedUsers = event.me.mutes;
      }
    }
  }, {
    key: "_muteStatus",
    value: function _muteStatus(cid) {
      var muteStatus;
      this.mutedChannels.forEach(function (mute) {
        var _mute$channel;

        if (((_mute$channel = mute.channel) === null || _mute$channel === void 0 ? void 0 : _mute$channel.cid) === cid) {
          var muted = true;

          if (mute.expires) {
            muted = new Date(mute.expires).getTime() > new Date().getTime();
          }

          muteStatus = {
            muted: muted,
            createdAt: mute.created_at ? new Date(mute.created_at) : new Date(),
            expiresAt: mute.expires ? new Date(mute.expires) : null
          };
        }
      });

      if (muteStatus) {
        return muteStatus;
      }

      return {
        muted: false,
        createdAt: null,
        expiresAt: null
      };
    }
  }, {
    key: "_updateUserReferences",

    /*
    _updateUserReferences updates the members and watchers of the currently active channels
    that contain this user
    */
    value: function _updateUserReferences(user) {
      var refMap = this.state.userChannelReferences[user.id] || {};
      var refs = Object.keys(refMap);

      for (var _i3 = 0, _refs = refs; _i3 < _refs.length; _i3++) {
        var _channelID = _refs[_i3];
        var c = this.activeChannels[_channelID]; // search the members and watchers and update as needed...

        if (c && c.state) {
          if (c.state.members[user.id]) {
            c.state.members = c.state.members.setIn([user.id, 'user'], user);
          }

          if (c.state.watchers[user.id]) {
            c.state.watchers = c.state.watchers.setIn([user.id, 'user'], user);
          }
        }
      }
    }
  }, {
    key: "connect",
    value: function () {
      var _connect = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee8() {
        var client, warmUpPromise, handshake;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.connecting = true;
                client = this;
                this.failures = 0;

                if (!(client.userID == null || this._user == null)) {
                  _context8.next = 5;
                  break;
                }

                throw Error('Call connectUser or connectAnonymousUser before starting the connection');

              case 5:
                if (!(client.wsBaseURL == null)) {
                  _context8.next = 7;
                  break;
                }

                throw Error('Websocket base url not set');

              case 7:
                if (!(client.clientID == null)) {
                  _context8.next = 9;
                  break;
                }

                throw Error('clientID is not set');

              case 9:
                // The StableWSConnection handles all the reconnection logic.
                this.wsConnection = new StableWSConnection({
                  wsBaseURL: client.wsBaseURL,
                  clientID: client.clientID,
                  userID: client.userID,
                  tokenManager: client.tokenManager,
                  user: this._user,
                  authType: this.getAuthType(),
                  userAgent: this.getUserAgent(),
                  apiKey: this.key,
                  recoverCallback: this.recoverState,
                  messageCallback: this.handleEvent,
                  eventCallback: this.dispatchEvent,
                  logger: this.logger
                });

                if (this.options.warmUp) {
                  warmUpPromise = this.doAxiosRequest('options', this.baseURL + '/connect');
                }

                _context8.next = 13;
                return this.wsConnection.connect();

              case 13:
                handshake = _context8.sent;
                _context8.prev = 14;
                _context8.next = 17;
                return warmUpPromise;

              case 17:
                _context8.next = 22;
                break;

              case 19:
                _context8.prev = 19;
                _context8.t0 = _context8["catch"](14);
                this.logger('error', 'Warmup request failed', {
                  error: _context8.t0
                });

              case 22:
                this.connectionID = this.wsConnection.connectionID;
                return _context8.abrupt("return", handshake);

              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[14, 19]]);
      }));

      function connect() {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
    /**
     * queryUsers - Query users and watch user presence
     *
     * @param {UserFilters<UserType>} filterConditions MongoDB style filter conditions
     * @param {UserSort<UserType>} sort Sort options, for instance [{last_active: -1}].
     * When using multiple fields, make sure you use array of objects to guarantee field order, for instance [{last_active: -1}, {created_at: 1}]
     * @param {UserOptions} options Option object, {presence: true}
     *
     * @return {Promise<APIResponse & { users: Array<UserResponse<UserType>> }>} User Query Response
     */

  }, {
    key: "queryUsers",
    value: function () {
      var _queryUsers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee9(filterConditions) {
        var sort,
            options,
            defaultOptions,
            data,
            _args9 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                sort = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : [];
                options = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : {};
                defaultOptions = {
                  presence: false
                }; // Make sure we wait for the connect promise if there is a pending one

                _context9.next = 5;
                return this.setUserPromise;

              case 5:
                if (!this._hasConnectionID()) {
                  defaultOptions.presence = false;
                } // Return a list of users


                _context9.next = 8;
                return this.get(this.baseURL + '/users', {
                  payload: _objectSpread$4(_objectSpread$4({
                    filter_conditions: filterConditions,
                    sort: normalizeQuerySort(sort)
                  }, defaultOptions), options)
                });

              case 8:
                data = _context9.sent;
                this.state.updateUsers(data.users);
                return _context9.abrupt("return", data);

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function queryUsers(_x7) {
        return _queryUsers.apply(this, arguments);
      }

      return queryUsers;
    }()
    /**
     * queryChannels - Query channels
     *
     * @param {ChannelFilters<ChannelType, CommandType, UserType>} filterConditions object MongoDB style filters
     * @param {ChannelSort<ChannelType>} [sort] Sort options, for instance {created_at: -1}.
     * When using multiple fields, make sure you use array of objects to guarantee field order, for instance [{last_updated: -1}, {created_at: 1}]
     * @param {ChannelOptions} [options] Options object
     *
     * @return {Promise<APIResponse & { channels: Array<ChannelAPIResponse<AttachmentType,ChannelType,CommandType,MessageType,ReactionType,UserType>>}> } search channels response
     */

  }, {
    key: "queryChannels",
    value: function () {
      var _queryChannels = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee10(filterConditions) {
        var sort,
            options,
            defaultOptions,
            payload,
            data,
            channels,
            _iterator,
            _step,
            channelState,
            _iterator2,
            _step2,
            _channelState,
            c,
            _args10 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                sort = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : [];
                options = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : {};
                defaultOptions = {
                  state: true,
                  watch: true,
                  presence: false
                }; // Make sure we wait for the connect promise if there is a pending one

                _context10.next = 5;
                return this.setUserPromise;

              case 5:
                if (!this._hasConnectionID()) {
                  defaultOptions.watch = false;
                } // Return a list of channels


                payload = _objectSpread$4(_objectSpread$4({
                  filter_conditions: filterConditions,
                  sort: normalizeQuerySort(sort)
                }, defaultOptions), options);
                _context10.next = 9;
                return this.post(this.baseURL + '/channels', payload);

              case 9:
                data = _context10.sent;
                channels = []; // update our cache of the configs

                _iterator = _createForOfIteratorHelper$3(data.channels);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    channelState = _step.value;

                    this._addChannelConfig(channelState);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _iterator2 = _createForOfIteratorHelper$3(data.channels);

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    _channelState = _step2.value;
                    c = this.channel(_channelState.channel.type, _channelState.channel.id);
                    c.data = _channelState.channel;
                    c.initialized = true;

                    c._initializeState(_channelState);

                    channels.push(c);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                return _context10.abrupt("return", channels);

              case 16:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function queryChannels(_x8) {
        return _queryChannels.apply(this, arguments);
      }

      return queryChannels;
    }()
    /**
     * search - Query messages
     *
     * @param {ChannelFilters<ChannelType, CommandType, UserType>} filterConditions MongoDB style filter conditions
     * @param {MessageFilters<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType> | string} query search query or object MongoDB style filters
     * @param {SearchOptions} [options] Option object, {user_id: 'tommaso'}
     *
     * @return {Promise<SearchAPIResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>>} search messages response
     */

  }, {
    key: "search",
    value: function () {
      var _search = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee11(filterConditions, query) {
        var options,
            payload,
            _args11 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                options = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : {};
                // Return a list of channels
                payload = _objectSpread$4({
                  filter_conditions: filterConditions
                }, options);

                if (!(typeof query === 'string')) {
                  _context11.next = 6;
                  break;
                }

                payload.query = query;
                _context11.next = 11;
                break;

              case 6:
                if (!(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(query) === 'object')) {
                  _context11.next = 10;
                  break;
                }

                payload.message_filter_conditions = query;
                _context11.next = 11;
                break;

              case 10:
                throw Error("Invalid type ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(query), " for query parameter"));

              case 11:
                _context11.next = 13;
                return this.setUserPromise;

              case 13:
                _context11.next = 15;
                return this.get(this.baseURL + '/search', {
                  payload: payload
                });

              case 15:
                return _context11.abrupt("return", _context11.sent);

              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function search(_x9, _x10) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
    /**
     * addDevice - Adds a push device for a user.
     *
     * @param {string} id the device id
     * @param {'apn' | 'firebase'} push_provider the push provider (apn or firebase)
     * @param {string} [userID] the user id (defaults to current user)
     *
     */

  }, {
    key: "addDevice",
    value: function () {
      var _addDevice = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee12(id, push_provider, userID) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.post(this.baseURL + '/devices', _objectSpread$4({
                  id: id,
                  push_provider: push_provider
                }, userID != null ? {
                  user_id: userID
                } : {}));

              case 2:
                return _context12.abrupt("return", _context12.sent);

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function addDevice(_x11, _x12, _x13) {
        return _addDevice.apply(this, arguments);
      }

      return addDevice;
    }()
    /**
     * getDevices - Returns the devices associated with a current user
     *
     * @param {string} [userID] User ID. Only works on serverside
     *
     * @return {APIResponse & Device<UserType>[]} Array of devices
     */

  }, {
    key: "getDevices",
    value: function () {
      var _getDevices = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee13(userID) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.get(this.baseURL + '/devices', userID ? {
                  user_id: userID
                } : {});

              case 2:
                return _context13.abrupt("return", _context13.sent);

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getDevices(_x14) {
        return _getDevices.apply(this, arguments);
      }

      return getDevices;
    }()
    /**
     * removeDevice - Removes the device with the given id. Clientside users can only delete their own devices
     *
     * @param {string} id The device id
     * @param {string} [userID] The user id. Only specify this for serverside requests
     *
     */

  }, {
    key: "removeDevice",
    value: function () {
      var _removeDevice = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee14(id, userID) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.delete(this.baseURL + '/devices', _objectSpread$4({
                  id: id
                }, userID ? {
                  user_id: userID
                } : {}));

              case 2:
                return _context14.abrupt("return", _context14.sent);

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function removeDevice(_x15, _x16) {
        return _removeDevice.apply(this, arguments);
      }

      return removeDevice;
    }()
  }, {
    key: "_addChannelConfig",
    value: function _addChannelConfig(channelState) {
      this.configs[channelState.channel.type] = channelState.channel.config;
    }
    /**
     * channel - Returns a new channel with the given type, id and custom data
     *
     * If you want to create a unique conversation between 2 or more users; you can leave out the ID parameter and provide the list of members.
     * Make sure to await channel.create() or channel.watch() before accessing channel functions:
     * ie. channel = client.channel("messaging", {members: ["tommaso", "thierry"]})
     * await channel.create() to assign an ID to channel
     *
     * @param {string} channelType The channel type
     * @param {string | ChannelData<ChannelType> | null} [channelIDOrCustom]   The channel ID, you can leave this out if you want to create a conversation channel
     * @param {object} [custom]    Custom data to attach to the channel
     *
     * @return {channel} The channel object, initialize it using channel.watch()
     */

  }, {
    key: "channel",
    value: function channel(channelType, channelIDOrCustom) {
      var custom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!this.userID && !this._isUsingServerAuth()) {
        throw Error('Call connectUser or connectAnonymousUser before creating a channel');
      }

      if (~channelType.indexOf(':')) {
        throw Error("Invalid channel group ".concat(channelType, ", can't contain the : character"));
      } // support channel("messaging", null, {options})
      // support channel("messaging", undefined, {options})
      // support channel("messaging", "", {options})


      if (channelIDOrCustom == null || channelIDOrCustom === '') {
        return new Channel(this, channelType, undefined, custom);
      } // support channel("messaging", {options})


      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(channelIDOrCustom) === 'object') {
        return this.getChannelByMembers(channelType, channelIDOrCustom);
      }

      return this.getChannelById(channelType, channelIDOrCustom, custom);
    }
    /**
     * It's a helper method for `client.channel()` method, used to create unique conversation or
     * channel based on member list instead of id.
     *
     * If the channel already exists in `activeChannels` list, then we simply return it, since that
     * means the same channel was already requested or created.
     *
     * Otherwise we create a new instance of Channel class and return it.
     *
     * @private
     *
     * @param {string} channelType The channel type
     * @param {object} [custom]    Custom data to attach to the channel
     *
     * @return {channel} The channel object, initialize it using channel.watch()
     */

  }, {
    key: "updateUser",

    /**
     * @deprecated Please use upsertUser() function instead.
     *
     * updateUser - Update or Create the given user object
     *
     * @param {UserResponse<UserType>} userObject user object, the only required field is the user id. IE {id: "myuser"} is valid
     *
     * @return {Promise<APIResponse & { users: { [key: string]: UserResponse<UserType> } }>}
     */
    value: function () {
      var _updateUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee15(userObject) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.upsertUsers([userObject]);

              case 2:
                return _context15.abrupt("return", _context15.sent);

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function updateUser(_x17) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
    /**
     * partialUpdateUser - Update the given user object
     *
     * @param {PartialUserUpdate<UserType>} partialUserObject which should contain id and any of "set" or "unset" params;
     * example: {id: "user1", set:{field: value}, unset:["field2"]}
     *
     * @return {Promise<APIResponse & { users: { [key: string]: UserResponse<UserType> } }>} list of updated users
     */

  }, {
    key: "partialUpdateUser",
    value: function () {
      var _partialUpdateUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee16(partialUserObject) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.partialUpdateUsers([partialUserObject]);

              case 2:
                return _context16.abrupt("return", _context16.sent);

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function partialUpdateUser(_x18) {
        return _partialUpdateUser.apply(this, arguments);
      }

      return partialUpdateUser;
    }()
    /**
     * upsertUsers - Batch upsert the list of users
     *
     * @param {UserResponse<UserType>[]} users list of users
     *
     * @return {Promise<APIResponse & { users: { [key: string]: UserResponse<UserType> } }>}
     */

  }, {
    key: "upsertUsers",
    value: function () {
      var _upsertUsers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee17(users) {
        var userMap, _iterator3, _step3, userObject;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                userMap = {};
                _iterator3 = _createForOfIteratorHelper$3(users);
                _context17.prev = 2;

                _iterator3.s();

              case 4:
                if ((_step3 = _iterator3.n()).done) {
                  _context17.next = 11;
                  break;
                }

                userObject = _step3.value;

                if (userObject.id) {
                  _context17.next = 8;
                  break;
                }

                throw Error('User ID is required when updating a user');

              case 8:
                userMap[userObject.id] = userObject;

              case 9:
                _context17.next = 4;
                break;

              case 11:
                _context17.next = 16;
                break;

              case 13:
                _context17.prev = 13;
                _context17.t0 = _context17["catch"](2);

                _iterator3.e(_context17.t0);

              case 16:
                _context17.prev = 16;

                _iterator3.f();

                return _context17.finish(16);

              case 19:
                _context17.next = 21;
                return this.post(this.baseURL + '/users', {
                  users: userMap
                });

              case 21:
                return _context17.abrupt("return", _context17.sent);

              case 22:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[2, 13, 16, 19]]);
      }));

      function upsertUsers(_x19) {
        return _upsertUsers.apply(this, arguments);
      }

      return upsertUsers;
    }()
    /**
     * upsertUser - Update or Create the given user object
     *
     * @param {UserResponse<UserType>} userObject user object, the only required field is the user id. IE {id: "myuser"} is valid
     *
     * @return {Promise<APIResponse & { users: { [key: string]: UserResponse<UserType> } }>}
     */

  }, {
    key: "upsertUser",
    value: function upsertUser(userObject) {
      return this.upsertUsers([userObject]);
    }
    /**
     * @deprecated Please use upsertUsers() function instead.
     *
     * updateUsers - Batch update the list of users
     *
     * @param {UserResponse<UserType>[]} users list of users
     *
     * @return {Promise<APIResponse & { users: { [key: string]: UserResponse<UserType> } }>}
     */

  }, {
    key: "updateUsers",
    value: function updateUsers(users) {
      return this.upsertUsers(users);
    }
    /**
     * partialUpdateUsers - Batch partial update of users
     *
     * @param {PartialUserUpdate<UserType>[]} users list of partial update requests
     *
     * @return {Promise<APIResponse & { users: { [key: string]: UserResponse<UserType> } }>}
     */

  }, {
    key: "partialUpdateUsers",
    value: function () {
      var _partialUpdateUsers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee18(users) {
        var _iterator4, _step4, userObject;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _iterator4 = _createForOfIteratorHelper$3(users);
                _context18.prev = 1;

                _iterator4.s();

              case 3:
                if ((_step4 = _iterator4.n()).done) {
                  _context18.next = 9;
                  break;
                }

                userObject = _step4.value;

                if (userObject.id) {
                  _context18.next = 7;
                  break;
                }

                throw Error('User ID is required when updating a user');

              case 7:
                _context18.next = 3;
                break;

              case 9:
                _context18.next = 14;
                break;

              case 11:
                _context18.prev = 11;
                _context18.t0 = _context18["catch"](1);

                _iterator4.e(_context18.t0);

              case 14:
                _context18.prev = 14;

                _iterator4.f();

                return _context18.finish(14);

              case 17:
                _context18.next = 19;
                return this.patch(this.baseURL + '/users', {
                  users: users
                });

              case 19:
                return _context18.abrupt("return", _context18.sent);

              case 20:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[1, 11, 14, 17]]);
      }));

      function partialUpdateUsers(_x20) {
        return _partialUpdateUsers.apply(this, arguments);
      }

      return partialUpdateUsers;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee19(userID, params) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.delete(this.baseURL + "/users/".concat(userID), params);

              case 2:
                return _context19.abrupt("return", _context19.sent);

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function deleteUser(_x21, _x22) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }, {
    key: "reactivateUser",
    value: function () {
      var _reactivateUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee20(userID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return this.post(this.baseURL + "/users/".concat(userID, "/reactivate"), _objectSpread$4({}, options));

              case 2:
                return _context20.abrupt("return", _context20.sent);

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function reactivateUser(_x23, _x24) {
        return _reactivateUser.apply(this, arguments);
      }

      return reactivateUser;
    }()
  }, {
    key: "deactivateUser",
    value: function () {
      var _deactivateUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee21(userID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.post(this.baseURL + "/users/".concat(userID, "/deactivate"), _objectSpread$4({}, options));

              case 2:
                return _context21.abrupt("return", _context21.sent);

              case 3:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function deactivateUser(_x25, _x26) {
        return _deactivateUser.apply(this, arguments);
      }

      return deactivateUser;
    }()
  }, {
    key: "exportUser",
    value: function () {
      var _exportUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee22(userID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.get(this.baseURL + "/users/".concat(userID, "/export"), _objectSpread$4({}, options));

              case 2:
                return _context22.abrupt("return", _context22.sent);

              case 3:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function exportUser(_x27, _x28) {
        return _exportUser.apply(this, arguments);
      }

      return exportUser;
    }()
    /** banUser - bans a user from all channels
     *
     * @param {string} targetUserID
     * @param {BanUserOptions<UserType>} [options]
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "banUser",
    value: function () {
      var _banUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee23(targetUserID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if ((options === null || options === void 0 ? void 0 : options.user_id) !== undefined) {
                  options.banned_by_id = options.user_id;
                  delete options.user_id;
                  console.warn("banUser: 'user_id' is deprecated, please consider switching to 'banned_by_id'");
                }

                if ((options === null || options === void 0 ? void 0 : options.user) !== undefined) {
                  options.banned_by = options.user;
                  delete options.user;
                  console.warn("banUser: 'user' is deprecated, please consider switching to 'banned_by'");
                }

                _context23.next = 4;
                return this.post(this.baseURL + '/moderation/ban', _objectSpread$4({
                  target_user_id: targetUserID
                }, options));

              case 4:
                return _context23.abrupt("return", _context23.sent);

              case 5:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function banUser(_x29, _x30) {
        return _banUser.apply(this, arguments);
      }

      return banUser;
    }()
    /** unbanUser - revoke global ban for a user
     *
     * @param {string} targetUserID
     * @param {UnBanUserOptions} [options]
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "unbanUser",
    value: function () {
      var _unbanUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee24(targetUserID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this.delete(this.baseURL + '/moderation/ban', _objectSpread$4({
                  target_user_id: targetUserID
                }, options));

              case 2:
                return _context24.abrupt("return", _context24.sent);

              case 3:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function unbanUser(_x31, _x32) {
        return _unbanUser.apply(this, arguments);
      }

      return unbanUser;
    }()
    /** shadowBan - shadow bans a user from all channels
     *
     * @param {string} targetUserID
     * @param {BanUserOptions<UserType>} [options]
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "shadowBan",
    value: function () {
      var _shadowBan = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee25(targetUserID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return this.banUser(targetUserID, _objectSpread$4({
                  shadow: true
                }, options));

              case 2:
                return _context25.abrupt("return", _context25.sent);

              case 3:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function shadowBan(_x33, _x34) {
        return _shadowBan.apply(this, arguments);
      }

      return shadowBan;
    }()
    /** removeShadowBan - revoke global shadow ban for a user
     *
     * @param {string} targetUserID
     * @param {UnBanUserOptions} [options]
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "removeShadowBan",
    value: function () {
      var _removeShadowBan = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee26(targetUserID, options) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this.unbanUser(targetUserID, _objectSpread$4({
                  shadow: true
                }, options));

              case 2:
                return _context26.abrupt("return", _context26.sent);

              case 3:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function removeShadowBan(_x35, _x36) {
        return _removeShadowBan.apply(this, arguments);
      }

      return removeShadowBan;
    }()
    /** muteUser - mutes a user
     *
     * @param {string} targetID
     * @param {string} [userID] Only used with serverside auth
     * @param {MuteUserOptions<UserType>} [options]
     * @returns {Promise<MuteUserResponse<ChannelType, CommandType, UserType>>}
     */

  }, {
    key: "muteUser",
    value: function () {
      var _muteUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee27(targetID, userID) {
        var options,
            _args27 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                options = _args27.length > 2 && _args27[2] !== undefined ? _args27[2] : {};
                _context27.next = 3;
                return this.post(this.baseURL + '/moderation/mute', _objectSpread$4(_objectSpread$4({
                  target_id: targetID
                }, userID ? {
                  user_id: userID
                } : {}), options));

              case 3:
                return _context27.abrupt("return", _context27.sent);

              case 4:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function muteUser(_x37, _x38) {
        return _muteUser.apply(this, arguments);
      }

      return muteUser;
    }()
    /** unmuteUser - unmutes a user
     *
     * @param {string} targetID
     * @param {string} [currentUserID] Only used with serverside auth
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "unmuteUser",
    value: function () {
      var _unmuteUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee28(targetID, currentUserID) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this.post(this.baseURL + '/moderation/unmute', _objectSpread$4({
                  target_id: targetID
                }, currentUserID ? {
                  user_id: currentUserID
                } : {}));

              case 2:
                return _context28.abrupt("return", _context28.sent);

              case 3:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function unmuteUser(_x39, _x40) {
        return _unmuteUser.apply(this, arguments);
      }

      return unmuteUser;
    }()
    /** userMuteStatus - check if a user is muted or not, can be used after setUser() is called
     *
     * @param {string} targetID
     * @returns {boolean}
     */

  }, {
    key: "userMuteStatus",
    value: function userMuteStatus(targetID) {
      if (!this.user || !this.wsPromise) throw new Error('Make sure to await setUser() first.');

      for (var i = 0; i < this.mutedUsers.length; i += 1) {
        if (this.mutedUsers[i].target.id === targetID) return true;
      }

      return false;
    }
    /**
     * flagMessage - flag a message
     * @param {string} targetMessageID
     * @param {string} [options.user_id] currentUserID, only used with serverside auth
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "flagMessage",
    value: function () {
      var _flagMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee29(targetMessageID) {
        var options,
            _args29 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                options = _args29.length > 1 && _args29[1] !== undefined ? _args29[1] : {};
                _context29.next = 3;
                return this.post(this.baseURL + '/moderation/flag', _objectSpread$4({
                  target_message_id: targetMessageID
                }, options));

              case 3:
                return _context29.abrupt("return", _context29.sent);

              case 4:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function flagMessage(_x41) {
        return _flagMessage.apply(this, arguments);
      }

      return flagMessage;
    }()
    /**
     * flagUser - flag a user
     * @param {string} targetID
     * @param {string} [options.user_id] currentUserID, only used with serverside auth
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "flagUser",
    value: function () {
      var _flagUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee30(targetID) {
        var options,
            _args30 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                options = _args30.length > 1 && _args30[1] !== undefined ? _args30[1] : {};
                _context30.next = 3;
                return this.post(this.baseURL + '/moderation/flag', _objectSpread$4({
                  target_user_id: targetID
                }, options));

              case 3:
                return _context30.abrupt("return", _context30.sent);

              case 4:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function flagUser(_x42) {
        return _flagUser.apply(this, arguments);
      }

      return flagUser;
    }()
    /**
     * unflagMessage - unflag a message
     * @param {string} targetMessageID
     * @param {string} [options.user_id] currentUserID, only used with serverside auth
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "unflagMessage",
    value: function () {
      var _unflagMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee31(targetMessageID) {
        var options,
            _args31 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                options = _args31.length > 1 && _args31[1] !== undefined ? _args31[1] : {};
                _context31.next = 3;
                return this.post(this.baseURL + '/moderation/unflag', _objectSpread$4({
                  target_message_id: targetMessageID
                }, options));

              case 3:
                return _context31.abrupt("return", _context31.sent);

              case 4:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function unflagMessage(_x43) {
        return _unflagMessage.apply(this, arguments);
      }

      return unflagMessage;
    }()
    /**
     * unflagUser - unflag a user
     * @param {string} targetID
     * @param {string} [options.user_id] currentUserID, only used with serverside auth
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "unflagUser",
    value: function () {
      var _unflagUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee32(targetID) {
        var options,
            _args32 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                options = _args32.length > 1 && _args32[1] !== undefined ? _args32[1] : {};
                _context32.next = 3;
                return this.post(this.baseURL + '/moderation/unflag', _objectSpread$4({
                  target_user_id: targetID
                }, options));

              case 3:
                return _context32.abrupt("return", _context32.sent);

              case 4:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function unflagUser(_x44) {
        return _unflagUser.apply(this, arguments);
      }

      return unflagUser;
    }()
    /**
     * markAllRead - marks all channels for this user as read
     * @param {MarkAllReadOptions<UserType>} [data]
     *
     * @return {Promise<APIResponse>}
     */

  }, {
    key: "markAllRead",
    value: function () {
      var _markAllRead = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee33() {
        var data,
            _args33 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                data = _args33.length > 0 && _args33[0] !== undefined ? _args33[0] : {};
                _context33.next = 3;
                return this.post(this.baseURL + '/channels/read', _objectSpread$4({}, data));

              case 3:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function markAllRead() {
        return _markAllRead.apply(this, arguments);
      }

      return markAllRead;
    }()
  }, {
    key: "createCommand",
    value: function createCommand(data) {
      return this.post(this.baseURL + '/commands', data);
    }
  }, {
    key: "getCommand",
    value: function getCommand(name) {
      return this.get(this.baseURL + "/commands/".concat(name));
    }
  }, {
    key: "updateCommand",
    value: function updateCommand(name, data) {
      return this.put(this.baseURL + "/commands/".concat(name), data);
    }
  }, {
    key: "deleteCommand",
    value: function deleteCommand(name) {
      return this.delete(this.baseURL + "/commands/".concat(name));
    }
  }, {
    key: "listCommands",
    value: function listCommands() {
      return this.get(this.baseURL + "/commands");
    }
  }, {
    key: "createChannelType",
    value: function createChannelType(data) {
      var channelData = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, {
        commands: ['all']
      }, data);

      return this.post(this.baseURL + '/channeltypes', channelData);
    }
  }, {
    key: "getChannelType",
    value: function getChannelType(channelType) {
      return this.get(this.baseURL + "/channeltypes/".concat(channelType));
    }
  }, {
    key: "updateChannelType",
    value: function updateChannelType(channelType, data) {
      return this.put(this.baseURL + "/channeltypes/".concat(channelType), data);
    }
  }, {
    key: "deleteChannelType",
    value: function deleteChannelType(channelType) {
      return this.delete(this.baseURL + "/channeltypes/".concat(channelType));
    }
  }, {
    key: "listChannelTypes",
    value: function listChannelTypes() {
      return this.get(this.baseURL + "/channeltypes");
    }
    /**
     * translateMessage - adds the translation to the message
     *
     * @param {string} messageId
     * @param {string} language
     *
     * @return {APIResponse & MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>} Response that includes the message
     */

  }, {
    key: "translateMessage",
    value: function () {
      var _translateMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee34(messageId, language) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.next = 2;
                return this.post(this.baseURL + "/messages/".concat(messageId, "/translate"), {
                  language: language
                });

              case 2:
                return _context34.abrupt("return", _context34.sent);

              case 3:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function translateMessage(_x45, _x46) {
        return _translateMessage.apply(this, arguments);
      }

      return translateMessage;
    }()
    /**
     * pinMessage - pins provided message
     * @param {UpdatedMessage<AttachmentType,ChannelType,CommandType,MessageType,ReactionType,UserType>} message object
     * @param {undefined|number|string|Date} timeoutOrExpirationDate expiration date or timeout. Use number type to set timeout in seconds, string or Date to set exact expiration date
     */

  }, {
    key: "pinMessage",
    value: function pinMessage(message, timeoutOrExpirationDate) {
      var pinExpires;

      if (typeof timeoutOrExpirationDate === 'number') {
        var now = new Date();
        now.setSeconds(now.getSeconds() + timeoutOrExpirationDate);
        pinExpires = now.toISOString();
      } else if (isString$1(timeoutOrExpirationDate)) {
        pinExpires = timeoutOrExpirationDate;
      } else if (timeoutOrExpirationDate instanceof Date) {
        pinExpires = timeoutOrExpirationDate.toISOString();
      }

      return this.updateMessage(_objectSpread$4(_objectSpread$4({}, message), {}, {
        pinned: true,
        pin_expires: pinExpires
      }));
    }
    /**
     * unpinMessage - unpins provided message
     * @param {UpdatedMessage<AttachmentType,ChannelType,CommandType,MessageType,ReactionType,UserType>} message object
     */

  }, {
    key: "unpinMessage",
    value: function unpinMessage(message) {
      return this.updateMessage(_objectSpread$4(_objectSpread$4({}, message), {}, {
        pinned: false
      }));
    }
    /**
     * updateMessage - Update the given message
     *
     * @param {Omit<MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType>, 'mentioned_users'> & { mentioned_users?: string[] }} message object, id needs to be specified
     * @param {string | { id: string }} [userId]
     *
     * @return {APIResponse & { message: MessageResponse<AttachmentType, ChannelType, CommandType, MessageType, ReactionType, UserType> }} Response that includes the message
     */

  }, {
    key: "updateMessage",
    value: function () {
      var _updateMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee35(message, userId) {
        var clonedMessage, reservedMessageFields;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (message.id) {
                  _context35.next = 2;
                  break;
                }

                throw Error('Please specify the message id when calling updateMessage');

              case 2:
                clonedMessage = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, message);
                delete clonedMessage.id;
                reservedMessageFields = ['command', 'created_at', 'html', 'latest_reactions', 'own_reactions', 'reaction_counts', 'reply_count', 'type', 'updated_at', 'user'];
                reservedMessageFields.forEach(function (item) {
                  if (clonedMessage[item] != null) {
                    delete clonedMessage[item];
                  }
                });

                if (userId != null) {
                  if (isString$1(userId)) {
                    clonedMessage.user_id = userId;
                  } else {
                    clonedMessage.user = {
                      id: userId.id
                    };
                  }
                }

                _context35.next = 9;
                return this.post(this.baseURL + "/messages/".concat(message.id), {
                  message: clonedMessage
                });

              case 9:
                return _context35.abrupt("return", _context35.sent);

              case 10:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function updateMessage(_x47, _x48) {
        return _updateMessage.apply(this, arguments);
      }

      return updateMessage;
    }()
  }, {
    key: "deleteMessage",
    value: function () {
      var _deleteMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee36(messageID, hardDelete) {
        var params;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                params = {};

                if (hardDelete) {
                  params = {
                    hard: true
                  };
                }

                _context36.next = 4;
                return this.delete(this.baseURL + "/messages/".concat(messageID), params);

              case 4:
                return _context36.abrupt("return", _context36.sent);

              case 5:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function deleteMessage(_x49, _x50) {
        return _deleteMessage.apply(this, arguments);
      }

      return deleteMessage;
    }()
  }, {
    key: "getMessage",
    value: function () {
      var _getMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee37(messageID) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.next = 2;
                return this.get(this.baseURL + "/messages/".concat(messageID));

              case 2:
                return _context37.abrupt("return", _context37.sent);

              case 3:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function getMessage(_x51) {
        return _getMessage.apply(this, arguments);
      }

      return getMessage;
    }()
    /**
     * @deprecated Please use getUserAgent instead
     */

  }, {
    key: "_userAgent",
    value: function _userAgent() {
      return this.getUserAgent();
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return this.userAgent || "stream-chat-javascript-client-".concat(this.node ? 'node' : 'browser', "-", "2.11.5");
    }
  }, {
    key: "setUserAgent",
    value: function setUserAgent(userAgent) {
      this.userAgent = userAgent;
    }
    /**
     * _isUsingServerAuth - Returns true if we're using server side auth
     */

  }, {
    key: "_enrichAxiosOptions",
    value: function _enrichAxiosOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        params: {},
        headers: {},
        config: {}
      };

      var token = this._getToken();

      return _objectSpread$4({
        params: _objectSpread$4(_objectSpread$4({
          user_id: this.userID
        }, options.params), {}, {
          api_key: this.key,
          connection_id: this.connectionID
        }),
        headers: _objectSpread$4({
          Authorization: token,
          'stream-auth-type': this.getAuthType(),
          'x-stream-client': this._userAgent()
        }, options.headers)
      }, options.config);
    }
  }, {
    key: "_getToken",
    value: function _getToken() {
      if (!this.tokenManager || this.anonymous) return null;
      return this.tokenManager.getToken();
    }
  }, {
    key: "_startCleaning",
    value: function _startCleaning() {
      var that = this;

      if (this.cleaningIntervalRef != null) {
        return;
      }

      this.cleaningIntervalRef = setInterval(function () {
        // call clean on the channel, used for calling the stop.typing event etc.
        for (var _i4 = 0, _Object$values2 = Object.values(that.activeChannels); _i4 < _Object$values2.length; _i4++) {
          var _channel4 = _Object$values2[_i4];

          _channel4.clean();
        }
      }, 500);
    }
  }, {
    key: "verifyWebhook",
    value: function verifyWebhook(requestBody, xSignature) {
      return !!this.secret && CheckSignature(requestBody, this.secret, xSignature);
    }
    /** getPermission - gets the definition for a permission
     *
     * @param {string} name
     * @returns {Promise<PermissionAPIResponse>}
     */

  }, {
    key: "getPermission",
    value: function getPermission(name) {
      return this.get("".concat(this.baseURL, "/custom_permission/").concat(name));
    }
    /** createPermission - creates a custom permission
     *
     * @param {CustomPermissionOptions} permissionData the permission data
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "createPermission",
    value: function createPermission(permissionData) {
      return this.post("".concat(this.baseURL, "/custom_permission"), _objectSpread$4({}, permissionData));
    }
    /** updatePermission - updates an existing custom permission
     *
     * @param {string} name
     * @param {CustomPermissionOptions} permissionData the permission data
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "updatePermission",
    value: function updatePermission(name, permissionData) {
      return this.post("".concat(this.baseURL, "/custom_permission/").concat(name), _objectSpread$4({}, permissionData));
    }
    /** deletePermission - deletes a custom permission
     *
     * @param {string} name
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "deletePermission",
    value: function deletePermission(name) {
      return this.delete("".concat(this.baseURL, "/custom_permission/").concat(name));
    }
    /** listPermissions - returns the list of custom permissions for this application
     *
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "listPermissions",
    value: function listPermissions() {
      return this.get("".concat(this.baseURL, "/custom_permission"));
    }
    /** createRole - creates a custom role
     *
     * @param {string} name the new role name
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "createRole",
    value: function createRole(name) {
      return this.post("".concat(this.baseURL, "/custom_role"), {
        name: name
      });
    }
    /** listRoles - returns the list of custom roles for this application
     *
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "listRoles",
    value: function listRoles() {
      return this.get("".concat(this.baseURL, "/custom_role"));
    }
    /** deleteRole - deletes a custom role
     *
     * @param {string} name the role name
     * @returns {Promise<APIResponse>}
     */

  }, {
    key: "deleteRole",
    value: function deleteRole(name) {
      return this.delete("".concat(this.baseURL, "/custom_role/").concat(name));
    }
    /** sync - returns all events that happened for a list of channels since last sync
     * @param {string[]} channel_cids list of channel CIDs
     * @param {string} last_sync_at last time the user was online and in sync. RFC3339 ie. "2020-05-06T15:05:01.207Z"
     */

  }, {
    key: "sync",
    value: function sync(channel_cids, last_sync_at) {
      return this.post("".concat(this.baseURL, "/sync"), {
        channel_cids: channel_cids,
        last_sync_at: last_sync_at
      });
    }
  }, {
    key: "createBlockList",
    value: function createBlockList(blockList) {
      return this.post("".concat(this.baseURL, "/blocklists"), blockList);
    }
  }, {
    key: "listBlockLists",
    value: function listBlockLists() {
      return this.get("".concat(this.baseURL, "/blocklists"));
    }
  }, {
    key: "getBlockList",
    value: function getBlockList(name) {
      return this.get("".concat(this.baseURL, "/blocklists/").concat(name));
    }
  }, {
    key: "updateBlockList",
    value: function updateBlockList(name, data) {
      return this.put("".concat(this.baseURL, "/blocklists/").concat(name), data);
    }
  }, {
    key: "deleteBlockList",
    value: function deleteBlockList(name) {
      return this.delete("".concat(this.baseURL, "/blocklists/").concat(name));
    }
  }, {
    key: "exportChannels",
    value: function exportChannels(request) {
      var payload = {
        channels: request
      };
      return this.post("".concat(this.baseURL, "/export_channels"), payload);
    }
  }, {
    key: "exportChannel",
    value: function exportChannel(request) {
      return this.exportChannels([request]);
    }
  }, {
    key: "getExportChannelStatus",
    value: function getExportChannelStatus(id) {
      return this.get("".concat(this.baseURL, "/export_channels/").concat(id));
    }
  }]);

  return StreamChat;
}();

var Allow = 'Allow';
var Deny = 'Deny';
var AnyResource = ['*'];
var AnyRole = ['*'];
var MaxPriority = 999;
var MinPriority = 1; // deprecated permission object class, you should use the new permission system v2 and use permissions
// defined in BuiltinPermissions to configure your channel types

var Permission = function Permission(name, priority) {
  var resources = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : AnyResource;
  var roles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : AnyRole;
  var owner = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var action = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Allow;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Permission);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "name", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "action", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "owner", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "priority", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "resources", void 0);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(this, "roles", void 0);

  this.name = name;
  this.action = action;
  this.owner = owner;
  this.priority = priority;
  this.resources = resources;
  this.roles = roles;
}; // deprecated

var AllowAll = new Permission('Allow all', MaxPriority, AnyResource, AnyRole, false, Allow); // deprecated

var DenyAll = new Permission('Deny all', MinPriority, AnyResource, AnyRole, false, Deny);
var BuiltinRoles = {
  Admin: 'admin',
  Anonymous: 'anonymous',
  ChannelMember: 'channel_member',
  ChannelModerator: 'channel_moderator',
  Guest: 'guest',
  User: 'user'
};
var BuiltinPermissions = {
  AddLinks: 'Add Links',
  BanUser: 'Ban User',
  CreateChannel: 'Create Channel',
  CreateMessage: 'Create Message',
  CreateReaction: 'Create Reaction',
  DeleteAnyAttachment: 'Delete Any Attachment',
  DeleteAnyChannel: 'Delete Any Channel',
  DeleteAnyMessage: 'Delete Any Message',
  DeleteAnyReaction: 'Delete Any Reaction',
  DeleteOwnAttachment: 'Delete Own Attachment',
  DeleteOwnChannel: 'Delete Own Channel',
  DeleteOwnMessage: 'Delete Own Message',
  DeleteOwnReaction: 'Delete Own Reaction',
  ReadAnyChannel: 'Read Any Channel',
  ReadOwnChannel: 'Read Own Channel',
  RunMessageAction: 'Run Message Action',
  UpdateAnyChannel: 'Update Any Channel',
  UpdateAnyMessage: 'Update Any Message',
  UpdateMembersAnyChannel: 'Update Members Any Channel',
  UpdateMembersOwnChannel: 'Update Members Own Channel',
  UpdateOwnChannel: 'Update Own Channel',
  UpdateOwnMessage: 'Update Own Message',
  UploadAttachment: 'Upload Attachment',
  UseFrozenChannel: 'Send messages and reactions to frozen channels'
};


//# sourceMappingURL=browser.es.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("b639").Buffer, __webpack_require__("4362")))

/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "3fe3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

var ws = null

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket
} else if (typeof global !== 'undefined') {
  ws = global.WebSocket || global.MozWebSocket
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket
}

module.exports = ws

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "4082":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a4d3");

__webpack_require__("c975");

var objectWithoutPropertiesLoose = __webpack_require__("f0e4");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "448a":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("2236");

var iterableToArray = __webpack_require__("11b0");

var unsupportedIterableToArray = __webpack_require__("6613");

var nonIterableSpread = __webpack_require__("0676");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "498a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $trim = __webpack_require__("58a8").trim;
var forcedStringTrimMethod = __webpack_require__("c8d2");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "4a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "4d63":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var inheritIfRequired = __webpack_require__("7156");
var defineProperty = __webpack_require__("9bf2").f;
var getOwnPropertyNames = __webpack_require__("241c").f;
var isRegExp = __webpack_require__("44e7");
var getFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var setInternalState = __webpack_require__("69f3").set;
var setSpecies = __webpack_require__("2626");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a43":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "5bc3":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5f02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6613":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a630");

__webpack_require__("fb6a");

__webpack_require__("b0c0");

__webpack_require__("d3b7");

__webpack_require__("25f0");

__webpack_require__("3ca3");

var arrayLikeToArray = __webpack_require__("5a43");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var objectKeys = __webpack_require__("df75");
var toIndexedObject = __webpack_require__("fc6a");
var propertyIsEnumerable = __webpack_require__("d1e7").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "7037":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("d28b");

__webpack_require__("e260");

__webpack_require__("d3b7");

__webpack_require__("3ca3");

__webpack_require__("ddb0");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7a77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "83b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9152":
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9523":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "970b":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "9b42":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a4d3");

__webpack_require__("e01a");

__webpack_require__("d28b");

__webpack_require__("e260");

__webpack_require__("d3b7");

__webpack_require__("3ca3");

__webpack_require__("ddb0");

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("96cf");

/***/ }),

/***/ "a4b4":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a559":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("cca6");

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var cookies = __webpack_require__("7aac");
var buildURL = __webpack_require__("30b5");
var buildFullPath = __webpack_require__("83b9");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");
var IS_WEBOS_WEBKIT = __webpack_require__("a4b4");
var IS_NODE = __webpack_require__("605d");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b639":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__("1fb5")
var ieee754 = __webpack_require__("9152")
var isArray = __webpack_require__("e3db")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c135":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "c240":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var whitespaces = __webpack_require__("5899");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "c973":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("d3b7");

__webpack_require__("e6cf");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var mergeConfig = __webpack_require__("4a7b");
var defaults = __webpack_require__("2444");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("5f02");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e556":
/***/ (function(module, exports) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f0e4":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c975");

__webpack_require__("b64b");

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5339f287-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chat/Chat.vue?vue&type=template&id=7e1f5607&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tw-w-full tw-h-full tw-relative vuesora-override"},[_c('div',{staticClass:"tw-h-10 tw-w-full tw-border-b tw-border-gray-600 tw-flex tw-flex-row tw-place-items-center"},[(_vm.channel)?_c('a',{staticClass:"tw-no-underline tw-font-semibold tw-ml-4",attrs:{"href":"#"},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleShowMembers($event)}}},[_vm._v(_vm._s(_vm.$_watcher_count)+" ONLINE")]):_vm._e()]),(_vm.showMembers)?_c('div',{staticClass:"cs-members-container tw-absolute tw-top-10 mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto tw-z-40"},[_c('div',{staticClass:"tw-bg-gray-50 tw-p-3"},_vm._l((_vm.$_watchers),function(item){return _c('div',{key:item.id,staticClass:"tw-py-2"},[_c('chat-user',{attrs:{"user":item}})],1)}),0)]):_vm._e(),_c('div',{ref:"messages",staticClass:"cs-messages-container tw-absolute tw-top-10 mt-1 tw-left-0 tw-right-0 tw-overflow-y-auto"},[_c('div',{staticClass:"tw-mt-4"},[_vm._l((_vm.$_messages),function(item){return _c('div',{key:item.id},[_c('chat-message',{attrs:{"is-administrator":_vm.isAdministrator,"message":item,"user-id":_vm.userId}})],1)}),_vm._l((_vm.messageErrors),function(message,index){return _c('div',{key:("error-message-" + index),staticClass:"tw-p-3 tw-text-red-400"},[_vm._v(_vm._s(message))])})],2)]),(_vm.showDialog)?_c('div',{staticClass:"cs-dialog-container tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-z-10"},[_c('div',{staticClass:"tw-w-full tw-h-full tw-relative"},[_c('div',{staticClass:"tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-25 tw-z-20",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.closeDialog()}}}),_c('div',{staticClass:"tw-w-full tw-h-full tw-flex tw-flex-col tw-place-content-center tw-place-items-center"},[_c('div',{staticClass:"cs-dialog-window tw-flex-none tw-w-3/4 tw-bg-white tw-z-30"},[_c('div',{staticClass:"tw-bg-gray-200 tw-py-4 tw-px-3 tw-flex tw-items-center tw-place-content-between"},[_c('span',{staticClass:"tw-font-semibold tw-text-gray-700"},[_vm._v("Delete message?")]),_c('i',{staticClass:"fal fa-times tw-font-semibold tw-cursor-pointer",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.closeDialog()}}})]),_c('div',{staticClass:"tw-p-3"},[_c('p',[_vm._v("This message will be permanently removed!")]),_c('div',{staticClass:"tw-flex tw-items-center tw-mt-2"},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.messageRemove.blockUser),expression:"messageRemove.blockUser",modifiers:{"lazy":true}}],attrs:{"type":"checkbox","id":"block-user"},domProps:{"checked":Array.isArray(_vm.messageRemove.blockUser)?_vm._i(_vm.messageRemove.blockUser,null)>-1:(_vm.messageRemove.blockUser)},on:{"change":function($event){var $$a=_vm.messageRemove.blockUser,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.messageRemove, "blockUser", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.messageRemove, "blockUser", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.messageRemove, "blockUser", $$c)}}}}),_c('label',{staticClass:"tw-ml-1 tw-select-none",attrs:{"for":"block-user"}},[_vm._v("Block "+_vm._s(_vm.messageRemove.userDisplayName))])])]),_c('div',{staticClass:"tw-flex tw-flex-row tw-justify-center tw-py-4 tw-px-3"},[_c('div',{staticClass:"tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-text-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center tw-mr-2",attrs:{"title":"Cancel message edit"},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.closeDialog()}}},[_vm._v("Cancel")]),_c('div',{staticClass:"tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-text-white tw-bg-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center",attrs:{"title":"Save message updates"},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.closeDialog(true)}}},[_vm._v("Ok")])])])])])]):_vm._e(),_c('div',{staticClass:"cs-new-message-container box-border tw-absolute tw-bottom-0 tw-left-0 tw-right-0"},[_c('div',{staticClass:"tw-flex tw-flex-col tw-p-4"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.message),expression:"message"}],attrs:{"placeholder":"Type a message and press enter"},domProps:{"value":(_vm.message)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.sendMessage($event)},"input":function($event){if($event.target.composing){ return; }_vm.message=$event.target.value}}})])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Chat/Chat.vue?vue&type=template&id=7e1f5607&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("07ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__("498a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/stream-chat/dist/browser.es.js
var browser_es = __webpack_require__("36c4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5339f287-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chat/ChatMessage.vue?vue&type=template&id=4f6fe8a6&
var ChatMessagevue_type_template_id_4f6fe8a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cs-message tw-p-3 hover:tw-bg-gray-100 tw-relative"},[(_vm.message.type == 'regular' && _vm.messageEdit.id != _vm.message.id)?_c('div',{staticClass:"tw-flex tw-flex-col tw-max-w-full"},[_c('chat-user',{attrs:{"user":_vm.message.user},scopedSlots:_vm._u([{key:"footer",fn:function(){return [(_vm.$_has_reactions)?_c('div',{staticClass:"tw-inline-flex tw-mt-1"},[_c('div',{staticClass:"tw-flex tw-flex-row tw-rounded-lg tw-border tw-border-gray-400 tw-divide-x tw-divide-gray-400 tw-text-gray-500 tw-cursor-pointer"},_vm._l((_vm.message.reaction_counts),function(count,reaction){return _c('div',{key:("message-reaction-" + reaction),staticClass:"tw-px-2 hover:tw-text-black",attrs:{"title":_vm.getReactionUsers(reaction)},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleMessageReaction(reaction)}}},[_c('i',{class:_vm.getReactionClasses(reaction)}),_c('span',{staticClass:"tw-text-sm tw-text-black tw-ml-1"},[_vm._v(_vm._s(count))])])}),0)]):_vm._e()]},proxy:true}],null,false,172512906)},[_c('span',{staticClass:"tw-mr-1 tw-font-semibold tw-text-sm"},[_vm._v(":")]),_c('span',{staticClass:"tw-whitespace-normal",domProps:{"innerHTML":_vm._s(_vm.getParsedMessage(_vm.message.text))}})]),_c('chat-message-menu',{attrs:{"is-administrator":_vm.isAdministrator,"message":_vm.message,"message-reactions":_vm.messageReactions,"user-id":_vm.userId}})],1):_vm._e(),(_vm.message.type == 'regular' && _vm.messageEdit.id == _vm.message.id)?_c('div',[_c('div',{staticClass:"cs-message-edit"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.messageEdit.text),expression:"messageEdit.text"}],domProps:{"value":(_vm.messageEdit.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.messageEdit, "text", $event.target.value)}}}),_c('div',{staticClass:"tw-flex tw-flex-row tw-justify-end tw-mt-2"},[_c('div',{staticClass:"tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-text-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center tw-mr-2",attrs:{"title":"Cancel message edit"},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.cancelMessageEdit()}}},[_vm._v("Cancel")]),_c('div',{staticClass:"tw-cursor-pointer tw-cursor-pointer tw-rounded-full tw-leading-none tw-font-bold focus:tw-outline-none focus:tw-shadow-outline tw-uppercase tw-border-2 tw-border-blue-600 tw-text-white tw-bg-blue-600 tw-py-2 tw-w-24 tw-flex tw-justify-center",attrs:{"title":"Save message updates"},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.saveMessageEdit()}}},[_vm._v("Save")])])])]):_vm._e(),(_vm.message.type == 'system')?_c('div',{staticClass:"tw-py-2 tw-text-gray-500"},[_vm._v(" "+_vm._s(_vm.message.text)+" ")]):_vm._e()])}
var ChatMessagevue_type_template_id_4f6fe8a6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Chat/ChatMessage.vue?vue&type=template&id=4f6fe8a6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
var es_regexp_constructor = __webpack_require__("4d63");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5339f287-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chat/ChatMessageMenu.vue?vue&type=template&id=04e2a1ee&
var ChatMessageMenuvue_type_template_id_04e2a1ee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cs-message-menu tw-absolute tw-text-base"},[_c('div',{staticClass:"tw-flex tw-flex-row tw-bg-white tw-rounded-lg tw-border tw-border-gray-400 tw-divide-x tw-divide-gray-400 tw-text-gray-500 tw-cursor-pointer"},[_c('div',{staticClass:"tw-px-2 hover:tw-text-black",class:{'tw-text-black': _vm.messageReact},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleMessageReact()}}},[_c('i',{staticClass:"fal fa-smile"})]),_vm._m(0),_c('div',{staticClass:"tw-px-2 hover:tw-text-black",class:{'tw-text-black': _vm.messageMenu},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.toggleMessageMenu()}}},[_c('i',{staticClass:"fal fa-ellipsis-h"})])]),_c('div',{staticClass:"tw-relative"},[(_vm.messageMenu)?_c('div',{staticClass:"tw-mt-1 tw-absolute tw-right-0 tw-flex tw-flex-row tw-bg-white tw-rounded-lg tw-text-gray-500 tw-text-center tw-cursor-pointer tw-text-sm"},[_c('div',{staticClass:"hover:tw-text-black tw-px-2 tw-py-1"},[_vm._v("Pin")]),(_vm.message.user.id == _vm.userId)?_c('div',{staticClass:"hover:tw-text-black tw-px-2 tw-py-1",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.editMessage()}}},[_vm._v("Edit")]):_vm._e(),(_vm.isAdministrator)?_c('div',{staticClass:"hover:tw-text-black tw-px-2 tw-py-1",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.removeMessage()}}},[_vm._v("Remove")]):_vm._e()]):_vm._e(),(_vm.messageReact)?_c('div',{staticClass:"tw-mt-1 tw-absolute tw-right-0 tw-flex tw-flex-row tw-bg-white tw-rounded-lg tw-text-gray-500 tw-text-center space-x-1 tw-px-1"},_vm._l((_vm.messageReactions),function(classes,reaction){return _c('div',{key:("add-reaction-" + reaction),staticClass:"hover:tw-text-black tw-cursor-pointer tw-p-1",on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.reactToMessage(reaction)}}},[_c('i',{class:classes})])}),0):_vm._e()])])}
var ChatMessageMenuvue_type_template_id_04e2a1ee_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tw-px-2 hover:tw-text-black"},[_c('i',{staticClass:"fal fa-reply-all"})])}]


// CONCATENATED MODULE: ./src/components/Chat/ChatMessageMenu.vue?vue&type=template&id=04e2a1ee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chat/ChatMessageMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ChatMessageMenuvue_type_script_lang_js_ = ({
  name: 'ChatMessageMenu',
  props: {
    message: {
      type: Object,
      default: function _default() {
        return {
          id: '',
          type: '',
          text: '',
          user: {
            displayName: '',
            avatarUrl: '',
            profileUrl: '',
            role: '',
            accessLevelName: ''
          }
        };
      }
    },
    messageReactions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    userId: {
      type: String
    },
    isAdministrator: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      messageMenu: false,
      messageReact: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('messageMenuToggled', function (_ref) {
      var message = _ref.message;

      if (message.id != _this.message.id) {
        _this.messageReact = false;
        _this.messageMenu = false;
      }
    });
  },
  methods: {
    toggleMessageMenu: function toggleMessageMenu() {
      this.$root.$emit('messageMenuToggled', {
        message: this.message
      });
      this.messageMenu = !this.messageMenu;
      this.messageReact = false;
    },
    toggleMessageReact: function toggleMessageReact() {
      this.$root.$emit('messageMenuToggled', {
        message: this.message
      });
      this.messageReact = !this.messageReact;
      this.messageMenu = false;
    },
    editMessage: function editMessage() {
      this.$root.$emit('editMessage', {
        message: this.message
      });
    },
    removeMessage: function removeMessage() {
      this.$root.$emit('removeMessage', {
        message: this.message
      });
    },
    reactToMessage: function reactToMessage(reaction) {
      this.$root.$emit('toggleMessageReaction', {
        message: this.message,
        reaction: reaction
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chat/ChatMessageMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chat_ChatMessageMenuvue_type_script_lang_js_ = (ChatMessageMenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Chat/ChatMessageMenu.vue





/* normalize component */

var component = normalizeComponent(
  Chat_ChatMessageMenuvue_type_script_lang_js_,
  ChatMessageMenuvue_type_template_id_04e2a1ee_render,
  ChatMessageMenuvue_type_template_id_04e2a1ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChatMessageMenu = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5339f287-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chat/ChatUser.vue?vue&type=template&id=c6f3b772&
var ChatUservue_type_template_id_c6f3b772_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tw-flex tw-flex-row"},[_c('div',{staticClass:"tw-flex-none tw-mr-1 tw-w-12 tw-h-12 tw-relative tw-overflow-hidden cs-user-avatar",class:_vm.getUserMembershipClass()},[_c('a',{staticClass:"tw-no-underline",attrs:{"href":_vm.user.profileUrl,"target":"_blank"}},[_c('img',{staticClass:"tw-max-w-full tw-h-auto",attrs:{"src":_vm.user.avatarUrl}})])]),_c('div',{staticClass:"tw-mt-2 tw-text-base tw-flex tw-flex-col"},[_c('div',{},[_c('a',{staticClass:"tw-no-underline hover:tw-underline tw-text-black tw-font-semibold tw-text-lg",attrs:{"href":_vm.user.profileUrl,"target":"_blank"}},[_vm._v(_vm._s(_vm.user.displayName))]),(_vm.user.role == 'admin')?_c('span',{staticClass:"tw-ml-1 tw-font-semibold tw-text-sm"},[_vm._v("(Moderator)")]):_vm._e(),_vm._t("default")],2),_vm._t("footer")],2)])}
var ChatUservue_type_template_id_c6f3b772_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Chat/ChatUser.vue?vue&type=template&id=c6f3b772&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chat/ChatUser.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ChatUservue_type_script_lang_js_ = ({
  name: 'ChatUser',
  props: {
    user: {
      type: Object,
      default: function _default() {
        return {
          displayName: '',
          avatarUrl: '',
          profileUrl: '',
          role: '',
          accessLevelName: ''
        };
      }
    }
  },
  methods: {
    getUserMembershipClass: function getUserMembershipClass() {
      return 'cs-membership-' + this.user.accessLevelName;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chat/ChatUser.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chat_ChatUservue_type_script_lang_js_ = (ChatUservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chat/ChatUser.vue





/* normalize component */

var ChatUser_component = normalizeComponent(
  Chat_ChatUservue_type_script_lang_js_,
  ChatUservue_type_template_id_c6f3b772_render,
  ChatUservue_type_template_id_c6f3b772_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChatUser = (ChatUser_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chat/ChatMessage.vue?vue&type=script&lang=js&










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ChatMessagevue_type_script_lang_js_ = ({
  name: 'ChatMessage',
  components: {
    ChatMessageMenu: ChatMessageMenu,
    ChatUser: ChatUser
  },
  props: {
    message: {
      type: Object,
      default: function _default() {
        return {
          id: '',
          type: '',
          text: '',
          user: {
            displayName: '',
            avatarUrl: '',
            profileUrl: '',
            role: '',
            accessLevelName: ''
          },
          own_reactions: [],
          reaction_counts: {}
        };
      }
    },
    userId: {
      type: String
    },
    isAdministrator: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      messageEdit: {
        id: null,
        text: ''
      },
      messageReactions: {
        'thumb': 'fal fa-thumbs-up',
        'heart': 'fal fa-heart',
        'laugh': 'fal fa-laugh',
        'surprised': 'fal fa-surprise',
        'sad': 'fal fa-sad-tear',
        'angry': 'fal fa-angry'
      }
    };
  },
  computed: {
    $_has_reactions: {
      cache: false,
      get: function get() {
        return this.message && this.message.reaction_counts && Object.keys(this.message.reaction_counts).length > 0;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('editMessage', function (payload) {
      if (payload.message.id == _this.message.id) {
        _this.messageEdit = {
          id: payload.message.id,
          text: payload.message.text
        };
      } else {
        _this.cancelMessageEdit();
      }
    });
  },
  methods: {
    getUrlsParsedText: function getUrlsParsedText(text) {
      return text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z09+&@#/%=~_|])/img, '<a href="$1">$1</a>');
    },
    getEmoticonsParsedText: function getEmoticonsParsedText(text) {
      var emoticons = {
        ':)': 'fal fa-smile',
        ':-)': 'fal fa-laugh',
        ':D': 'fal fa-grin-beam',
        ':-|': 'fal fa-grin',
        ':|': 'fal fa-grin',
        ':P': 'fal fa-grin-tongue',
        ':p': 'fal fa-grin-tongue',
        ':(': 'fal fa-frown'
      };
      var patterns = [];
      var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

      for (var i in emoticons) {
        if (emoticons[i]) {
          patterns.push('(' + i.replace(metachars, "\\$&") + ')');
        }
      }

      return text.replace(new RegExp(patterns.join('|'), 'g'), function (match) {
        return typeof emoticons[match] != 'undefined' ? "<i class=\"".concat(emoticons[match], "\"></i>") : match;
      });
    },
    getParsedMessage: function getParsedMessage(text) {
      var urlParsed = this.getUrlsParsedText(text);
      return this.getEmoticonsParsedText(urlParsed);
    },
    cancelMessageEdit: function cancelMessageEdit() {
      this.messageEdit = {
        id: null,
        text: ''
      };
    },
    saveMessageEdit: function saveMessageEdit() {
      this.$root.$emit('updateMessage', {
        message: this.message,
        text: this.messageEdit.text
      });
      this.messageEdit = {
        id: null,
        text: ''
      };
    },
    getReactionClasses: function getReactionClasses(reaction) {
      return this.messageReactions[reaction];
    },
    toggleMessageReaction: function toggleMessageReaction(reaction) {
      this.$root.$emit('toggleMessageReaction', {
        message: this.message,
        reaction: reaction
      });
    },
    hasOwnReaction: function hasOwnReaction(reactionType) {
      var has = false;
      this.message.own_reactions.forEach(function (reaction) {
        has = has || reaction.type == reactionType;
      });
      return has;
    },
    formatReactionUsers: function formatReactionUsers(users, reactionType) {
      var usersString;

      switch (users.length) {
        case 1:
          usersString = users[0];
          break;

        case 2:
          usersString = users[0] + ' and ' + users[1];
          break;

        case 3:
          usersString = users[0] + ', ' + users[1] + ' and ' + users[2];
          break;

        default:
          usersString = users[0] + ', ' + users[1] + ' and ' + (users.length - 2) + ' others';
      }

      if (this.hasOwnReaction(reactionType)) {
        if (users.length == 1) {
          usersString = 'You and ' + usersString;
        } else {
          usersString = 'You, ' + usersString;
        }
      }

      return usersString;
    },
    getReactionUsers: function getReactionUsers(reactionType) {
      var _this2 = this;

      var reactionUsers = [];

      if (this.message.reactions && this.message.reactions.length) {
        reactionUsers = this.message.reactions.filter(function (reaction) {
          return reaction.type == reactionType && reaction.user.id != _this2.userId;
        }).map(function (reaction) {
          return reaction.user.displayName;
        });
      }

      return reactionUsers.length ? this.formatReactionUsers(reactionUsers, reactionType) : 'Fetching user information...';
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chat/ChatMessage.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chat_ChatMessagevue_type_script_lang_js_ = (ChatMessagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chat/ChatMessage.vue





/* normalize component */

var ChatMessage_component = normalizeComponent(
  Chat_ChatMessagevue_type_script_lang_js_,
  ChatMessagevue_type_template_id_4f6fe8a6_render,
  ChatMessagevue_type_template_id_4f6fe8a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChatMessage = (ChatMessage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chat/Chat.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Chatvue_type_script_lang_js_ = ({
  name: 'Chat',
  components: {
    ChatMessage: ChatMessage,
    ChatUser: ChatUser
  },
  props: {
    apiKey: {
      type: String
    },
    token: {
      type: String
    },
    userId: {
      type: String
    },
    channelName: {
      type: String
    },
    isAdministrator: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      message: '',
      messages: [],
      streamClient: null,
      channel: null,
      showMembers: false,
      showDialog: false,
      messageErrors: [],
      messageRemove: {
        id: null,
        userId: null,
        blockUser: false
      },
      channelWatchers: {}
    };
  },
  computed: {
    $_messages: {
      cache: false,
      get: function get() {
        return this.messages;
      }
    },
    $_messages_count: {
      cache: false,
      get: function get() {
        return Object.keys(this.messages).length;
      }
    },
    $_watchers: {
      cache: false,
      get: function get() {
        return this.channelWatchers;
      }
    },
    $_watcher_count: {
      cache: false,
      get: function get() {
        return Object.keys(this.channelWatchers).length;
      }
    },
    $_errors_count: {
      cache: false,
      get: function get() {
        return this.messageErrors.length;
      }
    }
  },
  mounted: function mounted() {
    this.setupChat();
    this.$root.$on('updateMessage', this.updateMessage);
    this.$root.$on('removeMessage', this.removeMessage);
    this.$root.$on('toggleMessageReaction', this.toggleMessageReaction);
  },
  watch: {
    $_messages_count: function $_messages_count() {
      this.scrollMessages();
    },
    $_errors_count: function $_errors_count() {
      this.scrollMessages();
    }
  },
  methods: {
    scrollMessages: function scrollMessages() {
      var container = this.$refs.messages;

      if (Math.ceil(container.scrollHeight - container.scrollTop) === container.clientHeight) {
        this.$nextTick(function () {
          container.scroll({
            top: container.scrollHeight,
            behavior: 'smooth'
          });
        });
      }
    },
    sendMessage: function sendMessage() {
      var _this = this;

      var text = this.message.trim();
      this.message = '';

      if (text) {
        this.channel.sendMessage({
          text: text
        }).then(function () {
          _this.messageErrors = [];
        }).catch(function (_ref) {
          var response = _ref.response;

          _this.errorHandler(response, 'Message send error');
        });
      }
    },
    errorHandler: function errorHandler(response, action) {
      var message = "".concat(action, ", please try again, if the error persists contact support.");

      if (response) {
        var _response$data, _response$data2;

        if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.code) {
          if (response.data.code == 17) {
            message = "".concat(action, ", your account is currently suspended from chat, please contact support.");
          } else {
            message = message + ' Error code: ' + response.data.code;
          }
        } else if ((_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.StatusCode) {
          message = message + ' Error status code: ' + response.data.StatusCode;
        }
      }

      this.messageErrors.push(message);
    },
    setupChat: function setupChat() {
      var _this2 = this;

      this.streamClient = new browser_es["a" /* StreamChat */](this.apiKey, {
        timeout: 6000
      });
      this.streamClient.connectUser({
        id: this.userId
      }, this.token).then(function () {
        _this2.channel = _this2.streamClient.channel('messaging', _this2.channelName, {});
        return _this2.channel.watch();
      }).then(function (state) {
        _this2.fetchWatchers();

        _this2.processMessages(state);

        var greeting = {
          id: 'greeting',
          type: 'system',
          text: 'Welcome to chat!'
        };

        _this2.$set(_this2.messages, greeting.id, greeting);

        _this2.channel.on('user.watching.start', function (_ref2) {
          var user = _ref2.user;

          _this2.$set(_this2.channelWatchers, user.id, user);
        });

        _this2.channel.on('user.watching.stop', function (_ref3) {
          var user = _ref3.user;

          if (_this2.channelWatchers[user.id]) {
            _this2.$delete(_this2.channelWatchers, user.id);
          }
        });

        _this2.channel.on('message.new', _this2.messageUpdateHandler);

        _this2.channel.on('message.updated', _this2.messageUpdateHandler);

        _this2.channel.on('message.deleted', _this2.messageUpdateHandler);

        _this2.channel.on('reaction.new', _this2.messageUpdateHandler);

        _this2.channel.on('reaction.deleted', _this2.messageUpdateHandler); // this.channel.on(event => {
        //     console.log('event', event);
        // });

      });
    },
    fetchWatchers: function fetchWatchers() {
      var _this3 = this;

      var limit = 1000;
      this.channel.query({
        watchers: {
          limit: limit,
          offset: 0
        }
      }).then(function (_ref4) {
        var watchers = _ref4.watchers;

        if (watchers) {
          watchers.forEach(function (user) {
            _this3.$set(_this3.channelWatchers, user.id, user);
          });
        }
      });
    },
    processMessages: function processMessages(_ref5) {
      var _this4 = this;

      var messages = _ref5.messages;
      messages.forEach(function (message) {
        if (message.type == 'regular') {
          var messageCopy = function (_ref6) {
            var id = _ref6.id,
                type = _ref6.type,
                text = _ref6.text;
            return {
              id: id,
              type: type,
              text: text
            };
          }(message);

          var copyUser = function copyUser(_ref7) {
            var id = _ref7.id,
                displayName = _ref7.displayName,
                avatarUrl = _ref7.avatarUrl,
                profileUrl = _ref7.profileUrl,
                role = _ref7.role,
                accessLevelName = _ref7.accessLevelName;
            return {
              id: id,
              displayName: displayName,
              avatarUrl: avatarUrl,
              profileUrl: profileUrl,
              role: role,
              accessLevelName: accessLevelName
            };
          };

          messageCopy.user = copyUser(message.user);
          messageCopy.reaction_counts = _objectSpread2({}, message.reaction_counts);
          messageCopy.own_reactions = message.own_reactions.map(function (_ref8) {
            var type = _ref8.type;
            return {
              type: type
            };
          });
          var messageReactionsCount = Object.values(message.reaction_counts).reduce(function (a, b) {
            return a + b;
          }, 0);
          messageCopy.reactions = [];

          if (message.latest_reactions.length == messageReactionsCount) {
            message.latest_reactions.forEach(function (reaction) {
              messageCopy.reactions.push({
                type: reaction.type,
                user: copyUser(reaction.user)
              });
            }); // } else if (
            //     this.messages[message.id]
            //     && this.messages[message.id].reactions
            //     && this.messages[message.id].reactions.length == messageReactionsCount
            // ) {
            //     messageCopy.reactions = this.messages[message.id].reactions;
          } else {
            _this4.channel.getReactions(message.id, {
              limit: 1000
            }).then(function (_ref9) {
              var reactions = _ref9.reactions;
              reactions.forEach(function (reaction) {
                messageCopy.reactions.push({
                  type: reaction.type,
                  user: copyUser(reaction.user)
                });
              });
            });
          }

          _this4.messages.push(messageCopy);
        }
      });
    },
    processMessageReactions: function processMessageReactions(message) {
      var messageReactionsCount = Object.values(message.reaction_counts).reduce(function (a, b) {
        return a + b;
      }, 0);

      if (message.latest_reactions.length != messageReactionsCount) {
        console.log("Chat::processMessageReactions fetching message [%s] reactions", JSON.stringify(message.id));
        this.channel.getReactions(message.id, {
          limit: 1000
        }).then(function (response) {
          console.log("Chat::processMessageReactions message reactions fetch response: %s", JSON.stringify(response)); // todo - update message latest_reactions with response data
        });
      }
    },
    messageUpdateHandler: function messageUpdateHandler(_ref10) {
      var message = _ref10.message;

      if (message.type == 'regular') {
        this.$set(this.messages, message.id, message);
      } else {
        this.$delete(this.messages, message.id);
      }
    },
    toggleShowMembers: function toggleShowMembers() {
      this.showMembers = !this.showMembers;
    },
    updateMessage: function updateMessage(_ref11) {
      var _this5 = this;

      var message = _ref11.message,
          text = _ref11.text;
      this.streamClient.updateMessage({
        id: message.id,
        text: text
      }).then(function () {
        _this5.messageErrors = [];
      }).catch(function (_ref12) {
        var response = _ref12.response;

        _this5.errorHandler(response, 'Message update error');
      });
    },
    removeMessage: function removeMessage(_ref13) {
      var message = _ref13.message;
      this.messageRemove = {
        id: message.id,
        userId: message.user.id,
        userDisplayName: message.user.displayName,
        allMessages: false,
        blockUser: false
      };
      this.showDialog = true;
    },
    closeDialog: function closeDialog(confirmation) {
      var _this6 = this;

      if (confirmation) {
        this.streamClient.deleteMessage(this.messageRemove.id).then(function () {
          _this6.messageErrors = [];
        }).catch(function (_ref14) {
          var response = _ref14.response;

          _this6.errorHandler(response, 'Message delete error');
        });

        if (this.messageRemove.blockUser) {
          this.channel.banUser(this.messageRemove.userId, {
            banned_by_id: this.userId,
            reason: 'default'
          }).then(function () {
            _this6.messageErrors = [];
          }).catch(function (_ref15) {
            var response = _ref15.response;

            _this6.errorHandler(response, 'User ban error');
          });
        }
      }

      this.showDialog = false;
      this.messageRemove = {
        id: null,
        userId: null,
        userName: null,
        blockUser: false
      };
    },
    hasOwnReaction: function hasOwnReaction(message, reactionType) {
      var has = false;
      message.own_reactions.forEach(function (reaction) {
        has = has || reaction.type == reactionType;
      });
      return has;
    },
    toggleMessageReaction: function toggleMessageReaction(_ref16) {
      var _this7 = this;

      var message = _ref16.message,
          reaction = _ref16.reaction;

      if (this.hasOwnReaction(message, reaction)) {
        this.channel.deleteReaction(message.id, reaction).then(function () {
          _this7.messageErrors = [];
        }).catch(function (_ref17) {
          var response = _ref17.response;

          _this7.errorHandler(response, 'Message reaction remove error');
        });
      } else {
        this.channel.sendReaction(message.id, {
          type: reaction
        }).then(function () {
          _this7.messageErrors = [];
        }).catch(function (_ref18) {
          var response = _ref18.response;

          _this7.errorHandler(response, 'Message reaction send error');
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chat/Chat.vue?vue&type=script&lang=js&
 /* harmony default export */ var Chat_Chatvue_type_script_lang_js_ = (Chatvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Chat/Chat.vue





/* normalize component */

var Chat_component = normalizeComponent(
  Chat_Chatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Chat = (Chat_component.exports);
// CONCATENATED MODULE: ./src/components/index.js

var Components = {
  Chat: Chat
};
/* harmony default export */ var components = (Components);
// EXTERNAL MODULE: ./src/assets/sass/app.scss
var app = __webpack_require__("29d8");

// CONCATENATED MODULE: ./src/index.js





/* harmony default export */ var src_0 = ({
  install: function install(Vue) {
    Object.keys(components).forEach(function (name) {
      Vue.component(name, components[name]);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ }),

/***/ "ff91":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  "use strict";

function immutableInit(config) {

  // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L21
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element');
  var REACT_ELEMENT_TYPE_FALLBACK = 0xeac7;

  var globalConfig = {
    use_static: false
  };
  if (isObject(config)) {
      if (config.use_static !== undefined) {
          globalConfig.use_static = Boolean(config.use_static);
      }
  }

  function isObject(data) {
    return (
      typeof data === 'object' &&
      !Array.isArray(data) &&
      data !== null
    );
  }

  function instantiateEmptyObject(obj) {
      var prototype = Object.getPrototypeOf(obj);
      if (!prototype) {
          return {};
      } else {
          return Object.create(prototype);
      }
  }

  function addPropertyTo(target, methodName, value) {
    Object.defineProperty(target, methodName, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: value
    });
  }

  function banProperty(target, methodName) {
    addPropertyTo(target, methodName, function() {
      throw new ImmutableError("The " + methodName +
        " method cannot be invoked on an Immutable data structure.");
    });
  }

  var immutabilityTag = "__immutable_invariants_hold";

  function addImmutabilityTag(target) {
    addPropertyTo(target, immutabilityTag, true);
  }

  function isImmutable(target) {
    if (typeof target === "object") {
      return target === null || Boolean(
        Object.getOwnPropertyDescriptor(target, immutabilityTag)
      );
    } else {
      // In JavaScript, only objects are even potentially mutable.
      // strings, numbers, null, and undefined are all naturally immutable.
      return true;
    }
  }

  function isEqual(a, b) {
    // Avoid false positives due to (NaN !== NaN) evaluating to true
    return (a === b || (a !== a && b !== b));
  }

  function isMergableObject(target) {
    return target !== null && typeof target === "object" && !(Array.isArray(target)) && !(target instanceof Date);
  }

  var mutatingObjectMethods = [
    "setPrototypeOf"
  ];

  var nonMutatingObjectMethods = [
    "keys"
  ];

  var mutatingArrayMethods = mutatingObjectMethods.concat([
    "push", "pop", "sort", "splice", "shift", "unshift", "reverse"
  ]);

  var nonMutatingArrayMethods = nonMutatingObjectMethods.concat([
    "map", "filter", "slice", "concat", "reduce", "reduceRight"
  ]);

  var mutatingDateMethods = mutatingObjectMethods.concat([
    "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds",
    "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes",
    "setUTCMonth", "setUTCSeconds", "setYear"
  ]);

  function ImmutableError(message) {
    this.name = 'MyError';
    this.message = message;
    this.stack = (new Error()).stack;
  }
  ImmutableError.prototype = new Error();
  ImmutableError.prototype.constructor = Error;

  function makeImmutable(obj, bannedMethods) {
    // Tag it so we can quickly tell it's immutable later.
    addImmutabilityTag(obj);

    if (true) {
      // Make all mutating methods throw exceptions.
      for (var index in bannedMethods) {
        if (bannedMethods.hasOwnProperty(index)) {
          banProperty(obj, bannedMethods[index]);
        }
      }

      // Freeze it and return it.
      Object.freeze(obj);
    }

    return obj;
  }

  function makeMethodReturnImmutable(obj, methodName) {
    var currentMethod = obj[methodName];

    addPropertyTo(obj, methodName, function() {
      return Immutable(currentMethod.apply(obj, arguments));
    });
  }

  function arraySet(idx, value, config) {
    var deep          = config && config.deep;

    if (idx in this) {
      if (deep && this[idx] !== value && isMergableObject(value) && isMergableObject(this[idx])) {
        value = Immutable.merge(this[idx], value, {deep: true, mode: 'replace'});
      }
      if (isEqual(this[idx], value)) {
        return this;
      }
    }

    var mutable = asMutableArray.call(this);
    mutable[idx] = Immutable(value);
    return makeImmutableArray(mutable);
  }

  var immutableEmptyArray = Immutable([]);

  function arraySetIn(pth, value, config) {
    var head = pth[0];

    if (pth.length === 1) {
      return arraySet.call(this, head, value, config);
    } else {
      var tail = pth.slice(1);
      var thisHead = this[head];
      var newValue;

      if (typeof(thisHead) === "object" && thisHead !== null) {
        // Might (validly) be object or array
        newValue = Immutable.setIn(thisHead, tail, value);
      } else {
        var nextHead = tail[0];
        // If the next path part is a number, then we are setting into an array, else an object.
        if (nextHead !== '' && isFinite(nextHead)) {
          newValue = arraySetIn.call(immutableEmptyArray, tail, value);
        } else {
          newValue = objectSetIn.call(immutableEmptyObject, tail, value);
        }
      }

      if (head in this && thisHead === newValue) {
        return this;
      }

      var mutable = asMutableArray.call(this);
      mutable[head] = newValue;
      return makeImmutableArray(mutable);
    }
  }

  function makeImmutableArray(array) {
    // Don't change their implementations, but wrap these functions to make sure
    // they always return an immutable value.
    for (var index in nonMutatingArrayMethods) {
      if (nonMutatingArrayMethods.hasOwnProperty(index)) {
        var methodName = nonMutatingArrayMethods[index];
        makeMethodReturnImmutable(array, methodName);
      }
    }

    if (!globalConfig.use_static) {
      addPropertyTo(array, "flatMap",  flatMap);
      addPropertyTo(array, "asObject", asObject);
      addPropertyTo(array, "asMutable", asMutableArray);
      addPropertyTo(array, "set", arraySet);
      addPropertyTo(array, "setIn", arraySetIn);
      addPropertyTo(array, "update", update);
      addPropertyTo(array, "updateIn", updateIn);
      addPropertyTo(array, "getIn", getIn);
    }

    for(var i = 0, length = array.length; i < length; i++) {
      array[i] = Immutable(array[i]);
    }

    return makeImmutable(array, mutatingArrayMethods);
  }

  function makeImmutableDate(date) {
    if (!globalConfig.use_static) {
      addPropertyTo(date, "asMutable", asMutableDate);
    }

    return makeImmutable(date, mutatingDateMethods);
  }

  function asMutableDate() {
    return new Date(this.getTime());
  }

  /**
   * Effectively performs a map() over the elements in the array, using the
   * provided iterator, except that whenever the iterator returns an array, that
   * array's elements are added to the final result instead of the array itself.
   *
   * @param {function} iterator - The iterator function that will be invoked on each element in the array. It will receive three arguments: the current value, the current index, and the current object.
   */
  function flatMap(iterator) {
    // Calling .flatMap() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    var result = [],
        length = this.length,
        index;

    for (index = 0; index < length; index++) {
      var iteratorResult = iterator(this[index], index, this);

      if (Array.isArray(iteratorResult)) {
        // Concatenate Array results into the return value we're building up.
        result.push.apply(result, iteratorResult);
      } else {
        // Handle non-Array results the same way map() does.
        result.push(iteratorResult);
      }
    }

    return makeImmutableArray(result);
  }

  /**
   * Returns an Immutable copy of the object without the given keys included.
   *
   * @param {array} keysToRemove - A list of strings representing the keys to exclude in the return value. Instead of providing a single array, this method can also be called by passing multiple strings as separate arguments.
   */
  function without(remove) {
    // Calling .without() with no arguments is a no-op. Don't bother cloning.
    if (typeof remove === "undefined" && arguments.length === 0) {
      return this;
    }

    if (typeof remove !== "function") {
      // If we weren't given an array, use the arguments list.
      var keysToRemoveArray = (Array.isArray(remove)) ?
         remove.slice() : Array.prototype.slice.call(arguments);

      // Convert numeric keys to strings since that's how they'll
      // come from the enumeration of the object.
      keysToRemoveArray.forEach(function(el, idx, arr) {
        if(typeof(el) === "number") {
          arr[idx] = el.toString();
        }
      });

      remove = function(val, key) {
        return keysToRemoveArray.indexOf(key) !== -1;
      };
    }

    var result = instantiateEmptyObject(this);

    for (var key in this) {
      if (this.hasOwnProperty(key) && remove(this[key], key) === false) {
        result[key] = this[key];
      }
    }

    return makeImmutableObject(result);
  }

  function asMutableArray(opts) {
    var result = [], i, length;

    if(opts && opts.deep) {
      for(i = 0, length = this.length; i < length; i++) {
        result.push(asDeepMutable(this[i]));
      }
    } else {
      for(i = 0, length = this.length; i < length; i++) {
        result.push(this[i]);
      }
    }

    return result;
  }

  /**
   * Effectively performs a [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) over the elements in the array, expecting that the iterator function
   * will return an array of two elements - the first representing a key, the other
   * a value. Then returns an Immutable Object constructed of those keys and values.
   *
   * @param {function} iterator - A function which should return an array of two elements - the first representing the desired key, the other the desired value.
   */
  function asObject(iterator) {
    // If no iterator was provided, assume the identity function
    // (suggesting this array is already a list of key/value pairs.)
    if (typeof iterator !== "function") {
      iterator = function(value) { return value; };
    }

    var result = {},
        length = this.length,
        index;

    for (index = 0; index < length; index++) {
      var pair  = iterator(this[index], index, this),
          key   = pair[0],
          value = pair[1];

      result[key] = value;
    }

    return makeImmutableObject(result);
  }

  function asDeepMutable(obj) {
    if (
      (!obj) ||
      (typeof obj !== 'object') ||
      (!Object.getOwnPropertyDescriptor(obj, immutabilityTag)) ||
      (obj instanceof Date)
    ) { return obj; }
    return Immutable.asMutable(obj, {deep: true});
  }

  function quickCopy(src, dest) {
    for (var key in src) {
      if (Object.getOwnPropertyDescriptor(src, key)) {
        dest[key] = src[key];
      }
    }

    return dest;
  }

  /**
   * Returns an Immutable Object containing the properties and values of both
   * this object and the provided object, prioritizing the provided object's
   * values whenever the same key is present in both objects.
   *
   * @param {object} other - The other object to merge. Multiple objects can be passed as an array. In such a case, the later an object appears in that list, the higher its priority.
   * @param {object} config - Optional config object that contains settings. Supported settings are: {deep: true} for deep merge and {merger: mergerFunc} where mergerFunc is a function
   *                          that takes a property from both objects. If anything is returned it overrides the normal merge behaviour.
   */
  function merge(other, config) {
    // Calling .merge() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    if (other === null || (typeof other !== "object")) {
      throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + JSON.stringify(other));
    }

    var receivedArray = (Array.isArray(other)),
        deep          = config && config.deep,
        mode          = config && config.mode || 'merge',
        merger        = config && config.merger,
        result;

    // Use the given key to extract a value from the given object, then place
    // that value in the result object under the same key. If that resulted
    // in a change from this object's value at that key, set anyChanges = true.
    function addToResult(currentObj, otherObj, key) {
      var immutableValue = Immutable(otherObj[key]);
      var mergerResult = merger && merger(currentObj[key], immutableValue, config);
      var currentValue = currentObj[key];

      if ((result !== undefined) ||
        (mergerResult !== undefined) ||
        (!currentObj.hasOwnProperty(key)) ||
        !isEqual(immutableValue, currentValue)) {

        var newValue;

        if (mergerResult !== undefined) {
          newValue = mergerResult;
        } else if (deep && isMergableObject(currentValue) && isMergableObject(immutableValue)) {
          newValue = Immutable.merge(currentValue, immutableValue, config);
        } else {
          newValue = immutableValue;
        }

        if (!isEqual(currentValue, newValue) || !currentObj.hasOwnProperty(key)) {
          if (result === undefined) {
            // Make a shallow clone of the current object.
            result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
          }

          result[key] = newValue;
        }
      }
    }

    function clearDroppedKeys(currentObj, otherObj) {
      for (var key in currentObj) {
        if (!otherObj.hasOwnProperty(key)) {
          if (result === undefined) {
            // Make a shallow clone of the current object.
            result = quickCopy(currentObj, instantiateEmptyObject(currentObj));
          }
          delete result[key];
        }
      }
    }

    var key;

    // Achieve prioritization by overriding previous values that get in the way.
    if (!receivedArray) {
      // The most common use case: just merge one object into the existing one.
      for (key in other) {
        if (Object.getOwnPropertyDescriptor(other, key)) {
          addToResult(this, other, key);
        }
      }
      if (mode === 'replace') {
        clearDroppedKeys(this, other);
      }
    } else {
      // We also accept an Array
      for (var index = 0, length = other.length; index < length; index++) {
        var otherFromArray = other[index];

        for (key in otherFromArray) {
          if (otherFromArray.hasOwnProperty(key)) {
            addToResult(result !== undefined ? result : this, otherFromArray, key);
          }
        }
      }
    }

    if (result === undefined) {
      return this;
    } else {
      return makeImmutableObject(result);
    }
  }

  function objectReplace(value, config) {
    var deep          = config && config.deep;

    // Calling .replace() with no arguments is a no-op. Don't bother cloning.
    if (arguments.length === 0) {
      return this;
    }

    if (value === null || typeof value !== "object") {
      throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + JSON.stringify(value));
    }

    return Immutable.merge(this, value, {deep: deep, mode: 'replace'});
  }

  var immutableEmptyObject = Immutable({});

  function objectSetIn(path, value, config) {
    if (!(Array.isArray(path)) || path.length === 0) {
      throw new TypeError("The first argument to Immutable#setIn must be an array containing at least one \"key\" string.");
    }

    var head = path[0];
    if (path.length === 1) {
      return objectSet.call(this, head, value, config);
    }

    var tail = path.slice(1);
    var newValue;
    var thisHead = this[head];

    if (this.hasOwnProperty(head) && typeof(thisHead) === "object" && thisHead !== null) {
      // Might (validly) be object or array
      newValue = Immutable.setIn(thisHead, tail, value);
    } else {
      newValue = objectSetIn.call(immutableEmptyObject, tail, value);
    }

    if (this.hasOwnProperty(head) && thisHead === newValue) {
      return this;
    }

    var mutable = quickCopy(this, instantiateEmptyObject(this));
    mutable[head] = newValue;
    return makeImmutableObject(mutable);
  }

  function objectSet(property, value, config) {
    var deep          = config && config.deep;

    if (this.hasOwnProperty(property)) {
      if (deep && this[property] !== value && isMergableObject(value) && isMergableObject(this[property])) {
        value = Immutable.merge(this[property], value, {deep: true, mode: 'replace'});
      }
      if (isEqual(this[property], value)) {
        return this;
      }
    }

    var mutable = quickCopy(this, instantiateEmptyObject(this));
    mutable[property] = Immutable(value);
    return makeImmutableObject(mutable);
  }

  function update(property, updater) {
    var restArgs = Array.prototype.slice.call(arguments, 2);
    var initialVal = this[property];
    return Immutable.set(this, property, updater.apply(initialVal, [initialVal].concat(restArgs)));
  }

  function getInPath(obj, path) {
    /*jshint eqnull:true */
    for (var i = 0, l = path.length; obj != null && i < l; i++) {
      obj = obj[path[i]];
    }

    return (i && i == l) ? obj : undefined;
  }

  function updateIn(path, updater) {
    var restArgs = Array.prototype.slice.call(arguments, 2);
    var initialVal = getInPath(this, path);

    return Immutable.setIn(this, path, updater.apply(initialVal, [initialVal].concat(restArgs)));
  }

  function getIn(path, defaultValue) {
    var value = getInPath(this, path);
    return value === undefined ? defaultValue : value;
  }

  function asMutableObject(opts) {
    var result = instantiateEmptyObject(this), key;

    if(opts && opts.deep) {
      for (key in this) {
        if (this.hasOwnProperty(key)) {
          result[key] = asDeepMutable(this[key]);
        }
      }
    } else {
      for (key in this) {
        if (this.hasOwnProperty(key)) {
          result[key] = this[key];
        }
      }
    }

    return result;
  }

  // Creates plain object to be used for cloning
  function instantiatePlainObject() {
    return {};
  }

  // Finalizes an object with immutable methods, freezes it, and returns it.
  function makeImmutableObject(obj) {
    if (!globalConfig.use_static) {
      addPropertyTo(obj, "merge", merge);
      addPropertyTo(obj, "replace", objectReplace);
      addPropertyTo(obj, "without", without);
      addPropertyTo(obj, "asMutable", asMutableObject);
      addPropertyTo(obj, "set", objectSet);
      addPropertyTo(obj, "setIn", objectSetIn);
      addPropertyTo(obj, "update", update);
      addPropertyTo(obj, "updateIn", updateIn);
      addPropertyTo(obj, "getIn", getIn);
    }

    return makeImmutable(obj, mutatingObjectMethods);
  }

  // Returns true if object is a valid react element
  // https://github.com/facebook/react/blob/v15.0.1/src/isomorphic/classic/element/ReactElement.js#L326
  function isReactElement(obj) {
    return typeof obj === 'object' &&
           obj !== null &&
           (obj.$$typeof === REACT_ELEMENT_TYPE_FALLBACK || obj.$$typeof === REACT_ELEMENT_TYPE);
  }

  function isFileObject(obj) {
    return typeof File !== 'undefined' &&
           obj instanceof File;
  }

  function isBlobObject(obj) {
    return typeof Blob !== 'undefined' &&
           obj instanceof Blob;
  }

  function isPromise(obj) {
    return typeof obj === 'object' &&
           typeof obj.then === 'function';
  }

  function isError(obj) {
    return obj instanceof Error;
  }

  function Immutable(obj, options, stackRemaining) {
    if (isImmutable(obj) || isReactElement(obj) || isFileObject(obj) || isBlobObject(obj) || isError(obj)) {
      return obj;
    } else if (isPromise(obj)) {
      return obj.then(Immutable);
    } else if (Array.isArray(obj)) {
      return makeImmutableArray(obj.slice());
    } else if (obj instanceof Date) {
      return makeImmutableDate(new Date(obj.getTime()));
    } else {
      // Don't freeze the object we were given; make a clone and use that.
      var prototype = options && options.prototype;
      var instantiateEmptyObject =
        (!prototype || prototype === Object.prototype) ?
          instantiatePlainObject : (function() { return Object.create(prototype); });
      var clone = instantiateEmptyObject();

      if (true) {
        /*jshint eqnull:true */
        if (stackRemaining == null) {
          stackRemaining = 64;
        }
        if (stackRemaining <= 0) {
          throw new ImmutableError("Attempt to construct Immutable from a deeply nested object was detected." +
            " Have you tried to wrap an object with circular references (e.g. React element)?" +
            " See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");
        }
        stackRemaining -= 1;
      }

      for (var key in obj) {
        if (Object.getOwnPropertyDescriptor(obj, key)) {
          clone[key] = Immutable(obj[key], undefined, stackRemaining);
        }
      }

      return makeImmutableObject(clone);
    }
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  function toStatic(fn) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      return fn.apply(self, args);
    }

    return staticWrapper;
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  // with the additional condition of choosing which function to call depending
  // if argument is an array or an object.
  function toStaticObjectOrArray(fnObject, fnArray) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      if (Array.isArray(self)) {
          return fnArray.apply(self, args);
      } else {
          return fnObject.apply(self, args);
      }
    }

    return staticWrapper;
  }

  // Wrapper to allow the use of object methods as static methods of Immutable.
  // with the additional condition of choosing which function to call depending
  // if argument is an array or an object or a date.
  function toStaticObjectOrDateOrArray(fnObject, fnArray, fnDate) {
    function staticWrapper() {
      var args = [].slice.call(arguments);
      var self = args.shift();
      if (Array.isArray(self)) {
          return fnArray.apply(self, args);
      } else if (self instanceof Date) {
          return fnDate.apply(self, args);
      } else {
          return fnObject.apply(self, args);
      }
    }

    return staticWrapper;
  }

  // Export the library
  Immutable.from           = Immutable;
  Immutable.isImmutable    = isImmutable;
  Immutable.ImmutableError = ImmutableError;
  Immutable.merge          = toStatic(merge);
  Immutable.replace        = toStatic(objectReplace);
  Immutable.without        = toStatic(without);
  Immutable.asMutable      = toStaticObjectOrDateOrArray(asMutableObject, asMutableArray, asMutableDate);
  Immutable.set            = toStaticObjectOrArray(objectSet, arraySet);
  Immutable.setIn          = toStaticObjectOrArray(objectSetIn, arraySetIn);
  Immutable.update         = toStatic(update);
  Immutable.updateIn       = toStatic(updateIn);
  Immutable.getIn          = toStatic(getIn);
  Immutable.flatMap        = toStatic(flatMap);
  Immutable.asObject       = toStatic(asObject);
  if (!globalConfig.use_static) {
      Immutable.static = immutableInit({
          use_static: true
      });
  }

  Object.freeze(Immutable);

  return Immutable;
}

  var Immutable = immutableInit();
  /* istanbul ignore if */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Immutable;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();


/***/ })

/******/ })["default"];
//# sourceMappingURL=chatsora.common.js.map