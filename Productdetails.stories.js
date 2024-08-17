import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Productdetails from './Productdetails';

storiesOf('Productdetails', module)
    .add('with title', withInfo()(() => (
        <Productdetails title="Productdetails title" />
    )));
