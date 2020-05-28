import { configure } from '@storybook/react';

const req = require.context('../src/stories', true);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
