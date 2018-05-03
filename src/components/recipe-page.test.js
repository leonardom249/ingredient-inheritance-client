import React from 'react';
import {shallow} from 'enzyme';
import { switchToLogin } from '../actions/actions';
import { clearAuth } from '../actions/auth';



import {RecipePage} from './recipe-page';

describe('<RecipePage />', () => {
    it('Renders without crashing', () => {
        shallow(<RecipePage />);
    });
});