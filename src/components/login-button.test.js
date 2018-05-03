import React from 'react';
import {shallow} from 'enzyme';
import { switchToLogin } from '../actions/actions';


import {LoginButton} from './login-button';

describe('<LoginButton />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginButton />);
    });
    it('Dispatches switchToLogin', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<LoginButton dispatch={dispatch}/>);
        const button= wrapper.find('.colored');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(switchToLogin());
    });
   
});