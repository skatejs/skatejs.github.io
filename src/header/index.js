import { vdom } from 'skatejs';
import css from './index.css';
import logo from './logo.png';

const Item = (props, chren) => (
  <li class={css.locals.item}>
    <a class={css.locals.link} href={props.href}>{chren()}</a>
  </li>
);

export default props => (
  <div>
    <style>{css.toString()}</style>
    <div class={`${css.locals.header} ${props.scrolled}`}>
      <h1 class={css.locals.title}>
        <img alt={props.title} src={logo} width="30" />
      </h1>
      <ul class={css.locals.list}>
        <Item href="">Docs</Item>
        <Item href="https://github.com/skatejs/skatejs">Github</Item>
        <Item href="">Community</Item>
      </ul>
    </div>
  </div>
);
