import recipeReducer from './recipe';
import { fetchrecipeSuccess, fetchrecipeRequest, fetchrecipeError, addrecipe } from '../actions/actions';

describe('recipeReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const newState = recipeReducer(undefined, {
            type: '@@UNKNOWN'
        });

        expect(newState).toEqual({
            recipes:[],
            instructions: false,
            register: false,
            loading: false,
            error: null,
            initialValues: {
              _id:'',
              title: '',
              ingredients: '',
              recipe: ''
            }
        });
    });

    it('Should return the current state on an unknown action', () => {
        const state = {
            recipes:[]
        };

        const newState = recipeReducer(state, {
            type: '@@UNKNOWN'
        });

        expect(newState).toEqual(state);
    });

    it('Should handle the fetchrecipeSuccess action', () => {
        const recipes=[{'title':'test', 'ingedients':'test', 'recipe':'test'}]
        const state = {
            recipes:[],
            loading: false,
            error: null
        };
        const newState = recipeReducer(state, fetchrecipeSuccess(recipes));

        expect(newState).toEqual({
            recipes:[{'title':'test', 'ingedients':'test', 'recipe':'test'}],
            loading: false,
            error: null
        });
    });

    it('Should handle the fetchrecipeRequest action', () => {
        const state = {
            loading: false,
        };
        const newState = recipeReducer(state, fetchrecipeRequest());

        expect(newState).toEqual({
            loading: true
        });
    });

    it('Should handle the fetchrecipeError action', () => {
        const err = 'Wrong';
        const state = {
            loading: false,
            error: null
        };
        const newState = recipeReducer(state, fetchrecipeError(err));

        expect(newState).toEqual({
            loading: false,
            error: 'Wrong'
        });
    });
    it('Should handle the addRecipe action', () => {
        const recipe={'title':'test', 'ingredients':'test', 'recipe':'test'}
        const state = {
            recipes:[{'title':'test2', 'ingredients':'test', 'recipe':'test'}],
            loading: false,
            error: null
        };
        const newState = recipeReducer(state, addrecipe(recipe));

        expect(newState).toEqual({
            recipes:[{'title':'test2', 'ingredients':'test', 'recipe':'test'}, {'title':'test', 'ingredients':'test', 'recipe':'test'}],
            loading: false,
            error: null
        });
    });


});