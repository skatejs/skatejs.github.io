// src/constants.js
__22848e6eb5ddd68722bf2a03dc73e10d = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ATTR_IGNORE = "data-skate-ignore";
  exports.ATTR_IGNORE = ATTR_IGNORE;
  var TYPE_ATTRIBUTE = "a";
  exports.TYPE_ATTRIBUTE = TYPE_ATTRIBUTE;
  var TYPE_CLASSNAME = "c";
  exports.TYPE_CLASSNAME = TYPE_CLASSNAME;
  var TYPE_ELEMENT = "t";
  exports.TYPE_ELEMENT = TYPE_ELEMENT;
  
  return module.exports
}).call(this);

// src/utils/data.js
__bbde635d6f239d7b17f5bee9a64f03e8 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function (element) {
    var namespace = arguments[1] === undefined ? "" : arguments[1];
  
    var data = element.__SKATE_DATA || (element.__SKATE_DATA = {});
    return namespace && (data[namespace] || (data[namespace] = {})) || data;
  };
  
  return module.exports
}).call(this);

// src/utils/element-contains.js
__a3535eb1111d11f1a455783a62f000d8 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var elementPrototype = window.HTMLElement.prototype;
  var elementPrototypeContains = elementPrototype.contains;
  
  module.exports = function (source, target) {
    // The document element does not have the contains method in IE.
    if (source === document && !source.contains) {
      return document.head.contains(target) || document.body.contains(target);
    }
  
    return source.contains ? source.contains(target) : elementPrototypeContains.call(source, target);
  };
  
  return module.exports
}).call(this);

// src/globals.js
__906dce814f2e16e7f80d2aa958aa9ac6 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  if (!window.__skate) {
    window.__skate = {
      observer: undefined,
      registry: {}
    };
  }
  
  module.exports = window.__skate;
  
  return module.exports
}).call(this);

// src/utils/has-own.js
__0a2c5941f61640fa05d4ec2723b939c4 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function (obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  };
  
  return module.exports
}).call(this);

// src/polyfill/registry.js
__270cb854b3681e4b614f772d24705d53 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var _constants = __22848e6eb5ddd68722bf2a03dc73e10d;
  
  var TYPE_ATTRIBUTE = _constants.TYPE_ATTRIBUTE;
  var TYPE_CLASSNAME = _constants.TYPE_CLASSNAME;
  var TYPE_ELEMENT = _constants.TYPE_ELEMENT;
  
  var globals = _interopRequire(__906dce814f2e16e7f80d2aa958aa9ac6);
  
  var hasOwn = _interopRequire(__0a2c5941f61640fa05d4ec2723b939c4);
  
  function getClassList(element) {
    var classList = element.classList;
  
    if (classList) {
      return classList;
    }
  
    var attrs = element.attributes;
  
    return attrs["class"] && attrs["class"].nodeValue.split(/\s+/) || [];
  }
  
  module.exports = {
    get: function get(id) {
      return hasOwn(globals.registry, id) && globals.registry[id];
    },
  
    set: function set(id, definition) {
      if (hasOwn(globals.registry, id)) {
        throw new Error("A component definition of type \"" + definition.type + "\" with the ID of \"" + id + "\" already exists.");
      }
      globals.registry[id] = definition;
      return this;
    },
  
    isType: function isType(id, type) {
      var def = this.get(id);
      return def && def.type === type;
    },
  
    getForElement: function getForElement(element) {
      var attrs = element.attributes;
      var attrsLen = attrs.length;
      var definitions = [];
      var isAttr = attrs.is;
      var isAttrValue = isAttr && (isAttr.value || isAttr.nodeValue);
      var tag = element.tagName.toLowerCase();
      var isAttrOrTag = isAttrValue || tag;
      var definition;
      var tagToExtend;
  
      if (this.isType(isAttrOrTag, TYPE_ELEMENT)) {
        definition = globals.registry[isAttrOrTag];
        tagToExtend = definition["extends"];
  
        if (isAttrValue) {
          if (tag === tagToExtend) {
            definitions.push(definition);
          }
        } else if (!tagToExtend) {
          definitions.push(definition);
        }
      }
  
      for (var a = 0; a < attrsLen; a++) {
        var attr = attrs[a].nodeName;
  
        if (this.isType(attr, TYPE_ATTRIBUTE)) {
          definition = globals.registry[attr];
          tagToExtend = definition["extends"];
  
          if (!tagToExtend || tag === tagToExtend) {
            definitions.push(definition);
          }
        }
      }
  
      var classList = getClassList(element);
      var classListLen = classList.length;
  
      for (var b = 0; b < classListLen; b++) {
        var className = classList[b];
  
        if (this.isType(className, TYPE_CLASSNAME)) {
          definition = globals.registry[className];
          tagToExtend = definition["extends"];
  
          if (!tagToExtend || tag === tagToExtend) {
            definitions.push(definition);
          }
        }
      }
  
      return definitions;
    }
  };
  
  return module.exports
}).call(this);

// src/lifecycle/for-each-component.js
__b5370a9e5a5555b0d7d0d7c1a5880abf = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var registry = _interopRequire(__270cb854b3681e4b614f772d24705d53);
  
  module.exports = function (callback) {
    return function (element) {
      element = element || this;
      registry.getForElement(element).forEach(callback.bind(null, element));
    };
  };
  
  return module.exports
}).call(this);

// src/lifecycle/attached.js
__2b55a083f45c9ef157662a1dc1674218 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var data = _interopRequire(__bbde635d6f239d7b17f5bee9a64f03e8);
  
  var elementContains = _interopRequire(__a3535eb1111d11f1a455783a62f000d8);
  
  var forEachComponent = _interopRequire(__b5370a9e5a5555b0d7d0d7c1a5880abf);
  
  module.exports = forEachComponent(function (element, options) {
    var targetData = data(element, options.id);
  
    if (targetData.attached) {
      return;
    }
  
    if (!elementContains(document, element)) {
      return;
    }
  
    targetData.attached = true;
    targetData.detached = false;
  
    if (options.attached) {
      options.attached(element);
    }
  });
  
  return module.exports
}).call(this);

// src/lifecycle/attribute.js
__9f17962f9aa326a94ed3e5d6f6b172e6 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function (options) {
    return function (name, oldValue, newValue) {
      var callback;
      var type;
      var newValueIsString = typeof newValue === "string";
      var oldValueIsString = typeof oldValue === "string";
      var attrs = options.attributes;
      var specific = attrs && attrs[name];
  
      if (!oldValueIsString && newValueIsString) {
        type = "created";
      } else if (oldValueIsString && newValueIsString) {
        type = "updated";
      } else if (oldValueIsString && !newValueIsString) {
        type = "removed";
      }
  
      if (specific && typeof specific[type] === "function") {
        callback = specific[type];
      } else if (specific && typeof specific.fallback === "function") {
        callback = specific.fallback;
      } else if (typeof specific === "function") {
        callback = specific;
      } else if (typeof attrs === "function") {
        callback = attrs;
      }
  
      // Ensure values are null if undefined.
      newValue = newValue === undefined ? null : newValue;
      oldValue = oldValue === undefined ? null : oldValue;
  
      // There may still not be a callback.
      if (callback) {
        callback(this, {
          type: type,
          name: name,
          newValue: newValue,
          oldValue: oldValue
        });
      }
    };
  };
  
  return module.exports
}).call(this);

