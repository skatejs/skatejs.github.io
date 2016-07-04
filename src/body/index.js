import { define, vdom } from 'skatejs';
import css from './index.css';

export default define('sk-body', {
  render() {
    return (
      <div class={css.locals.body}>
        <style>{css.toString()}</style>
        <slot />
      </div>
    );
  },
});
