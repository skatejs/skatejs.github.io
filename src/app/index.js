import { Component, define, prop, h } from 'skatejs';
import { Item } from '../helpers';
import Body from '../body';
import Footer from '../footer';
import Header from '../header';
import Module from '../module';
import Route from '../route';
import title from '../_/title';

export default define('sk-app', class extends Component {
  static get props () {
    return {
      page: {},
      scrolled: prop.boolean()
    };
  }
  constructor() {
    super();
    // Setup the Gitter script before it's rendered.
    ((window.gitter = {}).chat = {}).options = {
      room: 'skatejs/skatejs'
    };
  }
  connectedCallback(elem) {
    super.connectedCallback();
    window.addEventListener('scroll', this._scrollHandler = () => (this.scrolled = !!window.scrollY));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this._scrollHandler);
  }
  static render(elem) {
    const Page = elem.page;
    const render = page => {
      elem.page = page.default;
    };
    title('SkateJS - functional web components');
    return [
      <div>
        <Route path="/" match={() =>
          <Module load={require('bundle!../pages/index/')} done={render} />
        } />
        <Route path="/getting-started" match={() =>
          <Module load={require('bundle!../pages/getting-started')} done={render} />
        } />
        <Route path="/docs" match={() =>
          <Module load={require('bundle!../pages/docs')} done={render} />
        } />
        <Route path="/examples" match={() =>
          <Module load={require('bundle!../pages/examples')} done={render} />
        } />
        <Route path="/guides" match={() =>
          <Module load={require('bundle!../pages/guides')} done={render} />
        } />
        <Route path="/support" match={() =>
          <Module load={require('bundle!../pages/support')} done={render} />
        } />
        <Header scrolled={elem.scrolled} title="SkateJS">
          {/*<Item href="/getting-started">Getting Started</Item>*/}
          <Item href="/docs">Docs</Item>
          {/*<Item href="/examples">Examples</Item>
          <Item href="/guides">Guides</Item>
          <Item href="/support">Support</Item>
          <Item href="https://github.com/skatejs/skatejs" external>Github</Item>*/}
        </Header>
        <Body>{Page ? <Page /> : ''}</Body>
        <Footer />
      </div>,
      <script src="http://sidecar.gitter.im/dist/sidecar.v1.js" async defer></script>
    ];
  }
});