// src/utils/camel-case.js
__779e1c84796f4ab22197cd554c25dd35 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function (str) {
    return str.split(/-/g).map(function (str, index) {
      return index === 0 ? str : str[0].toUpperCase() + str.substring(1);
    }).join("");
  };
  
  return module.exports
}).call(this);

// src/utils/inherit.js
__1549ba2e7c62853a39e94336669d2f79 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function (child, parent, overwrite) {
    var names = Object.getOwnPropertyNames(parent);
    var namesLen = names.length;
  
    for (var a = 0; a < namesLen; a++) {
      var name = names[a];
  
      if (overwrite || child[name] === undefined) {
        var desc = Object.getOwnPropertyDescriptor(parent, name);
        var shouldDefineProps = desc.get || desc.set || !desc.writable || !desc.enumerable || !desc.configurable;
  
        if (shouldDefineProps) {
          Object.defineProperty(child, name, desc);
        } else {
          child[name] = parent[name];
        }
      }
    }
  
    return child;
  };
  
  return module.exports
}).call(this);

// src/utils/matches-selector.js
__0964927725a619be8ccd39e7e56cf3ad = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var elProto = window.HTMLElement.prototype;
  var nativeMatchesSelector = elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector || elProto.mozMatchesSelector || elProto.oMatchesSelector;
  
  // Only IE9 has this msMatchesSelector bug, but best to detect it.
  var hasNativeMatchesSelectorDetattachedBug = !nativeMatchesSelector.call(document.createElement("div"), "div");
  
  module.exports = function (element, selector) {
    if (hasNativeMatchesSelectorDetattachedBug) {
      var clone = element.cloneNode();
      document.createElement("div").appendChild(clone);
      return nativeMatchesSelector.call(clone, selector);
    }
    return nativeMatchesSelector.call(element, selector);
  };
  
  return module.exports
}).call(this);

// src/utils/debounce.js
__bf50fdd75f99f2b27325dc6d6f1dcb64 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function (fn) {
    var called = false;
  
    return function () {
      if (!called) {
        called = true;
        setTimeout(function () {
          called = false;
          fn();
        }, 1);
      }
    };
  };
  
  return module.exports
}).call(this);

// src/utils/obj-each.js
__f6279d384ed58022eb040533c80b6909 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var hasOwn = _interopRequire(__0a2c5941f61640fa05d4ec2723b939c4);
  
  module.exports = function (obj, fn) {
    for (var a in obj) {
      if (hasOwn(obj, a)) {
        fn(obj[a], a);
      }
    }
  };
  
  return module.exports
}).call(this);

