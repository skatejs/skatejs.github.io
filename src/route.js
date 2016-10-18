import { define, emit, prop } from 'skatejs';
import page from 'page';

const registered = [];

export default define('sk-router-route', {
  props: {
    match: {},
    matched: prop.boolean(),
    path: prop.string(),
  },
  updated (elem, prev) {
    const { path } = elem;

    if (registered.indexOf(path) === -1) {
      registered.push(path);
      page(path, () => {
        elem.matched = true;
      });
      page.exit(path, (args, next) => {
        elem.matched = false;
        next();
      });

      if (path === window.location.pathname) {
        page(path);
      }
    }
    
    return true;
  },
  render(elem) {
    return elem.matched && elem.match();
  }
});
