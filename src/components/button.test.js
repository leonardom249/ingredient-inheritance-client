import React from 'react';
import {shallow} from 'enzyme';

import {Button} from './button';

describe('<Button />', () => {
    it('Renders without crashing', () => {
        shallow(<Button />);
    });

    // it('dispatches toggleInstructionsOn()', () => {
        
    // });
});