define(['skate'], function (skate) {
  'use strict';

  return skate('skate-toc', {
    type: skate.types.CLASS,

    insert: function (element) {
      [].forEach.call(document.querySelectorAll('.skate-toc-item'), function (item) {
        element.addItem(item);
      });
    },

    prototype: {
      lastTocItemSequence: 0,

      addItem: function (child) {
        var parent = this;
        var sequence = child.tagName.replace('H', '');

        if (!sequence) {
          return this;
        }

        var listitem = document.createElement('li');
        var anchor = document.createElement('a');

        anchor.href = '#' + child.id;
        anchor.textContent = child.textContent;
        listitem.appendChild(anchor);
        parent.appendChild(listitem);

        return this;
      },

      clearAllItems: function () {
        this.innerHTML = '';
        return this;
      }
    }
  });
});
