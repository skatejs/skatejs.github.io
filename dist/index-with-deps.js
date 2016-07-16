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
	
	var _index3 = __webpack_require__(14);
	
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
	
	var _body = __webpack_require__(5);
	
	var _body2 = _interopRequireDefault(_body);
	
	var _footer = __webpack_require__(8);
	
	var _footer2 = _interopRequireDefault(_footer);
	
	var _header = __webpack_require__(10);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _title = __webpack_require__(13);
	
	var _title2 = _interopRequireDefault(_title);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _skatejs.define)('sk-app', {
	  props: {
	    page: _skatejs.prop.string(),
	    scrolled: _skatejs.prop.boolean()
	  },
	  attached: function attached(elem) {
	    window.addEventListener('scroll', elem._scrollHandler = function () {
	      return elem.scrolled = !!window.scrollY;
	    });
	    elem.page = 'testing...';
	  },
	  detached: function detached(elem) {
	    window.removeEventListener('scroll', elem._scrollHandler);
	  },
	  render: function render(elem) {
	    (0, _title2.default)('SkateJS - functional web components');
	
	    _skatejs.vdom.elementOpen('div');
	
	    _skatejs.vdom.elementOpen(_header2.default, null, null, 'scrolled', elem.scrolled, 'title', 'SkateJS');
	
	    _skatejs.vdom.elementClose(_header2.default);
	
	    _skatejs.vdom.elementOpen(_body2.default);
	
	    _renderArbitrary(elem.page);
	
	    _skatejs.vdom.elementClose(_body2.default);
	
	    _skatejs.vdom.elementOpen(_footer2.default);
	
	    _skatejs.vdom.elementClose(_footer2.default);
	
	    return _skatejs.vdom.elementClose('div');
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(3), __webpack_require__(4)) : typeof define === 'function' && define.amd ? define(['exports', 'incremental-dom', 'regex-native-function'], factory) : factory(global.skate = global.skate || {}, global.IncrementalDOM, global.isNativeRegex);
	})(this, function (exports, incrementalDom, isNativeRegex) {
	
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
	
	  var $created = '____skate_created';
	  var $ctor = '____skate_constructor';
	  var $events = '____skate_events';
	  var $name = '____skate_name';
	  var $props = '____skate_props';
	  var $renderer = '____skate_renderer';
	  var $rendererDebounced = '____skate_rendererDebounced';
	  var $shadowRoot = '____skate_shadowRoot';
	
	  var symbols$1 = Object.freeze({
	    name: $name,
	    shadowRoot: $shadowRoot
	  });
	
	  // checks if a function is native using regex
	
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
	    } else if (isPolyfill(elem, v1ShadowDOMProperty) && isNative(elem, v0ShadowDOMProperty)) {
	      return true;
	    } else if (!isPolyfill(elem, v1ShadowDOMProperty) && isNative(elem, v0ShadowDOMProperty)) {
	      return true;
	    } else {
	      return false;
	    }
	  }
	
	  function shouldUseShadowDomV1(elem) {
	    if (isNative(elem, v1ShadowDOMProperty)) {
	      return true;
	    } else if (isPolyfill(elem, v1ShadowDOMProperty) && isNative(elem, v0ShadowDOMProperty)) {
	      return false;
	    } else if (isPolyfill(elem, v1ShadowDOMProperty)) {
	      return true;
	    } else {
	      return false;
	    }
	  }
	
	  var customElementsV0 = !!document.registerElement;
	  var customElementsV0Polyfill = customElementsV0 && !Document.prototype.registerElement;
	  var customElementsV1 = !!window.customElements;
	
	  var shadowDomV0 = shouldUseShadowDomV0(div);
	  var shadowDomV1 = shouldUseShadowDomV1(div);
	
	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	
	  var classCallCheck = function (instance, Constructor) {
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
	
	  var defineProperty = function (obj, key, value) {
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
	
	  var inherits = function (subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
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
	
	  var possibleConstructorReturn = function (self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  };
	
	  var toConsumableArray = function (arr) {
	    if (Array.isArray(arr)) {
	      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	      return arr2;
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
	
	      var tname = args[0] = resolveTagName(args[0]);
	      if (typeof tname === 'function') {
	        // If we've encountered a function, handle it according to the type of
	        // function that is being wrapped.
	        tnameFuncHandler(tname);
	      } else if (stackChren.length) {
	        // We pass the wrap() function in here so that when it's called as
	        // children, it will queue up for the next stack, if there is one.
	        stackChren[stackChren.length - 1].push([wrap, args]);
	      } else {
	        // If there is no stack left, we call Incremental DOM directly.
	        return func.apply(undefined, args);
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
	
	  function stackOpen() {
	    stackChren.push([]);
	    stackProps.push({});
	  }
	
	  function stackClose(tname) {
	    var chren = stackChren.pop();
	    var props = stackProps.pop();
	    tname(props, function () {
	      return chren.forEach(function (args) {
	        return args[0].apply(args, toConsumableArray(args[1]));
	      });
	    });
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
	  var newElementVoid = wrapIdomFunc(incrementalDom.elementVoid);
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
	
	  var definePropertyConstructor = function (obj, value) {
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
	        var cb = this.constructor.attached;
	        cb && cb(this);
	      }
	    }, {
	      key: 'disconnectedCallback',
	      value: function disconnectedCallback() {
	        var cb = this.constructor.detached;
	        cb && cb(this);
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
	        var definedAttribute = Ctor.definedAttribute;
	        var events = Ctor.events;
	        var created = Ctor.created;
	        var observedAttributes = Ctor.observedAttributes;
	        var props = Ctor.props;
	        var ready = Ctor.ready;
	        var renderedAttribute = Ctor.renderedAttribute;
	
	        var renderer = Ctor[$renderer];
	
	        // TODO: This prevents an element from being initialised multiple times. For
	        // some reason this is happening in the event tests. It's possibly creating
	        // elements in a way that the causes the custom element v1 polyfill to call
	        // the constructor twice.
	        if (this[$created]) return;
	        this[$created] = true;
	
	        if (props) {
	          Ctor[$props](this);
	        }
	
	        if (events) {
	          Ctor[$events](this);
	        }
	
	        if (created) {
	          created(this);
	        }
	
	        if (renderer && !this.hasAttribute(renderedAttribute)) {
	          renderer(this);
	        }
	
	        if (ready) {
	          ready(this);
	        }
	
	        if (!this.hasAttribute(definedAttribute)) {
	          this.setAttribute(definedAttribute, '');
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
	      key: 'definedAttribute',
	      get: function get() {
	        return 'defined';
	      }
	    }, {
	      key: 'events',
	      get: function get() {
	        return {};
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
	    }, {
	      key: 'renderedAttribute',
	      get: function get() {
	        return 'rendered';
	      }
	    }]);
	    return Component;
	  }(HTMLElement);
	
	  var elProto = window.HTMLElement.prototype;
	  var nativeMatchesSelector = elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector || elProto.mozMatchesSelector || elProto.oMatchesSelector;
	
	  // Only IE9 has this msMatchesSelector bug, but best to detect it.
	  var hasNativeMatchesSelectorDetattachedBug = !nativeMatchesSelector.call(document.createElement('div'), 'div');
	
	  function matches(element, selector) {
	    if (hasNativeMatchesSelectorDetattachedBug) {
	      var clone = element.cloneNode();
	      document.createElement('div').appendChild(clone);
	      return nativeMatchesSelector.call(clone, selector);
	    }
	    return nativeMatchesSelector.call(element, selector);
	  }
	
	  function readonly(obj, prop, val) {
	    Object.defineProperty(obj, prop, {
	      configurable: true,
	      get: function get() {
	        return val;
	      }
	    });
	  }
	
	  function parseEvent(e) {
	    var indexOfSpace = e.indexOf(' ');
	    var hasSpace = indexOfSpace > 0;
	    var name = hasSpace ? e.substring(0, indexOfSpace) : e;
	    var selector = hasSpace ? e.substring(indexOfSpace + 1) : '';
	    return {
	      name: name,
	      selector: selector
	    };
	  }
	
	  function makeDelegateHandler(elem, handler, parsed) {
	    return function (e) {
	      var current = e.path ? e.path[0] : e.target;
	      var selector = parsed.selector;
	      while (current && current !== elem.parentNode) {
	        if (current.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
	          break;
	        }
	        if (matches(current, selector)) {
	          readonly(e, 'currentTarget', current);
	          readonly(e, 'delegateTarget', elem);
	          return handler(elem, e);
	        }
	        current = current.parentNode;
	      }
	    };
	  }
	
	  function makeNormalHandler(elem, handler) {
	    return function (e) {
	      readonly(e, 'delegateTarget', elem);
	      handler(elem, e);
	    };
	  }
	
	  function bindEvent(elem, event, handler) {
	    var parsed = parseEvent(event);
	    var name = parsed.name;
	    var selector = parsed.selector;
	
	    var capture = selector && (name === 'blur' || name === 'focus');
	    handler = selector ? makeDelegateHandler(elem, handler, parsed) : makeNormalHandler(elem, handler);
	    elem.addEventListener(name, handler, capture);
	  }
	
	  function events(opts) {
	    var events = opts.events || {};
	    return function (elem) {
	      for (var name in events) {
	        bindEvent(elem, name, events[name]);
	      }
	    };
	  }
	
	  function createRenderer(Ctor) {
	    var render = Ctor.render;
	
	    return function (elem) {
	      if (!render) {
	        return;
	      }
	
	      if (!elem[$shadowRoot]) {
	        var sr = void 0;
	
	        if (shadowDomV1) {
	          sr = elem.attachShadow({ mode: 'open' });
	        } else if (shadowDomV0) {
	          sr = elem.createShadowRoot();
	        } else {
	          sr = elem;
	        }
	
	        elem[$shadowRoot] = sr;
	      }
	
	      incrementalDom.patchInner(elem[$shadowRoot], render, elem);
	    };
	  }
	
	  function dashCase(str) {
	    return str.split(/([A-Z])/).reduce(function (one, two, idx) {
	      var dash = !one || idx % 2 === 0 ? '' : '-';
	      return '' + one + dash + two.toLowerCase();
	    });
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
	
	    prop.render = function () {
	      var shouldUpdate = opts.render;
	      if (typeof shouldUpdate === 'undefined') {
	        return function (elem, data) {
	          return data.newValue !== data.oldValue;
	        };
	      }
	      if (typeof shouldUpdate === 'function') {
	        return shouldUpdate;
	      }
	      return function () {
	        return !!shouldUpdate;
	      };
	    }();
	
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
	
	      // Re-render on property updates if the should-update check passes.
	      if (prop.render(this, changeData)) {
	        var deb = this[$rendererDebounced] || (this[$rendererDebounced] = debounce(this.constructor[$renderer]));
	        deb(this);
	      }
	
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
	    var registered = registry[name];
	    return registered ? name + '-' + registered : name;
	  }
	
	  function registerUniqueName(name) {
	    registry[name] = registry[name] ? registry[name] + 1 : 1;
	  }
	
	  function define(name, opts) {
	    var uniqueName = generateUniqueName(name);
	    var Ctor = (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object' ? Component.extend(opts) : opts;
	
	    registerUniqueName(name);
	    formatLinkedAttributes(Ctor);
	
	    Ctor[$events] = events(Ctor);
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
	
	  function get$1(elem) {
	    var props = elem.constructor.props;
	    var state = {};
	    for (var key in props) {
	      var val = elem[key];
	      if (typeof val !== 'undefined') {
	        state[key] = val;
	      }
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
	    if (elem.hasAttribute(elem.constructor.definedAttribute)) {
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
	var has = function (map, property) {
	  return hasOwnProperty.call(map, property);
	};
	
	/**
	 * Creates an map object without a prototype.
	 * @return {!Object}
	 */
	var createMap = function () {
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
	var initData = function (node, nodeName, key) {
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
	var getData = function (node) {
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
	var getNamespace = function (name) {
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
	var applyAttr = function (el, name, value) {
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
	var applyProp = function (el, name, value) {
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
	var applyStyle = function (el, name, style) {
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
	var applyAttributeTyped = function (el, name, value) {
	  var type = typeof value;
	
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
	var updateAttribute = function (el, name, value) {
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
	var getNamespaceForTag = function (tag, parent) {
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
	var createElement = function (doc, parent, tag, key, statics) {
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
	var createText = function (doc) {
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
	var createKeyMap = function (el) {
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
	var getKeyMap = function (el) {
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
	var getChild = function (parent, key) {
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
	var registerChild = function (parent, key, child) {
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
	var assertKeyedTagMatches = function (nodeName, tag, key) {
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
	var patchFactory = function (run) {
	  /**
	   * TODO(moz): These annotations won't be necessary once we switch to Closure
	   * Compiler's new type inference. Remove these once the switch is done.
	   *
	   * @param {(!Element|!DocumentFragment)} node
	   * @param {!function(T)} fn
	   * @param {T=} data
	   * @template T
	   */
	  var f = function (node, fn, data) {
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
	var matches = function (nodeName, key) {
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
	var alignWithDOM = function (nodeName, key, statics) {
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
	var clearUnvisitedDOM = function () {
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
	var enterNode = function () {
	  currentParent = currentNode;
	  currentNode = null;
	};
	
	/**
	 * Changes to the next sibling of the current node.
	 */
	var nextNode = function () {
	  if (currentNode) {
	    currentNode = currentNode.nextSibling;
	  } else {
	    currentNode = currentParent.firstChild;
	  }
	};
	
	/**
	 * Changes to the parent of the current node, removing any unvisited children.
	 */
	var exitNode = function () {
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
	var coreElementOpen = function (tag, key, statics) {
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
	var coreElementClose = function () {
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
	var coreText = function () {
	  nextNode();
	  alignWithDOM('#text', null, null);
	  return (/** @type {!Text} */currentNode
	  );
	};
	
	/**
	 * Gets the current Element being patched.
	 * @return {!Element}
	 */
	var currentElement = function () {
	  if (false) {}
	  return (/** @type {!Element} */currentParent
	  );
	};
	
	/**
	 * Skips the children in a subtree, allowing an Element to be closed without
	 * clearing out the children.
	 */
	var skip = function () {
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
	var elementOpen = function (tag, key, statics, const_args) {
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
	var elementOpenStart = function (tag, key, statics) {
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
	var attr = function (name, value) {
	  if (false) {}
	
	  argsBuilder.push(name, value);
	};
	
	/**
	 * Closes an open tag started with elementOpenStart.
	 * @return {!Element} The corresponding Element.
	 */
	var elementOpenEnd = function () {
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
	var elementClose = function (tag) {
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
	var elementVoid = function (tag, key, statics, const_args) {
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
	var elementPlaceholder = function (tag, key, statics, const_args) {
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
	var text = function (value, const_args) {
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
	
	var _index = __webpack_require__(6);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".JotV9DC7cFGUX61mmETT1{background-color:#fefefe;color:#333;font-size:16px;padding:60px 20px 10px}", ""]);
	
	// exports
	exports.locals = {
		"body": "JotV9DC7cFGUX61mmETT1",
		"body": "JotV9DC7cFGUX61mmETT1"
	};

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsxWrapper = function _jsxWrapper(func, args) {
	  var wrapper = args ? function wrapper() {
	    return func.apply(this, args);
	  } : func;
	  wrapper.__jsxDOMWrapper = true;
	  return wrapper;
	};
	
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
	
	var _index = __webpack_require__(9);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var List = function List(props) {
	  _skatejs.vdom.elementOpen('ul', null, null, 'class', _index2.default.locals.list);
	
	  _renderArbitrary(Object.keys(props.items).map(function (item) {
	    return _jsxWrapper(function (_css$locals$item, _css$locals$link, _props$items$item, _item) {
	      _skatejs.vdom.elementOpen('li', null, null, 'class', _css$locals$item);
	
	      _skatejs.vdom.elementOpen('a', null, null, 'class', _css$locals$link, 'href', _props$items$item);
	
	      _renderArbitrary(_item);
	
	      _skatejs.vdom.elementClose('a');
	
	      return _skatejs.vdom.elementClose('li');
	    }, [_index2.default.locals.item, _index2.default.locals.link, props.items[item], item]);
	  }));
	
	  return _skatejs.vdom.elementClose('ul');
	};
	
	exports.default = function () {
	  _skatejs.vdom.elementOpen('div', null, null, 'class', _index2.default.locals.footer);
	
	  _skatejs.vdom.elementOpen('style');
	
	  _renderArbitrary(_index2.default.toString());
	
	  _skatejs.vdom.elementClose('style');
	
	  _skatejs.vdom.elementOpen(List, null, null, 'items', { Docs: 'docs/' });
	
	  _skatejs.vdom.elementClose(List);
	
	  return _skatejs.vdom.elementClose('div');
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "._2pOZ9JVRdOcst-M-V8CIG-{background-color:#333;color:#eee;font-size:12px;padding:10px 20px}.HAjb6JuBA0hiG3VMO17sO{padding:0}.ZXtuSy6oo7L79SnJvwsHt{color:#eee;text-decoration:none}._3k8ml8FyWDLKqwlHkSBmab{padding:0 0 0 20px}", ""]);
	
	// exports
	exports.locals = {
		"footer": "_2pOZ9JVRdOcst-M-V8CIG-",
		"footer": "_2pOZ9JVRdOcst-M-V8CIG-",
		"item": "HAjb6JuBA0hiG3VMO17sO",
		"item": "HAjb6JuBA0hiG3VMO17sO",
		"link": "ZXtuSy6oo7L79SnJvwsHt",
		"link": "ZXtuSy6oo7L79SnJvwsHt",
		"list": "_3k8ml8FyWDLKqwlHkSBmab",
		"list": "_3k8ml8FyWDLKqwlHkSBmab"
	};

/***/ },
/* 10 */
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
	
	var _index = __webpack_require__(11);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _logo = __webpack_require__(12);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Item = function Item(props, chren) {
	  _skatejs.vdom.elementOpen('li', null, null, 'class', _index2.default.locals.item);
	
	  _skatejs.vdom.elementOpen('a', null, null, 'class', _index2.default.locals.link, 'href', props.href);
	
	  _renderArbitrary(chren());
	
	  _skatejs.vdom.elementClose('a');
	
	  return _skatejs.vdom.elementClose('li');
	};
	
	exports.default = function (props) {
	  _skatejs.vdom.elementOpen('div');
	
	  _skatejs.vdom.elementOpen('style');
	
	  _renderArbitrary(_index2.default.toString());
	
	  _skatejs.vdom.elementClose('style');
	
	  _skatejs.vdom.elementOpen('div', null, null, 'class', _index2.default.locals.header + ' ' + props.scrolled);
	
	  _skatejs.vdom.elementOpen('h1', null, null, 'class', _index2.default.locals.title);
	
	  _skatejs.vdom.elementVoid('img', null, null, 'alt', props.title, 'src', _logo2.default, 'width', '30');
	
	  _skatejs.vdom.elementClose('h1');
	
	  _skatejs.vdom.elementOpen('ul', null, null, 'class', _index2.default.locals.list);
	
	  _skatejs.vdom.elementOpen(Item, null, null, 'href', '');
	
	  _skatejs.vdom.text('Docs');
	
	  _skatejs.vdom.elementClose(Item);
	
	  _skatejs.vdom.elementOpen(Item, null, null, 'href', 'https://github.com/skatejs/skatejs');
	
	  _skatejs.vdom.text('Github');
	
	  _skatejs.vdom.elementClose(Item);
	
	  _skatejs.vdom.elementOpen(Item, null, null, 'href', '');
	
	  _skatejs.vdom.text('Community');
	
	  _skatejs.vdom.elementClose(Item);
	
	  _skatejs.vdom.elementClose('ul');
	
	  _skatejs.vdom.elementClose('div');
	
	  return _skatejs.vdom.elementClose('div');
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "._2Hd5KzDR5h1JLZaLAhkdnL{background-color:#fefefe;color:#333;position:fixed;transition:box-shadow .3s ease;width:100%}._10mxIH_-5Sk7Kz5KsJMq0H{box-shadow:0 0 15px 0 #333}._3EU-FaAppzWRdOf0yzUQbO{list-style:none}._3EU-FaAppzWRdOf0yzUQbO,._3h8r-c6pyf3k8OkYptB6eQ{display:inline-block;margin:0;padding:0}._1O98iTVLbgr87bKcZ1xtCv{display:inline-block;margin:0 20px 0 10px;padding:0;position:relative;left:14px;top:8px}._3gAAJyILxgLXLUDHVCLw1K{color:#333;display:inline-block;font-size:18px;margin:0;padding:20px;text-decoration:none;transition:background-color .3s ease}._3gAAJyILxgLXLUDHVCLw1K:hover{background-color:#eee}", ""]);
	
	// exports
	exports.locals = {
		"header": "_2Hd5KzDR5h1JLZaLAhkdnL",
		"header": "_2Hd5KzDR5h1JLZaLAhkdnL",
		"header-scrolled": "_10mxIH_-5Sk7Kz5KsJMq0H",
		"headerScrolled": "_10mxIH_-5Sk7Kz5KsJMq0H",
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dist/cdcf8f64994df2f0ca865f88e17aaa59.png";

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (title) {
	  document.title = title;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "html{font-family:Helvetica;font-size:14px}body{margin:0}a{color:#333}", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index-with-deps.js.map