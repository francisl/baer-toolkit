import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { containerSizeStyles } from '../../stories/config';

import Layout from './layout';
import Button from '../widgets/button';

const buttonList = [0,1,2,3,4,5,6,7,8,9,10].map(() => {
    return (<Button>
      😀 😎 👍 💯
    </Button>);
});


export default storiesOf('Layouts', module)
  .add('Layout | Horizontal Default', () => {
    return (
        <div style={containerSizeStyles}>
            <Layout>{buttonList}</Layout>
        </div>
    );
}).add('Layout | Horizontal Centered', () => {
    return (
        <div style={containerSizeStyles}>
            <Layout center>
                <Button>Happy 😀 😎</Button>
                <Button>Ok 👍</Button>
            </Layout>
        </div>
  )
}).add('Layout | Horizontal Right', () => {
    return (
        <div style={containerSizeStyles}>
            <Layout right>
                <Button>Happy 😀 😎</Button>
                <Button>Ok 👍</Button>
            </Layout>
        </div>
  )
}).add('Layout | Vertical in Horizontal', () => {
    return (
        <div style={containerSizeStyles}>
            <Layout>
                <Layout vertical center>
                    <Button>Happy 😀 😎</Button>
                    <Button>Ok 👍</Button>
                </Layout>
                <Button>Happy 😀 😎</Button>
                <Layout vertical stretch>
                    <Button>Happy 😀 😎</Button>
                    <Button>Ok 👍</Button>
                </Layout>
                <Layout vertical right>
                    <Button>Happy 😀 😎</Button>
                    <Button>Ok 👍</Button>
                </Layout>
            </Layout>
        </div>
  )
}).add('Layout | vertical', () => {
    return (
        <div style={containerSizeStyles}>
            <Layout vertical>{buttonList}</Layout>
        </div>
  )
}).add('Layout | vertical centered in horizontal', () => {
    return (
        <div style={containerSizeStyles}>
            <Layout center>
                <Layout vertical>{buttonList}</Layout>
            </Layout>
        </div>
  )
});
