(function (skate) {
  skate('skate-heading-link', {
    type: skate.types.ATTR,
    insert: function(element) {
      var a = document.createElement('a');
      var id = element.getAttribute('id');

      if (!id) {
        id = element.id = 'heading-' + dashcase(element.textContent);
      }

      a.innerHTML = element.innerHTML;
      element.innerHTML = '';

      a.setAttribute('href', '#' + id);
      element.appendChild(a);
    }
  });

  function dashcase (text) {
    return text.replace(/[^0-9a-zA-Z]+/g, '-').replace(/-+/g, '-').toLowerCase();
  }
}(window.skate));