// src/polyfill/mutation-observer.js
__fcd21ac78247116a0bdde5374b0c4641 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var debounce = _interopRequire(__bf50fdd75f99f2b27325dc6d6f1dcb64);
  
  var elementContains = _interopRequire(__a3535eb1111d11f1a455783a62f000d8);
  
  var objEach = _interopRequire(__f6279d384ed58022eb040533c80b6909);
  
  var Attr = window.Attr;
  var elementPrototype = window.HTMLElement.prototype;
  var NativeMutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver;
  var isFixingIe = false;
  var isIe = window.navigator.userAgent.indexOf("Trident") > -1;
  
  /**
   * Creates a new mutation record.
   *
   * @param {Element} target The HTML element that was affected.
   * @param {String} type The type of mutation.
   *
   * @returns {Object}
   */
  function newMutationRecord(target, type) {
    return {
      addedNodes: null,
      attributeName: null,
      attributeNamespace: null,
      nextSibling: null,
      oldValue: null,
      previousSibling: null,
      removedNodes: null,
      target: target,
      type: type || "childList"
    };
  }
  
  /**
   * Takes an element and recursively saves it's tree structure on each element so
   * that they can be restored later after IE screws things up.
   *
   * @param {Node} node The node to save the tree for.
   *
   * @returns {undefined}
   */
  function walkTree(node, cb) {
    var childNodes = node.childNodes;
  
    if (!childNodes) {
      return;
    }
  
    var childNodesLen = childNodes.length;
  
    for (var a = 0; a < childNodesLen; a++) {
      var childNode = childNodes[a];
      cb(childNode);
      walkTree(childNode, cb);
    }
  }
  
  // Mutation Observer "Polyfill"
  // ----------------------------
  
  /**
   * This "polyfill" only polyfills what we need for Skate to function. It
   * batches updates and does the bare minimum during synchronous operation
   * which make mutation event performance bearable. The rest is batched on the
   * next tick. Like mutation observers, each mutation is divided into sibling
   * groups for each parent that had mutations. All attribute mutations are
   * batched into separate records regardless of the element they occured on.
   *
   * @param {Function} callback The callback to execute with the mutation info.
   *
   * @returns {undefined}
   */
  function MutationObserver(callback) {
    if (NativeMutationObserver && !isFixingIe) {
      return new NativeMutationObserver(callback);
    }
  
    this.callback = callback;
    this.elements = [];
  }
  
  /**
   * IE 11 has a bug that prevents descendant nodes from being reported as removed
   * to a mutation observer in IE 11 if an ancestor node's innerHTML is reset.
   * This same bug also happens when using Mutation Events in IE 9 / 10. Because of
   * this, we must ensure that observers and events get triggered properly on
   * those descendant nodes. In order to do this we have to override `innerHTML`
   * and then manually trigger an event.
   *
   * See: https://connect.microsoft.com/IE/feedback/details/817132/ie-11-childnodes-are-missing-from-mutationobserver-mutations-removednodes-after-setting-innerhtml
   *
   * @returns {undefined}
   */
  MutationObserver.fixIe = function () {
    // Fix once only if we need to.
    if (!isIe || isFixingIe) {
      return;
    }
  
    // We have to call the old innerHTML getter and setter.
    var oldInnerHTML = Object.getOwnPropertyDescriptor(elementPrototype, "innerHTML");
  
    // This redefines the innerHTML property so that we can ensure that events
    // are properly triggered.
    Object.defineProperty(elementPrototype, "innerHTML", {
      get: function get() {
        return oldInnerHTML.get.call(this);
      },
      set: function set(html) {
        walkTree(this, function (node) {
          var mutationEvent = document.createEvent("MutationEvent");
          mutationEvent.initMutationEvent("DOMNodeRemoved", true, false, null, null, null, null, null);
          node.dispatchEvent(mutationEvent);
        });
  
        oldInnerHTML.set.call(this, html);
      }
    });
  
    // Flag so the polyfill is used for all subsequent Mutation Observer objects.
    isFixingIe = true;
  };
  
  Object.defineProperty(MutationObserver, "isFixingIe", {
    get: function get() {
      return isFixingIe;
    }
  });
  
  MutationObserver.prototype = {
    observe: function observe(target, options) {
      function addEventToBatch(e) {
        batchedEvents.push(e);
        batchEvents();
      }
  
      function batchEvent(e) {
        var eTarget = e.target;
  
        // In some test environments, e.target has been nulled after the tests
        // are done and a batch is still processing.
        if (!eTarget) {
          return;
        }
  
        var eType = e.type;
        var eTargetParent = eTarget.parentNode;
  
        if (!canTriggerInsertOrRemove(eTargetParent)) {
          return;
        }
  
        // The same bug that affects IE 11 also affects IE 9 / 10 with Mutation
        // Events.
        //
        // IE 11 bug: https://connect.microsoft.com/IE/feedback/details/817132/ie-11-childnodes-are-missing-from-mutationobserver-mutations-removednodes-after-setting-innerhtml
        var shouldWorkAroundIeRemoveBug = isFixingIe && eType === "DOMNodeRemoved";
        var isDescendant = lastBatchedElement && elementContains(lastBatchedElement, eTarget);
  
        // This checks to see if the element is contained in the last batched
        // element. If it is, then we don't batch it because elements are
        // batched into first-children of a given parent. However, IE is (of
        // course) an exception to this and destroys the DOM tree heirarchy
        // before the callback gets fired if the element was removed. Because of
        // this, we have to let through all descendants that had the event
        // triggered on it.
        if (!shouldWorkAroundIeRemoveBug && isDescendant) {
          return;
        }
  
        if (!lastBatchedRecord || lastBatchedRecord.target !== eTargetParent) {
          batchedRecords.push(lastBatchedRecord = newMutationRecord(eTargetParent));
        }
  
        if (eType === "DOMNodeInserted") {
          if (!lastBatchedRecord.addedNodes) {
            lastBatchedRecord.addedNodes = [];
          }
  
          lastBatchedRecord.addedNodes.push(eTarget);
        } else {
          if (!lastBatchedRecord.removedNodes) {
            lastBatchedRecord.removedNodes = [];
          }
  
          lastBatchedRecord.removedNodes.push(eTarget);
        }
  
        lastBatchedElement = eTarget;
      }
  
      function canTriggerAttributeModification(eTarget) {
        return options.attributes && (options.subtree || eTarget === target);
      }
  
      function canTriggerInsertOrRemove(eTargetParent) {
        return options.childList && (options.subtree || eTargetParent === target);
      }
  
      var that = this;
  
      // Batching insert and remove.
      var lastBatchedElement;
      var lastBatchedRecord;
      var batchedEvents = [];
      var batchedRecords = [];
      var batchEvents = debounce(function () {
        var batchedEventsLen = batchedEvents.length;
  
        for (var a = 0; a < batchedEventsLen; a++) {
          batchEvent(batchedEvents[a]);
        }
  
        that.callback(batchedRecords);
        batchedEvents = [];
        batchedRecords = [];
        lastBatchedElement = undefined;
        lastBatchedRecord = undefined;
      });
  
      // Batching attributes.
      var attributeOldValueCache = {};
      var attributeMutations = [];
      var batchAttributeMods = debounce(function () {
        // We keep track of the old length just in case attributes are
        // modified within a handler.
        var len = attributeMutations.length;
  
        // Call the handler with the current modifications.
        that.callback(attributeMutations);
  
        // We remove only up to the current point just in case more
        // modifications were queued.
        attributeMutations.splice(0, len);
      });
  
      var observed = {
        target: target,
        options: options,
        insertHandler: addEventToBatch,
        removeHandler: addEventToBatch,
        attributeHandler: function attributeHandler(e) {
          var eTarget = e.target;
  
          if (!(e.relatedNode instanceof Attr)) {
            // IE10 fires two mutation events for attributes, one with the
            // target as the relatedNode, and one where it's the attribute.
            //
            // Re: relatedNode, "In the case of the DOMAttrModified event
            // it indicates the Attr node which was modified, added, or
            // removed." [1]
            //
            // [1]: https://msdn.microsoft.com/en-us/library/ff943606%28v=vs.85%29.aspx
            return;
          }
  
          if (!canTriggerAttributeModification(eTarget)) {
            return;
          }
  
          var eAttrName = e.attrName;
          var ePrevValue = e.prevValue;
          var eNewValue = e.newValue;
          var record = newMutationRecord(eTarget, "attributes");
          record.attributeName = eAttrName;
  
          if (options.attributeOldValue) {
            record.oldValue = attributeOldValueCache[eAttrName] || ePrevValue || null;
          }
  
          attributeMutations.push(record);
  
          // We keep track of old values so that when IE incorrectly reports
          // the old value we can ensure it is actually correct.
          if (options.attributeOldValue) {
            attributeOldValueCache[eAttrName] = eNewValue;
          }
  
          batchAttributeMods();
        }
      };
  
      this.elements.push(observed);
  
      if (options.childList) {
        target.addEventListener("DOMNodeInserted", observed.insertHandler);
        target.addEventListener("DOMNodeRemoved", observed.removeHandler);
      }
  
      if (options.attributes) {
        target.addEventListener("DOMAttrModified", observed.attributeHandler);
      }
  
      return this;
    },
  
    disconnect: function disconnect() {
      objEach(this.elements, function (observed) {
        observed.target.removeEventListener("DOMNodeInserted", observed.insertHandler);
        observed.target.removeEventListener("DOMNodeRemoved", observed.removeHandler);
        observed.target.removeEventListener("DOMAttrModified", observed.attributeHandler);
      });
  
      this.elements = [];
  
      return this;
    }
  };
  
  module.exports = MutationObserver;
  
  return module.exports
}).call(this);

