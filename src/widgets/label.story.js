import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { containerSizeStyles } from '../../stories/config';

import Label from './label';

export default () => (
    <div>
        <Label>
            Hello Label
        </Label>
        <pre><code>{`
            <Label>
                Hello Label
            </Label>
            `}
        </code></pre>
      <br />
  </div>

);
