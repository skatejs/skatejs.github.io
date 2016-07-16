import { vdom } from 'skatejs';
import css from './index.css';

const List = props => (
  <ul class={css.locals.list}>
    {Object.keys(props.items).map(item =>
      <li class={css.locals.item}>
        <a class={css.locals.link} href={props.items[item]}>{item}</a>
      </li>
    )}
  </ul>
);

export default () => (
  <div class={css.locals.footer}>
    <style>{css.toString()}</style>
    <List items={{ Docs: 'docs/' }}></List>
  </div>
);
