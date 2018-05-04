import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from './login';
import {login} from '../actions/auth'


describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    });

});