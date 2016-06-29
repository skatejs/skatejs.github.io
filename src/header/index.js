import { define, prop } from 'skatejs';
import css from './index.css';
import elements from '../_/elements';

const { a, div, h1, li, style, ul } = elements;

function item(text, href = '#') {
  li({ class: css.locals.item }, () => a({ class: css.locals.link, href }, text));
}

export default define('sk-header', {
  props: {
    title: prop.string(),
  },
  render(elem) {
    style(css.toString());
    div({ class: css.locals.header }, () => {
      h1({ class: css.locals.title }, elem.title);
      ul({ class: css.locals.list }, () => {
        item('Docs');
        item('Github', 'https://github.com/skatejs/skatejs');
        item('Community');
      });
    });
  },
});
