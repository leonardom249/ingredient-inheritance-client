import React from 'react';
import {shallow} from 'enzyme';
import { switchToRegister } from '../actions/actions';

import {RegisterButton} from './register-button';

describe('<RegisterButton />', () => {
    it('Renders without crashing', () => {
        shallow(<RegisterButton />);
    });

    it('Dispatches switchToRegister', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<RegisterButton dispatch={dispatch}/>);
        const button= wrapper.find('.colored');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(switchToRegister());
    });
});