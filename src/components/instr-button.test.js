import React from 'react';
import {shallow} from 'enzyme';
import { toggleInstructionsOff } from '../actions/actions';

import {InstructionButton} from './instr-button';

describe('<InstructionButton />', () => {
    it('Renders without crashing', () => {
        shallow(<InstructionButton />);
    });

    it('Dispatches toggleInstructionsOff', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<InstructionButton dispatch={dispatch}/>);
        const button= wrapper.find('.form-button');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(toggleInstructionsOff());
    });
});