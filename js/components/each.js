define(['skate', 'witness'], function(skate, witness) {
  'use strict';

  return skate('skate-each', function(element) {
    var each = window[element.getAttribute('skate-each')];
    var observer = witness(each);
    var parent = element.parentNode;

    // Remove and use as a template.
    parent.removeChild(element);

    observer.on('add', function(change) {
      parent.appendChild(clone());
    });

    observer.on('update', function(change) {
      var ref = parent.childNodes.item(change.name);

      parent.insertBefore(clone(), ref);
      parent.removeChild(ref);
    });

    observer.on('delete', function(change) {
      parent.removeChild(parent.childNodes.item(change.name));
    });


    function clone() {
      var dolly = element.cloneNode(true);
      dolly.removeAttribute('skate-each');
      return dolly;
    }
  });
});
