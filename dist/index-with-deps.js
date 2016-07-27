(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["skatejsGithubIo"] = factory();
	else
		root["skatejsGithubIo"] = factory();
})(this, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(22);
	
	var _index4 = _interopRequireDefault(_index3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.head.innerHTML += '<style>' + _index4.default + '</style>';
	exports.App = _index2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _skatejs = __webpack_require__(2);
	
	var _pages = __webpack_require__(5);
	
	var _body = __webpack_require__(15);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _header = __webpack_require__(17);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _router = __webpack_require__(20);
	
	var _router2 = _interopRequireDefault(_router);
	
	var _title = __webpack_require__(21);
	
	var _title2 = _interopRequireDefault(_title);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _skatejs.define)('sk-app', {
	  props: {
	    page: { default: function _default() {
	        return _pages.Index;
	      } },
	    scrolled: _skatejs.prop.boolean()
	  },
	  attached: function attached(elem) {
	    window.addEventListener('scroll', elem._scrollHandler = function () {
	      return elem.scrolled = !!window.scrollY;
	    });
	  },
	  detached: function detached(elem) {
	    window.removeEventListener('scroll', elem._scrollHandler);
	  },
	  render: function render(elem) {
	    var Page = elem.page;
	    (0, _title2.default)('SkateJS - functional web components');
	
	    _skatejs.vdom.elementOpen('div');
	
	    _skatejs.vdom.elementOpen(_router2.default, null, null, 'onRouteChange', function (e) {
	      return elem.page = e.detail;
	    });
	
	    _skatejs.vdom.elementVoid(_router.Route, null, null, 'component', _pages.Index, 'path', '/');
	
	    _skatejs.vdom.elementVoid(_router.Route, null, null, 'component', _pages.Docs, 'path', '/docs');
	
	    _skatejs.vdom.elementClose(_router2.default);
	
	    _skatejs.vdom.elementVoid(_header2.default, null, null, 'scrolled', elem.scrolled, 'title', 'SkateJS');
	
	    _skatejs.vdom.elementOpen(_body2.default);
	
	    _skatejs.vdom.elementVoid(Page);
	
	    _skatejs.vdom.elementClose(_body2.default);
	
	    return _skatejs.vdom.elementClose('div');
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function (global, factory) {
	  ( false ? 'undefined' : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(3), __webpack_require__(4)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.skate = global.skate || {}, global.IncrementalDOM, global.isNativeRegex);
	})(undefined, function (exports, incrementalDom, isNativeRegex) {
	
	  isNativeRegex = 'default' in isNativeRegex ? isNativeRegex['default'] : isNativeRegex;
	
	  var assign = Object.assign;
	  var assign$1 = assign ? assign.bind(Object) : function (obj) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    args.forEach(function (arg) {
	      return Object.keys(arg).forEach(function (name) {
	        return obj[name] = arg[name];
	      });
	    });
	    return obj;
	  };
	
	  function empty(val) {
	    return typeof val === 'undefined' || val === null;
	  }
	
	  var alwaysUndefinedIfNotANumberOrNumber = function alwaysUndefinedIfNotANumberOrNumber(val) {
	    return isNaN(val) ? undefined : Number(val);
	  };
	  var alwaysUndefinedIfEmptyOrString = function alwaysUndefinedIfEmptyOrString(val) {
	    return empty(val) ? undefined : String(val);
	  };
	
	  function create(def) {
	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      args.unshift({}, def);
	      return assign$1.apply(null, args);
	    };
	  }
	
	  var array = create({
	    coerce: function coerce(val) {
	      return Array.isArray(val) ? val : [val];
	    },
	    default: function _default() {
	      return [];
	    },
	    deserialize: JSON.parse,
	    serialize: JSON.stringify
	  });
	
	  var boolean = create({
	    coerce: function coerce(value) {
	      return !!value;
	    },
	    default: false,
	    deserialize: function deserialize(value) {
	      return !(value === null);
	    },
	    serialize: function serialize(value) {
	      return value ? '' : undefined;
	    }
	  });
	
	  var number = create({
	    default: 0,
	    coerce: alwaysUndefinedIfNotANumberOrNumber,
	    deserialize: alwaysUndefinedIfNotANumberOrNumber,
	    serialize: alwaysUndefinedIfNotANumberOrNumber
	  });
	
	  var string = create({
	    coerce: alwaysUndefinedIfEmptyOrString,
	    deserialize: alwaysUndefinedIfEmptyOrString,
	    serialize: alwaysUndefinedIfEmptyOrString
	  });
	
	  var prop = Object.freeze({
	    create: create,
	    array: array,
	    boolean: boolean,
	    number: number,
	    string: string
	  });
	
	  var $connected = '____skate_connected';
	  var $created = '____skate_created';
	  var $ctor = '____skate_constructor';
	  var $name = '____skate_name';
	  var $props = '____skate_props';
	  var $ref = '____skate_ref';
	  var $renderer = '____skate_renderer';
	  var $rendererDebounced = '____skate_rendererDebounced';
	  var $shadowRoot = '____skate_shadowRoot';
	  var $state = '____skate_state';
	
	  var symbols$1 = Object.freeze({
	    name: $name,
	    shadowRoot: $shadowRoot
	  });
	
	  var div = document.createElement('div');
	  var isNative = function isNative(elem, prop) {
	    return isNativeRegex.test(elem[prop]);
	  };
	  var isPolyfill = function isPolyfill(elem, prop) {
	    return !!elem[prop] && !isNative(elem, prop);
	  };
	
	  // property used to check for shadowDOMv0 support
	  var v0ShadowDOMProperty = 'createShadowRoot';
	
	  // property used to check for shadowDOMv1 support
	  var v1ShadowDOMProperty = 'attachShadow';
	
	  function shouldUseShadowDomV0(elem) {
	    if (isNative(elem, v1ShadowDOMProperty)) {
	      return false;
	    } else if (isNative(elem, v0ShadowDOMProperty)) {
	      return true;
	    } else if (isPolyfill(elem, v1ShadowDOMProperty)) {
	      return false;
	    } else {
	      return isPolyfill(elem, v0ShadowDOMProperty);
	    }
	  }
	
	  function shouldUseShadowDomV1(elem) {
	    if (isNative(elem, v1ShadowDOMProperty)) {
	      return true;
	    } else if (isNative(elem, v0ShadowDOMProperty)) {
	      return false;
	    } else {
	      return isPolyfill(elem, v1ShadowDOMProperty);
	    }
	  }
	
	  var customElementsV0 = !!document.registerElement;
	  var customElementsV0Polyfill = customElementsV0 && !Document.prototype.registerElement;
	  var customElementsV1 = !!window.customElements;
	
	  var shadowDomV0 = shouldUseShadowDomV0(div);
	  var shadowDomV1 = shouldUseShadowDomV1(div);
	
	  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	  };
	
	  var classCallCheck = function classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	
	  var createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  var defineProperty = function defineProperty(obj, key, value) {
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
	  };
	
	  var inherits = function inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  };
	
	  var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	  };
	
	  var toConsumableArray = function toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	        arr2[i] = arr[i];
	      }return arr2;
	    } else {
	      return Array.from(arr);
	    }
	  };
	
	  var applyDefault = incrementalDom.attributes[incrementalDom.symbols.default];
	  var fallbackToV0 = !shadowDomV1 && shadowDomV0;
	  var stackChren = [];
	  var stackProps = [];
	
	  // Attributes that are not handled by Incremental DOM.
	  incrementalDom.attributes.key = incrementalDom.attributes.skip = incrementalDom.attributes.statics = function () {};
	
	  // Attributes that *must* be set via a property on all elements.
	  incrementalDom.attributes.checked = incrementalDom.attributes.className = incrementalDom.attributes.disabled = incrementalDom.attributes.value = incrementalDom.applyProp;
	
	  // Default attribute applicator.
	  incrementalDom.attributes[incrementalDom.symbols.default] = function (elem, name, value) {
	    // If the skip attribute was specified, skip
	    if (name === 'skip' && value) {
	      return incrementalDom.skip();
	    }
	
	    // Add the ref to the element so it can be called when it's closed.
	    if (name === 'ref') {
	      elem[$ref] = value;
	      return;
	    }
	
	    // Custom element properties should be set as properties.
	    var props = elem.constructor.props;
	    if (props && name in props) {
	      return incrementalDom.applyProp(elem, name, value);
	    }
	
	    // Boolean false values should not set attributes at all.
	    if (value === false) {
	      return;
	    }
	
	    // Handle built-in and custom events.
	    if (name.indexOf('on') === 0) {
	      return name in elem ? incrementalDom.applyProp(elem, name, value) : applyEvent(elem, name.substring(2), name, value);
	    }
	
	    // Set the select attribute instead of name if it was a <slot> translated to
	    // a <content> for v0.
	    if (name === 'name' && elem.tagName === 'CONTENT') {
	      name = 'select';
	      value = '[slot="' + value + '"]';
	    }
	
	    // Fallback to default IncrementalDOM behaviour.
	    applyDefault(elem, name, value);
	  };
	
	  // Adds or removes an event listener for an element.
	  function applyEvent(elem, ename, name, value) {
	    var events = elem.__events;
	
	    if (!events) {
	      events = elem.__events = {};
	    }
	
	    var eFunc = events[ename];
	
	    // Remove old listener so they don't double up.
	    if (eFunc) {
	      elem.removeEventListener(ename, eFunc);
	    }
	
	    // Bind new listener.
	    if (value) {
	      elem.addEventListener(ename, events[ename] = value);
	    }
	  }
	
	  function resolveTagName(tname) {
	    // If the tag name is a function, a Skate constructor or a standard function
	    // is supported.
	    //
	    // - If a Skate constructor, the tag name is extracted from that.
	    // - If a standard function, it is used as a helper.
	    if (typeof tname === 'function') {
	      return tname[$name] || tname;
	    }
	
	    // Skate allows the consumer to use <slot /> and it will translate it to
	    // <content /> if Shadow DOM V0 is preferred.
	    if (tname === 'slot' && fallbackToV0) {
	      return 'content';
	    }
	
	    // All other tag names are just passed through.
	    return tname;
	  }
	
	  function wrapIdomFunc(func) {
	    var tnameFuncHandler = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
	
	    return function wrap() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      args[0] = resolveTagName(args[0]);
	      if (typeof args[0] === 'function') {
	        // If we've encountered a function, handle it according to the type of
	        // function that is being wrapped.
	        return tnameFuncHandler.apply(undefined, args);
	      } else if (stackChren.length) {
	        // We pass the wrap() function in here so that when it's called as
	        // children, it will queue up for the next stack, if there is one.
	        stackChren[stackChren.length - 1].push([wrap, args]);
	      } else {
	        // If there is no stack left, we call Incremental DOM directly.
	        var elem = func.apply(undefined, args);
	
	        // If we're in elementClose, try calling the ref.
	        if (func === incrementalDom.elementClose) {
	          var eref = elem[$ref];
	          if (typeof eref === 'function') {
	            eref(elem);
	          }
	        }
	
	        return elem;
	      }
	    };
	  }
	
	  function newAttr(key, val) {
	    if (stackProps.length) {
	      stackProps[stackProps.length - 1][key] = val;
	    } else {
	      return incrementalDom.attr(key, val);
	    }
	  }
	
	  function stackOpen(tname, key, statics) {
	    var props = {};
	
	    for (var _len2 = arguments.length, attrs = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
	      attrs[_key2 - 3] = arguments[_key2];
	    }
	
	    for (var a = 0; a < attrs.length; a += 2) {
	      props[attrs[a]] = attrs[a + 1];
	    }
	    stackChren.push([]);
	    stackProps.push(props);
	  }
	
	  function stackClose(tname) {
	    var chren = stackChren.pop();
	    var props = stackProps.pop();
	    return tname(props, function () {
	      return chren.forEach(function (args) {
	        return args[0].apply(args, toConsumableArray(args[1]));
	      });
	    });
	  }
	
	  function stackVoid() {
	    stackOpen.apply(undefined, arguments);
	    return stackClose(arguments.length <= 0 ? undefined : arguments[0]);
	  }
	
	  // Convenience function for declaring an Incremental DOM element using
	  // hyperscript-style syntax.
	  function element(tname, attrs, chren) {
	    var atype = typeof attrs === 'undefined' ? 'undefined' : _typeof(attrs);
	
	    // If attributes are a function, then they should be treated as children.
	    if (atype === 'function' || atype === 'string') {
	      chren = attrs;
	    }
	
	    // Ensure the attributes are an object.
	    if (atype !== 'object') {
	      attrs = {};
	    }
	
	    // We open the element so we can set attrs after.
	    newElementOpenStart(tname, attrs.key, attrs.statics);
	
	    // Delete so special attrs don't actually get set.
	    delete attrs.key;
	    delete attrs.statics;
	
	    // Set attributes.
	    Object.keys(attrs).forEach(function (name) {
	      return newAttr(name, attrs[name]);
	    });
	
	    // Close before we render the descendant tree.
	    newElementOpenEnd(tname);
	
	    var ctype = typeof chren === 'undefined' ? 'undefined' : _typeof(chren);
	    if (ctype === 'function') {
	      chren();
	    } else if (ctype === 'string' || ctype === 'number') {
	      newText(chren);
	    }
	
	    return newElementClose(tname);
	  }
	
	  // Patch element factories.
	  var newElementClose = wrapIdomFunc(incrementalDom.elementClose, stackClose);
	  var newElementOpen = wrapIdomFunc(incrementalDom.elementOpen, stackOpen);
	  var newElementOpenEnd = wrapIdomFunc(incrementalDom.elementOpenEnd);
	  var newElementOpenStart = wrapIdomFunc(incrementalDom.elementOpenStart, stackOpen);
	  var newElementVoid = wrapIdomFunc(incrementalDom.elementVoid, stackVoid);
	  var newText = wrapIdomFunc(incrementalDom.text);
	
	  var vdom = Object.freeze({
	    element: element,
	    attr: newAttr,
	    elementClose: newElementClose,
	    elementOpen: newElementOpen,
	    elementOpenEnd: newElementOpenEnd,
	    elementOpenStart: newElementOpenStart,
	    elementVoid: newElementVoid,
	    text: newText
	  });
	
	  function data(element) {
	    var namespace = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	    var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
	    return namespace && (data[namespace] || (data[namespace] = {})) || data;
	  }
	
	  function debounce(fn) {
	    var called = false;
	    return function () {
	      var _this = this;
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      if (!called) {
	        called = true;
	        setTimeout(function () {
	          called = false;
	          fn.apply(_this, args);
	        });
	      }
	    };
	  }
	
	  var definePropertyConstructor = function definePropertyConstructor(obj, value) {
	    return Object.defineProperty(obj, 'constructor', { enumerable: false, value: value });
	  };
	
	  function getOwnPropertyDescriptors(obj) {
	    return Object.getOwnPropertyNames(obj || {}).reduce(function (prev, curr) {
	      prev[curr] = Object.getOwnPropertyDescriptor(obj, curr);
	      return prev;
	    }, {});
	  }
	
	  // In native Custom Elements v0, you can extend HTMLElement. In the polyfill
	  // you cannot, so we ensure the polyfill has a patched HTMLElement constructor.
	  if (customElementsV0Polyfill) {
	    var proto = HTMLElement.prototype;
	    window.HTMLElement = function () {
	      var ctor = this[$ctor];
	      var name = this[$name];
	      var type = ctor.extends;
	      return document.createElement(type || name, type ? name : null);
	    };
	    HTMLElement.prototype = Object.create(proto);
	    definePropertyConstructor(HTMLElement.prototype, HTMLElement);
	  }
	
	  var Component = function (_HTMLElement) {
	    inherits(Component, _HTMLElement);
	
	    function Component() {
	      classCallCheck(this, Component);
	
	      var _this = possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this));
	
	      _this.createdCallback();
	      return _this;
	    }
	
	    createClass(Component, [{
	      key: 'connectedCallback',
	      value: function connectedCallback() {
	        var ctor = this.constructor;
	        var attached = ctor.attached;
	
	        var render = ctor[$renderer];
	        this[$connected] = true;
	        if (typeof render === 'function') {
	          render(this);
	        }
	        if (typeof attached === 'function') {
	          attached(this);
	        }
	      }
	    }, {
	      key: 'disconnectedCallback',
	      value: function disconnectedCallback() {
	        var detached = this.constructor.detached;
	
	        this[$connected] = false;
	        if (typeof detached === 'function') {
	          detached(this);
	        }
	      }
	    }, {
	      key: 'attributeChangedCallback',
	      value: function attributeChangedCallback(name, oldValue, newValue) {
	        var _constructor = this.constructor;
	        var attributeChanged = _constructor.attributeChanged;
	        var observedAttributes = _constructor.observedAttributes;
	
	        var propertyName = data(this, 'attributeLinks')[name];
	
	        // In V0 we have to ensure the attribute is being observed.
	        if (customElementsV0 && observedAttributes.indexOf(name) === -1) {
	          return;
	        }
	
	        if (propertyName) {
	          var propData = data(this, 'api/property/' + propertyName);
	
	          // This ensures a property set doesn't cause the attribute changed
	          // handler to run again once we set this flag. This only ever has a
	          // chance to run when you set an attribute, it then sets a property and
	          // then that causes the attribute to be set again.
	          if (propData.syncingAttribute) {
	            propData.syncingAttribute = false;
	            return;
	          }
	
	          // Sync up the property.
	          var propOpts = this.constructor.props[propertyName];
	          propData.settingAttribute = true;
	          this[propertyName] = newValue !== null && propOpts.deserialize ? propOpts.deserialize(newValue) : newValue;
	        }
	
	        if (attributeChanged) {
	          attributeChanged(this, { name: name, newValue: newValue, oldValue: oldValue });
	        }
	      }
	    }, {
	      key: 'createdCallback',
	      value: function createdCallback() {
	        var _this2 = this;
	
	        // In the polyfill, if you define a custom element after it has been
	        // created the polyfill will call the constructor it has on record thus
	        // ignoring the one the user has defined for the element. We ensure the
	        // constructor is actually the one that was specified in the definition
	        // rather than the one the polyfill gives it.
	        //
	        // In native v0 this behaves normally, so we only need to worry about the
	        // polyfill here.
	        if (customElementsV0Polyfill) {
	          definePropertyConstructor(this, this[$ctor]);
	        }
	
	        var elemData = data(this);
	        var readyCallbacks = elemData.readyCallbacks;
	        var Ctor = this.constructor;
	        var created = Ctor.created;
	        var observedAttributes = Ctor.observedAttributes;
	        var props = Ctor.props;
	
	        // TODO: This prevents an element from being initialised multiple times. For
	        // some reason this is happening in the event tests. It's possibly creating
	        // elements in a way that the causes the custom element v1 polyfill to call
	        // the constructor twice.
	
	        if (this[$created]) return;
	        this[$created] = true;
	
	        // Set up a renderer that is debounced for property sets to call directly.
	        this[$rendererDebounced] = debounce(Ctor[$renderer]);
	
	        if (props) {
	          Ctor[$props](this);
	        }
	
	        if (created) {
	          created(this);
	        }
	
	        if (readyCallbacks) {
	          readyCallbacks.forEach(function (cb) {
	            return cb(_this2);
	          });
	          delete elemData.readyCallbacks;
	        }
	
	        // In v0 we must ensure the attributeChangedCallback is called for attrs
	        // that aren't linked to props so that the callback behaves the same no
	        // matter if v0 or v1 is being used.
	        if (customElementsV0) {
	          observedAttributes.forEach(function (name) {
	            var propertyName = data(_this2, 'attributeLinks')[name];
	            if (!propertyName) {
	              _this2.attributeChangedCallback(name, null, _this2.getAttribute(name));
	            }
	          });
	        }
	      }
	    }, {
	      key: 'attachedCallback',
	      value: function attachedCallback() {
	        this.connectedCallback();
	      }
	    }, {
	      key: 'detachedCallback',
	      value: function detachedCallback() {
	        this.disconnectedCallback();
	      }
	    }], [{
	      key: 'extend',
	      value: function extend() {
	        var definition = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var Base = arguments.length <= 1 || arguments[1] === undefined ? this : arguments[1];
	
	        // Create class for the user.
	        var Ctor = function (_Base) {
	          inherits(Ctor, _Base);
	
	          function Ctor() {
	            classCallCheck(this, Ctor);
	            return possibleConstructorReturn(this, Object.getPrototypeOf(Ctor).apply(this, arguments));
	          }
	
	          return Ctor;
	        }(Base);
	
	        // For inheriting from the object literal.
	
	        var opts = getOwnPropertyDescriptors(definition);
	        var prot = getOwnPropertyDescriptors(definition.prototype);
	
	        // Prototype is non configurable (but is writable) s
	        delete opts.prototype;
	
	        // Pass on static and instance members from the definition.
	        Object.defineProperties(Ctor, opts);
	        Object.defineProperties(Ctor.prototype, prot);
	
	        return Ctor;
	      }
	    }, {
	      key: 'shouldRender',
	      value: function shouldRender(elem, prev, curr) {
	        for (var name in prev) {
	          if (prev[name] !== curr[name]) {
	            return true;
	          }
	        }
	      }
	    }, {
	      key: 'observedAttributes',
	      get: function get() {
	        return [];
	      }
	    }, {
	      key: 'props',
	      get: function get() {
	        return {};
	      }
	    }]);
	    return Component;
	  }(HTMLElement);
	
	  function get$1(elem) {
	    var state = {};
	    for (var key in elem.constructor.props) {
	      state[key] = elem[key];
	    }
	    return state;
	  }
	
	  function set$1(elem, newState) {
	    assign$1(elem, newState);
	    if (elem.constructor.render) {
	      elem.constructor[$renderer](elem);
	    }
	  }
	
	  function state(elem, newState) {
	    return typeof newState === 'undefined' ? get$1(elem) : set$1(elem, newState);
	  }
	
	  function createRenderer(Ctor) {
	    var render = Ctor.render;
	    var shouldRender = Ctor.shouldRender;
	
	    return function (elem) {
	      // We don't render at all if the user hasn't specified a render function or
	      // if the element hasn't been connected yet. This saves us from doing
	      // unnecessary renders.
	      if (!render || !elem[$connected]) {
	        return;
	      }
	
	      var sr = elem[$shadowRoot];
	
	      if (shouldRender) {
	        var prevState = elem[$state];
	        var currState = state(elem);
	
	        // Update the previous state no matter what so it can be compared on the
	        // next render, even if the component doesn't render this time around.
	        elem[$state] = currState;
	
	        // We always do the initial render, therefore we only check if we should
	        // render if there is a shadow root. If there is no shadow root, then we
	        // are in the initial render.
	        if (sr && !shouldRender(elem, prevState, currState)) {
	          return;
	        }
	      }
	
	      // Setup the shadow root if it hasn't been setup yet.
	      if (!sr) {
	        if (shadowDomV1) {
	          sr = elem.attachShadow({ mode: 'open' });
	        } else if (shadowDomV0) {
	          sr = elem.createShadowRoot();
	        } else {
	          sr = elem;
	        }
	
	        elem[$shadowRoot] = sr;
	      }
	
	      incrementalDom.patchInner(sr, render, elem);
	    };
	  }
	
	  function dashCase(str) {
	    return str.split(/([A-Z])/).reduce(function (one, two, idx) {
	      var dash = !one || idx % 2 === 0 ? '' : '-';
	      return '' + one + dash + two.toLowerCase();
	    });
	  }
	
	  var CustomEvent = function (CustomEvent) {
	    if (CustomEvent) {
	      try {
	        new CustomEvent();
	      } catch (e) {
	        return undefined;
	      }
	    }
	    return CustomEvent;
	  }(window.CustomEvent);
	
	  function createCustomEvent(name) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    if (CustomEvent) {
	      return new CustomEvent(name, opts);
	    }
	    var e = document.createEvent('CustomEvent');
	    e.initCustomEvent(name, opts.bubbles, opts.cancelable, opts.detail);
	    return e;
	  }
	
	  function emit(elem, name) {
	    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	    /* jshint expr: true */
	    opts.bubbles === undefined && (opts.bubbles = true);
	    opts.cancelable === undefined && (opts.cancelable = true);
	    return elem.disabled ? true : elem.dispatchEvent(createCustomEvent(name, opts));
	  }
	
	  function getDefaultValue(elem, name, opts) {
	    return typeof opts.default === 'function' ? opts.default(elem, { name: name }) : opts.default;
	  }
	
	  function getInitialValue(elem, name, opts) {
	    return typeof opts.initial === 'function' ? opts.initial(elem, { name: name }) : opts.initial;
	  }
	
	  function createNativePropertyDefinition(name, opts) {
	    var prop = {
	      configurable: true,
	      enumerable: true
	    };
	
	    prop.created = function (elem) {
	      var propData = data(elem, 'api/property/' + name);
	      var attributeName = opts.attribute;
	      var initialValue = elem[name];
	      var shouldSyncAttribute = false;
	
	      // Store property to attribute link information.
	      data(elem, 'attributeLinks')[attributeName] = name;
	      data(elem, 'propertyLinks')[name] = attributeName;
	
	      // Set up initial value if it wasn't specified.
	      if (empty(initialValue)) {
	        if (attributeName && elem.hasAttribute(attributeName)) {
	          initialValue = opts.deserialize(elem.getAttribute(attributeName));
	        } else if ('initial' in opts) {
	          initialValue = getInitialValue(elem, name, opts);
	          shouldSyncAttribute = true;
	        } else if ('default' in opts) {
	          initialValue = getDefaultValue(elem, name, opts);
	        }
	      }
	
	      if (shouldSyncAttribute) {
	        prop.set.call(elem, initialValue);
	      } else {
	        propData.internalValue = opts.coerce ? opts.coerce(initialValue) : initialValue;
	      }
	    };
	
	    prop.get = function () {
	      var propData = data(this, 'api/property/' + name);
	      var internalValue = propData.internalValue;
	
	      if (typeof opts.get === 'function') {
	        return opts.get(this, { name: name, internalValue: internalValue });
	      }
	      return internalValue;
	    };
	
	    prop.set = function (newValue) {
	      var propData = data(this, 'api/property/' + name);
	      var oldValue = propData.oldValue;
	
	      var shouldRemoveAttribute = false;
	
	      if (empty(oldValue)) {
	        oldValue = null;
	      }
	
	      if (empty(newValue)) {
	        newValue = getDefaultValue(this, name, opts);
	        shouldRemoveAttribute = true;
	      }
	
	      if (typeof opts.coerce === 'function') {
	        newValue = opts.coerce(newValue);
	      }
	
	      var propertyHasChanged = newValue !== oldValue;
	      if (propertyHasChanged && opts.event) {
	        var canceled = !emit(this, String(opts.event), {
	          bubbles: false,
	          detail: { name: name, oldValue: oldValue, newValue: newValue }
	        });
	
	        if (canceled) {
	          return;
	        }
	      }
	
	      propData.internalValue = newValue;
	
	      var changeData = { name: name, newValue: newValue, oldValue: oldValue };
	
	      if (typeof opts.set === 'function') {
	        opts.set(this, changeData);
	      }
	
	      // Queue a re-render.
	      this[$rendererDebounced](this);
	
	      propData.oldValue = newValue;
	
	      // Link up the attribute.
	      var attributeName = data(this, 'propertyLinks')[name];
	      if (attributeName && !propData.settingAttribute) {
	        var serializedValue = opts.serialize(newValue);
	        propData.syncingAttribute = true;
	        if (shouldRemoveAttribute || empty(serializedValue)) {
	          this.removeAttribute(attributeName);
	        } else {
	          this.setAttribute(attributeName, serializedValue);
	        }
	      }
	
	      // Allow the attribute to be linked again.
	      propData.settingAttribute = false;
	    };
	
	    return prop;
	  }
	
	  function initProps(opts) {
	    opts = opts || {};
	
	    if (typeof opts === 'function') {
	      opts = { coerce: opts };
	    }
	
	    return function (name) {
	      return createNativePropertyDefinition(name, assign$1({
	        default: null,
	        deserialize: function deserialize(value) {
	          return value;
	        },
	        serialize: function serialize(value) {
	          return value;
	        }
	      }, opts));
	    };
	  }
	
	  var registry = {};
	
	  // Ensures that definitions passed as part of the constructor are functions
	  // that return property definitions used on the element.
	  function ensurePropertyFunctions(Ctor) {
	    var props = Ctor.props;
	    var names = Object.keys(props || {});
	    return names.reduce(function (descriptors, descriptorName) {
	      descriptors[descriptorName] = props[descriptorName];
	      if (typeof descriptors[descriptorName] !== 'function') {
	        descriptors[descriptorName] = initProps(descriptors[descriptorName]);
	      }
	      return descriptors;
	    }, {});
	  }
	
	  // Ensures the property definitions are transformed to objects that can be used
	  // to create properties on the element.
	  function ensurePropertyDefinitions(Ctor) {
	    var props = ensurePropertyFunctions(Ctor);
	    return Object.keys(props).reduce(function (descriptors, descriptorName) {
	      descriptors[descriptorName] = props[descriptorName](descriptorName);
	      return descriptors;
	    }, {});
	  }
	
	  // Ensures linked properties that have linked attributes are pre-formatted to
	  // the attribute name in which they are linked.
	  function formatLinkedAttributes(Ctor) {
	    var observedAttributes = Ctor.observedAttributes;
	    var props = Ctor.props;
	
	    if (!props) {
	      return;
	    }
	
	    Object.keys(props).forEach(function (name) {
	      var prop = props[name];
	      var attr = prop.attribute;
	      if (attr) {
	        // Ensure the property is updated.
	        var linkedAttr = prop.attribute = attr === true ? dashCase(name) : attr;
	
	        // Automatically observe the attribute since they're linked from the
	        // attributeChangedCallback.
	        if (observedAttributes.indexOf(linkedAttr) === -1) {
	          observedAttributes.push(linkedAttr);
	        }
	      }
	    });
	
	    // Merge observed attributes.
	    Object.defineProperty(Ctor, 'observedAttributes', {
	      configurable: true,
	      enumerable: true,
	      get: function get() {
	        return observedAttributes;
	      }
	    });
	  }
	
	  function createInitProps(Ctor) {
	    var props = ensurePropertyDefinitions(Ctor);
	
	    return function (elem) {
	      if (!props) {
	        return;
	      }
	
	      Object.keys(props).forEach(function (name) {
	        var prop = props[name];
	        prop.created(elem);
	
	        // https://bugs.webkit.org/show_bug.cgi?id=49739
	        //
	        // When Webkit fixes that bug so that native property accessors can be
	        // retrieved, we can move defining the property to the prototype and away
	        // from having to do if for every instance as all other browsers support
	        // this.
	        Object.defineProperty(elem, name, prop);
	      });
	    };
	  }
	
	  function generateUniqueName(name) {
	    // we don't need to generate a unique name if it's the first time
	    if (!registry[name]) {
	      registry[name] = true;
	      return name;
	    }
	    // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
	    var rand = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
	      var r = Math.random() * 16 | 0,
	          v = c == 'x' ? r : r & 0x3 | 0x8;
	      return v.toString(16);
	    });
	
	    return name + '-' + rand;
	  }
	
	  function define(name, opts) {
	    if (opts === undefined) {
	      throw new Error('You have to define options to register a component ' + name);
	    }
	
	    var uniqueName = generateUniqueName(name);
	    var Ctor = (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object' ? Component.extend(opts) : opts;
	
	    formatLinkedAttributes(Ctor);
	
	    Ctor[$name] = uniqueName;
	    Ctor[$props] = createInitProps(Ctor);
	    Ctor[$renderer] = createRenderer(Ctor);
	
	    if (customElementsV0) {
	      // These properties are necessary for the Custom Element v0 polyfill so
	      // that we can fix it not working with extending the built-in HTMLElement.
	      Ctor.prototype[$ctor] = Ctor;
	      Ctor.prototype[$name] = uniqueName;
	      var NewCtor = document.registerElement(uniqueName, Ctor);
	      definePropertyConstructor(NewCtor.prototype, Ctor);
	      return customElementsV0Polyfill ? Ctor : NewCtor;
	    } else if (customElementsV1) {
	      window.customElements.define(uniqueName, Ctor, { extends: Ctor.extends });
	    } else {
	      throw new Error('Skate requires native custom element support or a polyfill.');
	    }
	
	    return Ctor;
	  }
	
	  function getValue(elem) {
	    var type = elem.type;
	    if (type === 'checkbox' || type === 'radio') {
	      return elem.checked ? elem.value || true : false;
	    }
	    return elem.value;
	  }
	
	  function link(elem, target) {
	    return function (e) {
	      var value = getValue(e.target);
	      var localTarget = target || e.target.name || 'value';
	
	      if (localTarget.indexOf('.') > -1) {
	        var parts = localTarget.split('.');
	        var firstPart = parts[0];
	        var propName = parts.pop();
	        var obj = parts.reduce(function (prev, curr) {
	          return prev && prev[curr];
	        }, elem);
	
	        obj[propName || e.target.name] = value;
	        state(elem, defineProperty({}, firstPart, elem[firstPart]));
	      } else {
	        state(elem, defineProperty({}, localTarget, value));
	      }
	    };
	  }
	
	  function ready(elem, done) {
	    var info = data(elem);
	    if (elem[$created]) {
	      done(elem);
	    } else if (info.readyCallbacks) {
	      info.readyCallbacks.push(done);
	    } else {
	      info.readyCallbacks = [done];
	    }
	  }
	
	  exports.Component = Component;
	  exports.define = define;
	  exports.emit = emit;
	  exports.link = link;
	  exports.prop = prop;
	  exports.ready = ready;
	  exports.state = state;
	  exports.symbols = symbols$1;
	  exports.vdom = vdom;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	});
	//# sourceMappingURL=index.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * @license
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	'use strict';
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/**
	 * A cached reference to the hasOwnProperty function.
	 */
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * A cached reference to the create function.
	 */
	var create = Object.create;
	
	/**
	 * Used to prevent property collisions between our "map" and its prototype.
	 * @param {!Object<string, *>} map The map to check.
	 * @param {string} property The property to check.
	 * @return {boolean} Whether map has property.
	 */
	var has = function has(map, property) {
	  return hasOwnProperty.call(map, property);
	};
	
	/**
	 * Creates an map object without a prototype.
	 * @return {!Object}
	 */
	var createMap = function createMap() {
	  return create(null);
	};
	
	/**
	 * Keeps track of information needed to perform diffs for a given DOM node.
	 * @param {!string} nodeName
	 * @param {?string=} key
	 * @constructor
	 */
	function NodeData(nodeName, key) {
	  /**
	   * The attributes and their values.
	   * @const {!Object<string, *>}
	   */
	  this.attrs = createMap();
	
	  /**
	   * An array of attribute name/value pairs, used for quickly diffing the
	   * incomming attributes to see if the DOM node's attributes need to be
	   * updated.
	   * @const {Array<*>}
	   */
	  this.attrsArr = [];
	
	  /**
	   * The incoming attributes for this Node, before they are updated.
	   * @const {!Object<string, *>}
	   */
	  this.newAttrs = createMap();
	
	  /**
	   * The key used to identify this node, used to preserve DOM nodes when they
	   * move within their parent.
	   * @const
	   */
	  this.key = key;
	
	  /**
	   * Keeps track of children within this node by their key.
	   * {?Object<string, !Element>}
	   */
	  this.keyMap = null;
	
	  /**
	   * Whether or not the keyMap is currently valid.
	   * {boolean}
	   */
	  this.keyMapValid = true;
	
	  /**
	   * The node name for this node.
	   * @const {string}
	   */
	  this.nodeName = nodeName;
	
	  /**
	   * @type {?string}
	   */
	  this.text = null;
	}
	
	/**
	 * Initializes a NodeData object for a Node.
	 *
	 * @param {Node} node The node to initialize data for.
	 * @param {string} nodeName The node name of node.
	 * @param {?string=} key The key that identifies the node.
	 * @return {!NodeData} The newly initialized data object
	 */
	var initData = function initData(node, nodeName, key) {
	  var data = new NodeData(nodeName, key);
	  node['__incrementalDOMData'] = data;
	  return data;
	};
	
	/**
	 * Retrieves the NodeData object for a Node, creating it if necessary.
	 *
	 * @param {Node} node The node to retrieve the data for.
	 * @return {!NodeData} The NodeData for this Node.
	 */
	var getData = function getData(node) {
	  var data = node['__incrementalDOMData'];
	
	  if (!data) {
	    var nodeName = node.nodeName.toLowerCase();
	    var key = null;
	
	    if (node instanceof Element) {
	      key = node.getAttribute('key');
	    }
	
	    data = initData(node, nodeName, key);
	  }
	
	  return data;
	};
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/** @const */
	var symbols = {
	  default: '__default',
	
	  placeholder: '__placeholder'
	};
	
	/**
	 * @param {string} name
	 * @return {string|undefined} The namespace to use for the attribute.
	 */
	var getNamespace = function getNamespace(name) {
	  if (name.lastIndexOf('xml:', 0) === 0) {
	    return 'http://www.w3.org/XML/1998/namespace';
	  }
	
	  if (name.lastIndexOf('xlink:', 0) === 0) {
	    return 'http://www.w3.org/1999/xlink';
	  }
	};
	
	/**
	 * Applies an attribute or property to a given Element. If the value is null
	 * or undefined, it is removed from the Element. Otherwise, the value is set
	 * as an attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {?(boolean|number|string)=} value The attribute's value.
	 */
	var applyAttr = function applyAttr(el, name, value) {
	  if (value == null) {
	    el.removeAttribute(name);
	  } else {
	    var attrNS = getNamespace(name);
	    if (attrNS) {
	      el.setAttributeNS(attrNS, name, value);
	    } else {
	      el.setAttribute(name, value);
	    }
	  }
	};
	
	/**
	 * Applies a property to a given Element.
	 * @param {!Element} el
	 * @param {string} name The property's name.
	 * @param {*} value The property's value.
	 */
	var applyProp = function applyProp(el, name, value) {
	  el[name] = value;
	};
	
	/**
	 * Applies a style to an Element. No vendor prefix expansion is done for
	 * property names/values.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} style The style to set. Either a string of css or an object
	 *     containing property-value pairs.
	 */
	var applyStyle = function applyStyle(el, name, style) {
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	  } else {
	    el.style.cssText = '';
	    var elStyle = el.style;
	    var obj = /** @type {!Object<string,string>} */style;
	
	    for (var prop in obj) {
	      if (has(obj, prop)) {
	        elStyle[prop] = obj[prop];
	      }
	    }
	  }
	};
	
	/**
	 * Updates a single attribute on an Element.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value. If the value is an object or
	 *     function it is set on the Element, otherwise, it is set as an HTML
	 *     attribute.
	 */
	var applyAttributeTyped = function applyAttributeTyped(el, name, value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	
	  if (type === 'object' || type === 'function') {
	    applyProp(el, name, value);
	  } else {
	    applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
	  }
	};
	
	/**
	 * Calls the appropriate attribute mutator for this attribute.
	 * @param {!Element} el
	 * @param {string} name The attribute's name.
	 * @param {*} value The attribute's value.
	 */
	var updateAttribute = function updateAttribute(el, name, value) {
	  var data = getData(el);
	  var attrs = data.attrs;
	
	  if (attrs[name] === value) {
	    return;
	  }
	
	  var mutator = attributes[name] || attributes[symbols.default];
	  mutator(el, name, value);
	
	  attrs[name] = value;
	};
	
	/**
	 * A publicly mutable object to provide custom mutators for attributes.
	 * @const {!Object<string, function(!Element, string, *)>}
	 */
	var attributes = createMap();
	
	// Special generic mutator that's called for any attribute that does not
	// have a specific mutator.
	attributes[symbols.default] = applyAttributeTyped;
	
	attributes[symbols.placeholder] = function () {};
	
	attributes['style'] = applyStyle;
	
	/**
	 * Gets the namespace to create an element (of a given tag) in.
	 * @param {string} tag The tag to get the namespace for.
	 * @param {?Node} parent
	 * @return {?string} The namespace to create the tag in.
	 */
	var getNamespaceForTag = function getNamespaceForTag(tag, parent) {
	  if (tag === 'svg') {
	    return 'http://www.w3.org/2000/svg';
	  }
	
	  if (getData(parent).nodeName === 'foreignObject') {
	    return null;
	  }
	
	  return parent.namespaceURI;
	};
	
	/**
	 * Creates an Element.
	 * @param {Document} doc The document with which to create the Element.
	 * @param {?Node} parent
	 * @param {string} tag The tag for the Element.
	 * @param {?string=} key A key to identify the Element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element.
	 * @return {!Element}
	 */
	var createElement = function createElement(doc, parent, tag, key, statics) {
	  var namespace = getNamespaceForTag(tag, parent);
	  var el = undefined;
	
	  if (namespace) {
	    el = doc.createElementNS(namespace, tag);
	  } else {
	    el = doc.createElement(tag);
	  }
	
	  initData(el, tag, key);
	
	  if (statics) {
	    for (var i = 0; i < statics.length; i += 2) {
	      updateAttribute(el, /** @type {!string}*/statics[i], statics[i + 1]);
	    }
	  }
	
	  return el;
	};
	
	/**
	 * Creates a Text Node.
	 * @param {Document} doc The document with which to create the Element.
	 * @return {!Text}
	 */
	var createText = function createText(doc) {
	  var node = doc.createTextNode('');
	  initData(node, '#text', null);
	  return node;
	};
	
	/**
	 * Creates a mapping that can be used to look up children using a key.
	 * @param {?Node} el
	 * @return {!Object<string, !Element>} A mapping of keys to the children of the
	 *     Element.
	 */
	var createKeyMap = function createKeyMap(el) {
	  var map = createMap();
	  var child = el.firstElementChild;
	
	  while (child) {
	    var key = getData(child).key;
	
	    if (key) {
	      map[key] = child;
	    }
	
	    child = child.nextElementSibling;
	  }
	
	  return map;
	};
	
	/**
	 * Retrieves the mapping of key to child node for a given Element, creating it
	 * if necessary.
	 * @param {?Node} el
	 * @return {!Object<string, !Node>} A mapping of keys to child Elements
	 */
	var getKeyMap = function getKeyMap(el) {
	  var data = getData(el);
	
	  if (!data.keyMap) {
	    data.keyMap = createKeyMap(el);
	  }
	
	  return data.keyMap;
	};
	
	/**
	 * Retrieves a child from the parent with the given key.
	 * @param {?Node} parent
	 * @param {?string=} key
	 * @return {?Node} The child corresponding to the key.
	 */
	var getChild = function getChild(parent, key) {
	  return key ? getKeyMap(parent)[key] : null;
	};
	
	/**
	 * Registers an element as being a child. The parent will keep track of the
	 * child using the key. The child can be retrieved using the same key using
	 * getKeyMap. The provided key should be unique within the parent Element.
	 * @param {?Node} parent The parent of child.
	 * @param {string} key A key to identify the child with.
	 * @param {!Node} child The child to register.
	 */
	var registerChild = function registerChild(parent, key, child) {
	  getKeyMap(parent)[key] = child;
	};
	
	/**
	 * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS-IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	/** @const */
	var notifications = {
	  /**
	   * Called after patch has compleated with any Nodes that have been created
	   * and added to the DOM.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesCreated: null,
	
	  /**
	   * Called after patch has compleated with any Nodes that have been removed
	   * from the DOM.
	   * Note it's an applications responsibility to handle any childNodes.
	   * @type {?function(Array<!Node>)}
	   */
	  nodesDeleted: null
	};
	
	/**
	 * Keeps track of the state of a patch.
	 * @constructor
	 */
	function Context() {
	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.created = notifications.nodesCreated && [];
	
	  /**
	   * @type {(Array<!Node>|undefined)}
	   */
	  this.deleted = notifications.nodesDeleted && [];
	}
	
	/**
	 * @param {!Node} node
	 */
	Context.prototype.markCreated = function (node) {
	  if (this.created) {
	    this.created.push(node);
	  }
	};
	
	/**
	 * @param {!Node} node
	 */
	Context.prototype.markDeleted = function (node) {
	  if (this.deleted) {
	    this.deleted.push(node);
	  }
	};
	
	/**
	 * Notifies about nodes that were created during the patch opearation.
	 */
	Context.prototype.notifyChanges = function () {
	  if (this.created && this.created.length > 0) {
	    notifications.nodesCreated(this.created);
	  }
	
	  if (this.deleted && this.deleted.length > 0) {
	    notifications.nodesDeleted(this.deleted);
	  }
	};
	
	/**
	* Makes sure that keyed Element matches the tag name provided.
	* @param {!string} nodeName The nodeName of the node that is being matched.
	* @param {string=} tag The tag name of the Element.
	* @param {?string=} key The key of the Element.
	*/
	var assertKeyedTagMatches = function assertKeyedTagMatches(nodeName, tag, key) {
	  if (nodeName !== tag) {
	    throw new Error('Was expecting node with key "' + key + '" to be a ' + tag + ', not a ' + nodeName + '.');
	  }
	};
	
	/** @type {?Context} */
	var context = null;
	
	/** @type {?Node} */
	var currentNode = null;
	
	/** @type {?Node} */
	var currentParent = null;
	
	/** @type {?Element|?DocumentFragment} */
	var root = null;
	
	/** @type {?Document} */
	var doc = null;
	
	/**
	 * Returns a patcher function that sets up and restores a patch context,
	 * running the run function with the provided data.
	 * @param {function((!Element|!DocumentFragment),!function(T),T=)} run
	 * @return {function((!Element|!DocumentFragment),!function(T),T=)}
	 * @template T
	 */
	var patchFactory = function patchFactory(run) {
	  /**
	   * TODO(moz): These annotations won't be necessary once we switch to Closure
	   * Compiler's new type inference. Remove these once the switch is done.
	   *
	   * @param {(!Element|!DocumentFragment)} node
	   * @param {!function(T)} fn
	   * @param {T=} data
	   * @template T
	   */
	  var f = function f(node, fn, data) {
	    var prevContext = context;
	    var prevRoot = root;
	    var prevDoc = doc;
	    var prevCurrentNode = currentNode;
	    var prevCurrentParent = currentParent;
	    var previousInAttributes = false;
	    var previousInSkip = false;
	
	    context = new Context();
	    root = node;
	    doc = node.ownerDocument;
	    currentParent = node.parentNode;
	
	    if (false) {}
	
	    run(node, fn, data);
	
	    if (false) {}
	
	    context.notifyChanges();
	
	    context = prevContext;
	    root = prevRoot;
	    doc = prevDoc;
	    currentNode = prevCurrentNode;
	    currentParent = prevCurrentParent;
	  };
	  return f;
	};
	
	/**
	 * Patches the document starting at node with the provided function. This
	 * function may be called during an existing patch operation.
	 * @param {!Element|!DocumentFragment} node The Element or Document
	 *     to patch.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	var patchInner = patchFactory(function (node, fn, data) {
	  currentNode = node;
	
	  enterNode();
	  fn(data);
	  exitNode();
	
	  if (false) {}
	});
	
	/**
	 * Patches an Element with the the provided function. Exactly one top level
	 * element call should be made corresponding to `node`.
	 * @param {!Element} node The Element where the patch should start.
	 * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
	 *     calls that describe the DOM. This should have at most one top level
	 *     element call.
	 * @param {T=} data An argument passed to fn to represent DOM state.
	 * @template T
	 */
	var patchOuter = patchFactory(function (node, fn, data) {
	  currentNode = /** @type {!Element} */{ nextSibling: node };
	
	  fn(data);
	
	  if (false) {}
	});
	
	/**
	 * Checks whether or not the current node matches the specified nodeName and
	 * key.
	 *
	 * @param {?string} nodeName The nodeName for this node.
	 * @param {?string=} key An optional key that identifies a node.
	 * @return {boolean} True if the node matches, false otherwise.
	 */
	var matches = function matches(nodeName, key) {
	  var data = getData(currentNode);
	
	  // Key check is done using double equals as we want to treat a null key the
	  // same as undefined. This should be okay as the only values allowed are
	  // strings, null and undefined so the == semantics are not too weird.
	  return nodeName === data.nodeName && key == data.key;
	};
	
	/**
	 * Aligns the virtual Element definition with the actual DOM, moving the
	 * corresponding DOM node to the correct location or creating it if necessary.
	 * @param {string} nodeName For an Element, this should be a valid tag string.
	 *     For a Text, this should be #text.
	 * @param {?string=} key The key used to identify this element.
	 * @param {?Array<*>=} statics For an Element, this should be an array of
	 *     name-value pairs.
	 */
	var alignWithDOM = function alignWithDOM(nodeName, key, statics) {
	  if (currentNode && matches(nodeName, key)) {
	    return;
	  }
	
	  var node = undefined;
	
	  // Check to see if the node has moved within the parent.
	  if (key) {
	    node = getChild(currentParent, key);
	    if (node && 'production' !== 'production') {
	      assertKeyedTagMatches(getData(node).nodeName, nodeName, key);
	    }
	  }
	
	  // Create the node if it doesn't exist.
	  if (!node) {
	    if (nodeName === '#text') {
	      node = createText(doc);
	    } else {
	      node = createElement(doc, currentParent, nodeName, key, statics);
	    }
	
	    if (key) {
	      registerChild(currentParent, key, node);
	    }
	
	    context.markCreated(node);
	  }
	
	  // If the node has a key, remove it from the DOM to prevent a large number
	  // of re-orders in the case that it moved far or was completely removed.
	  // Since we hold on to a reference through the keyMap, we can always add it
	  // back.
	  if (currentNode && getData(currentNode).key) {
	    currentParent.replaceChild(node, currentNode);
	    getData(currentParent).keyMapValid = false;
	  } else {
	    currentParent.insertBefore(node, currentNode);
	  }
	
	  currentNode = node;
	};
	
	/**
	 * Clears out any unvisited Nodes, as the corresponding virtual element
	 * functions were never called for them.
	 */
	var clearUnvisitedDOM = function clearUnvisitedDOM() {
	  var node = currentParent;
	  var data = getData(node);
	  var keyMap = data.keyMap;
	  var keyMapValid = data.keyMapValid;
	  var child = node.lastChild;
	  var key = undefined;
	
	  if (child === currentNode && keyMapValid) {
	    return;
	  }
	
	  if (data.attrs[symbols.placeholder] && node !== root) {
	    if (false) {}
	    return;
	  }
	
	  while (child !== currentNode) {
	    node.removeChild(child);
	    context.markDeleted( /** @type {!Node}*/child);
	
	    key = getData(child).key;
	    if (key) {
	      delete keyMap[key];
	    }
	    child = node.lastChild;
	  }
	
	  // Clean the keyMap, removing any unusued keys.
	  if (!keyMapValid) {
	    for (key in keyMap) {
	      child = keyMap[key];
	      if (child.parentNode !== node) {
	        context.markDeleted(child);
	        delete keyMap[key];
	      }
	    }
	
	    data.keyMapValid = true;
	  }
	};
	
	/**
	 * Changes to the first child of the current node.
	 */
	var enterNode = function enterNode() {
	  currentParent = currentNode;
	  currentNode = null;
	};
	
	/**
	 * Changes to the next sibling of the current node.
	 */
	var nextNode = function nextNode() {
	  if (currentNode) {
	    currentNode = currentNode.nextSibling;
	  } else {
	    currentNode = currentParent.firstChild;
	  }
	};
	
	/**
	 * Changes to the parent of the current node, removing any unvisited children.
	 */
	var exitNode = function exitNode() {
	  clearUnvisitedDOM();
	
	  currentNode = currentParent;
	  currentParent = currentParent.parentNode;
	};
	
	/**
	 * Makes sure that the current node is an Element with a matching tagName and
	 * key.
	 *
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementOpen = function coreElementOpen(tag, key, statics) {
	  nextNode();
	  alignWithDOM(tag, key, statics);
	  enterNode();
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Closes the currently open Element, removing any unvisited children if
	 * necessary.
	 *
	 * @return {!Element} The corresponding Element.
	 */
	var coreElementClose = function coreElementClose() {
	  if (false) {}
	
	  exitNode();
	  return (/** @type {!Element} */currentNode
	  );
	};
	
	/**
	 * Makes sure the current node is a Text node and creates a Text node if it is
	 * not.
	 *
	 * @return {!Text} The corresponding Text Node.
	 */
	var coreText = function coreText() {
	  nextNode();
	  alignWithDOM('#text', null, null);
	  return (/** @type {!Text} */currentNode
	  );
	};
	
	/**
	 * Gets the current Element being patched.
	 * @return {!Element}
	 */
	var currentElement = function currentElement() {
	  if (false) {}
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Skips the children in a subtree, allowing an Element to be closed without
	 * clearing out the children.
	 */
	var skip = function skip() {
	  if (false) {}
	  currentNode = currentParent.lastChild;
	};
	
	/**
	 * The offset in the virtual element declaration where the attributes are
	 * specified.
	 * @const
	 */
	var ATTRIBUTES_OFFSET = 3;
	
	/**
	 * Builds an array of arguments for use with elementOpenStart, attr and
	 * elementOpenEnd.
	 * @const {Array<*>}
	 */
	var argsBuilder = [];
	
	/**
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpen = function elementOpen(tag, key, statics, const_args) {
	  if (false) {}
	
	  var node = coreElementOpen(tag, key, statics);
	  var data = getData(node);
	
	  /*
	   * Checks to see if one or more attributes have changed for a given Element.
	   * When no attributes have changed, this is much faster than checking each
	   * individual argument. When attributes have changed, the overhead of this is
	   * minimal.
	   */
	  var attrsArr = data.attrsArr;
	  var newAttrs = data.newAttrs;
	  var attrsChanged = false;
	  var i = ATTRIBUTES_OFFSET;
	  var j = 0;
	
	  for (; i < arguments.length; i += 1, j += 1) {
	    if (attrsArr[j] !== arguments[i]) {
	      attrsChanged = true;
	      break;
	    }
	  }
	
	  for (; i < arguments.length; i += 1, j += 1) {
	    attrsArr[j] = arguments[i];
	  }
	
	  if (j < attrsArr.length) {
	    attrsChanged = true;
	    attrsArr.length = j;
	  }
	
	  /*
	   * Actually perform the attribute update.
	   */
	  if (attrsChanged) {
	    for (i = ATTRIBUTES_OFFSET; i < arguments.length; i += 2) {
	      newAttrs[arguments[i]] = arguments[i + 1];
	    }
	
	    for (var _attr in newAttrs) {
	      updateAttribute(node, _attr, newAttrs[_attr]);
	      newAttrs[_attr] = undefined;
	    }
	  }
	
	  return node;
	};
	
	/**
	 * Declares a virtual Element at the current location in the document. This
	 * corresponds to an opening tag and a elementClose tag is required. This is
	 * like elementOpen, but the attributes are defined using the attr function
	 * rather than being passed as arguments. Must be folllowed by 0 or more calls
	 * to attr, then a call to elementOpenEnd.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 */
	var elementOpenStart = function elementOpenStart(tag, key, statics) {
	  if (false) {}
	
	  argsBuilder[0] = tag;
	  argsBuilder[1] = key;
	  argsBuilder[2] = statics;
	};
	
	/***
	 * Defines a virtual attribute at this point of the DOM. This is only valid
	 * when called between elementOpenStart and elementOpenEnd.
	 *
	 * @param {string} name
	 * @param {*} value
	 */
	var attr = function attr(name, value) {
	  if (false) {}
	
	  argsBuilder.push(name, value);
	};
	
	/**
	 * Closes an open tag started with elementOpenStart.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpenEnd = function elementOpenEnd() {
	  if (false) {}
	
	  var node = elementOpen.apply(null, argsBuilder);
	  argsBuilder.length = 0;
	  return node;
	};
	
	/**
	 * Closes an open virtual Element.
	 *
	 * @param {string} tag The element's tag.
	 * @return {!Element} The corresponding Element.
	 */
	var elementClose = function elementClose(tag) {
	  if (false) {}
	
	  var node = coreElementClose();
	
	  if (false) {}
	
	  return node;
	};
	
	/**
	 * Declares a virtual Element at the current location in the document that has
	 * no children.
	 * @param {string} tag The element's tag.
	 * @param {?string=} key The key used to identify this element. This can be an
	 *     empty string, but performance may be better if a unique value is used
	 *     when iterating over an array of items.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementVoid = function elementVoid(tag, key, statics, const_args) {
	  elementOpen.apply(null, arguments);
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Element at the current location in the document that is a
	 * placeholder element. Children of this Element can be manually managed and
	 * will not be cleared by the library.
	 *
	 * A key must be specified to make sure that this node is correctly preserved
	 * across all conditionals.
	 *
	 * @param {string} tag The element's tag.
	 * @param {string} key The key used to identify this element.
	 * @param {?Array<*>=} statics An array of attribute name/value pairs of the
	 *     static attributes for the Element. These will only be set once when the
	 *     Element is created.
	 * @param {...*} const_args Attribute name/value pairs of the dynamic attributes
	 *     for the Element.
	 * @return {!Element} The corresponding Element.
	 */
	var elementPlaceholder = function elementPlaceholder(tag, key, statics, const_args) {
	  if (false) {}
	
	  elementOpen.apply(null, arguments);
	  skip();
	  return elementClose(tag);
	};
	
	/**
	 * Declares a virtual Text at this point in the document.
	 *
	 * @param {string|number|boolean} value The value of the Text.
	 * @param {...(function((string|number|boolean)):string)} const_args
	 *     Functions to format the value which are called only when the value has
	 *     changed.
	 * @return {!Text} The corresponding text node.
	 */
	var text = function text(value, const_args) {
	  if (false) {}
	
	  var node = coreText();
	  var data = getData(node);
	
	  if (data.text !== value) {
	    data.text = /** @type {string} */value;
	
	    var formatted = value;
	    for (var i = 1; i < arguments.length; i += 1) {
	      /*
	       * Call the formatter function directly to prevent leaking arguments.
	       * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
	       */
	      var fn = arguments[i];
	      formatted = fn(formatted);
	    }
	
	    node.data = formatted;
	  }
	
	  return node;
	};
	
	exports.patch = patchInner;
	exports.patchInner = patchInner;
	exports.patchOuter = patchOuter;
	exports.currentElement = currentElement;
	exports.skip = skip;
	exports.elementVoid = elementVoid;
	exports.elementOpenStart = elementOpenStart;
	exports.elementOpenEnd = elementOpenEnd;
	exports.elementOpen = elementOpen;
	exports.elementClose = elementClose;
	exports.elementPlaceholder = elementPlaceholder;
	exports.text = text;
	exports.attr = attr;
	exports.symbols = symbols;
	exports.attributes = attributes;
	exports.applyAttr = applyAttr;
	exports.applyProp = applyProp;
	exports.notifications = notifications;
	
	//# sourceMappingURL=incremental-dom-cjs.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	// REGEX //
	
	var re = '';
	
	// Use a native function as a template...
	re += Function.prototype.toString.call(Function);
	
	// Escape special RegExp characters...
	re = re.replace(/([.*+?^=!:$(){}|[\]\/\\])/g, '\\$1');
	
	// Replace any mentions of `Function` to make template generic.
	// Replace `for ...` and additional info provided in other environments, such as Rhino (see lodash).
	re = re.replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?');
	
	// Bracket the regex:
	re = '^' + re + '$';
	
	// EXPORTS //
	
	module.exports = new RegExp(re);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Index = exports.Docs = undefined;
	
	var _docs = __webpack_require__(6);
	
	var _docs2 = _interopRequireDefault(_docs);
	
	var _index = __webpack_require__(12);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Docs = _docs2.default;
	exports.Index = _index2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _skatejs = __webpack_require__(2);
	
	var _helpers = __webpack_require__(7);
	
	exports.default = (0, _skatejs.define)('sk-page-docs', {
	  render: function render() {
	    _skatejs.vdom.elementOpen(_helpers.Layout);
	
	    _skatejs.vdom.elementOpen('p');
	
	    _skatejs.vdom.text('The docs are currently being ported over from the ');
	
	    _skatejs.vdom.elementOpen('a', null, null, 'href', 'https://github.com/skatejs/skatejs');
	
	    _skatejs.vdom.text('README');
	
	    _skatejs.vdom.elementClose('a');
	
	    _skatejs.vdom.text('.');
	
	    _skatejs.vdom.elementClose('p');
	
	    return _skatejs.vdom.elementClose(_helpers.Layout);
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Layout = exports.Link = undefined;
	
	var _renderArbitrary = function _renderArbitrary(child) {
	  var type = typeof child;
	
	  if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	    _skatejs.vdom.text(child);
	  } else if (type === 'function' && child.__jsxDOMWrapper) {
	    child();
	  } else if (Array.isArray(child)) {
	    child.forEach(_renderArbitrary);
	  } else if (type === 'object' && String(child) === '[object Object]') {
	    _forOwn(child, _renderArbitrary);
	  }
	};
	
	var _attr = function _attr(value, name) {
	  _skatejs.vdom.attr(name, value);
	};
	
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	  for (var prop in object) {
	    if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	  }
	};
	
	var _skatejs = __webpack_require__(2);
	
	var _page = __webpack_require__(8);
	
	var _page2 = _interopRequireDefault(_page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function followHref(e) {
	  (0, _page2.default)(e.target.pathname || '/');
	  e.preventDefault();
	}
	
	var Link = exports.Link = function Link(props, chren) {
	  _skatejs.vdom.elementOpenStart('a');
	
	  _forOwn(props, _attr);
	
	  _skatejs.vdom.attr('onclick', followHref);
	
	  _skatejs.vdom.elementOpenEnd('a');
	
	  _renderArbitrary(chren());
	
	  return _skatejs.vdom.elementClose('a');
	};
	var Layout = exports.Layout = function Layout(props, chren) {
	  _skatejs.vdom.elementOpen('div', null, null, 'style', 'padding: 20px');
	
	  _renderArbitrary(chren());
	
	  return _skatejs.vdom.elementClose('div');
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* globals require, module */
	
	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var pathtoRegexp = __webpack_require__(10);
	
	/**
	 * Module exports.
	 */
	
	module.exports = page;
	
	/**
	 * Detect click event
	 */
	var clickEvent = 'undefined' !== typeof document && document.ontouchstart ? 'touchstart' : 'click';
	
	/**
	 * To work properly with the URL
	 * history.location generated polyfill in https://github.com/devote/HTML5-History-API
	 */
	
	var location = 'undefined' !== typeof window && (window.history.location || window.location);
	
	/**
	 * Perform initial dispatch.
	 */
	
	var dispatch = true;
	
	/**
	 * Decode URL components (query string, pathname, hash).
	 * Accommodates both regular percent encoding and x-www-form-urlencoded format.
	 */
	var decodeURLComponents = true;
	
	/**
	 * Base path.
	 */
	
	var base = '';
	
	/**
	 * Running flag.
	 */
	
	var running;
	
	/**
	 * HashBang option
	 */
	
	var hashbang = false;
	
	/**
	 * Previous context, for capturing
	 * page exit events.
	 */
	
	var prevContext;
	
	/**
	 * Register `path` with callback `fn()`,
	 * or route `path`, or redirection,
	 * or `page.start()`.
	 *
	 *   page(fn);
	 *   page('*', fn);
	 *   page('/user/:id', load, user);
	 *   page('/user/' + user.id, { some: 'thing' });
	 *   page('/user/' + user.id);
	 *   page('/from', '/to')
	 *   page();
	 *
	 * @param {string|!Function|!Object} path
	 * @param {Function=} fn
	 * @api public
	 */
	
	function page(path, fn) {
	  // <callback>
	  if ('function' === typeof path) {
	    return page('*', path);
	  }
	
	  // route <path> to <callback ...>
	  if ('function' === typeof fn) {
	    var route = new Route( /** @type {string} */path);
	    for (var i = 1; i < arguments.length; ++i) {
	      page.callbacks.push(route.middleware(arguments[i]));
	    }
	    // show <path> with [state]
	  } else if ('string' === typeof path) {
	    page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
	    // start [options]
	  } else {
	    page.start(path);
	  }
	}
	
	/**
	 * Callback functions.
	 */
	
	page.callbacks = [];
	page.exits = [];
	
	/**
	 * Current path being processed
	 * @type {string}
	 */
	page.current = '';
	
	/**
	 * Number of pages navigated to.
	 * @type {number}
	 *
	 *     page.len == 0;
	 *     page('/login');
	 *     page.len == 1;
	 */
	
	page.len = 0;
	
	/**
	 * Get or set basepath to `path`.
	 *
	 * @param {string} path
	 * @api public
	 */
	
	page.base = function (path) {
	  if (0 === arguments.length) return base;
	  base = path;
	};
	
	/**
	 * Bind with the given `options`.
	 *
	 * Options:
	 *
	 *    - `click` bind to click events [true]
	 *    - `popstate` bind to popstate [true]
	 *    - `dispatch` perform initial dispatch [true]
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	page.start = function (options) {
	  options = options || {};
	  if (running) return;
	  running = true;
	  if (false === options.dispatch) dispatch = false;
	  if (false === options.decodeURLComponents) decodeURLComponents = false;
	  if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
	  if (false !== options.click) {
	    document.addEventListener(clickEvent, onclick, false);
	  }
	  if (true === options.hashbang) hashbang = true;
	  if (!dispatch) return;
	  var url = hashbang && ~location.hash.indexOf('#!') ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
	  page.replace(url, null, true, dispatch);
	};
	
	/**
	 * Unbind click and popstate event handlers.
	 *
	 * @api public
	 */
	
	page.stop = function () {
	  if (!running) return;
	  page.current = '';
	  page.len = 0;
	  running = false;
	  document.removeEventListener(clickEvent, onclick, false);
	  window.removeEventListener('popstate', onpopstate, false);
	};
	
	/**
	 * Show `path` with optional `state` object.
	 *
	 * @param {string} path
	 * @param {Object=} state
	 * @param {boolean=} dispatch
	 * @param {boolean=} push
	 * @return {!Context}
	 * @api public
	 */
	
	page.show = function (path, state, dispatch, push) {
	  var ctx = new Context(path, state);
	  page.current = ctx.path;
	  if (false !== dispatch) page.dispatch(ctx);
	  if (false !== ctx.handled && false !== push) ctx.pushState();
	  return ctx;
	};
	
	/**
	 * Goes back in the history
	 * Back should always let the current route push state and then go back.
	 *
	 * @param {string} path - fallback path to go back if no more history exists, if undefined defaults to page.base
	 * @param {Object=} state
	 * @api public
	 */
	
	page.back = function (path, state) {
	  if (page.len > 0) {
	    // this may need more testing to see if all browsers
	    // wait for the next tick to go back in history
	    history.back();
	    page.len--;
	  } else if (path) {
	    setTimeout(function () {
	      page.show(path, state);
	    });
	  } else {
	    setTimeout(function () {
	      page.show(base, state);
	    });
	  }
	};
	
	/**
	 * Register route to redirect from one path to other
	 * or just redirect to another route
	 *
	 * @param {string} from - if param 'to' is undefined redirects to 'from'
	 * @param {string=} to
	 * @api public
	 */
	page.redirect = function (from, to) {
	  // Define route from a path to another
	  if ('string' === typeof from && 'string' === typeof to) {
	    page(from, function (e) {
	      setTimeout(function () {
	        page.replace( /** @type {!string} */to);
	      }, 0);
	    });
	  }
	
	  // Wait for the push state and replace it with another
	  if ('string' === typeof from && 'undefined' === typeof to) {
	    setTimeout(function () {
	      page.replace(from);
	    }, 0);
	  }
	};
	
	/**
	 * Replace `path` with optional `state` object.
	 *
	 * @param {string} path
	 * @param {Object=} state
	 * @param {boolean=} init
	 * @param {boolean=} dispatch
	 * @return {!Context}
	 * @api public
	 */
	
	page.replace = function (path, state, init, dispatch) {
	  var ctx = new Context(path, state);
	  page.current = ctx.path;
	  ctx.init = init;
	  ctx.save(); // save before dispatching, which may redirect
	  if (false !== dispatch) page.dispatch(ctx);
	  return ctx;
	};
	
	/**
	 * Dispatch the given `ctx`.
	 *
	 * @param {Context} ctx
	 * @api private
	 */
	page.dispatch = function (ctx) {
	  var prev = prevContext,
	      i = 0,
	      j = 0;
	
	  prevContext = ctx;
	
	  function nextExit() {
	    var fn = page.exits[j++];
	    if (!fn) return nextEnter();
	    fn(prev, nextExit);
	  }
	
	  function nextEnter() {
	    var fn = page.callbacks[i++];
	
	    if (ctx.path !== page.current) {
	      ctx.handled = false;
	      return;
	    }
	    if (!fn) return unhandled(ctx);
	    fn(ctx, nextEnter);
	  }
	
	  if (prev) {
	    nextExit();
	  } else {
	    nextEnter();
	  }
	};
	
	/**
	 * Unhandled `ctx`. When it's not the initial
	 * popstate then redirect. If you wish to handle
	 * 404s on your own use `page('*', callback)`.
	 *
	 * @param {Context} ctx
	 * @api private
	 */
	function unhandled(ctx) {
	  if (ctx.handled) return;
	  var current;
	
	  if (hashbang) {
	    current = base + location.hash.replace('#!', '');
	  } else {
	    current = location.pathname + location.search;
	  }
	
	  if (current === ctx.canonicalPath) return;
	  page.stop();
	  ctx.handled = false;
	  location.href = ctx.canonicalPath;
	}
	
	/**
	 * Register an exit route on `path` with
	 * callback `fn()`, which will be called
	 * on the previous context when a new
	 * page is visited.
	 */
	page.exit = function (path, fn) {
	  if (typeof path === 'function') {
	    return page.exit('*', path);
	  }
	
	  var route = new Route(path);
	  for (var i = 1; i < arguments.length; ++i) {
	    page.exits.push(route.middleware(arguments[i]));
	  }
	};
	
	/**
	 * Remove URL encoding from the given `str`.
	 * Accommodates whitespace in both x-www-form-urlencoded
	 * and regular percent-encoded form.
	 *
	 * @param {string} val - URL component to decode
	 */
	function decodeURLEncodedURIComponent(val) {
	  if (typeof val !== 'string') {
	    return val;
	  }
	  return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
	}
	
	/**
	 * Initialize a new "request" `Context`
	 * with the given `path` and optional initial `state`.
	 *
	 * @constructor
	 * @param {string} path
	 * @param {Object=} state
	 * @api public
	 */
	
	function Context(path, state) {
	  if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
	  var i = path.indexOf('?');
	
	  this.canonicalPath = path;
	  this.path = path.replace(base, '') || '/';
	  if (hashbang) this.path = this.path.replace('#!', '') || '/';
	
	  this.title = document.title;
	  this.state = state || {};
	  this.state.path = path;
	  this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
	  this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
	  this.params = {};
	
	  // fragment
	  this.hash = '';
	  if (!hashbang) {
	    if (!~this.path.indexOf('#')) return;
	    var parts = this.path.split('#');
	    this.path = parts[0];
	    this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
	    this.querystring = this.querystring.split('#')[0];
	  }
	}
	
	/**
	 * Expose `Context`.
	 */
	
	page.Context = Context;
	
	/**
	 * Push state.
	 *
	 * @api private
	 */
	
	Context.prototype.pushState = function () {
	  page.len++;
	  history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	};
	
	/**
	 * Save the context state.
	 *
	 * @api public
	 */
	
	Context.prototype.save = function () {
	  history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	};
	
	/**
	 * Initialize `Route` with the given HTTP `path`,
	 * and an array of `callbacks` and `options`.
	 *
	 * Options:
	 *
	 *   - `sensitive`    enable case-sensitive routes
	 *   - `strict`       enable strict matching for trailing slashes
	 *
	 * @constructor
	 * @param {string} path
	 * @param {Object=} options
	 * @api private
	 */
	
	function Route(path, options) {
	  options = options || {};
	  this.path = path === '*' ? '(.*)' : path;
	  this.method = 'GET';
	  this.regexp = pathtoRegexp(this.path, this.keys = [], options);
	}
	
	/**
	 * Expose `Route`.
	 */
	
	page.Route = Route;
	
	/**
	 * Return route middleware with
	 * the given callback `fn()`.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 * @api public
	 */
	
	Route.prototype.middleware = function (fn) {
	  var self = this;
	  return function (ctx, next) {
	    if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
	    next();
	  };
	};
	
	/**
	 * Check if this route matches `path`, if so
	 * populate `params`.
	 *
	 * @param {string} path
	 * @param {Object} params
	 * @return {boolean}
	 * @api private
	 */
	
	Route.prototype.match = function (path, params) {
	  var keys = this.keys,
	      qsIndex = path.indexOf('?'),
	      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
	      m = this.regexp.exec(decodeURIComponent(pathname));
	
	  if (!m) return false;
	
	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1];
	    var val = decodeURLEncodedURIComponent(m[i]);
	    if (val !== undefined || !hasOwnProperty.call(params, key.name)) {
	      params[key.name] = val;
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Handle "populate" events.
	 */
	
	var onpopstate = function () {
	  var loaded = false;
	  if ('undefined' === typeof window) {
	    return;
	  }
	  if (document.readyState === 'complete') {
	    loaded = true;
	  } else {
	    window.addEventListener('load', function () {
	      setTimeout(function () {
	        loaded = true;
	      }, 0);
	    });
	  }
	  return function onpopstate(e) {
	    if (!loaded) return;
	    if (e.state) {
	      var path = e.state.path;
	      page.replace(path, e.state);
	    } else {
	      page.show(location.pathname + location.hash, undefined, undefined, false);
	    }
	  };
	}();
	/**
	 * Handle "click" events.
	 */
	
	function onclick(e) {
	
	  if (1 !== which(e)) return;
	
	  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	  if (e.defaultPrevented) return;
	
	  // ensure link
	  // use shadow dom when available
	  var el = e.path ? e.path[0] : e.target;
	  while (el && 'A' !== el.nodeName) {
	    el = el.parentNode;
	  }if (!el || 'A' !== el.nodeName) return;
	
	  // Ignore if tag has
	  // 1. "download" attribute
	  // 2. rel="external" attribute
	  if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;
	
	  // ensure non-hash for the same path
	  var link = el.getAttribute('href');
	  if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;
	
	  // Check for mailto: in the href
	  if (link && link.indexOf('mailto:') > -1) return;
	
	  // check target
	  if (el.target) return;
	
	  // x-origin
	  if (!sameOrigin(el.href)) return;
	
	  // rebuild path
	  var path = el.pathname + el.search + (el.hash || '');
	
	  // strip leading "/[drive letter]:" on NW.js on Windows
	  if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
	    path = path.replace(/^\/[a-zA-Z]:\//, '/');
	  }
	
	  // same page
	  var orig = path;
	
	  if (path.indexOf(base) === 0) {
	    path = path.substr(base.length);
	  }
	
	  if (hashbang) path = path.replace('#!', '');
	
	  if (base && orig === path) return;
	
	  e.preventDefault();
	  page.show(orig);
	}
	
	/**
	 * Event button.
	 */
	
	function which(e) {
	  e = e || window.event;
	  return null === e.which ? e.button : e.which;
	}
	
	/**
	 * Check if `href` is the same origin.
	 */
	
	function sameOrigin(href) {
	  var origin = location.protocol + '//' + location.hostname;
	  if (location.port) origin += ':' + location.port;
	  return href && 0 === href.indexOf(origin);
	}
	
	page.sameOrigin = sameOrigin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var isarray = __webpack_require__(11);
	
	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp;
	module.exports.parse = parse;
	module.exports.compile = compile;
	module.exports.tokensToFunction = tokensToFunction;
	module.exports.tokensToRegExp = tokensToRegExp;
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	// Match escaped characters that would otherwise appear in future matches.
	// This allows the user to escape special characters that won't transform.
	'(\\\\.)',
	// Match Express-style parameters and un-named parameters with a prefix
	// and optional suffixes. Matches appear as:
	//
	// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
	
	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {String} str
	 * @return {Array}
	 */
	function parse(str) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var res;
	
	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;
	
	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue;
	    }
	
	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }
	
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var suffix = res[6];
	    var asterisk = res[7];
	
	    var repeat = suffix === '+' || suffix === '*';
	    var optional = suffix === '?' || suffix === '*';
	    var delimiter = prefix || '/';
	    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?');
	
	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      pattern: escapeGroup(pattern)
	    });
	  }
	
	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }
	
	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }
	
	  return tokens;
	}
	
	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {String}   str
	 * @return {Function}
	 */
	function compile(str) {
	  return tokensToFunction(parse(str));
	}
	
	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction(tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);
	
	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (_typeof(tokens[i]) === 'object') {
	      matches[i] = new RegExp('^' + tokens[i].pattern + '$');
	    }
	  }
	
	  return function (obj) {
	    var path = '';
	    var data = obj || {};
	
	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];
	
	      if (typeof token === 'string') {
	        path += token;
	
	        continue;
	      }
	
	      var value = data[token.name];
	      var segment;
	
	      if (value == null) {
	        if (token.optional) {
	          continue;
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined');
	        }
	      }
	
	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received "' + value + '"');
	        }
	
	        if (value.length === 0) {
	          if (token.optional) {
	            continue;
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty');
	          }
	        }
	
	        for (var j = 0; j < value.length; j++) {
	          segment = encodeURIComponent(value[j]);
	
	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	          }
	
	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }
	
	        continue;
	      }
	
	      segment = encodeURIComponent(value);
	
	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
	      }
	
	      path += token.prefix + segment;
	    }
	
	    return path;
	  };
	}
	
	/**
	 * Escape a regular expression string.
	 *
	 * @param  {String} str
	 * @return {String}
	 */
	function escapeString(str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/])/g, '\\$1');
	}
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {String} group
	 * @return {String}
	 */
	function escapeGroup(group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1');
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {RegExp} re
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function attachKeys(re, keys) {
	  re.keys = keys;
	  return re;
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {String}
	 */
	function flags(options) {
	  return options.sensitive ? '' : 'i';
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {RegExp} path
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function regexpToRegexp(path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        pattern: null
	      });
	    }
	  }
	
	  return attachKeys(path, keys);
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {Array}  path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function arrayToRegexp(path, keys, options) {
	  var parts = [];
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
	
	  return attachKeys(regexp, keys);
	}
	
	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {String} path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function stringToRegexp(path, keys, options) {
	  var tokens = parse(path);
	  var re = tokensToRegExp(tokens, options);
	
	  // Attach keys back to the regexp.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] !== 'string') {
	      keys.push(tokens[i]);
	    }
	  }
	
	  return attachKeys(re, keys);
	}
	
	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {Array}  tokens
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function tokensToRegExp(tokens, options) {
	  options = options || {};
	
	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';
	  var lastToken = tokens[tokens.length - 1];
	  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken);
	
	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];
	
	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = token.pattern;
	
	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }
	
	      if (token.optional) {
	        if (prefix) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }
	
	      route += capture;
	    }
	  }
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
	  }
	
	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)';
	  }
	
	  return new RegExp('^' + route, flags(options));
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(String|RegExp|Array)} path
	 * @param  {Array}                 [keys]
	 * @param  {Object}                [options]
	 * @return {RegExp}
	 */
	function pathToRegexp(path, keys, options) {
	  keys = keys || [];
	
	  if (!isarray(keys)) {
	    options = keys;
	    keys = [];
	  } else if (!options) {
	    options = {};
	  }
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, keys, options);
	  }
	
	  if (isarray(path)) {
	    return arrayToRegexp(path, keys, options);
	  }
	
	  return stringToRegexp(path, keys, options);
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	  for (var prop in object) {
	    if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	  }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	  var type = typeof child;
	
	  if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	    vdom.text(child);
	  } else if (type === 'function' && child.__jsxDOMWrapper) {
	    child();
	  } else if (Array.isArray(child)) {
	    child.forEach(_renderArbitrary);
	  } else if (type === 'object' && String(child) === '[object Object]') {
	    _forOwn(child, _renderArbitrary);
	  }
	};
	
	var _skatejs = __webpack_require__(2);
	
	var skate = _interopRequireWildcard(_skatejs);
	
	var _index = __webpack_require__(13);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var define = skate.define;
	var vdom = skate.vdom;
	
	
	function format(code) {
	  var lines = code.split('\n');
	  var ident = lines[1].match(/^\s*/)[0].length;
	  return lines.map(function (line) {
	    return line.substring(ident);
	  }).join('\n').trim();
	}
	
	var CodeExample = function CodeExample(props, chren) {
	  vdom.elementOpen('div', null, null, 'class', _index2.default.locals.codeExample);
	  vdom.elementOpen('div');
	  vdom.elementOpen('h3');
	  vdom.text('JS');
	  vdom.elementClose('h3');
	  vdom.elementOpen('pre');
	  vdom.elementOpen('code');
	
	  _renderArbitrary(format(props.js));
	
	  vdom.elementClose('code');
	  vdom.elementClose('pre');
	  vdom.elementClose('div');
	  vdom.elementOpen('div');
	  vdom.elementOpen('h3');
	  vdom.text('HTML');
	  vdom.elementClose('h3');
	  vdom.elementOpen('pre');
	  vdom.elementOpen('code');
	
	  _renderArbitrary(format(props.html));
	
	  vdom.elementClose('code');
	  vdom.elementClose('pre');
	  vdom.elementClose('div');
	  vdom.elementOpen('div');
	  vdom.elementOpen('h3');
	  vdom.text('Result');
	  vdom.elementClose('h3');
	  vdom.elementOpen('p');
	
	  _renderArbitrary(chren());
	
	  vdom.elementClose('p');
	  vdom.elementClose('div');
	  return vdom.elementClose('div');
	};
	
	var FeaturePane = function FeaturePane(props, chren) {
	  vdom.elementOpen('div', null, null, 'class', _index2.default.locals.featurePane);
	  vdom.elementOpen('h3');
	
	  _renderArbitrary(props.title);
	
	  vdom.elementClose('h3');
	  vdom.elementOpen('p');
	
	  _renderArbitrary(chren());
	
	  vdom.elementClose('p');
	  return vdom.elementClose('div');
	};
	
	// Examples
	
	skate.define('x-hello', {
	  render: function render() {
	    vdom.elementOpen('span');
	    vdom.text('Hello, ');
	    vdom.elementVoid('slot');
	    vdom.text('!');
	    return vdom.elementClose('span');
	  }
	});
	
	skate.define('x-counter', {
	  props: {
	    count: skate.prop.number()
	  },
	  attached: function attached(elem) {
	    elem.__ival = setInterval(function () {
	      return ++elem.count;
	    }, 1000);
	  },
	  detached: function detached(elem) {
	    clearInterval(elem.__ival);
	  },
	  render: function render(elem) {
	    vdom.elementOpen('span');
	    vdom.text('Count: ');
	
	    _renderArbitrary(elem.count);
	
	    return vdom.elementClose('span');
	  }
	});
	
	exports.default = define('sk-page-index', {
	  render: function render() {
	    vdom.elementOpen('div');
	    vdom.elementOpen('style');
	
	    _renderArbitrary(_index2.default.toString());
	
	    vdom.elementClose('style');
	    vdom.elementOpen('div', null, null, 'class', _index2.default.locals.hero);
	    vdom.elementOpen('h1');
	    vdom.text('SkateJS');
	    vdom.elementClose('h1');
	    vdom.elementOpen('p');
	    vdom.text('Skate is a functional, featherweight and cross-framework compatible web component library built on W3C specs.');
	    vdom.elementClose('p');
	    vdom.elementClose('div');
	    vdom.elementOpen('div', null, null, 'class', _index2.default.locals.featurePanes);
	    vdom.elementOpen(FeaturePane, null, null, 'title', 'Forward-thinking');
	    vdom.text(' Skate leverages the web platform and is built on top of the ');
	    vdom.elementOpen('a', null, null, 'href', 'https://github.com/w3c/webcomponents');
	    vdom.text('W3C Web Component specs');
	    vdom.elementClose('a');
	    vdom.text('. From this it gets native performance, longevity and cross-framework compatibility. ');
	    vdom.elementClose(FeaturePane);
	    vdom.elementOpen(FeaturePane, null, null, 'title', 'Functional');
	    vdom.elementOpen('a', null, null, 'href', 'https://github.com/google/incremental-dom');
	    vdom.text('Incremental DOM');
	    vdom.elementClose('a');
	    vdom.text(' backs Skate\'s functional rendering pipeline, offering performance, memory-efficiency and simplicity. ');
	    vdom.elementClose(FeaturePane);
	    vdom.elementOpen(FeaturePane, null, null, 'title', 'Featherweight');
	    vdom.text(' Weighing in at only 5k min+gz, it gives you a solid foundation for building complex UI components without downloading the entire internet. ');
	    vdom.elementClose(FeaturePane);
	    vdom.elementClose('div');
	    vdom.elementOpen(CodeExample, null, null, 'html', '\n            <x-hello>Bob</x-hello>\n          ', 'js', '\n            skate.define(\'x-hello\', {\n              render() {\n                return <span>Hello, <slot />!</span>;\n              },\n            });\n          ');
	    vdom.elementOpen('x-hello');
	    vdom.text('Bob');
	    vdom.elementClose('x-hello');
	    vdom.elementClose(CodeExample);
	    vdom.elementOpen(CodeExample, null, null, 'html', '\n            <x-counter count="1"></x-counter>\n          ', 'js', '\n            skate.define(\'x-counter\', {\n              props: {\n                count: skate.prop.number(),\n              },\n              attached(elem) {\n                elem.__ival = setInterval(() => ++elem.count, 1000);\n              },\n              detached(elem) {\n                clearInterval(elem.__ival);\n              },\n              render(elem) {\n                return <span>Count: {elem.count}</span>;\n              },\n            });\n          ');
	    vdom.elementOpen('x-counter', null, null, 'count', '1');
	    vdom.elementClose('x-counter');
	    vdom.elementClose(CodeExample);
	    return vdom.elementClose('div');
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "._2kWNDIfW4mqEKHe3oTRqk3{background-color:#f8f5ec;padding:20px}._2kWNDIfW4mqEKHe3oTRqk3 h3,._2kWNDIfW4mqEKHe3oTRqk3 p,._2kWNDIfW4mqEKHe3oTRqk3 pre{margin:0;padding:20px}._2kWNDIfW4mqEKHe3oTRqk3 h3{background-color:#dad6ce;font-weight:200}._2kWNDIfW4mqEKHe3oTRqk3 p,._2kWNDIfW4mqEKHe3oTRqk3 pre{background-color:#f1ede4;font-weight:100}.iYB-ylcS-0bRr059nTAvY{background-color:#111;color:#eee;font-size:14px;margin:10px;width:33%}.iYB-ylcS-0bRr059nTAvY a{color:#fff}.iYB-ylcS-0bRr059nTAvY h3{background-color:#222;font-weight:200}.iYB-ylcS-0bRr059nTAvY p{font-weight:100}.iYB-ylcS-0bRr059nTAvY h3,.iYB-ylcS-0bRr059nTAvY p{margin:0;padding:20px}._2eA-gGgtu95U0T2LIjbefD{background-color:#333;display:flex;padding:10px}._34LLXGQWwpFC-AGNgRE-Zi{background-color:#f4547b;color:#fff;padding:40px}._34LLXGQWwpFC-AGNgRE-Zi h1{font-size:48px;font-weight:200;margin-top:0}._34LLXGQWwpFC-AGNgRE-Zi p{font-size:24px;font-weight:100;margin-bottom:0}", ""]);
	
	// exports
	exports.locals = {
		"code-example": "_2kWNDIfW4mqEKHe3oTRqk3",
		"codeExample": "_2kWNDIfW4mqEKHe3oTRqk3",
		"feature-pane": "iYB-ylcS-0bRr059nTAvY",
		"featurePane": "iYB-ylcS-0bRr059nTAvY",
		"feature-panes": "_2eA-gGgtu95U0T2LIjbefD",
		"featurePanes": "_2eA-gGgtu95U0T2LIjbefD",
		"hero": "_34LLXGQWwpFC-AGNgRE-Zi",
		"hero": "_34LLXGQWwpFC-AGNgRE-Zi"
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	  for (var prop in object) {
	    if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	  }
	};
	
	var _renderArbitrary = function _renderArbitrary(child) {
	  var type = typeof child;
	
	  if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	    _skatejs.vdom.text(child);
	  } else if (type === 'function' && child.__jsxDOMWrapper) {
	    child();
	  } else if (Array.isArray(child)) {
	    child.forEach(_renderArbitrary);
	  } else if (type === 'object' && String(child) === '[object Object]') {
	    _forOwn(child, _renderArbitrary);
	  }
	};
	
	var _skatejs = __webpack_require__(2);
	
	var _index = __webpack_require__(16);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props, chren) {
	  _skatejs.vdom.elementOpen('div', null, null, 'class', _index2.default.locals.body);
	
	  _skatejs.vdom.elementOpen('style');
	
	  _renderArbitrary(_index2.default.toString());
	
	  _skatejs.vdom.elementClose('style');
	
	  _renderArbitrary(chren());
	
	  return _skatejs.vdom.elementClose('div');
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".JotV9DC7cFGUX61mmETT1{background-color:#fefefe;color:#333;font-size:16px;padding:60px 0 0}", ""]);
	
	// exports
	exports.locals = {
		"body": "JotV9DC7cFGUX61mmETT1",
		"body": "JotV9DC7cFGUX61mmETT1"
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _renderArbitrary = function _renderArbitrary(child) {
	  var type = typeof child;
	
	  if (type === 'number' || type === 'string' || type === 'object' && child instanceof String) {
	    _skatejs.vdom.text(child);
	  } else if (type === 'function' && child.__jsxDOMWrapper) {
	    child();
	  } else if (Array.isArray(child)) {
	    child.forEach(_renderArbitrary);
	  } else if (type === 'object' && String(child) === '[object Object]') {
	    _forOwn(child, _renderArbitrary);
	  }
	};
	
	var _attr = function _attr(value, name) {
	  _skatejs.vdom.attr(name, value);
	};
	
	var _hasOwn = Object.prototype.hasOwnProperty;
	
	var _forOwn = function _forOwn(object, iterator) {
	  for (var prop in object) {
	    if (_hasOwn.call(object, prop)) iterator(object[prop], prop);
	  }
	};
	
	var _skatejs = __webpack_require__(2);
	
	var _helpers = __webpack_require__(7);
	
	var _index = __webpack_require__(18);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _logo = __webpack_require__(19);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Item = function Item(props, chren) {
	  _skatejs.vdom.elementOpen('li', null, null, 'class', _index2.default.locals.item);
	
	  _renderArbitrary(props.external ? ((_skatejs.vdom.elementOpenStart('a'), _forOwn(props, _attr), _skatejs.vdom.attr('class', _index2.default.locals.link), _skatejs.vdom.elementOpenEnd('a')), _renderArbitrary(chren()), _skatejs.vdom.elementClose('a')) : ((_skatejs.vdom.elementOpenStart(_helpers.Link), _forOwn(props, _attr), _skatejs.vdom.attr('class', _index2.default.locals.link), _skatejs.vdom.elementOpenEnd(_helpers.Link)), _renderArbitrary(chren()), _skatejs.vdom.elementClose(_helpers.Link)));
	
	  return _skatejs.vdom.elementClose('li');
	};
	
	exports.default = function (props) {
	  _skatejs.vdom.elementOpen('div');
	
	  _skatejs.vdom.elementOpen('style');
	
	  _renderArbitrary(_index2.default.toString());
	
	  _skatejs.vdom.elementClose('style');
	
	  _skatejs.vdom.elementOpen('div', null, null, 'class', _index2.default.locals.header + ' ' + (props.scrolled ? _index2.default.locals.scrolled : ''));
	
	  _skatejs.vdom.elementOpen('h1', null, null, 'class', _index2.default.locals.title);
	
	  _skatejs.vdom.elementOpen(_helpers.Link, null, null, 'href', '/');
	
	  _skatejs.vdom.elementVoid('img', null, null, 'alt', props.title, 'src', _logo2.default, 'width', '30');
	
	  _skatejs.vdom.elementClose(_helpers.Link);
	
	  _skatejs.vdom.elementClose('h1');
	
	  _skatejs.vdom.elementOpen('ul', null, null, 'class', _index2.default.locals.list);
	
	  _skatejs.vdom.elementOpen(Item, null, null, 'href', '/docs');
	
	  _skatejs.vdom.text('Docs');
	
	  _skatejs.vdom.elementClose(Item);
	
	  _skatejs.vdom.elementOpen(Item, null, null, 'href', 'https://github.com/skatejs/skatejs', 'external', true);
	
	  _skatejs.vdom.text('Github');
	
	  _skatejs.vdom.elementClose(Item);
	
	  _skatejs.vdom.elementClose('ul');
	
	  _skatejs.vdom.elementClose('div');
	
	  return _skatejs.vdom.elementClose('div');
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "._2Hd5KzDR5h1JLZaLAhkdnL{background-color:#fefefe;color:#333;position:fixed;transition:box-shadow .3s ease;width:100%}._1P6DOElNwq3GvvXJFHGg0J{box-shadow:0 0 15px 0 #333}._3EU-FaAppzWRdOf0yzUQbO{list-style:none}._3EU-FaAppzWRdOf0yzUQbO,._3h8r-c6pyf3k8OkYptB6eQ{display:inline-block;margin:0;padding:0}._1O98iTVLbgr87bKcZ1xtCv{display:inline-block;margin:0 20px 0 10px;padding:0;position:relative;left:14px;top:8px}._3gAAJyILxgLXLUDHVCLw1K{color:#333;display:inline-block;font-size:18px;margin:0;padding:20px;text-decoration:none;transition:background-color .3s ease}._3gAAJyILxgLXLUDHVCLw1K:hover{background-color:#eee}", ""]);
	
	// exports
	exports.locals = {
		"header": "_2Hd5KzDR5h1JLZaLAhkdnL",
		"header": "_2Hd5KzDR5h1JLZaLAhkdnL",
		"scrolled": "_1P6DOElNwq3GvvXJFHGg0J",
		"scrolled": "_1P6DOElNwq3GvvXJFHGg0J",
		"list": "_3EU-FaAppzWRdOf0yzUQbO",
		"list": "_3EU-FaAppzWRdOf0yzUQbO",
		"item": "_3h8r-c6pyf3k8OkYptB6eQ",
		"item": "_3h8r-c6pyf3k8OkYptB6eQ",
		"title": "_1O98iTVLbgr87bKcZ1xtCv",
		"title": "_1O98iTVLbgr87bKcZ1xtCv",
		"link": "_3gAAJyILxgLXLUDHVCLw1K",
		"link": "_3gAAJyILxgLXLUDHVCLw1K"
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/cdcf8f64994df2f0ca865f88e17aaa59.png";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Route = undefined;
	
	var _skatejs = __webpack_require__(2);
	
	var _page = __webpack_require__(8);
	
	var _page2 = _interopRequireDefault(_page);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createRouteHandler(elem, detail) {
	  return function () {
	    (0, _skatejs.emit)(elem, 'RouteChange', { detail: detail });
	  };
	}
	
	function onRouteUpdate(elem) {
	  return function (e) {
	    var _e$target = e.target;
	    var component = _e$target.component;
	    var path = _e$target.path;
	
	    if (component && path) {
	      (0, _page2.default)(path, createRouteHandler(elem, component));
	      (0, _page2.default)(window.location.pathname);
	    }
	  };
	}
	
	exports.default = (0, _skatejs.define)('sk-router', {
	  render: function render(elem) {
	    return _skatejs.vdom.elementVoid('slot', null, null, 'onRouteUpdate', onRouteUpdate(elem));
	  }
	});
	var Route = exports.Route = (0, _skatejs.define)('sk-router-route', {
	  props: {
	    component: {},
	    path: {}
	  },
	  render: function render(elem) {
	    // We have to use render() to emit an event because there's no lifecycle
	    // callbacks for:
	    // - before receiving properties
	    // - after receiving properties
	    var component = elem.component;
	    var path = elem.path;
	
	    if (component && path) {
	      (0, _skatejs.emit)(elem, 'RouteUpdate', {
	        detail: { component: component, path: path }
	      });
	    }
	  }
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (title) {
	  document.title = title;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "html{font-family:Helvetica;font-size:14px}body{margin:0}a{color:#333}", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index-with-deps.js.map