import { define, vdom } from 'skatejs';
import css from './index.css';

function list(items = {}) {
  return (
    <ul class={css.locals.list}>
      {Object.keys(items).map(item =>
        <li class={css.locals.item}>
          <a class={css.locals.link} href={items[item]}>{item}</a>
        </li>
      )}
    </ul>
  );
}

export default define('sk-footer', {
  render() {
    return (
      <div class={css.locals.footer}>
        <style>{css.toString()}</style>
        {list({ docs: 'docs/' })}
      </div>
    );
  },
});
