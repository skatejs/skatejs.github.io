define(['skate'], function(skate) {
  'use strict';

  return skate('skate-output', {
    type: skate.types.TAG,

    ready: function(element) {
      element.innerHTML = '<div class="well">' + element.innerHTML + '</div>';
    },

    attributes: {
      title: function(element, change) {
        var title = document.createElement('div');
        title.textContent = change.newValue;
        element.parentNode.insertBefore(title, element);
      }
    }
  });
});
