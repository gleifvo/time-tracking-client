//@flow
import React from 'react';
import { action, linkTo, storiesOf } from '@kadira/storybook';
import App from '../App'

storiesOf('App', module)
    .add('Test app', () => (
        <App />
    ));