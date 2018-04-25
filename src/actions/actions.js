import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './normalize-errors';


export const FETCH_RECIPE_REQUEST='FETCH_RECIPE_REQUEST'
export const fetchrecipeRequest=()=>({
    type:FETCH_RECIPE_REQUEST
});

export const FETCH_RECIPE_SUCCESS='FETCH_RECIPE_SUCCESS'
export const fetchrecipeSuccess=(recipes)=>({
    type:FETCH_RECIPE_SUCCESS,
    recipes
});

export const FETCH_RECIPE_ERROR='FETCH_RECIPE_ERROR'
export const fetchrecipeError=(error)=>({
    type:FETCH_RECIPE_ERROR,
    error
});

export const ADD_RECIPE='ADD_RECIPE'
export const addrecipe=(recipe)=>({
    type:ADD_RECIPE,
    recipe
})

export const TOGGLE_INSTRUCTIONS_ON='TOGGLE_INSTRUCTIONS_ON'
export const toggleInstructionsOn=()=>({
    type:TOGGLE_INSTRUCTIONS_ON,
})

export const TOGGLE_INSTRUCTIONS_OFF='TOGGLE_INSTRUCTIONS_OFF'
export const toggleInstructionsOff=()=>({
    type:TOGGLE_INSTRUCTIONS_OFF,
})

export const SET_INITIAL_VALUES='SET_INITIAL_VALUES'
export const setInitialValues=(id, title)=>({
    type:SET_INITIAL_VALUES,
    id,
    title
})

export const UPDATE_FULL_RECIPE='UPDATE_FULL_RECIPE'
export const updateFullRecipe=(title, ingredients, recipe)=>({
    type:UPDATE_FULL_RECIPE,
    title,
    ingredients,
    recipe
})

const LOAD='LOAD'
export const load = data => ({ type: LOAD, data })

export const CREATE_NEW_RECIPE='CREATE_NEW_RECIPE'
export const createNewRecipe=()=>({
    type:CREATE_NEW_RECIPE
})


export const fetchrecipes =()=>dispatch=>{
    dispatch(fetchrecipeRequest());
    
        fetch(`${API_BASE_URL}/api/recipes`)
        .then(res => 
            res.json()
        )
        .then(recipes=> dispatch(fetchrecipeSuccess(recipes)))
        .catch(err=> {
            console.log(err);
            dispatch(fetchrecipeError(err))
        })
    
}


export const createRecipe = (title, ingredients, recipe) => dispatch => {
    
    return (
        fetch(`${API_BASE_URL}/api/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                ingredients,
                recipe
            })
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then((body) => console.log(body))
            // .catch(err => {
            //     dispatch(createRecipeError())
            // })
    );
}
            