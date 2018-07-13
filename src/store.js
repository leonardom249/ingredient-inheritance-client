import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from './reducers/recipe';
import authReducer from './reducers/auth-reducer';

import {reducer as formReducer} from 'redux-form';


const store = createStore( combineReducers({
    form: formReducer,
    recipe: recipeReducer,
    auth: authReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(thunk));

export default store;