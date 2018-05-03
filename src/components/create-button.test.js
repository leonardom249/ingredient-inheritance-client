import React from 'react';
import {shallow} from 'enzyme';

import {CreateButton} from './create-button';

describe('<CreateButton />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateButton />);
    });

    // it('dispatches createNewRecipe()', () => {
        
    // });

    // it('dispatches (reset('recipe')) form', () => {
        
    // });
});