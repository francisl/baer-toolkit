import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { containerSizeStyles } from '../../stories/config';

import Input from './input';

export default () => {
    return (
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
    );
}
