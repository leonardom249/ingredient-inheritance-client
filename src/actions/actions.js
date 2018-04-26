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

export const SWITCH_TO_REGISTER='SWITCH_TO_REGISTER'
export const switchToRegister=()=>({
    type:SWITCH_TO_REGISTER
})

export const SWITCH_TO_LOGIN='SWITCH_TO_LOGIN'
export const swithcToLogin=()=>({
    type:SWITCH_TO_LOGIN,
})

// export const UPDATE_FULL_RECIPE='UPDATE_FULL_RECIPE'
// export const updateFullRecipe=(id, title, ingredients, recipe)=>({
//     type:UPDATE_FULL_RECIPE,
//     id,
//     title,
//     ingredients,
//     recipe
// })

const LOAD='LOAD'
export const load = data => ({ type: LOAD, data })

export const CREATE_NEW_RECIPE='CREATE_NEW_RECIPE'
export const createNewRecipe=()=>({
    type:CREATE_NEW_RECIPE
})


export const fetchrecipes =()=>(dispatch, getState)=>{
    dispatch(fetchrecipeRequest());
    const authToken = getState().auth.authToken;
    fetch(`${API_BASE_URL}/api/recipes`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => 
            res.json()
        )
        .then(recipes=> dispatch(fetchrecipeSuccess(recipes)))
        .catch(err=> {
            console.log(err);
            dispatch(fetchrecipeError(err))
        })
    
}


export const createRecipe = (title, ingredients, recipe) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;


    return (
        fetch(`${API_BASE_URL}/api/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify({
                title,
                ingredients,
                recipe
            })
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(res=> dispatch(addrecipe(res)))
            .then((body) => console.log(body))
            .catch(err => {
                console.error(err)
            })
    );
}

export const updateRecipePost=(id, title, ingredients, recipe)=> (dispatch, getState)=> {
    const data={
        _id: id,
        title,
        ingredients,
        recipe
    }
    const authToken = getState().auth.authToken;
    
    return fetch(`${API_BASE_URL}/api/recipes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
            
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(recipes=> dispatch(fetchrecipes()))
        // .then((body) => console.log(body))
        .catch(err => console.error(err));
    }
            