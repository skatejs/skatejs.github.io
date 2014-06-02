(function(factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('q'));
  } else if (typeof define === 'function' && define.amd) {
    define(['q'], factory);
  } else {
    Windex = factory(Q);
  }
}(function(Q) {
  var hasDefineProperty = false;

  try {
    Object.defineProperty({}, 'a', {});
    hasDefineProperty = true;
  } catch (e) {}


  function Windex() {
    this.cache = false;
    this.headers = {
      Accept: 'application/json'
    };
    this.parsers = {
      'application/json': function(data) {
        return JSON.parse(data || {});
      }
    };
    this.prefix = '/';
    this.suffix = '';
    this.stubs = [];
  }

  Windex.create = function() {
    return new Windex();
  };

  Windex.prototype = {
    get: function(url, data) {
      return this.request('GET ' + url, data);
    },

    post: function(url, data) {
      return this.request('POST ' + url, data);
    },

    put: function(url, data) {
      return this.request('PUT ' + url, data);
    },

    'delete': function(url, data) {
      return this.request('DELETE ' + url, data);
    },

    patch: function(url, data) {
      return this.request('PATCH ' + url, data);
    },

    options: function(url, data) {
      return this.request('OPTIONS ' + url, data);
    },

    head: function(url, data) {
      return this.request('HEAD ' + url, data);
    },

    trace: function(url, data) {
      return this.request('TRACE ' + url, data);
    },

    connect: function(url, data) {
      return this.request('CONNECT ' + url, data);
    },

    request: function(url, data) {
      var that = this;
      var original = data;
      var parts = url.match(/^([a-zA-Z]+)?\s+?(.+)/);
      var type = (parts[1] || 'GET').toUpperCase();
      var uri = this.prefix + parts[2] + this.suffix;
      var stubUri = type + ' ' + parts[2];
      var request = this.xhr();
      var deferred = Q.defer();

      data = this.serialize(data || {});

      if (data && type === 'GET') {
        uri += '?' + data;
        stubUri += '?' + data;
      }

      if (!this.cache) {
        uri += (data ? '&' : '?') + '_' + new Date().getTime() + '=1';
      }

      for (var i = 0; i < this.stubs.length; i++) {
        var stub = this.stubs[i];
        var params = stubUri.match(stub.uri);

        if (params) {
          params.push(original);
          deferred.resolve(stub.data.apply(stub.data, params));
          return deferred.promise;
        }
      }

      request.open(type, uri, true);

      if (data && type !== 'GET') {
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      }

      for (var header in this.headers) {
        request.setRequestHeader(header, this.headers[header]);
      }

      request.onreadystatechange = function() {
        if (request.readyState !== 4) {
          return;
        }

        if (request.status !== 200 && request.status !== 304) {
          throw new Error(request.status + ': ' + request.statusText);
        }

        deferred.resolve(that.negotiate(request));
      };

      if (type === 'GET') {
        request.send();
      } else {
        request.send(data);
      }

      return deferred.promise;
    },

    negotiate: function(request) {
      var contentType = request.getResponseHeader('Content-Type');

      if (contentType && typeof this.parsers[contentType] === 'function') {
        try {
          return this.parsers[contentType](request.responseText);
        } catch (e) {
          deferred.reject(new Error('Cannot parse the response "' + request.responseText + '" with the content type of "' + contentType + '" from "' + request.url + '" with message: ' + e));
        }
      }

      return request.responseText;
    },

    serialize: function(obj, prefix) {
      var str = [];

      for (var a in obj) {
        var k = prefix ? prefix + '[' + a + ']' : a;
        var v = obj[a];

        str.push(typeof v === 'object' ? this.serialize(v, k) : k + '=' + encodeURIComponent(v));
      }

      return str.join('&');
    },

    url: function(url, defaults) {
      return new Url(this, url, defaults);
    },

    gen: function() {
      var obj;
      var args = [].slice.call(arguments);

      if (typeof arguments[0] === 'function') {
        obj = arguments[0];
        args.shift();
      } else {
        obj = function(){};
      }

      for (var a = 0; a < args.length; a++) {
        var def = args[a];

        for (var b in def) {
          obj.prototype[b] = this.url.apply(this, typeof def[b] === 'object' ? def[b] : [def[b]]).later();
        }
      }

      return obj;
    },

    xhr: function() {
      var request = false;
      var factories = [
            function () { return new XMLHttpRequest(); },
            function () { return new ActiveXObject('Msxml2.XMLHTTP'); },
            function () { return new ActiveXObject('Msxml3.XMLHTTP'); },
            function () { return new ActiveXObject('Microsoft.XMLHTTP'); }
          ];

      for (var a = 0; a < factories.length; a++) {
        try {
          request = factories[a]();
        } catch (e) {
          continue;
        }
      }

      if (!request) {
        throw 'An XMLHttpRequest could not be generated.';
      }

      return request;
    },

    stub: function(uri, data) {
      if (typeof uri === 'string') {
        uri = new RegExp('^' + uri + '$', 'g');
      }

      this.stubs.push({
        uri: uri,
        data: typeof data === 'function' ? data : function() { return data; }
      });

      return this;
    }
  };

  function Url(windex, uri, defaults) {
    var parts = (uri || '').split(' ');

    this.windex = windex;
    this.type = parts.length === 2 ? parts[0].toUpperCase() : 'GET';
    this.uri = parts.length === 2 ? parts[1] : parts[0];
    this.defaults = defaults || {};

    // Allows getters like `url.update` and falls back to `url.update()`.
    var types = {
      get: 'GET',
      add: 'POST',
      update: 'PATCH',
      replace: 'PUT',
      'delete': 'DELETE'
    };

    // Either applies a getter or a method depending
    // on the environment capabilities.
    for (var a in types) {
      var func = (function(type) {
        return function() {
          this.type = type;
          return this;
        };
      })(types[a]);

      if (hasDefineProperty) {
        Object.defineProperty(this, a, { get: func });
      } else {
        this[a] = func;
      }
    }

    if (hasDefineProperty) {
      var passthrus = ['and', 'to'];

      for (var b = 0; b < passthrus.length; b++) {
        Object.defineProperty(this, passthrus[b], {
          get: function() {
            return this;
          }
        });
      }
    }
  }

  Url.prototype = {
    one: function(res) {
      this.uri += (this.uri ? '/' : '') + res + '/:' + res;
      return this;
    },

    many: function(res) {
      this.uri += (this.uri ? '/' : '') + res + '/:limit/:page';

      if (typeof this.defaults.limit === 'undefined') {
        this.defaults.limit = '';
      }

      if (typeof this.defaults.page === 'undefined') {
        this.defaults.page = '';
      }

      return this;
    },

    all: function(res) {
      this.uri += (this.uri ? '/' : '') + res;
      return this;
    },

    wipe: function() {
      this.type = 'GET';
      this.uri = '';
      this.defaults = {};
      return this;
    },

    now: function(data) {
      var remove = [];
      var url = this.toString();
      var repl = {};

      data = data || {};

      for (var a in this.defaults) {
        if (typeof data[a] === 'undefined') {
          data[a] = this.defaults[a];
        }
      }

      for (var b in data) {
        if (url.match(':' + b)) {
          remove.push(b);
        }
      }

      for (var c = 0; c < remove.length; c++) {
        repl[remove[c]] = data[remove[c]];
        delete data[remove[c]];
      }

      return this.windex.request(this.toString(repl), data);
    },

    later: function() {
      var that = this;
      var func = function(data) {
          return that.now(data);
        };

      func.url = this;
      return func;
    },

    toString: function(data) {
      var url = this.type + ' ' + this.uri;

      if (data) {
        var remove = [];

        data = typeof data === 'object' ? data : {};

        for (var a in this.defaults) {
          if (typeof data[a] === 'undefined') {
            data[a] = this.defaults[a];
          }
        }

        for (var b in data) {
          if (url.match(':' + b)) {
            url = url.replace(':' + b, encodeURIComponent(data[b]));
          }
        }
      }

      return url.replace(/\/+/, '/').replace(/\/$/, '');
    },

    use: function(defaults) {
      for (var a in defaults) {
        this.defaults[a] = defaults[a];
      }

      return this;
    }
  };

  return Windex;
}));
