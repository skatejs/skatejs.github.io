define(['skate', 'highlight'], function (skate, hjs) {
  'use strict';

  return skate('skate-snippet', {
    type: skate.types.TAG,

    ready: function (element) {
      element.innerHTML = '<code>' + hjs.highlight(element.getAttribute('lang') || 'html', element.innerHTML).value + '</code>';
    }
  });
});
