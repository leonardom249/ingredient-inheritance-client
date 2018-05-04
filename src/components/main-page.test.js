import React from 'react';
import {shallow, mount} from 'enzyme';
import { switchToLogin } from '../actions/actions';
import { clearAuth } from '../actions/auth';




import {MainPage} from './main-page';

describe('<MainPage />', () => {
    it('Renders without crashing', () => {
        const dispatch=jest.fn()
        shallow(<MainPage dispatch={dispatch}/>);
    });
 
});