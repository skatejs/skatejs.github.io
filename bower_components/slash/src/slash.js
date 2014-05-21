!function(factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    Slash = factory();
  }
}(function() {

  function trim(str, base) {
    str = str.replace(/^[\s]+|[\s\/]+$/g, '');

    if (str.indexOf(base) === 0) {
      str = str.substring(base.length);
    }

    return str;
  }

  function bind(el, e, fn) {
    if (el.addEventListener) {
      el.addEventListener(e, fn, false);
    } else {
      el.attachEvent('on' + e, fn);
    }
  }

  function unbind(el, e, fn) {
    el.removeEventListener(e, fn);
  }

  function hashbang(uri) {
    var id = uri.replace(/^#/, '')
      , node = document.getElementById(id)
      , x = window.pageXOffset ? window.pageXOffset : document.body.scrollLeft
      , y = window.pageYOffset ? window.pageYOffset : document.body.scrollTop
      , dummy = document.createElement('div');

    if (node) {
      node.id = '';
    }

    dummy.id = id || '_';
    dummy.style.position = 'absolute';
    dummy.style.width = 0;
    dummy.style.height = 0;
    dummy.style.left = x + 'px';
    dummy.style.top = y + 'px';
    dummy.style.padding = 0;
    dummy.style.margin = 0;

    document.body.appendChild(dummy);
    window.location.hash = '#' + dummy.id;
    document.body.removeChild(dummy);

    if (node) {
      node.id = id;
    }
  }

  function each(arr, fn) {
    for (var a = 0; a < arr.length; a++) {
      fn(arr[a], a);
    }
  }


  var Slash = function(def) {
    if (this === window) {
      return new Slash(def);
    }

    var that = this;

    this.base = this.constructor.base;
    this.params = {};
    this.events = { route: [], match: [], done: [] };
    this.match = false;
    this.route = false;
    this.routes = [];
    this.errors = [];
    this.usePopstate = this.constructor.usePopstate && this.constructor.supportsPopstate;

    this.routePopstate = function() {
      if (that.usePopstate && that.constructor.supportsPopstate) {
        that.dispatch();
      }
    };

    this.routeHashchange = function() {
      if (!that.usePopstate || !that.constructor.supportsPopstate) {
        that.dispatch();
      }
    };

    if (typeof def === 'function') {
      def(this);
    }
  };

  Slash.base = '/';
  Slash.usePopstate = false;
  Slash.supportsPopstate = 'onpopstate' in window;

  Slash.prototype = {
    constructor: Slash,

    listen: function() {
      bind(window, 'popstate', this.routePopstate);
      bind(window, 'hashchange', this.routeHashchange);
      this.dispatch();
      return this;
    },

    deafen: function() {
      unbind(window, 'popstate', this.routePopstate);
      unbind(window, 'hashchange', this.routeHashchange);
      return this;
    },

    on: function(e, fn) {
      this.events[e].push(fn);
      return this;
    },

    when: function(expr) {
      route = new Slash.Route(expr);
      this.routes.push(route);
      return route;
    },

    error: function(callback) {
      this.errors.push(callback);
      return this;
    },

    dispatch: function(uri) {
      var that = this;
      var uri = uri ? trim(uri, this.base) : this.uri();

      if (fireRoute() === false) {
        return this;
      }

      if (doRoute() === false) {
        return this;
      }

      fireDone();

      return this;


      function doRoute() {
        for (var a = 0; a < that.routes.length; a++) {
          var route = that.routes[a];
          var params = route.match(uri);

          if (fireMatch() === false) {
            return false;
          }

          try {
            if (params === false) {
              route.doOtherwise();
              continue;
            }

            if (that.route) {
              that.route.doLeave(params);
            }

            that.params = params;
            that.match = uri;
            that.route = route;

            route.doThen(params);

            return;
          } catch (e) {
            doError(e);
          }
        }

        return false;
      }

      function doError(e) {
        if (!that.errors.length) {
          throw e;
        }

        for (var a = 0; a < that.errors.length; a++) {
          that.errors[a].call(that.errors[a], e, that, uri);
        }
      }

      function fireDone() {
        for (var a = 0; a < that.events.done.length; a++) {
          that.events.done[a].call(that.events.done[a], that, uri);
        }
      }

      function fireMatch() {
        for (var a = 0; a < that.events.match.length; a++) {
          if (that.events.match[a].call(that.events.match[a], that, uri) === false) {
            return false;
          }
        }
      }

      function fireRoute() {
        for (var a = 0; a < that.events.route.length; a++) {
          if (that.events.route[a].call(that.events.route[a], that, uri) === false) {
            return false;
          }
        }
      }
    },

    uri: function(uri) {
      if (arguments.length) {
        uri = this.base + uri;

        if (this.usePopstate && window.history.pushState) {
          window.history.pushState({}, '', uri);
        } else {
          hashbang(uri);
        }

        return this;
      }

      if (this.usePopstate && window.history.pushState) {
        uri = window.location.href.replace(/http(s)?\:\/\/[^\/]+/, '');
      } else {
        uri = window.location.hash.substring(1);
      }

      return trim(uri, this.base);
    }
  };


  Slash.Route = function(expr) {
    this.thenCallbacks = [];
    this.otherwiseCallbacks = [];
    this.leaveCallbacks = [];

    this.expr = expr;
    this.params = {};
    this.regex = /^$/;

    this.parse(expr);
  };

  Slash.Route.prototype = {
    parse: function(expr) {
      if (typeof expr === 'undefined') {
        return this;
      }

      var params = expr.match(/(:[^\/]*)|(\*[^\/]*)/g) || [];
      var regex;

      // Escape all special characters except "*".
      regex = expr.replace(/[-\/\\^$+?.()|[\]{}]/g, '\\$&');

      // Format parameters and modify regex to match them.
      for (var a = 0; a < params.length; a++) {
        var param = params[a];
        regex = regex.replace(param, param.charAt(0) === ':' ? '([^/]*)' : '(.*?)');
        params[a] = param.substring(1);
      }

      this.params = params;
      this.regex = new RegExp('^' + regex + '$');

      return this;
    },

    then: function(cb) {
      this.thenCallbacks.push(cb);
      return this;
    },

    otherwise: function(cb) {
      this.otherwiseCallbacks.push(cb);
      return this;
    },

    leave: function(cb) {
      this.lastlyCallbacks.push(cb);
      return this;
    },

    match: function(uri) {
      var args = uri.match(this.regex);

      if (args) {
        args.shift();

        var temp = {};

        for (var a = 0; a < this.params.length; a++) {
          var param = this.params[a];

          if (param) {
            temp[param] = args[a];
          } else {
            temp[a] = args[a];
          }
        }

        return temp;
      }

      return false;
    },

    doThen: function(params) {
      each(this.thenCallbacks, function(cb) {
        cb(params);
      });
      return this;
    },

    doOtherwise: function(params) {
      each(this.otherwiseCallbacks, function(cb) {
        cb(params);
      });
      return this;
    },

    doLeave: function(params) {
      each(this.leaveCallbacks, function(cb) {
        cb(params);
      });
      return this;
    }
  };


  return Slash;

});
