import { define, prop, h } from 'skatejs';
import Body from '../body';
import Footer from '../footer';
import Header from '../header';
import Module from '../module';
import Route from '../route';
import title from '../_/title';

// TODO do we even need ?lazy??
export default define('sk-app', {
  props: {
    page: {},
    scrolled: prop.boolean()
  },
  created() {
    // Setup the Gitter script before it's rendered.
    ((window.gitter = {}).chat = {}).options = {
      room: 'skatejs/skatejs'
    };
  },
  attached(elem) {
    window.addEventListener('scroll', elem._scrollHandler = () => (elem.scrolled = !!window.scrollY));
  },
  detached(elem) {
    window.removeEventListener('scroll', elem._scrollHandler);
  },
  render(elem) {
    const Page = elem.page;
    const render = page => {
      elem.page = page.default;
    };
    title('SkateJS - functional web components');
    return [
      <script src="http://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>,
      <div>
        <Route path="/" match={() =>
          <Module load={require('bundle?lazy!../pages/index/')} done={render} />
        } />
        <Route path="/docs" match={() =>
          <Module load={require('bundle?lazy!../pages/docs')} done={render} />
        } />
        <Route path="/docs/installing" match={() =>
          <Module load={require('bundle?lazy!../pages/docs/installing')} done={render} />
        } />
        <Header scrolled={elem.scrolled} title="SkateJS" />
        <Body>{Page ? <Page /> : ''}</Body>
        <Footer />
      </div>
    ];
  },
});
