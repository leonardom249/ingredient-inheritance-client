import {FETCH_RECIPE_SUCCESS,
   FETCH_RECIPE_REQUEST, 
   FETCH_RECIPE_ERROR, 
   ADD_RECIPE, 
   TOGGLE_INSTRUCTIONS_ON,
   TOGGLE_INSTRUCTIONS_OFF,
   SET_INITIAL_VALUES
  } from '../actions/actions';


const initialState={
  recipes:[],
  instructions: false,
  loading: false,
  error: null,
  initialValues: {
    _id:'',
    title: '',
    ingredients: '',
    recipe: ''
  }
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
  else if(action.type === TOGGLE_INSTRUCTIONS_ON){
    return Object.assign({}, state, {
      error: null,
      loading: false,
      instructions: true
    })
  }
  else if(action.type === TOGGLE_INSTRUCTIONS_OFF){
    return Object.assign({}, state, {
      error: null,
      loading: false,
      instructions: false
    })
  }
  else if(action.type === SET_INITIAL_VALUES){
    let initTitle;
    let initIngredients;
    let initRecipe;
    let initId;

    state.recipes.map(obj=>{
        if(obj._id===action.id && obj.title===action.title){
          initTitle=obj.title;
          initIngredients=obj.ingredients;
          initRecipe=obj.recipe;
          initId=obj._id;
        }
        else{
          return state
        }
      }
    )
    // Mentor notes: is there a better way to do this^^ keep getting expected to return a value at end of arrow function.
    return Object.assign({}, state, {
      initialValues:{
        _id: initId,
        title: initTitle,
        ingredients: initIngredients,
        recipe: initRecipe
      }
    })
  }
    return state;
}