import { define, vdom } from 'skatejs';
import { Layout } from '../../helpers';

export default define('sk-page-docs', {
  render() {
    return (
      <Layout>
        <p>The docs are currently being ported over from the <a href="https://github.com/skatejs/skatejs/blob/master/README.md">README</a>.</p>
      </Layout>
    );
  },
});
