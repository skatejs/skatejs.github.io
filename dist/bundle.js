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
	
	var _index3 = __webpack_require__(9);
	
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
	
	var _header = __webpack_require__(4);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _title = __webpack_require__(8);
	
	var _title2 = _interopRequireDefault(_title);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _skatejs.define)('sk-app', {
	  render: function render() {
	    (0, _title2.default)('SkateJS - functional web components');
	    _skatejs.vdom.element(_header2.default, { title: 'SkateJS' });
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function (global, factory) {
		( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.skate = global.skate || {});
	})(undefined, function (exports) {
	
		var babelHelpers = {};
		babelHelpers.typeof = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
		};
	
		babelHelpers.classCallCheck = function (instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		};
	
		babelHelpers.createClass = function () {
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
	
		babelHelpers.defineProperty = function (obj, key, value) {
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
	
		babelHelpers.inherits = function (subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
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
	
		babelHelpers.possibleConstructorReturn = function (self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}
	
			return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
		};
	
		babelHelpers;
	
		function __commonjs(fn, module) {
			return module = { exports: {} }, fn(module, module.exports), module.exports;
		}
	
		var index = __commonjs(function (module) {
			'use strict';
			/* eslint-disable no-unused-vars */
	
			var hasOwnProperty = Object.prototype.hasOwnProperty;
			var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
			function toObject(val) {
				if (val === null || val === undefined) {
					throw new TypeError('Object.assign cannot be called with null or undefined');
				}
	
				return Object(val);
			}
	
			function shouldUseNative() {
				try {
					if (!Object.assign) {
						return false;
					}
	
					// Detect buggy property enumeration order in older V8 versions.
	
					// https://bugs.chromium.org/p/v8/issues/detail?id=4118
					var test1 = new String('abc'); // eslint-disable-line
					test1[5] = 'de';
					if (Object.getOwnPropertyNames(test1)[0] === '5') {
						return false;
					}
	
					// https://bugs.chromium.org/p/v8/issues/detail?id=3056
					var test2 = {};
					for (var i = 0; i < 10; i++) {
						test2['_' + String.fromCharCode(i)] = i;
					}
					var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
						return test2[n];
					});
					if (order2.join('') !== '0123456789') {
						return false;
					}
	
					// https://bugs.chromium.org/p/v8/issues/detail?id=3056
					var test3 = {};
					'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
						test3[letter] = letter;
					});
					if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
						return false;
					}
	
					return true;
				} catch (e) {
					// We don't expect any of the above to throw, but better to be safe.
					return false;
				}
			}
	
			module.exports = shouldUseNative() ? Object.assign : function (target, source) {
				var from;
				var to = toObject(target);
				var symbols;
	
				for (var s = 1; s < arguments.length; s++) {
					from = Object(arguments[s]);
	
					for (var key in from) {
						if (hasOwnProperty.call(from, key)) {
							to[key] = from[key];
						}
					}
	
					if (Object.getOwnPropertySymbols) {
						symbols = Object.getOwnPropertySymbols(from);
						for (var i = 0; i < symbols.length; i++) {
							if (propIsEnumerable.call(from, symbols[i])) {
								to[symbols[i]] = from[symbols[i]];
							}
						}
					}
				}
	
				return to;
			};
		});
	
		var assign = index && (typeof index === 'undefined' ? 'undefined' : _typeof(index)) === 'object' && 'default' in index ? index['default'] : index;
	
		function empty(val) {
			return typeof val === 'undefined' || val === null;
		}
	
		var alwaysUndefinedIfEmptyOrNumber = function alwaysUndefinedIfEmptyOrNumber(val) {
			return empty(val) ? undefined : Number(val);
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
				return assign.apply(null, args);
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
			coerce: alwaysUndefinedIfEmptyOrNumber,
			deserialize: alwaysUndefinedIfEmptyOrNumber,
			serialize: alwaysUndefinedIfEmptyOrNumber
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
	
		var created = '____created';
		var events = '____events';
		var name = '____name';
		var props = '____props';
		var renderer = '____renderer';
		var rendererDebounced = '____rendererDebounced';
		var shadowRoot = '____shadowRoot';
	
		var symbols = Object.freeze({
			created: created,
			events: events,
			name: name,
			props: props,
			renderer: renderer,
			rendererDebounced: rendererDebounced,
			shadowRoot: shadowRoot
		});
	
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
		var create$1 = Object.create;
	
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
			return create$1(null);
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
		var symbols$2 = {
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
		var applyProp$1 = function applyProp(el, name, value) {
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
			var type = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
	
			if (type === 'object' || type === 'function') {
				applyProp$1(el, name, value);
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
	
			var mutator = attributes$1[name] || attributes$1[symbols$2.default];
			mutator(el, name, value);
	
			attrs[name] = value;
		};
	
		/**
	  * A publicly mutable object to provide custom mutators for attributes.
	  * @const {!Object<string, function(!Element, string, *)>}
	  */
		var attributes$1 = createMap();
	
		// Special generic mutator that's called for any attribute that does not
		// have a specific mutator.
		attributes$1[symbols$2.default] = applyAttributeTyped;
	
		attributes$1[symbols$2.placeholder] = function () {};
	
		attributes$1['style'] = applyStyle;
	
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
			var el = void 0;
	
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
	   * Keeps track whether or not we are in an attributes declaration (after
	   * elementOpenStart, but before elementOpenEnd).
	   * @type {boolean}
	   */
		var inAttributes = false;
	
		/**
	   * Keeps track whether or not we are in an element that should not have its
	   * children cleared.
	   * @type {boolean}
	   */
		var inSkip = false;
	
		/**
	  * Makes sure that there is a current patch context.
	  * @param {*} context
	  */
		var assertInPatch = function assertInPatch(context) {
			if (!context) {
				throw new Error('Cannot call currentElement() unless in patch.');
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
	
		/**
	  * Makes sure that a patch closes every node that it opened.
	  * @param {?Node} openElement
	  * @param {!Node|!DocumentFragment} root
	  */
		var assertNoUnclosedTags = function assertNoUnclosedTags(openElement, root) {
			if (openElement === root) {
				return;
			}
	
			var currentElement = openElement;
			var openTags = [];
			while (currentElement && currentElement !== root) {
				openTags.push(currentElement.nodeName.toLowerCase());
				currentElement = currentElement.parentNode;
			}
	
			throw new Error('One or more tags were not closed:\n' + openTags.join('\n'));
		};
	
		/**
	  * Makes sure that the caller is not where attributes are expected.
	  * @param {string} functionName
	  */
		var assertNotInAttributes = function assertNotInAttributes(functionName) {
			if (inAttributes) {
				throw new Error(functionName + '() can not be called between ' + 'elementOpenStart() and elementOpenEnd().');
			}
		};
	
		/**
	  * Makes sure that the caller is not inside an element that has declared skip.
	  * @param {string} functionName
	  */
		var assertNotInSkip = function assertNotInSkip(functionName) {
			if (inSkip) {
				throw new Error(functionName + '() may not be called inside an element ' + 'that has called skip().');
			}
		};
	
		/**
	  * Makes sure that the caller is where attributes are expected.
	  * @param {string} functionName
	  */
		var assertInAttributes = function assertInAttributes(functionName) {
			if (!inAttributes) {
				throw new Error(functionName + '() can only be called after calling ' + 'elementOpenStart().');
			}
		};
	
		/**
	  * Makes sure the patch closes virtual attributes call
	  */
		var assertVirtualAttributesClosed = function assertVirtualAttributesClosed() {
			if (inAttributes) {
				throw new Error('elementOpenEnd() must be called after calling ' + 'elementOpenStart().');
			}
		};
	
		/**
	   * Makes sure that placeholders have a key specified. Otherwise, conditional
	   * placeholders and conditional elements next to placeholders will cause
	   * placeholder elements to be re-used as non-placeholders and vice versa.
	   * @param {string} key
	   */
		var assertPlaceholderKeySpecified = function assertPlaceholderKeySpecified(key) {
			if (!key) {
				throw new Error('elementPlaceholder() requires a key.');
			}
		};
	
		/**
	   * Makes sure that tags are correctly nested.
	   * @param {string} nodeName
	   * @param {string} tag
	   */
		var assertCloseMatchesOpenTag = function assertCloseMatchesOpenTag(nodeName, tag) {
			if (nodeName !== tag) {
				throw new Error('Received a call to close "' + tag + '" but "' + nodeName + '" was open.');
			}
		};
	
		/**
	  * Makes sure that no children elements have been declared yet in the current
	  * element.
	  * @param {string} functionName
	  * @param {?Node} previousNode
	  */
		var assertNoChildrenDeclaredYet = function assertNoChildrenDeclaredYet(functionName, previousNode) {
			if (previousNode !== null) {
				throw new Error(functionName + '() must come before any child ' + 'declarations inside the current element.');
			}
		};
	
		/**
	  * Checks that a call to patchOuter actually patched the element.
	  * @param {?Node} node The node requested to be patched.
	  * @param {?Node} currentNode The currentNode after the patch.
	  */
		var assertPatchElementNotEmpty = function assertPatchElementNotEmpty(node, currentNode) {
			if (node === currentNode) {
				throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
			}
		};
	
		/**
	  * Checks that a call to patchOuter actually patched the element.
	  * @param {?Node} node The node requested to be patched.
	  * @param {?Node} previousNode The previousNode after the patch.
	  */
		var assertPatchElementNoExtras = function assertPatchElementNoExtras(node, previousNode) {
			if (node !== previousNode) {
				throw new Error('There must be exactly one top level call corresponding ' + 'to the patched element.');
			}
		};
	
		/**
	  * Updates the state of being in an attribute declaration.
	  * @param {boolean} value
	  * @return {boolean} the previous value.
	  */
		var setInAttributes = function setInAttributes(value) {
			var previous = inAttributes;
			inAttributes = value;
			return previous;
		};
	
		/**
	  * Updates the state of being in a skip element.
	  * @param {boolean} value
	  * @return {boolean} the previous value.
	  */
		var setInSkip = function setInSkip(value) {
			var previous = inSkip;
			inSkip = value;
			return previous;
		};
	
		/** @type {?Context} */
		var context = null;
	
		/** @type {?Node} */
		var currentNode = void 0;
	
		/** @type {?Node} */
		var currentParent = void 0;
	
		/** @type {?Element|?DocumentFragment} */
		var root = void 0;
	
		/** @type {?Document} */
		var doc = void 0;
	
		/**
	  * Sets up and restores a patch context, running the patch function with the
	  * provided data.
	  * @param {!Element|!DocumentFragment} node The Element or Document
	  *     where the patch should start.
	  * @param {!function(T)} fn The patching function.
	  * @param {T=} data An argument passed to fn.
	  * @template T
	  */
		var runPatch = function runPatch(node, fn, data) {
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
	
			if (process.env.NODE_ENV !== 'production') {
				previousInAttributes = setInAttributes(false);
				previousInSkip = setInSkip(false);
			}
	
			fn(data);
	
			if (process.env.NODE_ENV !== 'production') {
				assertVirtualAttributesClosed();
				setInAttributes(previousInAttributes);
				setInSkip(previousInSkip);
			}
	
			context.notifyChanges();
	
			context = prevContext;
			root = prevRoot;
			doc = prevDoc;
			currentNode = prevCurrentNode;
			currentParent = prevCurrentParent;
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
		var patch = function patchInner(node, fn, data) {
			runPatch(node, function (data) {
				currentNode = node;
				currentParent = node.parentNode;
	
				enterNode();
				fn(data);
				exitNode();
	
				if (process.env.NODE_ENV !== 'production') {
					assertNoUnclosedTags(currentNode, node);
				}
			}, data);
		};
	
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
		var patchOuter = function patchOuter(node, fn, data) {
			runPatch(node, function (data) {
				currentNode = /** @type {!Element} */{ nextSibling: node };
				currentParent = node.parentNode;
	
				fn(data);
	
				if (process.env.NODE_ENV !== 'production') {
					assertPatchElementNotEmpty(node, currentNode.nextSibling);
					assertPatchElementNoExtras(node, currentNode);
				}
			}, data);
		};
	
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
	
			var node = void 0;
	
			// Check to see if the node has moved within the parent.
			if (key) {
				node = getChild(currentParent, key);
				if (node && process.env.NODE_ENV !== 'production') {
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
			var key = void 0;
	
			if (child === currentNode && keyMapValid) {
				return;
			}
	
			if (data.attrs[symbols$2.placeholder] && node !== root) {
				if (process.env.NODE_ENV !== 'production') {
					console.warn('symbols.placeholder will be removed in Incremental DOM' + ' 0.5 use skip() instead');
				}
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
		var coreElementOpen = function elementOpen(tag, key, statics) {
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
		var coreElementClose = function elementClose() {
			if (process.env.NODE_ENV !== 'production') {
				setInSkip(false);
			}
	
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
		var coreText = function text() {
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
			if (process.env.NODE_ENV !== 'production') {
				assertInPatch(context);
				assertNotInAttributes('currentElement');
			}
			return (/** @type {!Element} */currentParent
			);
		};
	
		/**
	  * Skips the children in a subtree, allowing an Element to be closed without
	  * clearing out the children.
	  */
		var skip$1 = function skip() {
			if (process.env.NODE_ENV !== 'production') {
				assertNoChildrenDeclaredYet('skip', currentNode);
				setInSkip(true);
			}
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
		var elementOpen$1 = function elementOpen(tag, key, statics, const_args) {
			if (process.env.NODE_ENV !== 'production') {
				assertNotInAttributes('elementOpen');
				assertNotInSkip('elementOpen');
			}
	
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
		var elementOpenStart$1 = function elementOpenStart(tag, key, statics) {
			if (process.env.NODE_ENV !== 'production') {
				assertNotInAttributes('elementOpenStart');
				setInAttributes(true);
			}
	
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
		var attr$1 = function attr(name, value) {
			if (process.env.NODE_ENV !== 'production') {
				assertInAttributes('attr');
			}
	
			argsBuilder.push(name, value);
		};
	
		/**
	  * Closes an open tag started with elementOpenStart.
	  * @return {!Element} The corresponding Element.
	  */
		var elementOpenEnd$1 = function elementOpenEnd() {
			if (process.env.NODE_ENV !== 'production') {
				assertInAttributes('elementOpenEnd');
				setInAttributes(false);
			}
	
			var node = elementOpen$1.apply(null, argsBuilder);
			argsBuilder.length = 0;
			return node;
		};
	
		/**
	  * Closes an open virtual Element.
	  *
	  * @param {string} tag The element's tag.
	  * @return {!Element} The corresponding Element.
	  */
		var elementClose$1 = function elementClose(tag) {
			if (process.env.NODE_ENV !== 'production') {
				assertNotInAttributes('elementClose');
			}
	
			var node = coreElementClose();
	
			if (process.env.NODE_ENV !== 'production') {
				assertCloseMatchesOpenTag(getData(node).nodeName, tag);
			}
	
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
			var node = elementOpen$1.apply(null, arguments);
			elementClose$1.apply(null, arguments);
			return node;
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
			if (process.env.NODE_ENV !== 'production') {
				assertPlaceholderKeySpecified(key);
				console.warn('elementPlaceholder will be removed in Incremental DOM 0.5' + ' use skip() instead');
			}
	
			elementOpen$1.apply(null, arguments);
			skip$1();
			return elementClose$1.apply(null, arguments);
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
		var text$1 = function text(value, const_args) {
			if (process.env.NODE_ENV !== 'production') {
				assertNotInAttributes('text');
				assertNotInSkip('text');
			}
	
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
	
		var IncrementalDOM = Object.freeze({
			patch: patch,
			patchInner: patch,
			patchOuter: patchOuter,
			currentElement: currentElement,
			skip: skip$1,
			elementVoid: elementVoid,
			elementOpenStart: elementOpenStart$1,
			elementOpenEnd: elementOpenEnd$1,
			elementOpen: elementOpen$1,
			elementClose: elementClose$1,
			elementPlaceholder: elementPlaceholder,
			text: text$1,
			attr: attr$1,
			symbols: symbols$2,
			attributes: attributes$1,
			applyAttr: applyAttr,
			applyProp: applyProp$1,
			notifications: notifications
		});
	
		var div = document.createElement('div');
		var customElementsV0 = !!document.registerElement;
		var customElementsV1 = !!window.customElements;
		var shadowDomV0 = !!div.createShadowRoot;
		var shadowDomV1 = !!div.attachShadow;
	
		// Could import these, but we have to import all of IncrementalDOM anyways so
		// that we can export our configured IncrementalDOM.
		var applyProp = applyProp$1;
		var attr = attr$1;
		var attributes = attributes$1;
		var elementClose = elementClose$1;
		var elementOpen = elementOpen$1;
		var elementOpenEnd = elementOpenEnd$1;
		var elementOpenStart = elementOpenStart$1;
		var skip = skip$1;
		var symbols$1 = symbols$2;
		var text = text$1;
	
		var applyDefault = attributes[symbols$1.default];
	
		// Attributes that are not handled by Incremental DOM.
		attributes.key = attributes.skip = attributes.statics = function () {};
	
		// Attributes that *must* be set via a property on all elements.
		attributes.checked = attributes.className = attributes.disabled = attributes.value = applyProp;
	
		// Default attribute applicator.
		attributes[symbols$1.default] = function (elem, name, value) {
			// Boolean false values should not set attributes at all.
			if (value === false) {
				return;
			}
	
			// Custom element properties should be set as properties.
			var props = elem.constructor.props;
			if (props && name in props) {
				return applyProp(elem, name, value);
			}
	
			// Handle built-in and custom events.
			if (name.indexOf('on') === 0) {
				return name in elem ? applyProp(elem, name, value) : applyEvent(elem, name.substring(2), name, value);
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
	
		function element(tname, attrs, chren) {
			// Allow a component constructor to be passed in.
			if (typeof tname === 'function') {
				tname = tname[name];
			}
	
			var shouldBeContentTag = tname === 'slot' && !shadowDomV1 && shadowDomV0;
	
			// Abstract Shadow DOM V0 <content> behind Shadow DOM V1 <slot>.
			if (shouldBeContentTag) {
				tname = 'content';
			}
	
			if (attrs && (typeof attrs === 'undefined' ? 'undefined' : babelHelpers.typeof(attrs)) === 'object') {
				// Abstract Shadow DOM V0 <content> behind Shadow DOM V1 <slot>.
				if (shouldBeContentTag && attrs.name) {
					attrs.select = '[slot="' + attrs.name + '"]';
					delete attrs.slot;
				}
	
				elementOpenStart(tname, attrs.key, attrs.statics);
				for (var a in attrs) {
					attr(a, attrs[a]);
				}
				elementOpenEnd();
			} else {
				elementOpen(tname);
				chren = attrs;
				attrs = {};
			}
	
			if (attrs.skip) {
				skip();
			} else {
				var chrenType = typeof chren === 'undefined' ? 'undefined' : babelHelpers.typeof(chren);
				if (chrenType === 'function') {
					chren();
				} else if (chrenType === 'string' || chrenType === 'number') {
					text(chren);
				}
			}
	
			return elementClose(tname);
		}
	
		var vdom = Object.freeze({
			element: element,
			text: text,
			IncrementalDOM: IncrementalDOM
		});
	
		function data(element) {
			var namespace = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
			var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
			return namespace && (data[namespace] || (data[namespace] = {})) || data;
		}
	
		function getOwnPropertyDescriptors(obj) {
			return Object.getOwnPropertyNames(obj || {}).reduce(function (prev, curr) {
				prev[curr] = Object.getOwnPropertyDescriptor(obj, curr);
				return prev;
			}, {});
		}
	
		var Component = function (_HTMLElement) {
			babelHelpers.inherits(Component, _HTMLElement);
	
			function Component() {
				babelHelpers.classCallCheck(this, Component);
	
				var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this));
	
				_this.createdCallback();
				return _this;
			}
	
			babelHelpers.createClass(Component, [{
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
	
					var elemData = data(this);
					var readyCallbacks = elemData.readyCallbacks;
					var Ctor = this.constructor;
					var definedAttribute = Ctor.definedAttribute;
					var events$$ = Ctor.events;
					var created$$ = Ctor.created;
					var observedAttributes = Ctor.observedAttributes;
					var props$$ = Ctor.props;
					var ready = Ctor.ready;
					var renderedAttribute = Ctor.renderedAttribute;
	
					var renderer$$ = Ctor[renderer];
	
					// TODO: This prevents an element from being initialised multiple times. For
					// some reason this is happening in the event tests. It's possibly creating
					// elements in a way that the causes the custom element v1 polyfill to call
					// the constructor twice.
					if (this[created]) return;
					this[created] = true;
	
					if (props$$) {
						Ctor[props](this);
					}
	
					if (events$$) {
						Ctor[events](this);
					}
	
					if (created$$) {
						created$$(this);
					}
	
					if (renderer$$ && !this.hasAttribute(renderedAttribute)) {
						renderer$$(this);
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
						babelHelpers.inherits(Ctor, _Base);
	
						function Ctor() {
							babelHelpers.classCallCheck(this, Ctor);
							return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Ctor).apply(this, arguments));
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
	
		function matches$1(element, selector) {
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
					if (matches$1(current, selector)) {
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
	
		function events$1(opts) {
			var events = opts.events || {};
			return function (elem) {
				for (var name in events) {
					bindEvent(elem, name, events[name]);
				}
			};
		}
	
		var patch$1 = patch;
	
		function createRenderer(Ctor) {
			var render = Ctor.render;
	
			return function (elem) {
				if (!render) {
					return;
				}
	
				if (!elem[shadowRoot]) {
					var sr = void 0;
	
					if (shadowDomV1) {
						sr = elem.attachShadow({ mode: 'open' });
					} else if (shadowDomV0) {
						sr = elem.createShadowRoot();
					} else {
						sr = elem;
					}
	
					elem[shadowRoot] = sr;
				}
	
				patch$1(elem[shadowRoot], render, elem);
			};
		}
	
		function dashCase(str) {
			return str.split(/([A-Z])/).reduce(function (one, two, idx) {
				var dash = !one || idx % 2 === 0 ? '' : '-';
				return '' + one + dash + two.toLowerCase();
			});
		}
	
		var raf = window.requestAnimationFrame || setTimeout;
		function debounce(fn) {
			var called = false;
	
			return function () {
				var _this = this;
	
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}
	
				if (!called) {
					called = true;
					raf(function () {
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
					var deb = this[rendererDebounced] || (this[rendererDebounced] = debounce(this.constructor[renderer]));
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
				return createNativePropertyDefinition(name, assign({
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
	
		// Makes a function / constructor for the custom element that automates the
		// boilerplate of ensuring the parent constructor is called first and ensures
		// that the element is returned at the end.
		function createConstructor(name$$, Ctor) {
			if ((typeof Ctor === 'undefined' ? 'undefined' : babelHelpers.typeof(Ctor)) === 'object') {
				Ctor = Component.extend(Ctor);
			}
	
			// Internal data.
			Ctor[name] = name$$;
	
			return Ctor;
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
	
		function define(name, Ctor) {
			Ctor = createConstructor(name, Ctor);
			formatLinkedAttributes(Ctor);
	
			Ctor[events] = events$1(Ctor);
			Ctor[props] = createInitProps(Ctor);
			Ctor[renderer] = createRenderer(Ctor);
	
			if (customElementsV0) {
				return document.registerElement(name, Ctor);
			} else if (customElementsV1) {
				window.customElements.define(name, Ctor, { extends: Ctor.extends });
				return Ctor;
			} else {
				throw new Error('Skate requires native custom element support or a polyfill.');
			}
		}
	
		function get(elem) {
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
	
		function set(elem, newState) {
			assign(elem, newState);
			if (elem.constructor.render) {
				elem.constructor[renderer](elem);
			}
		}
	
		function state(elem, newState) {
			return typeof newState === 'undefined' ? get(elem) : set(elem, newState);
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
					state(elem, babelHelpers.defineProperty({}, firstPart, elem[firstPart]));
				} else {
					state(elem, babelHelpers.defineProperty({}, localTarget, value));
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
		exports.symbols = symbols;
		exports.vdom = vdom;
	});
	//# sourceMappingURL=index.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _skatejs = __webpack_require__(2);
	
	var _index = __webpack_require__(5);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _elements = __webpack_require__(7);
	
	var _elements2 = _interopRequireDefault(_elements);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var a = _elements2.default.a;
	var div = _elements2.default.div;
	var h1 = _elements2.default.h1;
	var li = _elements2.default.li;
	var style = _elements2.default.style;
	var ul = _elements2.default.ul;
	
	
	function item(text) {
	  var href = arguments.length <= 1 || arguments[1] === undefined ? '#' : arguments[1];
	
	  li({ class: _index2.default.locals.item }, function () {
	    return a({ class: _index2.default.locals.link, href: href }, text);
	  });
	}
	
	exports.default = (0, _skatejs.define)('sk-header', {
	  props: {
	    title: _skatejs.prop.string()
	  },
	  render: function render(elem) {
	    style(_index2.default.toString());
	    div({ class: _index2.default.locals.header }, function () {
	      h1({ class: _index2.default.locals.title }, elem.title);
	      ul({ class: _index2.default.locals.list }, function () {
	        item('Docs');
	        item('Github', 'https://github.com/skatejs/skatejs');
	        item('Community');
	      });
	    });
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "._2Hd5KzDR5h1JLZaLAhkdnL{background-color:#333;color:#eee;height:60px}._3EU-FaAppzWRdOf0yzUQbO{list-style:none}._3EU-FaAppzWRdOf0yzUQbO,._3h8r-c6pyf3k8OkYptB6eQ{display:inline-block;margin:0;padding:0}._1O98iTVLbgr87bKcZ1xtCv{display:inline-block;font-size:24px;line-height:24px;margin:-2px 0 0;padding:18px}._3gAAJyILxgLXLUDHVCLw1K{color:#eee;font-size:18px;margin:0;padding:20px;text-decoration:none}._3gAAJyILxgLXLUDHVCLw1K:hover{background-color:#444}", ""]);
	
	// exports
	exports.locals = {
		"header": "_2Hd5KzDR5h1JLZaLAhkdnL",
		"header": "_2Hd5KzDR5h1JLZaLAhkdnL",
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
/* 6 */
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _skatejs = __webpack_require__(2);
	
	var specials = ['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'p', 'ul'];
	
	exports.default = Object.getOwnPropertyNames(window).filter(function (name) {
	  return name.indexOf('HTML') === 0 && name.indexOf('Element') > 0;
	}).map(function (name) {
	  return name.replace(/^HTML/, '').replace(/Element$/, '');
	}).map(function (name) {
	  return name.toLowerCase();
	}).concat(specials).filter(function (name) {
	  return !!name;
	}).reduce(function (prev, curr) {
	  return (prev[curr] = _skatejs.vdom.element.bind(null, curr)) && prev;
	}, {});

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (title) {
	  document.title = title;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "html{font-family:Helvetica;font-size:14px}body{margin:0}a{color:#333}", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=bundle.js.map