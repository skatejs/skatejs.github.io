/** @jsx h */

import { define, h } from 'skatejs';
import { Layout, Link } from '../helpers';

export default define('sk-page-examples', {
  render () {
    return (
      <Layout>
        <p>Coming soon. For now, check out the <Link href="https://github.com/skatejs/skatejs">README</Link>.</p>
      </Layout>
    );
  }
});
