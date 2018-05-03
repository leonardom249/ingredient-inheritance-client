import React from 'react';
import {shallow} from 'enzyme';

import {InstructionButton} from './instr-button';

describe('<InstructionButton />', () => {
    it('Renders without crashing', () => {
        shallow(<InstructionButton />);
    });

    // it('dispatches toggleInstructionsOff()', () => {
        
    // });
});