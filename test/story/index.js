import { storiesOf } from '@kadira/storybook';
import React from 'react';
import '../../src/index';

storiesOf('skatejs.github.io', module)
  .add('index', () => (
    <sk-app />
  ));
