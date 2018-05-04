import React from 'react';
import {mount, shallow} from 'enzyme';
import { setAuthToken, 
    SET_AUTH_TOKEN, 
    authRequest,
    AUTH_REQUEST,
    authSuccess,
    AUTH_SUCCESS,
    authError,
    AUTH_ERROR,
    almostTimeout,
    ALMOST_TIMEOUT,
    backToLogin,
    BACK_TO_LOGIN
} from './auth';

describe('setAuthToken', () => {
    it('Should return the action', () => {
        const authToken='12341234'
        const action = setAuthToken(authToken);
        expect(action).toEqual({
            type: SET_AUTH_TOKEN,
            authToken
        });
    });
});

describe('authRequest', () => {
    it('Should return the action', () => {
        const authToken='12341234'
        const action = authRequest(authToken);
        expect(action).toEqual({
            type: AUTH_REQUEST

        });
    });
});

describe('authSuccess', () => {
    it('Should return the action', () => {
        const userId='12341234'
        const currentUser='testuser'
        const action = authSuccess(currentUser, userId);
        expect(action).toEqual({
            type: AUTH_SUCCESS,
            currentUser,
            userId
        });
    });
});
describe('authError', () => {
    it('Should return the action', () => {
        const error='wrong'
        const action = authError(error);
        expect(action).toEqual({
            type: AUTH_ERROR,
            error
        });
    });
});

describe('almostTimeout', () => {
    it('Should return the action', () => {
        const action = almostTimeout();
        expect(action).toEqual({
            type: ALMOST_TIMEOUT
        });
    });
});

describe('backToLogin', () => {
    it('Should return the action', () => {
        const action = backToLogin();
        expect(action).toEqual({
            type: BACK_TO_LOGIN
        });
    });
});
