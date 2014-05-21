(function() {

  'use strict';


  var objectRegistry = [];
  var observerRegistry = [];
  var types = ['add', 'update', 'delete', 'change'];


  // Common implementation for traversing an array or object.
  function each(items, cb) {
    if (!items) {
      return;
    }

    if (items.hasOwnProperty) {
      for (var a in items) {
        if (items.hasOwnProperty(a)) {
          if (cb(items[a], a) === false) {
            return;
          }
        }
      }
    } else if (items.length) {
      for (var a = 0; a < items.length; a++) {
        if (cb(items[a], a) === false) {
          return;
        }
      }
    }
  }


  // Adapted from: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating.
  //
  // Calls the specified function using `RequestAnimationFrame` and falls back to using `setTimeout`.
  var timeout = (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    if (window.requestAnimationFrame) {
      return window.requestAnimationFrame;
    }

    for (var x = 0; x < vendors.length; ++x) {
      var method = vendors[x] + 'RequestAnimationFrame';

      if (typeof window[method] === 'function') {
        return window[method];
      }
    }

    if (!window.requestAnimationFrame) {
      return function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        },  timeToCall);

        lastTime = currTime + timeToCall;

        return id;
      };
    }
  }());

  // Ends a timeout started with `timeout`.
  var timeoutEnd = (function() {
    if (window.cancelAnimationFrame) {
      return window.cancelAnimationFrame;
    }

    return function(id) {
      clearTimeout(id);
    };
  })();


  function Observer(obj) {
    this.isArray = Array.isArray(obj);
    this.obj = obj;
    this.init();
  };

  Observer.find = function(obj) {
    var index = objectRegistry.indexOf(obj);
    return index === -1 ? false : observerRegistry[index];
  };

  Observer.prototype = {
    constructor: Observer,

    init: function() {
      var that = this;

      this.listeners = {};
      this.timeout = false;

      types.forEach(function(type) {
        that.listeners[type] = [];
      });

      return this;
    },

    on: function(type, fn) {
      if (!this.listening()) {
        this.start();
      }

      this.listeners[type].push(fn);

      return this;
    },

    off: function(type, fn) {
      if (fn) {
        this.listeners[type].splice(this.listeners[type].indexOf(fn), 1);
      } else {
        this.listeners[type] = [];
      }

      if (!this.listening()) {
        this.stop();
      }

      return this;
    },

    notify: function(diffs) {
      var that = this;

      diffs.forEach(function(diff) {
        that.listeners[diff.type].forEach(function(fn) {
          fn(diff);
        });

        that.listeners.change.forEach(function(fn) {
          fn(diff);
        });
      });

      return this;
    },

    diff: function() {
      var that = this;
      var diffs = [];
      var a = 0;

      if (this.isArray && this.obj.length === this.state.length) {
        return diffs;
      }

      each(this.state, function(val, a) {
        var missing = that.isArray
          ? that.obj.indexOf(val) === -1
          : typeof that.obj[a] === 'undefined';

        if (missing) {
          diffs.push({
            object: that.obj,
            type: 'delete',
            name: a,
            oldValue: val,
            newValue: undefined
          });
        }
      });

      each(this.obj, function(val, a) {
        var isAdd = that.isArray ? that.state.indexOf(val) === -1 : typeof that.state[a] === 'undefined';
        var isUpdate = that.isArray ? that.obj.length === that.state.length && that.state[a] !== val : that.state[a] !== val;

        if (isAdd || isUpdate) {
          diffs.push({
            object: that.obj,
            type: typeof that.state[a] === 'undefined' ? 'add' : 'update',
            name: a,
            oldValue: typeof that.state[a] === 'undefined' ? undefined : that.state[a],
            newValue: val
          });
        }
      });

      return diffs;
    },

    save: function() {
      var that = this;

      this.state = that.isArray ? [] : {};

      each(this.obj, function(val, a) {
        that.state[a] = val;
      });

      return this;
    },

    listening: function() {
      for (var a = 0; a < types.length; a++) {
        if (this.listeners[types[a]].length) {
          return true;
        }
      }

      return false;
    },

    start: function() {
      var that = this;

      this.save();
      this.timeout = timeout(run);

      function run() {
        var diff = that.diff();

        if (diff.length) {
          that.save();
          that.notify(diff);
        }

        timeout(run);
      };

      return this;
    },

    stop: function() {
      var that = this;

      timeoutEnd(this.timeout);

      this.state = {};
      this.timeout = false;

      types.forEach(function(type) {
        that.listeners[type] = [];
      })

      return this;
    },

    destroy: function() {
      this.stop();
      objectRegistry.splice(objectRegistry.indexOf(this.obj), 1);
      observerRegistry.splice(observerRegistry.indexOf(this), 1);
      delete this.obj;
      return this;
    }
  };


  function witness(obj) {
    var observer = Observer.find(obj);

    if (!observer) {
      observer = new Observer(obj);
      objectRegistry.push(obj);
      observerRegistry.push(observer);
    }

    return observer;
  };


  if (typeof define === 'function' && define.amd) {
    define('witness', function() {
      return witness;
    });
  } else {
    window.witness = witness;
  }

})();