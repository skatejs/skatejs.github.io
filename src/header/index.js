import { define, prop, vdom } from 'skatejs';
import css from './index.css';
import logo from './logo.png';

function item(text, href = '#') {
  return (
    <li class={css.locals.item}>
      <a class={css.locals.link} href={href}>{text}</a>
    </li>
  );
}

export default define('sk-header', {
  props: {
    scrolled: prop.boolean(),
    title: prop.string(),
  },
  attached(elem) {
    window.addEventListener('scroll', elem._scrollHandler = () => (elem.scrolled = !!window.scrollY));
  },
  detached(elem) {
    window.removeEventListener('scroll', elem._scrollHandler);
  },
  render(elem) {
    const scrolled = elem.scrolled ? css.locals.headerScrolled : '';
    return (
      <div>
        <style>{css.toString()}</style>
        <div class={`${css.locals.header} ${scrolled}`}>
          <h1 class={css.locals.title}>
            <img alt={elem.title} src={logo} width="30" />
          </h1>
          <ul class={css.locals.list}>
            {[
              item('Docs'),
              item('Github', 'https://github.com/skatejs/skatejs'),
              item('Community'),
            ]}
          </ul>
        </div>
      </div>
    );
  },
});
