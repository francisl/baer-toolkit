import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import ScrollView from '../src/layout/scrollview';
import Layout from '../src/layout/layout';
import Button from '../src/widgets/button';
import Input from '../src/widgets/input';
import { containerSizeStyles } from './config';

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
      <div>
          <Button onClick={function(){alert('clicked')}}>Hello Button</Button>
          <pre><code>{`
              <Button onClick={function(){alert('clicked')}}>
                  Hello Button
              </Button>
              `}
          </code></pre>
        <br />
        <Button primary onClick={function(){alert('clicked')}}>Primary 👍</Button>
        <pre><code>{`
            <Button primary onClick={function(){alert('clicked')}}>
                Primary 👍
            </Button>`}
        </code></pre>
        <br />
        <Button warning>Warning 👍</Button>
        <pre><code>{`
            <Button warning>
                Warning 👍
            </Button>`}
        </code></pre>
        <br />

        <Button danger>Danger</Button>
        <pre><code>{`
            <Button danger>
                Danger
            </Button>`}
        </code></pre>
        <br />

        <Button type="submit">Submit</Button>
        <pre><code>{`
            <Button type="submit">
                Submit
            </Button>`}
        </code></pre>
        <br />
    </div>
  ))
  storiesOf('Input', module)
  .add('Basic', () => (
      <div>
        <Input placeholder="basic"></Input>
        <pre><code>{`
            <Input placeholder="basic"></Input>
            `}
        </code></pre>
        <br />

        <Input disabled placeholder="disabled"></Input>
        <pre><code>{`
            <Input disabled placeholder="disabled"></Input>
            `}
        </code></pre>
        <br />

        <Input warning placeholder="warning"></Input>
        <pre><code>{`
            <Input warning placeholder="warning"></Input>
            `}
        </code></pre>
        <br />

        <Input error placeholder="error"></Input>
        <pre><code>{`
            <Input error placeholder="error"></Input>
            `}
        </code></pre>
        <br />

        <Input type="password" placeholder="password"></Input>
        <pre><code>{`
            <Input type="password" placeholder="password"></Input>
            `}
        </code></pre>
        <br />
    </div>
  ));
