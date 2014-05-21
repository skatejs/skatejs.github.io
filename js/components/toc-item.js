define(['skate'], function(skate) {
  'use strict';

  return skate('skate-toc-item', {
    type: skate.types.ATTR,

    insert: function (element) {
      [].forEach.call(document.querySelectorAll('.skate-toc'), function(toc) {
        toc.addItem(element);
      });
    }
  });
});
