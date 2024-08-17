import React from 'react';
import { mount } from 'enzyme';

import Productdetails from './Productdetails';

describe('Productdetails component', () => {
    it('should match snapshot', () => {
        expect(mount(<Productdetails />)).toMatchSnapshot();
    });
});
