import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';

import cardStory from '../src/containers/card.story';
import scrollViewStory from '../src/containers/scrollview.story';
import layoutStory from '../src/layouts/layout.story';
import buttonStory from '../src/widgets/button.story';
import inputStory from '../src/widgets/input.story';
import labelStory from '../src/widgets/label.story';

storiesOf('Containers', module)
    .add('Card', cardStory)
    .add('ScrollView', scrollViewStory);

storiesOf('Widgets', module)
    .add('Button', buttonStory)
    .add('Input', inputStory)
    .add('Label', labelStory);

storiesOf('Layouts', module)
    .add('layout', layoutStory);
