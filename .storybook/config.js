import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories');
  require('../src/layout/layout.story.js');
}

configure(loadStories, module);