// src/lifecycle/created.js
__fe1aef0db5b664068b470b21f7c754a5 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var camelCase = _interopRequire(__779e1c84796f4ab22197cd554c25dd35);
  
  var data = _interopRequire(__bbde635d6f239d7b17f5bee9a64f03e8);
  
  var forEachComponent = _interopRequire(__b5370a9e5a5555b0d7d0d7c1a5880abf);
  
  var hasOwn = _interopRequire(__0a2c5941f61640fa05d4ec2723b939c4);
  
  var inherit = _interopRequire(__1549ba2e7c62853a39e94336669d2f79);
  
  var matchesSelector = _interopRequire(__0964927725a619be8ccd39e7e56cf3ad);
  
  var MutationObserver = _interopRequire(__fcd21ac78247116a0bdde5374b0c4641);
  
  var objEach = _interopRequire(__f6279d384ed58022eb040533c80b6909);
  
  function addAttributeListeners(target, component) {
    var attrs = target.attributes;
  
    if (!component.attributes || component.isNative) {
      return;
    }
  
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        var name = mutation.attributeName;
        var attr = attrs[name];
        target.attributeChangedCallback(name, mutation.oldValue, attr && (attr.value || attr.nodeValue));
      });
    });
  
    observer.observe(target, {
      attributes: true,
      attributeOldValue: true
    });
  }
  
  function parseEvent(e) {
    var parts = e.split(" ");
    return {
      name: parts.shift(),
      delegate: parts.join(" ")
    };
  }
  
  function addEventListeners(target, component) {
    if (typeof component.events !== "object") {
      return;
    }
  
    function makeHandler(handler, delegate) {
      return function (e) {
        // If we're not delegating, trigger directly on the component element.
        if (!delegate) {
          return handler(target, e, target);
        }
  
        // If we're delegating, but the target doesn't match, then we've have
        // to go up the tree until we find a matching ancestor or stop at the
        // component element, or document. If a matching ancestor is found, the
        // handler is triggered on it.
        var current = e.target;
  
        while (current && current !== document && current !== target.parentNode) {
          if (matchesSelector(current, delegate)) {
            return handler(target, e, current);
          }
  
          current = current.parentNode;
        }
      };
    }
  
    objEach(component.events, function (handler, name) {
      var evt = parseEvent(name);
      var useCapture = !!evt.delegate && (evt.name === "blur" || evt.name === "focus");
      target.addEventListener(evt.name, makeHandler(handler, evt.delegate), useCapture);
    });
  }
  
  function defineAttributeProperty(target, attribute) {
    Object.defineProperty(target, camelCase(attribute), {
      get: function get() {
        return this.getAttribute(attribute);
      },
      set: function set(value) {
        if (value === undefined) {
          this.removeAttribute(attribute);
        } else {
          this.setAttribute(attribute, value);
        }
      }
    });
  }
  
  function addAttributeToPropertyLinks(target, component) {
    var componentAttributes = component.attributes;
  
    if (typeof componentAttributes !== "object") {
      return;
    }
  
    for (var attribute in componentAttributes) {
      if (hasOwn(componentAttributes, attribute) && target[attribute] === undefined) {
        defineAttributeProperty(target, attribute);
      }
    }
  }
  
  function initAttributes(target, component) {
    var componentAttributes = component.attributes;
  
    if (typeof componentAttributes !== "object") {
      return;
    }
  
    for (var attribute in componentAttributes) {
      if (hasOwn(componentAttributes, attribute) && hasOwn(componentAttributes[attribute], "value") && !target.hasAttribute(attribute)) {
        var value = componentAttributes[attribute].value;
        value = typeof value === "function" ? value(target) : value;
        target.setAttribute(attribute, value);
      }
    }
  }
  
  function triggerAttributesCreated(target) {
    var a;
    var attrs = target.attributes;
    var attrsCopy = [];
    var attrsLen = attrs.length;
  
    for (a = 0; a < attrsLen; a++) {
      attrsCopy.push(attrs[a]);
    }
  
    // In default web components, attribute changes aren't triggered for
    // attributes that already exist on an element when it is bound. This sucks
    // when you want to reuse and separate code for attributes away from your
    // lifecycle callbacks. Skate will initialise each attribute by calling the
    // created callback for the attributes that already exist on the element.
    for (a = 0; a < attrsLen; a++) {
      var attr = attrsCopy[a];
      target.attributeChangedCallback(attr.nodeName, null, attr.value || attr.nodeValue);
    }
  }
  
  module.exports = forEachComponent(function (element, options) {
    var targetData = data(element, options.id);
  
    if (targetData.created) {
      return;
    }
  
    targetData.created = true;
  
    // Native custom elements automatically inherit the prototype.
    if (!options.isNative) {
      inherit(element, options.prototype, true);
    }
  
    // We use the unresolved / resolved attributes to flag whether or not the
    // element has been templated or not.
    if (options.template && !element.hasAttribute(options.resolvedAttribute)) {
      options.template(element);
    }
  
    element.removeAttribute(options.unresolvedAttribute);
    element.setAttribute(options.resolvedAttribute, "");
    addEventListeners(element, options);
    addAttributeListeners(element, options);
    addAttributeToPropertyLinks(element, options);
    initAttributes(element, options);
    triggerAttributesCreated(element, options);
  
    if (options.created) {
      options.created(element);
    }
  });
  
  return module.exports
}).call(this);

// src/lifecycle/detached.js
__8e93439e8a566d1586c9903a75a6a785 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var data = _interopRequire(__bbde635d6f239d7b17f5bee9a64f03e8);
  
  var elementContains = _interopRequire(__a3535eb1111d11f1a455783a62f000d8);
  
  var forEachComponent = _interopRequire(__b5370a9e5a5555b0d7d0d7c1a5880abf);
  
  module.exports = forEachComponent(function (element, options) {
    var targetData = data(element, options.id);
  
    if (targetData.detached) {
      return;
    }
  
    if (elementContains(document, element)) {
      return;
    }
  
    targetData.detached = true;
  
    if (options.detached) {
      options.detached(element);
    }
  
    targetData.attached = false;
  });
  
  return module.exports
}).call(this);

// src/utils/get-closest-ignored-element.js
__494582998af37ebc214b42da609592d4 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var ATTR_IGNORE = __22848e6eb5ddd68722bf2a03dc73e10d.ATTR_IGNORE;
  
  var DocumentFragment = window.DocumentFragment;
  
  module.exports = function (element) {
    var parent = element;
  
    while (parent && parent !== document && !(parent instanceof DocumentFragment)) {
      if (parent.hasAttribute(ATTR_IGNORE)) {
        return parent;
      }
  
      parent = parent.parentNode;
    }
  };
  
  return module.exports
}).call(this);

// src/lifecycle/init.js
__1f473b05c77b72c96ed0e55c584eebc4 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var created = _interopRequire(__fe1aef0db5b664068b470b21f7c754a5);
  
  var attached = _interopRequire(__2b55a083f45c9ef157662a1dc1674218);
  
  module.exports = function (element) {
    created(element);
    attached(element);
  };
  
  return module.exports
}).call(this);

// src/utils/walk-tree.js
__a0585d1fdcadd9bac377cefca6e07069 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var ATTR_IGNORE = __22848e6eb5ddd68722bf2a03dc73e10d.ATTR_IGNORE;
  
  function createElementTreeWalker(element) {
    return document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, function (node) {
      var attrs = node.attributes;
      return attrs && attrs[ATTR_IGNORE] ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }, true);
  }
  
  module.exports = function (elements, callback) {
    var elementsLength = elements.length;
    for (var a = 0; a < elementsLength; a++) {
      var element = elements[a];
      var elementAttrs = element.attributes;
  
      // We screen the root node only. The rest of the nodes are screened in the
      // tree walker.
      if (element.nodeType !== 1 || elementAttrs && elementAttrs[ATTR_IGNORE]) {
        continue;
      }
  
      // The tree walker doesn't include the current element.
      callback(element);
  
      var elementWalker = createElementTreeWalker(element);
      while (elementWalker.nextNode()) {
        callback(elementWalker.currentNode);
      }
    }
  };
  
  return module.exports
}).call(this);

