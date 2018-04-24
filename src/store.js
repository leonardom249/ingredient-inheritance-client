import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from './reducers/recipe';
import authReducer from './reducers/recipe';

import {reducer as formReducer} from 'redux-form';


const store = createStore( combineReducers({
    form: formReducer,
    recipe: recipeReducer,
    auth: authReducer
}), applyMiddleware(thunk));

export default store;