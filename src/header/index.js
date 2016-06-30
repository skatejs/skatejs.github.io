import { define, prop, vdom } from 'skatejs';
import css from './index.css';

export default define('sk-header', {
  props: {
    title: prop.string(),
  },
  render(elem) {
    return <div>
      <style>{css.toString()}</style>
      <div class={css.locals.header}>
        <h1 class={css.locals.title}>{elem.title}</h1>
        <ul class={css.locals.list}>
          <li class={css.locals.item}>
            <a class={css.locals.link} href="#">Docs</a>
          </li>
          <li class={css.locals.item}>
            <a class={css.locals.link} href="https://github.com/skatejs/skatejs">Github</a>
          </li>
          <li class={css.locals.item}>
            <a class={css.locals.link} href="#">Community</a>
          </li>
        </ul>
      </div>
    </div>;
  },
});
