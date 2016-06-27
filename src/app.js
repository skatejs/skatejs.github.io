import { define } from 'skatejs';
import elements from './_/elements';

const { div, h1 } = elements;

export default define('sk-app', {
  render() {
    h1('SkateJS');
    div();
  },
});
