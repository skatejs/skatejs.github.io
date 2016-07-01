import { define, prop, vdom } from 'skatejs';
import css from './index.css';
import style from '../_/style';

function item(text, href = '#') {
  return <li class={css.locals.item}>
    <a class={css.locals.link} href={href}>{text}</a>
  </li>;
}

export default define('sk-header', {
  props: {
    title: prop.string(),
  },
  render(elem) {
    return (
      <div>
        {style(css)}
        <div class={css.locals.header}>
          <h1 class={css.locals.title}>{elem.title}</h1>
          <ul class={css.locals.list}>
            {[
              item('Docs'),
              item('Github', 'https://github.com/skatejs/skatejs'),
              item('Community'),
            ]}
          </ul>
        </div>
      </div>
    );
  },
});
