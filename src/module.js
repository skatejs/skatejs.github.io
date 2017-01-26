import { define, Component } from 'skatejs';

export default define(class extends Component {
  static get is () {
    return 'sk-module';
  }
  static get props () {
    return {
      args: {},
      load: {},
      done: {}
    };
  }
  updatedCallback (prev) {
    if (typeof this.load === 'function') {
      this.load(args => (this.args = args));
    }
    return this.args;
  }
  renderCallback () {
    if (typeof this.done === 'function') {
      return this.done(this.args);
    }
  }
});
