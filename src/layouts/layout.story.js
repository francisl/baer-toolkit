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


export default () => (
    <div>
        <h2>Horizontal Default</h2>
        <div style={containerSizeStyles}>
            <Layout>{buttonList}</Layout>
        </div>

        <br />
        <h2>Horizontal Centered</h2>
            <div style={containerSizeStyles}>
                <Layout center>
                    <Button>Happy 😀 😎</Button>
                    <Button>Ok 👍</Button>
                </Layout>
            </div>

        <br />
        <h2>Horizontal Right</h2>
        <div style={containerSizeStyles}>
            <Layout right>
                <Button>Happy 😀 😎</Button>
                <Button>Ok 👍</Button>
            </Layout>
        </div>

        <br />
        <h2>Vertical in Horizontal</h2>
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

        <br />
        <h2>vertical</h2>
        <div style={containerSizeStyles}>
            <Layout vertical>{buttonList}</Layout>
        </div>

        <br />
        <h2>vertical centered in horizontal</h2>
        <div style={containerSizeStyles}>
            <Layout>
                <Layout vertical center>{buttonList}</Layout>
            </Layout>
        </div>
    </div>
);
