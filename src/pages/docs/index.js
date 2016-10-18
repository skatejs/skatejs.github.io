import { define, h } from 'skatejs';
import { Layout, Link } from '../../helpers';
import Module from '../../module';
import Route from '../../route';

export default define('sk-page-docs', {
  render() {
    return (
      <Layout>
        <p>Coming soon. For now, check out the <a href="https://github.com/skatejs/skatejs">README</a>.</p>
      </Layout>
    );
  },
});
