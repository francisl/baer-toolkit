import React from 'react';
import { containerSizeStyles } from '../../stories/config';

import ScrollView from './scrollview';
import Button from '../widgets/button';

const buttonList = [0,1,2,3,4,5,6,7,8,9,10].map(() => {
    return (<Button>
      😀 😎 👍 💯
    </Button>);
});

export default () => (
  <div style={containerSizeStyles}>
    <ScrollView>{buttonList}</ScrollView>
  </div>
);
