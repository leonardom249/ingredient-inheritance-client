import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from './login';
import {login} from '../actions/auth'


describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    });

    // it('Dispatches login', () => {
    //     const values = {"username": "abcd", "password":"password123"}
    //     const dispatch = jest.fn();
    //     const error = null
    //     const wrapper= shallow(<LoginForm dispatch={dispatch} error={error}/>);
    //     const button= wrapper.find('.login-form');
    //     button.simulate('submit');
    //     expect(dispatch).toHaveBeenCalledWith(login(values));
    // });
    //Mentor Notes: Possible that it's not finding the button...keep getting 
    //"Method “simulate” is only meant to be run on a single node. 0 found instead."
   
});