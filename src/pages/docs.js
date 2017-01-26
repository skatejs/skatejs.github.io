/** @jsx h */

import { define, h } from 'skatejs';
import { Layout, Link } from '../helpers';

export default define('sk-page-docs', {
  render () {
    return (
      <Layout>
        <p>Coming soon. For now, check out the <Link rel="external" href="https://github.com/skatejs/skatejs">README</Link>.</p>
      </Layout>
    );
  }
});
