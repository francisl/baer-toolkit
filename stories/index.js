import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import ScrollView from '../src/layout/scrollview';
import HorizontalContainer from '../src/layout/horizontalcontainer';
import Button from '../src/widgets/button';
import Input from '../src/widgets/input';

const containerSizeStyles = {
  width: '450px',
  height: '120px',
  border: 'thin dashed pink'
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

storiesOf('HorizontalContainer', module)
  .add('Basic', () => {
    const buttonList = [0,1,2].map(() => {
        return (<Button>
          😀 😎 👍 💯
        </Button>);
      });

    return (
      <HorizontalContainer style={containerSizeStyles}>{buttonList}</HorizontalContainer>
    );
  }).add('Overflow', () => {
    const buttonList = [0,1,2,3,4,5,6,7,8,9,10].map(() => {
        return (<Button>
          😀 😎 👍 💯
        </Button>);
      });

    return (
      <HorizontalContainer style={containerSizeStyles}>{buttonList}</HorizontalContainer>
  )
});

storiesOf('Button', module)
  .add('Basic', () => (
    <Button onClick={function(){alert('clicked')}}>Hello Button</Button>
  ))
  .add('Primary', () => (
    <Button primary onClick={function(){alert('clicked')}}>Primary 👍</Button>
  ))
  .add('Warning', () => (
    <Button warning>Warning 👍</Button>
  ))
  .add('Danger', () => (
    <Button danger>Danger</Button>
  ))
  .add('Submit', () => (
    <Button type="submit">Submit</Button>
  ));

  storiesOf('Input', module)
  .add('Basic', () => (
    <Input></Input>
  ))
  .add('Primary', () => (
    <Input primary></Input>
  ))
  .add('Warning', () => (
    <Input warning></Input>
  ))
  .add('Error', () => (
    <Input error></Input>
  ))
  .add('Password', () => (
    <Input type="password"></Input>
  ));
