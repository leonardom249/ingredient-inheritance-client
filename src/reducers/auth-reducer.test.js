


import authReducer from './auth-reducer';
import {  } from '../actions/auth';

describe('authReducer', () => {
    
    it('Should set the initial state when nothing is passed in', () => {
        const newState = authReducer(undefined, {
            type: '@@UNKNOWN'
        });

        

        expect(newState).toEqual({
            authToken, 
            currentUser,
            loading: false,
            error: null,
            dialogAlert: false,
            time: 5000,
            userId: null
      
        });
    });

})