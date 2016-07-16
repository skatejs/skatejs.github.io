import { define, prop, vdom } from 'skatejs';
import Body from '../body';
import Footer from '../footer';
import Header from '../header';
import title from '../_/title';

export default define('sk-app', {
  props: {
    page: prop.string(),
    scrolled: prop.boolean(),
  },
  attached(elem) {
    window.addEventListener('scroll', elem._scrollHandler = () => (elem.scrolled = !!window.scrollY));
    elem.page = 'testing...';
  },
  detached(elem) {
    window.removeEventListener('scroll', elem._scrollHandler);
  },
  render(elem) {
    title('SkateJS - functional web components');
    return (
      <div>
        <Header scrolled={elem.scrolled} title="SkateJS"></Header>
        <Body>{elem.page}</Body>
        <Footer></Footer>
      </div>
    );
  },
});
