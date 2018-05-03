import React from 'react';
import {mount, shallow} from 'enzyme';
import {
    FETCH_RECIPE_REQUEST, 
    fetchrecipeRequest,
    createRecipe, 
    updateRecipePost, 
    createNewRecipe, 
    fetchrecipeSuccess,
    FETCH_RECIPE_SUCCESS
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

// describe('fetchrecipeError', () => {
//     it('Should return the action', () => {
//         const action = fetchrecipeRequest();
//         expect(action).toEqual({
//             type: FETCH_RECIPE_REQUEST
//         });
//     });
// });