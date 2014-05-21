define(['skate'], function(skate) {
  'use strict';

  return skate('skate-icon', {
    type: skate.types.ATTR,

    insert: function(element) {
      element.className = 'glyphicon glyphicon-' + element.getAttribute('skate-icon');
    }
  });
});