// src/polyfill/document-observer.js
__53affcee25439c12726058fee7f75787 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var detached = _interopRequire(__8e93439e8a566d1586c9903a75a6a785);
  
  var getClosestIgnoredElement = _interopRequire(__494582998af37ebc214b42da609592d4);
  
  var globals = _interopRequire(__906dce814f2e16e7f80d2aa958aa9ac6);
  
  var init = _interopRequire(__1f473b05c77b72c96ed0e55c584eebc4);
  
  var MutationObserver = _interopRequire(__fcd21ac78247116a0bdde5374b0c4641);
  
  var walkTree = _interopRequire(__a0585d1fdcadd9bac377cefca6e07069);
  
  function documentObserverHandler(mutations) {
    var mutationsLen = mutations.length;
  
    for (var a = 0; a < mutationsLen; a++) {
      var mutation = mutations[a];
      var addedNodes = mutation.addedNodes;
      var removedNodes = mutation.removedNodes;
  
      // Since siblings are batched together, we check the first node's parent
      // node to see if it is ignored. If it is then we don't process any added
      // nodes. This prevents having to check every node.
      if (addedNodes && addedNodes.length && !getClosestIgnoredElement(addedNodes[0].parentNode)) {
        walkTree(addedNodes, init);
      }
  
      // We can't check batched nodes here because they won't have a parent node.
      if (removedNodes && removedNodes.length) {
        walkTree(removedNodes, detached);
      }
    }
  }
  
  function createDocumentObserver() {
    var observer = new MutationObserver(documentObserverHandler);
  
    // Observe after the DOM content has loaded.
    observer.observe(document, {
      childList: true,
      subtree: true
    });
  
    return observer;
  }
  
  module.exports = {
    register: function register() {
      var options = arguments[0] === undefined ? {} : arguments[0];
  
      // IE has issues with reporting removedNodes correctly. See the polyfill for
      // details. If we fix IE, we must also re-define the document observer.
      if (options.fixIe) {
        MutationObserver.fixIe();
        this.unregister();
      }
  
      if (!globals.observer) {
        globals.observer = createDocumentObserver();
      }
  
      return this;
    },
  
    unregister: function unregister() {
      if (globals.observer) {
        globals.observer.disconnect();
        globals.observer = undefined;
      }
  
      return this;
    }
  };
  
  return module.exports
}).call(this);

// src/polyfill/element-constructor.js
__2a9c84628af99934db58f308e303b691 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function (id, options) {
    function CustomElement() {
      var element;
      var tagToExtend = options["extends"];
  
      if (tagToExtend) {
        element = document.createElement(tagToExtend);
        element.setAttribute("is", id);
      } else {
        element = document.createElement(id);
      }
  
      // Ensure the definition prototype is up to date with the element's
      // prototype. This ensures that overwriting the element prototype still
      // works.
      options.prototype = CustomElement.prototype;
  
      // If they use the constructor we don't have to wait until it's attached.
      options.prototype.createdCallback.call(element);
  
      return element;
    }
  
    // This allows modifications to the element prototype propagate to the
    // definition prototype.
    CustomElement.prototype = options.prototype;
  
    return CustomElement;
  };
  
  return module.exports
}).call(this);

// src/skate/defaults.js
__33161e60567f66738c91b496cf4db43e = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var TYPE_ELEMENT = __22848e6eb5ddd68722bf2a03dc73e10d.TYPE_ELEMENT;
  
  module.exports = {
    // Attribute lifecycle callback or callbacks.
    attributes: undefined,
  
    // The events to manage the binding and unbinding of during the definition's
    // lifecycle.
    events: undefined,
  
    // Restricts a particular definition to binding explicitly to an element with
    // a tag name that matches the specified value.
    "extends": undefined,
  
    // The ID of the definition. This is automatically set in the `skate()`
    // function.
    id: "",
  
    // Properties and methods to add to each element.
    prototype: {},
  
    // The attribute name to add after calling the created() callback.
    resolvedAttribute: "resolved",
  
    // The template to replace the content of the element with.
    template: undefined,
  
    // The type of bindings to allow.
    type: TYPE_ELEMENT,
  
    // The attribute name to remove after calling the created() callback.
    unresolvedAttribute: "unresolved"
  };
  
  return module.exports
}).call(this);

// src/skate/init.js
__99576e5bc788ab5981d3c4c6fbd25110 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var init = _interopRequire(__1f473b05c77b72c96ed0e55c584eebc4);
  
  var walkTree = _interopRequire(__a0585d1fdcadd9bac377cefca6e07069);
  
  var HTMLElement = window.HTMLElement;
  
  module.exports = function (nodes) {
    var nodesToUse = nodes;
  
    if (!nodes) {
      return nodes;
    }
  
    if (typeof nodes === "string") {
      nodesToUse = nodes = document.querySelectorAll(nodes);
    } else if (nodes instanceof HTMLElement) {
      nodesToUse = [nodes];
    }
  
    walkTree(nodesToUse, init);
  
    return nodes;
  };
  
  return module.exports
}).call(this);

// src/skate/no-conflict.js
__0a94d5d6526738702ffe048568b330dd = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var previousSkate = window.skate;
  
  module.exports = function () {
    window.skate = previousSkate;
    return this;
  };
  
  return module.exports
}).call(this);

// src/skate/type.js
__752afec9756903eb48fe9be5709f7c66 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _constants = __22848e6eb5ddd68722bf2a03dc73e10d;
  
  var TYPE_ATTRIBUTE = _constants.TYPE_ATTRIBUTE;
  var TYPE_CLASSNAME = _constants.TYPE_CLASSNAME;
  var TYPE_ELEMENT = _constants.TYPE_ELEMENT;
  module.exports = {
    ATTRIBUTE: TYPE_ATTRIBUTE,
    CLASSNAME: TYPE_CLASSNAME,
    ELEMENT: TYPE_ELEMENT
  };
  
  return module.exports
}).call(this);

// src/skate/version.js
__95a3d6d4d0b7a435b0ca2614ed3c49dd = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = "0.13.2";
  
  return module.exports
}).call(this);

// src/support/custom-elements.js
__c6f5e18624750ce93a74df6369c85ef0 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function () {
    return typeof document.registerElement === "function";
  };
  
  return module.exports
}).call(this);

// src/support/valid-custom-element.js
__6e1dfed2b03894ef63a4b65d5038d223 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  module.exports = function (name) {
    return name.indexOf("-") > 0;
  };
  
  return module.exports
}).call(this);

