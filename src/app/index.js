import { define, prop, vdom } from 'skatejs';
import Body from '../body';
import Footer from '../footer';
import Header from '../header';
import title from '../_/title';

export default define('sk-app', {
  props: {
    page: prop.string(),
  },
  render(elem) {
    title('SkateJS - functional web components');
    return (
      <div>
        <Header title="SkateJS" />
        <Body>{elem.page}</Body>
        <Footer />
      </div>
    );
  },
});
