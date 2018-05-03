import React from 'react';
import {shallow} from 'enzyme';
import {registerUser} from '../actions/user';

import {RegistrationForm} from './register-form';

describe('<RegistrationForm />', () => {
    it('Renders without crashing', () => {
        const handleSubmit=jest.fn();
        shallow(<RegistrationForm handleSubmit={handleSubmit}/>);
    });
});