import React from 'react';
import {shallow} from 'enzyme';
import { switchToLogin } from '../actions/actions';
import { clearAuth } from '../actions/auth';



import {LogoutButton} from './logout-button';

describe('<LogoutButton />', () => {
    it('Renders without crashing', () => {
        shallow(<LogoutButton />);
    });
    it('Dispatches switchToLogin', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<LogoutButton dispatch={dispatch}/>);
        const button= wrapper.find('.colored');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(switchToLogin());
    });
    it('Dispatches clearAuth', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<LogoutButton dispatch={dispatch}/>);
        const button= wrapper.find('.colored');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(clearAuth());
    });
   
});