import React from 'react';
import { containerSizeStyles } from '../../stories/config';

import Card from './card';
import Layout from '../layouts/layout';
import Button from '../widgets/button';
import Input from '../widgets/input';

export default () => (
    <div>
        <h2>Simple form in a centered layout</h2>
        <Layout center>
            <Card style={{padding: '2rem'}}>
                <Layout vertical>
                    <Input></Input>
                    <Input></Input>
                    <Button>Login</Button>
                </Layout>
            </Card>
        </Layout>

        <pre><code>
            {`
            <Layout center>
                <Card style={{padding: '2rem'}}>
                    <Layout vertical>
                        <Input></Input>
                        <Input></Input>
                        <Button>Login</Button>
                    </Layout>
                </Card>
            </Layout>`}
        </code></pre>
    </div>
);
