import { h } from 'skatejs';
import { Css, Link } from '../helpers';
import { hover, merge, style } from 'glamor';
import logo from './logo.png';

const css = {
  header: style({
    backgroundColor: '#fefefe',
    color: '#333',
    position: 'fixed',
    transition: 'box-shadow .3s ease',
    width: '100%',
  }),
  item: style({
    display: 'inline-block',
    margin: 0,
    padding: 0,
  }),
  link: merge(style({
    color: '#333',
    display: 'inline-block',
    fontSize: 18,
    margin: 0,
    padding: 20,
    textDecoration: 'none',
    transition: 'background-color .3s ease',
  }), hover({
    backgroundColor: '#eee',
  })),
  list: style({
    display: 'inline-block',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }),
  scrolled: style({
    boxShadow: '0 0 15px 0 #333',
  }),
  title: style({
    display: 'inline-block',
    margin: '0 20px 0 10px',
    padding: 0,
    position: 'relative',
    left: 14,
    top: 8,
  }),
};

const Item = (props, chren) => (
  <li {...css.item}>
    {props.external ?
      <a {...props} {...css.link}>{chren}</a> :
      <Link {...props} {...css.link}>{chren}</Link>
    }
  </li>
);
const allCss = Object.keys(css).map((k) => css[k]);
export default props => (
  <div>
    <Css for={allCss} />
    <div {...css.header} {...(props.scrolled ? css.scrolled : {})}>
      <h1 {...css.title}>
        <Link href="/"><img alt={props.title} src={logo} width="30" /></Link>
      </h1>
      <ul {...css.list}>
        <Item href="/docs">Docs</Item>
        <Item href="https://github.com/skatejs/skatejs" external>Github</Item>
      </ul>
    </div>
  </div>
);
