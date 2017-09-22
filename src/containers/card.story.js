import React from 'react';
import { containerSizeStyles } from '../../stories/config';

import Card from './card';
import Layout from '../layouts/layout';
import Button from '../widgets/button';
import Label from '../widgets/label';
import Input from '../widgets/input';

export default () => (
    <div>
        <h2>Simple form in a centered layout</h2>
        <Layout center>
            <Card style={{padding: '1rem 2rem'}}>
                <Layout vertical>
                    <Label>Username</Label>
                    <Input></Input>
                    <Label>Password</Label>
                    <Input password></Input>
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

        <h2>Simple form in a centered layout</h2>
            <Card center style={{padding: '1rem 2rem'}}>
                <Layout vertical center>
                    <Layout center>
                        <Label>Username</Label>
                        <Input></Input>
                    </Layout>
                    <Layout center>
                        <Label>Password</Label>
                        <Input password></Input>
                    </Layout>
                    <Layout right>
                        <Button>Login</Button>
                    </Layout>
                </Layout>
            </Card>

        <pre><code>
            {`
            <Layout center>
                <Card style={{padding: '2rem'}}>
                    <Layout vertical center>
                        <Input></Input>
                        <Input></Input>
                        <Button>Login</Button>
                    </Layout>
                </Card>
            </Layout>`}
        </code></pre>
    </div>
);
