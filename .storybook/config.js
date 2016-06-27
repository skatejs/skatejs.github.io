import { configure } from '@kadira/storybook';

const req = require.context('../test/story', true, /.*.js/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
