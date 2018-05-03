import React from 'react';
import {shallow} from 'enzyme';

import {HomeLoginPage} from './home-login-page';

describe('<HomeLoginPage />', () => {
    it('Renders without crashing', () => {
        shallow(<HomeLoginPage />);
    });

});