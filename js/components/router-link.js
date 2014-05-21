define(['components/router', 'skate'], function (router, skate) {
  'use strict';

  return skate('skate-router-link', {
    type: skate.types.ATTR,

    insert: function (element) {
      element.href = '#';
      element.addEventListener('click', function (e) {
        var uri = e.target.getAttribute('skate-router-link').substring(1);

        router.uri(uri);
        e.preventDefault();
      });
    }
  });
});
