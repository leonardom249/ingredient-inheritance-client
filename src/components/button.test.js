import React from 'react';
import {shallow} from 'enzyme';
import { toggleInstructionsOn } from '../actions/actions';

import {Button} from './button';

describe('<Button />', () => {
    it('Renders without crashing', () => {
        shallow(<Button />);
    });

    it('Dispatches toggleInstructionsOn', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<Button dispatch={dispatch}/>);
        const button= wrapper.find('.colored');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(toggleInstructionsOn());
    });
});