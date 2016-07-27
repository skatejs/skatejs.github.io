import { vdom } from 'skatejs';
import { Link } from '../helpers';
import css from './index.css';
import logo from './logo.png';

const Item = (props, chren) => (
  <li class={css.locals.item}>
    {props.external ?
      <a {...props} class={css.locals.link}>{chren()}</a> :
      <Link {...props} class={css.locals.link}>{chren()}</Link>
    }
  </li>
);

export default props => (
  <div>
    <style>{css.toString()}</style>
    <div class={`${css.locals.header} ${props.scrolled ? css.locals.scrolled : ''}`}>
      <h1 class={css.locals.title}>
        <Link href="/"><img alt={props.title} src={logo} width="30" /></Link>
      </h1>
      <ul class={css.locals.list}>
        <Item href="/docs">Docs</Item>
        <Item href="https://github.com/skatejs/skatejs" external>Github</Item>
      </ul>
    </div>
  </div>
);
