import { define } from 'skatejs';

export default define('sk-module', {
  props: {
    args: {},
    load: {},
    done: {}
  },
  updated (elem, prev) {
    if (typeof elem.load === 'function') {
      elem.load(args => (elem.args = args));
    }
    return elem.args;
  },
  render (elem) {
    if (typeof elem.done === 'function') {
      return elem.done(elem.args);
    }
  }
});
