import React from 'react';
import {mount, shallow} from 'enzyme';
import {NotConnectedAddrecipeForm} from './form';
import AddrecipeForm from './form'

describe('Not connected AddrecipeForm to render without crashing', () => {
    it('renders without crashing', () => {
        const handleSubmit=jest.fn();
        const dispatch=jest.fn();
        shallow(<NotConnectedAddrecipeForm dispatch={dispatch} handleSubmit={handleSubmit}/>);
    });

    it('Renders the <form>', () => {
        const handleSubmit=jest.fn();
        const dispatch=jest.fn();
        const wrapper = shallow(<NotConnectedAddrecipeForm dispatch={dispatch} handleSubmit={handleSubmit}/>);
        expect(wrapper.hasClass('recipe-form')).toEqual(true);
    });
});



