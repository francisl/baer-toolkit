import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import {ScrollView } from '../dist/index';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const containerSizeStyles = {
  width: '300px',
  height: '200px'
}

storiesOf('ScrollView', module)
  .add('Basic', () => {
    const buttonList = [0,1,2,3,4,5,6,7,8,9,10].map(() => {
        return (<button
          style={buttonStyles}>
          😀 😎 👍 💯
        </button>);
      });

    return (<div style={containerSizeStyles}>
      <ScrollView>{buttonList}</ScrollView>
    </div>
    )
  });


storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
