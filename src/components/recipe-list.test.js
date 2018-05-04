import React from 'react';
import {shallow, mount, render} from 'enzyme';
import { setInitialValues, deleteRecipe } from '../actions/actions';


import {recipeList} from './recipe-list';

describe('<recipeList />', () => {
    const testRecipes=[
        {'_id': "5ae9ebef53513d1cace9b992", title: "Test", 'ingredients': "test", 'recipe': "test", 'userId': "5adf6cb2972659151c8a59a9", '__v':0}
    ];

    it('Renders without crashing', () => {
        const dispatch = jest.fn();

        shallow(<recipeList recipes={testRecipes} dispatch={dispatch}/>);
    });

});
