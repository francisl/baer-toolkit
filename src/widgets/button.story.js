import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { containerSizeStyles } from '../../stories/config';

import Button from './button';

export default () => (
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

      <Button disabled>Disabled</Button>
      <pre><code>{`
          <Button disabled>
              Disabled
          </Button>`}
      </code></pre>
      <br />
  </div>

);
