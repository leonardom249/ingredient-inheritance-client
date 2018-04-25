import {FETCH_RECIPE_SUCCESS,
   FETCH_RECIPE_REQUEST, 
   FETCH_RECIPE_ERROR, 
   ADD_RECIPE, 
   TOGGLE_INSTRUCTIONS_ON,
   TOGGLE_INSTRUCTIONS_OFF,
   SET_INITIAL_VALUES,
   CREATE_NEW_RECIPE,
  //  UPDATE_FULL_RECIPE
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
  

    const matchedRecipe= state.recipes.find(obj=> obj._id===action.id)
           
    return Object.assign({}, state, {
      initialValues:{
        _id: matchedRecipe._id,
        title: matchedRecipe.title,
        ingredients: matchedRecipe.ingredients,
        recipe: matchedRecipe.recipe
      }
    })
  }
  else if(action.type === CREATE_NEW_RECIPE){
    return Object.assign({}, state, {
     initialValues:{
      _id:'',
      title: '',
      ingredients: '',
      recipe: ''
     }
    })
  }
  //else if(action.type === UPDATE_FULL_RECIPE){
  //   let updatedRecipe={};

  //   state.recipes.map(obj=>{
  //     if(obj._id===action.id){
  //       updatedRecipe={
  //         _id: obj._id,
  //         title: action.title,
  //         ingredients: action.ingredients,
  //         recipe: action.recipe
  //       }
  //     }
  //   })

  //   const filteredRecipes = state.recipes.filter(obj=>obj._id !== action.id)

  //   return Object.assign({}, state, {
  //   recipes:[...filteredRecipes, updatedRecipe]
  //   })
  // }
    return state;
}