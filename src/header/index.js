import { define, prop } from 'skatejs';
import css from './index.css';
import elements from '../_/elements';

const { a, div, h1, li, style, ul } = elements;

function item(text, href = '#') {
  li({ class: 'header-list-item' }, () => a({ class: 'header-link', href }, text));
}

export default define('sk-header', {
  props: {
    title: prop.string(),
  },
  render(elem) {
    style(css.toString());
    div({ class: 'header' }, () => {
      h1({ class: 'header-title' }, elem.title);
      ul({ class: 'header-list-item' }, () => {
        item('Docs');
        item('Github', 'https://github.com/skatejs/skatejs');
        item('Community');
      });
    });
  },
});
