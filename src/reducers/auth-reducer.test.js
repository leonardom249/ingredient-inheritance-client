


import authReducer from './auth-reducer';
import { setAuthToken, clearAuth, authRequest, authSuccess, authError, almostTimeout, backToLogin } from '../actions/auth';

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
    it('Should return the current state on an unknown action', () => {   
        const state = {
            loading: false
        };

        const newState = authReducer(state, {
            type: '@@UNKNOWN'
        });

        expect(newState).toEqual(state);
    });
    it('Should handle the setAuthToken action', () => {
        const state = {
            authToken
        };
        const newState = authReducer(state, setAuthToken(authToken));

        expect(newState).toEqual({
            authToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoibGVvbmFyZG9tMjQ5IiwidXNlcklkIjoiNWFlN2EyNWNjZDMyMWQwMDE0OGU0MWNhIiwiZmlyc3ROYW1lIjoiIn0sImlhdCI6MTUyNTM4OTQ5NywiZXhwIjoxNTI1MzkzMDk3LCJzdWIiOiJsZW9uYXJkb20yNDkifQ.43jG_56lzHg_-7X7PuDp3Hu8vhiz52GzQtYorBVR3tM'
        });
    });

    it('Should handle the clearAuth action', () => {
        const state = {
            authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoibGVvbmFyZG9tMjQ5IiwidXNlcklkIjoiNWFlN2EyNWNjZDMyMWQwMDE0OGU0MWNhIiwiZmlyc3ROYW1lIjoiIn0sImlhdCI6MTUyNTM4OTQ5NywiZXhwIjoxNTI1MzkzMDk3LCJzdWIiOiJsZW9uYXJkb20yNDkifQ.43jG_56lzHg_-7X7PuDp3Hu8vhiz52GzQtYorBVR3tM',
            currentUser: 'leonardom249'
        };
        const newState = authReducer(state, clearAuth());

        expect(newState).toEqual({
            authToken: null,
            currentUser: null
        });
    });

    it('Should handle the authRequest action', () => {
        const state = {
            loading: false,
            error: null
        };
        const newState = authReducer(state, authRequest());

        expect(newState).toEqual({
            loading: true,
            error: null
        });
    });
    
    it('Should handle the authSuccess action', () => {
        const newUser = 'leonardom249';
        const userId='123123'
        const state = {
            loading: true,
            currentUser,
            userId: null
        };
        const newState = authReducer(state, authSuccess(newUser, userId));

        expect(newState).toEqual({
            loading: false,
            currentUser: 'leonardom249',
            userId: '123123'
        });
    });
    
    it('Should handle the authError action', () => {
        const err = 'Wrong';
        const state = {
            loading: false,
            error: null
        };
        const newState = authReducer(state, authError(err));

        expect(newState).toEqual({
            loading: false,
            error: 'Wrong'
        });
    });

    it('Should handle the almostTimeout action', () => {
        const state = {
            dialogAlert: false
        };
        const newState = authReducer(state, almostTimeout());

        expect(newState).toEqual({
            dialogAlert: true
        });
    });

    it('Should handle the backToLogin action', () => {
        const state = {
            dialogAlert: true
        };
        const newState = authReducer(state, backToLogin());

        expect(newState).toEqual({
            dialogAlert: false
        });
    });

})