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


    // it.only('Dispatches deleteRecipe', () => {
    //     const dispatch = jest.fn();
    //     const wrapper= mount(<recipeList recipes={testRecipes} dispatch={dispatch}/>);
    //     console.log(wrapper.props());
    //     console.log(wrapper.html());
    //     console.log('childrens', wrapper.children())

    //     const button= wrapper.find('.delete-button');
    //     button.simulate('click');
    //     expect(dispatch).toHaveBeenCalledWith(deleteRecipe(recipe._id));
    // });

    //Mentor Notes: WHHHYYYYY not sure how to do this^^ Trying to look into the 
    //mapped over li's and get the button to click and test the dispatch
});
