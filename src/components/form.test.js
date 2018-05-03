import React from 'react';
import {mount, shallow} from 'enzyme';
import {NotConnectedAddrecipeForm} from './form';

describe('Not connected AddrecipeForm to render without crashing', () => {
    it('renders without crashing', () => {
        const handleSubmit=jest.fn();
        const dispatch=jest.fn();
        shallow(<NotConnectedAddrecipeForm dispatch={dispatch} handleSubmit={handleSubmit}/>);
    });
});