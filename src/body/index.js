import { vdom } from 'skatejs';
import css from './index.css';

export default (props, chren) => (
  <div class={css.locals.body}>
    <style>{css.toString()}</style>
    {chren()}
  </div>
);
