import {FETCH_RECIPE_SUCCESS, FETCH_RECIPE_REQUEST, FETCH_RECIPE_ERROR, ADD_RECIPE} from '../actions/actions';


const initialState={
  recipes:[],
  loading: false,
  error: null
};

export default (state=initialState, action) =>{
  if(action.type === FETCH_RECIPE_SUCCESS){
    return Object.assign({}, state, {
      recipes: action.recipes,
      loading: false,
      error: null
    })
  }
  else if(action.type === FETCH_RECIPE_REQUEST){
    return Object.assign({}, state, {
      loading: true
    })
  }
  else if(action.type === FETCH_RECIPE_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if(action.type === ADD_RECIPE){
    return Object.assign({}, state, {
      recipes:[...state.recipes, action.recipe],
      error: null,
      loading: false
    })
  }
    return state;
}