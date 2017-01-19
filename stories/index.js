import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import ScrollView from '../es/layout/scrollview';
import Button from '../es/widgets/button';
import Input from '../es/widgets/input';

const containerSizeStyles = {
  width: '400px',
  height: '120px'
}

storiesOf('ScrollView', module)
  .add('Basic', () => {
    const buttonList = [0,1,2,3,4,5,6,7,8,9,10].map(() => {
        return (<Button>
          😀 😎 👍 💯
        </Button>);
      });

    return (<div style={containerSizeStyles}>
      <ScrollView>{buttonList}</ScrollView>
    </div>
    )
  });

storiesOf('Button', module)
  .add('Basic', () => (
    <Button>Hello Button</Button>
  ))
  .add('Primary', () => (
    <Button style="primary">Primary 👍</Button>
  ))
  .add('Warning', () => (
    <Button style="warning">Warning 👍</Button>
  ))
  .add('Danger', () => (
    <Button style="danger">Danger</Button>
  ))
  .add('Submit', () => (
    <Button type="submit">Danger</Button>
  ));

  storiesOf('Input', module)
  .add('Basic', () => (
    <Input></Input>
  ))
  .add('Primary', () => (
    <Input style="primary"></Input>
  ))
  .add('Warning', () => (
    <Input style="warning"></Input>
  ))
  .add('Error', () => (
    <Input style="error"></Input>
  ))
  .add('Password', () => (
    <Input type="password"></Input>
  ));