import { h } from 'skatejs';
import { Css } from '../helpers';
import { style } from 'glamor';

const css = style({
  backgroundColor: '#fefefe',
  color: '#333',
  fontSize: 16,
  padding: '60px 0 0 0',
});

export default (props, chren) => (
  <div {...css}>
    <Css for={css} />
    {chren}
  </div>
);
