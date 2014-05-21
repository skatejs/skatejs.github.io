define(['skate', 'slash', 'windex'], function (skate, Slash, Windex) {
  'use strict';

  var router = window.router = new Slash(function (router) {
    // router.base = '/docs';
    // router.usePopstate = router.constructor.supportsPopstate;
  });

  var http = new Windex();
  http.prefix = '/skate/views/';
  http.suffix = '.html';

  skate('skate-router', {
    insert: function (element) {
      router.when('*uri').then(function (params) {
        http.get(params.uri || 'index').then(function (html) {
          element.innerHTML = html;
        });
      });
    }
  });

  return router.listen();
});
