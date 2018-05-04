import React from 'react';
import {mount, shallow} from 'enzyme';
import {
    FETCH_RECIPE_REQUEST, 
    fetchrecipeRequest,
    createRecipe, 
    updateRecipePost, 
    createNewRecipe, 
    fetchrecipeSuccess,
    FETCH_RECIPE_SUCCESS,
    addrecipe,
    ADD_RECIPE,
    TOGGLE_INSTRUCTIONS_ON,
    toggleInstructionsOn,
    toggleInstructionsOff,
    TOGGLE_INSTRUCTIONS_OFF,
    setInitialValues,
    SET_INITIAL_VALUES,
    switchToRegister,
    SWITCH_TO_REGISTER,
    switchToLogin,
    SWITCH_TO_LOGIN,
    LOAD,
    load,
    CREATE_NEW_RECIPE
} from './actions';

describe('fetchrecipeRequest', () => {
    it('Should return the action', () => {
        const action = fetchrecipeRequest();
        expect(action).toEqual({
            type: FETCH_RECIPE_REQUEST
        });
    });
});

describe('fetchrecipeSuccess', () => {
    it('Should return the action', () => {
        const recipes={'title':'test', 'ingredients':'test1', 'recipe':'test3', '_id':'12345'}
        const action = fetchrecipeSuccess(recipes);
        expect(action).toEqual({
            type: FETCH_RECIPE_SUCCESS,
            recipes
        });
    });
});

describe('addrecipe', () => {
    it('Should return the action', () => {
        const recipe={'title':'test', 'ingredients':'test1', 'recipe':'test3'}
        const action = addrecipe(recipe);
        expect(action).toEqual({
            type:ADD_RECIPE,
            recipe
        });
    });
});

describe('toggleInstructionsOn', () => {
    it('Should return the action', () => {
        const action = toggleInstructionsOn();
        expect(action).toEqual({
            type:TOGGLE_INSTRUCTIONS_ON
        });
    });
});

describe('toggleInstructionsOff', () => {
    it('Should return the action', () => {
        const action = toggleInstructionsOff();
        expect(action).toEqual({
            type:TOGGLE_INSTRUCTIONS_OFF
        });
    });
});

describe('setInitialValues', () => {
    it('Should return the action', () => {
        const id='123'
        const title='test'
        const action = setInitialValues(id, title);
        expect(action).toEqual({
            type:SET_INITIAL_VALUES,
            id,
            title
        });
    });
});

describe('switchToRegister', () => {
    it('Should return the action', () => {
        const action = switchToRegister();
        expect(action).toEqual({
            type:SWITCH_TO_REGISTER
        });
    });
});

describe('switchToLogin', () => {
    it('Should return the action', () => {
        const action = switchToLogin();
        expect(action).toEqual({
            type:SWITCH_TO_LOGIN
        });
    });
});

describe('load', () => {
    it('Should return the action', () => {
        const data='data'
        const action = load(data);
        expect(action).toEqual({
            type: LOAD, 
            data
        });
    });
});

describe('createNewRecipe', () => {
    it('Should return the action', () => {
        const action = createNewRecipe();
        expect(action).toEqual({
            type:CREATE_NEW_RECIPE
        });
    });
});