// src/skate.js
__880d751441dbbd15758abf63053bf506 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var TYPE_ELEMENT = __22848e6eb5ddd68722bf2a03dc73e10d.TYPE_ELEMENT;
  
  var attached = _interopRequire(__2b55a083f45c9ef157662a1dc1674218);
  
  var attribute = _interopRequire(__9f17962f9aa326a94ed3e5d6f6b172e6);
  
  var created = _interopRequire(__fe1aef0db5b664068b470b21f7c754a5);
  
  var debounce = _interopRequire(__bf50fdd75f99f2b27325dc6d6f1dcb64);
  
  var detached = _interopRequire(__8e93439e8a566d1586c9903a75a6a785);
  
  var documentObserver = _interopRequire(__53affcee25439c12726058fee7f75787);
  
  var elementConstructor = _interopRequire(__2a9c84628af99934db58f308e303b691);
  
  var inherit = _interopRequire(__1549ba2e7c62853a39e94336669d2f79);
  
  var init = _interopRequire(__1f473b05c77b72c96ed0e55c584eebc4);
  
  var registry = _interopRequire(__270cb854b3681e4b614f772d24705d53);
  
  var skateDefaults = _interopRequire(__33161e60567f66738c91b496cf4db43e);
  
  var skateInit = _interopRequire(__99576e5bc788ab5981d3c4c6fbd25110);
  
  var skateNoConflict = _interopRequire(__0a94d5d6526738702ffe048568b330dd);
  
  var skateType = _interopRequire(__752afec9756903eb48fe9be5709f7c66);
  
  var skateVersion = _interopRequire(__95a3d6d4d0b7a435b0ca2614ed3c49dd);
  
  var supportsCustomElements = _interopRequire(__c6f5e18624750ce93a74df6369c85ef0);
  
  var walkTree = _interopRequire(__a0585d1fdcadd9bac377cefca6e07069);
  
  var validCustomElement = _interopRequire(__6e1dfed2b03894ef63a4b65d5038d223);
  
  function initDocument() {
    walkTree(document.documentElement.childNodes, init);
  }
  
  function initDocumentWhenReady() {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      initDocument();
    } else {
      document.addEventListener("DOMContentLoaded", initDocument);
    }
  }
  
  var debouncedInitDocumentWhenReady = debounce(initDocumentWhenReady);
  var HTMLElement = window.HTMLElement;
  var HTMLElementPrototype = HTMLElement.prototype;
  
  function skate(id, options) {
    // Copy options and set defaults.
    options = inherit(inherit({ id: id }, options), skateDefaults);
  
    var parent = options["extends"] ? document.createElement(options["extends"]).constructor.prototype : HTMLElementPrototype;
  
    // Extend behaviour of existing callbacks.
    options.prototype.createdCallback = created;
    options.prototype.attachedCallback = attached;
    options.prototype.detachedCallback = detached;
    options.prototype.attributeChangedCallback = attribute(options);
    options.isElement = options.type === TYPE_ELEMENT;
    options.isNative = supportsCustomElements() && validCustomElement(id) && options.isElement;
  
    // By always setting in the registry we ensure that behaviour between
    // polyfilled and native registries are handled consistently.
    registry.set(id, options);
  
    if (!parent.isPrototypeOf(options.prototype)) {
      options.prototype = inherit(Object.create(parent), options.prototype, true);
    }
  
    if (options.isNative) {
      return document.registerElement(id, options);
    }
  
    debouncedInitDocumentWhenReady();
    documentObserver.register({
      fixIe: !!options.prototype.detachedCallback
    });
  
    if (options.isElement) {
      return elementConstructor(id, options);
    }
  }
  
  skate.defaults = skateDefaults;
  skate.init = skateInit;
  skate.noConflict = skateNoConflict;
  skate.type = skateType;
  skate.version = skateVersion;
  
  // Global
  window.skate = skate;
  
  // ES6
  module.exports = skate;
  
  return module.exports
}).call(this);

