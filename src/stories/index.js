//@flow
import React from 'react';
import { action, linkTo, storiesOf } from '@kadira/storybook';
import App from '../components/App'

storiesOf('App', module)
    .add('Test app', () => (
        <App />
    ));