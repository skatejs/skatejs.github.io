import { define, vdom } from 'skatejs';
import Header from '../header';
import title from '../_/title';

export default define('sk-app', {
  render() {
    title('SkateJS - functional web components');
    return (
      <Header title="SkateJS" />
    );
  },
});
