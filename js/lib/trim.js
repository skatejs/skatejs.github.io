define(function() {
  return function(str) {
    if (str) {
      return str.replace(/^\s+/, '').replace(/\s+$/, '');
    }
  };
});
