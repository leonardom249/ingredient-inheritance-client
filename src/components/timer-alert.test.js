import React from 'react';
import {shallow} from 'enzyme';
import {backToLogin} from '../actions/auth';

import {TimerAlert} from './timer-alert';

describe('<TimerAlert />', () => {
    it('Renders without crashing', () => {
        shallow(<TimerAlert />);
    });

    it('Dispatches backToLogin', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<TimerAlert dispatch={dispatch}/>);
        const button= wrapper.children('.timer-alert');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(backToLogin());
    });
});