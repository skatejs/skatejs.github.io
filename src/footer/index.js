import { merge, style } from 'glamor';
import { vdom } from 'skatejs';
import { Css } from '../helpers';

const css = {
  footer: style({ backgroundColor: '#222', color: '#eee', fontSize: 12, padding: '10px 20px' }),
  item: style({ padding: 0 }),
  link: style({ color: '#eee', textDecoration: 'none' }),
  list: style({ padding: '0 0 0 20px' }),
};

const List = props => (
  <ul {...css.list}>
    {Object.keys(props.items).map(item =>
      <li {...css.item}>
        <a {...css.link} href={props.items[item]}>{item}</a>
      </li>
    )}
  </ul>
);

export default () => (
  <div {...css.footer}>
    <Css for={merge(...css)} />
    <List items={{ Docs: 'docs/' }} />
  </div>
);
