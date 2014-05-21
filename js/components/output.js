define(['skate'], function(skate) {
  'use strict';

  return skate('skate-output', {
    type: skate.types.TAG,

    ready: function(element) {
      element.innerHTML = '<div class="well">' + element.innerHTML + '</div>';
    },

    attributes: {
      title: function(element, value) {
        var title = document.createElement('div');
        title.textContent = value;
        element.parentNode.insertBefore(title, element);
      }
    }
  });
});
