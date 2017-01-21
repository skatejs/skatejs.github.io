import { define, prop, Component } from 'skatejs';
import page from 'page';

const registered = [];

export default define(class extends Component {
  static get is(){ return 'sk-router-route' }
  static get props() {
    return {
      match: {},
      matched: prop.boolean({ attribute: true }),
      path: prop.string({ attribute: true }),
    }
  }
  updatedCallback (prev) {
    const { path } = this;

    if (registered.indexOf(path) === -1) {
      registered.push(path);
      page(path, () => {
        this.matched = true;
      });
      page.exit(path, (args, next) => {
        this.matched = false;
        next();
      });

      if (path === window.location.pathname) {
        page(path);
      }
    }
    
    return true;
  }
  renderCallback() {
    return this.matched && this.match();
  }
});
