import { define, prop, h } from 'skatejs';
import { Community, Docs, Index } from '../pages';
import Body from '../body';
// import Footer from '../footer';
import Header from '../header';
import Router, { Route } from '../router';
import title from '../_/title';

export default define('sk-app', {
  props: {
    page: {},
    scrolled: prop.boolean(),
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
    title('SkateJS - functional web components');
    return [
      <script src="https://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>,
      <div>
        <Router on-route-change={e => (elem.page = e.detail)}>
          <Route component={Index} path="/" />
          <Route component={Docs} path="/docs" />
        </Router>
        <Header scrolled={elem.scrolled} title="SkateJS" />
        <Body>{Page ? <Page /> : ''}</Body>
        {/* <Footer /> */}
      </div>
    ];
  },
});
