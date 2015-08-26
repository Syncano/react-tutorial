(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react/addons"), require("velocity-animate"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "react/addons", "velocity-animate"], factory);
	else if(typeof exports === 'object')
		exports["ReactVelocityTransitionGroup"] = factory(require("lodash"), require("react/addons"), require("velocity-animate"));
	else
		root["ReactVelocityTransitionGroup"] = factory(root["_"], root["React"], root["Velocity"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(1)['default'];
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _libReactVelocityTransitionGroup = __webpack_require__(6);
	
	var _libReactVelocityTransitionGroup2 = _interopRequireDefault(_libReactVelocityTransitionGroup);

	exports['default'] = _libReactVelocityTransitionGroup2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}
	
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}
	
	var $ = module.exports = __webpack_require__(4)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(7)['default'];
	
	var _Object$defineProperty = __webpack_require__(1)['default'];
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _lodash = __webpack_require__(14);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactAddons = __webpack_require__(15);
	
	var _reactAddons2 = _interopRequireDefault(_reactAddons);
	
	var _propTypes = __webpack_require__(16);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ReactVelocityTransitionGroupChild = __webpack_require__(17);
	
	var _ReactVelocityTransitionGroupChild2 = _interopRequireDefault(_ReactVelocityTransitionGroupChild);
	
	var ReactTransitionGroup = _reactAddons2['default'].addons.TransitionGroup;
	
	var allowedChildProps = ['appear', 'enter', 'leave', 'easing', 'delay', 'duration', 'options'];
	
	var ReactVelocityTransitionGroup = _reactAddons2['default'].createClass({
	  displayName: 'ReactVelocityTransitionGroup',
	
	  type: 'ReactTransitionGroup',
	  propTypes: (0, _propTypes2['default'])(),
	
	  _wrapChild: function _wrapChild(child) {
	    var childProps = _lodash2['default'].extend({}, _lodash2['default'].pick(this.props, allowedChildProps));
	    return _reactAddons2['default'].createElement(
	      _ReactVelocityTransitionGroupChild2['default'],
	      childProps,
	      child
	    );
	  },
	
	  render: function render() {
	    return _reactAddons2['default'].createElement(ReactTransitionGroup, _extends({}, this.props, { childFactory: this._wrapChild }));
	  }
	});
	
	exports['default'] = ReactVelocityTransitionGroup;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(8)["default"];
	
	exports["default"] = _Object$assign || function (target) {
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
	
	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	module.exports = __webpack_require__(3).core.Object.assign;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(11);
	$def($def.S, 'Object', {assign: __webpack_require__(12)});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(3)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(3)
	  , enumKeys = __webpack_require__(13);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = Object($.assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = $.ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(3);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(1)['default'];
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _reactAddons = __webpack_require__(15);
	
	var _reactAddons2 = _interopRequireDefault(_reactAddons);
	
	var propTypes = function propTypes() {
	  return {
	    appear: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.string, _reactAddons2['default'].PropTypes.object, _reactAddons2['default'].PropTypes.array]),
	    enter: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.string, _reactAddons2['default'].PropTypes.object, _reactAddons2['default'].PropTypes.array]),
	    leave: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.string, _reactAddons2['default'].PropTypes.object, _reactAddons2['default'].PropTypes.array]),
	    easing: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.string, _reactAddons2['default'].PropTypes.array]),
	    delay: _reactAddons2['default'].PropTypes.number,
	    duration: _reactAddons2['default'].PropTypes.number,
	    options: _reactAddons2['default'].PropTypes.object
	  };
	};
	
	exports['default'] = propTypes;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(1)['default'];
	
	var _Object$assign = __webpack_require__(8)['default'];
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _lodash = __webpack_require__(14);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactAddons = __webpack_require__(15);
	
	var _reactAddons2 = _interopRequireDefault(_reactAddons);
	
	var _velocityAnimate = __webpack_require__(18);
	
	var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);
	
	var _propTypes = __webpack_require__(16);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var ReactVelocityTransitionGroupChild = _reactAddons2['default'].createClass({
	  displayName: 'ReactVelocityTransitionGroupChild',
	
	  propTypes: (0, _propTypes2['default'])(),
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      options: {}
	    };
	  },
	
	  _transition: function _transition(transition, doneCallback) {
	    var node = _reactAddons2['default'].findDOMNode(this);
	
	    var options = _Object$assign({}, {
	      duration: this.props.duration,
	      complete: doneCallback,
	      easing: this.props.easing
	    }, this.props.options);
	
	    (0, _velocityAnimate2['default'])(node, transition, options);
	  },
	
	  componentWillAppear: function componentWillAppear(done) {
	    if (this.props.appear) {
	      this._transition(this.props.appear, done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    var transition = this.props.enter;
	
	    if (_lodash2['default'].isUndefined(transition)) {
	      transition = this.props.appear;
	    }
	
	    if (transition) {
	      this._transition(transition, done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (this.props.leave) {
	      this._transition(this.props.leave, done);
	    } else {
	      done();
	    }
	  },
	
	  render: function render() {
	    return _reactAddons2['default'].Children.only(this.props.children);
	  }
	});
	
	exports['default'] = ReactVelocityTransitionGroupChild;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ReactVelocityTransitionGroup.map