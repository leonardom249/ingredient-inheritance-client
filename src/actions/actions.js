import {API_BASE_URL} from '../config';
import {SubmissionError} from 'redux-form';


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