// node_modules/skatejs-template-html/dist/template-html.js
__cbf2ec3413318a8b5aa294af8a33efd2 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  var defineDependencies = {
    "module": module,
    "exports": exports
  };
  var define = function defineReplacement(name, deps, func) {
    var rval;
    var type;
  
    func = [func, deps, name].filter(function (cur) { return typeof cur === 'function'; })[0];
    deps = [deps, name, []].filter(Array.isArray)[0];
    rval = func.apply(null, deps.map(function (value) { return defineDependencies[value]; }));
    type = typeof rval;
  
    // Some processors like Babel don't check to make sure that the module value
    // is not a primitive before calling Object.defineProperty() on it. We ensure
    // it is an instance so that it can.
    if (type === 'string') {
      rval = new String(rval);
    } else if (type === 'number') {
      rval = new Number(rval);
    } else if (type === 'boolean') {
      rval = new Boolean(rval);
    }
  
    // Reset the exports to the defined module. This is how we convert AMD to
    // CommonJS and ensures both can either co-exist, or be used separately. We
    // only set it if it is not defined because there is no object representation
    // of undefined, thus calling Object.defineProperty() on it would fail.
    if (rval !== undefined) {
      exports = module.exports = rval;
    }
  };
  define.amd = true;
  
  (function () {var DocumentFragment = window.DocumentFragment;
    var elProto = window.HTMLElement.prototype;
    var matchesSelector = elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector || elProto.mozMatchesSelector || elProto.oMatchesSelector;
  
    function getData(element, name) {
      if (element.__SKATE_TEMPLATE_HTML_DATA) {
        return element.__SKATE_TEMPLATE_HTML_DATA[name];
      }
    }
  
    function setData(element, name, value) {
      if (!element.__SKATE_TEMPLATE_HTML_DATA) {
        element.__SKATE_TEMPLATE_HTML_DATA = {};
      }
  
      element.__SKATE_TEMPLATE_HTML_DATA[name] = value;
  
      return element;
    }
  
    function createFragmentFromString(domString) {
      var specialMap = {
        caption: "table",
        dd: "dl",
        dt: "dl",
        li: "ul",
        tbody: "table",
        td: "tr",
        thead: "table",
        tr: "tbody"
      };
  
      var tag = domString.match(/\s*<([^\s>]+)/);
      var div = document.createElement(tag && specialMap[tag[1]] || "div");
  
      div.innerHTML = domString;
  
      return createFragmentFromNodeList(div.childNodes);
    }
  
    function createFragmentFromNodeList(nodeList) {
      var frag = document.createDocumentFragment();
  
      while (nodeList && nodeList.length) {
        frag.appendChild(nodeList[0]);
      }
  
      return frag;
    }
  
    function getNodesBetween(startNode, endNode) {
      var nodes = [];
      var nextNode = startNode.nextSibling;
  
      while (nextNode !== endNode) {
        nodes.push(nextNode);
        nextNode = nextNode.nextSibling;
      }
  
      return nodes;
    }
  
    function findChildrenMatchingSelector(sourceNode, selector) {
      if (selector) {
        var found = sourceNode.querySelectorAll(selector);
        var foundLength = found.length;
        var filtered = [];
  
        for (var a = 0; a < foundLength; a++) {
          var node = found[a];
  
          if (node.parentNode === sourceNode) {
            filtered.push(node);
          }
        }
  
        return filtered;
      }
  
      return [].slice.call(sourceNode.childNodes) || [];
    }
  
    function htmlTemplateParentWrapper(element) {
      var contentNodes = getData(element, "content");
      var contentNodesLen = contentNodes.length;
  
      return {
        childNodes: {
          get: function get() {
            var nodes = [];
  
            for (var a = 0; a < contentNodesLen; a++) {
              var contentNode = contentNodes[a];
  
              if (contentNode.isDefault) {
                continue;
              }
  
              nodes = nodes.concat(getNodesBetween(contentNode.startNode, contentNode.endNode));
            }
  
            return nodes;
          }
        },
  
        firstChild: {
          get: function get() {
            var childNodes = this.childNodes;
            return childNodes.length && childNodes[0] || null;
          }
        },
  
        innerHTML: {
          get: function get() {
            var html = "";
            var childNodes = this.childNodes;
            var childNodesLen = childNodes.length;
  
            for (var a = 0; a < childNodesLen; a++) {
              var childNode = childNodes[a];
              html += childNode.outerHTML || childNode.textContent;
            }
  
            return html;
          },
          set: function set(html) {
            var targetFragment = createFragmentFromString(html);
  
            for (var a = 0; a < contentNodesLen; a++) {
              var contentNode = contentNodes[a];
              var childNodes = getNodesBetween(contentNode.startNode, contentNode.endNode);
  
              // Remove all nodes (including default content).
              for (var b = 0; b < childNodes.length; b++) {
                var childNode = childNodes[b];
                childNode.parentNode.removeChild(childNode);
              }
  
              var foundNodes = findChildrenMatchingSelector(targetFragment, contentNode.selector);
  
              // Add any matched nodes from the given HTML.
              for (var c = 0; c < foundNodes.length; c++) {
                contentNode.container.insertBefore(foundNodes[c], contentNode.endNode);
              }
  
              // If no nodes were found, set the default content.
              if (foundNodes.length) {
                removeDefaultContent(contentNode);
              } else {
                addDefaultContent(contentNode);
              }
            }
          }
        },
  
        lastChild: {
          get: function get() {
            for (var a = contentNodesLen - 1; a > -1; a--) {
              var contentNode = contentNodes[a];
  
              if (contentNode.isDefault) {
                continue;
              }
  
              var childNodes = this.childNodes;
              var childNodesLen = childNodes.length;
  
              return childNodes[childNodesLen - 1];
            }
  
            return null;
          }
        },
  
        outerHTML: {
          get: function get() {
            var name = this.tagName.toLowerCase();
            var html = "<" + name;
            var attrs = this.attributes;
  
            if (attrs) {
              var attrsLength = attrs.length;
  
              for (var a = 0; a < attrsLength; a++) {
                var attr = attrs[a];
                html += " " + attr.nodeName + "=\"" + attr.nodeValue + "\"";
              }
            }
  
            html += ">";
            html += this.innerHTML;
            html += "</" + name + ">";
  
            return html;
          }
        },
  
        textContent: {
          get: function get() {
            var textContent = "";
            var childNodes = this.childNodes;
            var childNodesLength = this.childNodes.length;
  
            for (var a = 0; a < childNodesLength; a++) {
              textContent += childNodes[a].textContent;
            }
  
            return textContent;
          },
          set: function set(textContent) {
            var acceptsTextContent;
  
            // Removes all nodes (including default content).
            this.innerHTML = "";
  
            // Find the first content node without a selector.
            for (var a = 0; a < contentNodesLen; a++) {
              var contentNode = contentNodes[a];
  
              if (!contentNode.selector) {
                acceptsTextContent = contentNode;
                break;
              }
            }
  
            // There may be no content nodes that accept text content.
            if (acceptsTextContent) {
              if (textContent) {
                removeDefaultContent(acceptsTextContent);
                acceptsTextContent.container.insertBefore(document.createTextNode(textContent), acceptsTextContent.endNode);
              } else {
                addDefaultContent(acceptsTextContent);
              }
            }
          }
        },
  
        appendChild: {
          value: function value(node) {
            if (node instanceof DocumentFragment) {
              var fragChildNodes = node.childNodes;
  
              [].slice.call(fragChildNodes).forEach((function (node) {
                this.appendChild(node);
              }).bind(this));
  
              return this;
            }
  
            for (var b = 0; b < contentNodesLen; b++) {
              var contentNode = contentNodes[b];
              var contentSelector = contentNode.selector;
  
              if (!contentSelector || node instanceof window.HTMLElement && matchesSelector.call(node, contentSelector)) {
                removeDefaultContent(contentNode);
                contentNode.endNode.parentNode.insertBefore(node, contentNode.endNode);
                break;
              }
            }
  
            return this;
          }
        },
  
        insertAdjacentHTML: {
          value: function value(where, html) {
            if (where === "afterbegin") {
              this.insertBefore(createFragmentFromString(html), this.childNodes[0]);
            } else if (where === "beforeend") {
              this.appendChild(createFragmentFromString(html));
            } else {
              element.insertAdjacentHTML(where, html);
            }
  
            return this;
          }
        },
  
        insertBefore: {
          value: function value(node, referenceNode) {
            // If no reference node is supplied, we append. This also means that we
            // don't need to add / remove any default content because either there
            // aren't any nodes or appendChild will handle it.
            if (!referenceNode) {
              return this.appendChild(node);
            }
  
            // Handle document fragments.
            if (node instanceof DocumentFragment) {
              var fragChildNodes = node.childNodes;
  
              if (fragChildNodes) {
                var fragChildNodesLength = fragChildNodes.length;
  
                for (var a = 0; a < fragChildNodesLength; a++) {
                  this.insertBefore(fragChildNodes[a], referenceNode);
                }
              }
  
              return this;
            }
  
            var hasFoundReferenceNode = false;
  
            // There's no reason to handle default content add / remove because:
            // 1. If no reference node is supplied, appendChild handles it.
            // 2. If a reference node is supplied, there already is content.
            // 3. If a reference node is invalid, an exception is thrown, but also
            //    it's state would not change even if it wasn't.
            mainLoop: for (var b = 0; b < contentNodesLen; b++) {
              var contentNode = contentNodes[b];
              var betweenNodes = getNodesBetween(contentNode.startNode, contentNode.endNode);
              var betweenNodesLen = betweenNodes.length;
  
              for (var c = 0; c < betweenNodesLen; c++) {
                var betweenNode = betweenNodes[c];
  
                if (betweenNode === referenceNode) {
                  hasFoundReferenceNode = true;
                }
  
                if (hasFoundReferenceNode) {
                  var selector = contentNode.selector;
  
                  if (!selector || matchesSelector.call(node, selector)) {
                    betweenNode.parentNode.insertBefore(node, betweenNode);
                    break mainLoop;
                  }
                }
              }
            }
  
            // If no reference node was found as a child node of the element we must
            // throw an error. This works for both no child nodes, or if the
            // reference wasn't found to be a child node.
            if (!hasFoundReferenceNode) {
              throw new Error("DOMException 8: The node before which the new node is to be inserted is not a child of this node.");
            }
  
            return node;
          }
        },
  
        removeChild: {
          value: function value(childNode) {
            var removed = false;
  
            for (var a = 0; a < contentNodesLen; a++) {
              var contentNode = contentNodes[a];
  
              if (contentNode.container === childNode.parentNode) {
                contentNode.container.removeChild(childNode);
                removed = true;
                break;
              }
  
              if (contentNode.startNode.nextSibling === contentNode.endNode) {
                addDefaultContent(contentNode);
              }
            }
  
            if (!removed) {
              throw new Error("DOMException 8: The node in which you are trying to remove is not a child of this node.");
            }
  
            return childNode;
          }
        },
  
        replaceChild: {
          value: function value(newChild, oldChild) {
            for (var a = 0; a < contentNodesLen; a++) {
              var contentNode = contentNodes[a];
  
              if (contentNode.container === oldChild.parentNode) {
                contentNode.container.replaceChild(newChild, oldChild);
                break;
              }
            }
  
            return this;
          }
        }
      };
    }
  
    function addDefaultContent(content) {
      var nodes = content.defaultNodes;
      var nodesLen = nodes.length;
  
      for (var a = 0; a < nodesLen; a++) {
        content.container.insertBefore(nodes[a], content.endNode);
      }
  
      content.isDefault = true;
    }
  
    function removeDefaultContent(content) {
      var nodes = content.defaultNodes;
      var nodesLen = nodes.length;
  
      for (var a = 0; a < nodesLen; a++) {
        var node = nodes[a];
        node.parentNode.removeChild(node);
      }
  
      content.isDefault = false;
    }
  
    function createProxyProperty(node, name) {
      return {
        get: function get() {
          var value = node[name];
  
          if (typeof value === "function") {
            return value.bind(node);
          }
  
          return value;
        },
  
        set: function set(value) {
          node[name] = value;
        }
      };
    }
  
    function wrapNodeWith(node, wrapper) {
      var wrapped = {};
  
      for (var name in node) {
        var inWrapper = (name in wrapper);
  
        if (inWrapper) {
          Object.defineProperty(wrapped, name, wrapper[name]);
        } else {
          Object.defineProperty(wrapped, name, createProxyProperty(node, name));
        }
      }
  
      return wrapped;
    }
  
    function cacheContentData(node) {
      var contentNodes = node.getElementsByTagName("content");
      var contentNodesLen = contentNodes && contentNodes.length;
  
      if (contentNodesLen) {
        var contentData = [];
  
        while (contentNodes.length) {
          var contentNode = contentNodes[0];
          var parentNode = contentNode.parentNode;
          var selector = contentNode.getAttribute("select");
          var startNode = document.createComment(" content ");
          var endNode = document.createComment(" /content ");
  
          contentData.push({
            container: parentNode,
            contentNode: contentNode,
            defaultNodes: [].slice.call(contentNode.childNodes),
            endNode: endNode,
            isDefault: true,
            selector: selector,
            startNode: startNode
          });
  
          parentNode.replaceChild(endNode, contentNode);
          parentNode.insertBefore(startNode, endNode);
  
          // Cache data in the comment that can be read if no content information
          // is cached. This allows seamless server-side rendering.
          startNode.textContent += JSON.stringify({
            defaultContent: contentNode.innerHTML,
            selector: selector
          }) + " ";
        }
  
        setData(node, "content", contentData);
      }
    }
  
    // Content Parser
    // --------------
  
    function parseCommentNode(node) {
      var data;
      var matches = node.textContent.match(/^ (\/?)content (.*)/i);
  
      if (matches) {
        if (matches[2]) {
          try {
            data = JSON.parse(matches[2]);
          } catch (e) {
            throw new Error("Unable to parse content comment data: \"" + e + "\" in \"<!--" + node.textContent + "-->\".");
          }
        }
  
        return {
          data: data || {
            defaultContent: undefined,
            isDefault: undefined,
            selector: undefined
          },
          type: matches[1] ? "close" : "open"
        };
      }
    }
  
    function parseNodeForContent(node) {
      var a;
      var childNodes = node.childNodes;
      var childNodesLen = childNodes.length;
      var contentDatas = [];
      var lastContentNode;
  
      for (a = 0; a < childNodesLen; a++) {
        var childNode = childNodes[a];
  
        if (childNode.nodeType === 8) {
          var contentInfo = parseCommentNode(childNode);
  
          if (contentInfo) {
            if (contentInfo.type === "open") {
              if (lastContentNode) {
                throw new Error("Cannot have an opening content placeholder after another content placeholder at the same level in the DOM tree: \"" + childNode.textContent + "\" in \"" + childNode.parentNode.innerHTML + "\".");
              }
  
              lastContentNode = {
                container: childNode.parentNode,
                contentNode: childNode,
                defaultNodes: contentInfo.data.defaultContent && createFragmentFromString(contentInfo.data.defaultContent).childNodes || [],
                isDefault: contentInfo.data.isDefault,
                selector: contentInfo.data.selector,
                startNode: childNode
              };
            } else if (contentInfo.type === "close") {
              if (!lastContentNode) {
                throw new Error("Unmatched closing content placeholder: \"" + childNode.textContent + "\" in \"" + childNode.parentNode.innerHTML + "\".");
              }
  
              lastContentNode.endNode = childNode;
              contentDatas.push(lastContentNode);
              lastContentNode = undefined;
            }
          }
        } else {
          contentDatas = contentDatas.concat(parseNodeForContent(childNode));
        }
      }
  
      return contentDatas;
    }
  
    // Public API
    // ----------
  
    function skateTemplateHtml() {
      var template = [].slice.call(arguments).join("");
  
      return function (target) {
        var frag = createFragmentFromNodeList(target.childNodes);
  
        target.innerHTML = template;
        cacheContentData(target);
  
        if (frag.childNodes.length) {
          skateTemplateHtml.wrap(target).appendChild(frag);
        }
      };
    }
  
    skateTemplateHtml.wrap = function (node) {
      if (!getData(node, "content")) {
        setData(node, "content", parseNodeForContent(node));
      }
  
      return wrapNodeWith(node, htmlTemplateParentWrapper(node));
    };
  
    // Exporting
    // ---------
  
    // Global.
    window.skateTemplateHtml = skateTemplateHtml;
  
    // AMD.
    if (typeof define === "function") {
      define(function () {
        return skateTemplateHtml;
      });
    }
  
    // CommonJS.
    if (typeof module === "object") {
      module.exports = skateTemplateHtml;
    }
  })();
  
  return module.exports
}).call(this);

// docs/src/scripts/components/item.js
__53bbffcf0f211ce3637a4df2cc610d0b = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var skate = _interopRequire(__880d751441dbbd15758abf63053bf506);
  
  var template = _interopRequire(__cbf2ec3413318a8b5aa294af8a33efd2);
  
  module.exports = skate("skate-item", {
    template: template("\n    <content></content>\n  ")
  });
  
  return module.exports
}).call(this);

// docs/src/scripts/components/nav.js
__38b49cb3515a4effad384433bedce64f = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };
  
  var skate = _interopRequire(__880d751441dbbd15758abf63053bf506);
  
  var template = _interopRequire(__cbf2ec3413318a8b5aa294af8a33efd2);
  
  module.exports = skate("skate-nav", {
    template: template("\n    <nav>\n      <content select=\"skate-item\"></content>\n    </nav>\n  ")
  });
  
  return module.exports
}).call(this);

// docs/src/scripts/index.js
__fea2dbba62d62c2bcf022fc7d3691db4 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  __53bbffcf0f211ce3637a4df2cc610d0b;
  
  __38b49cb3515a4effad384433bedce64f;
  
  return module.exports
}).call(this);