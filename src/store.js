import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/recipe';
import {reducer as formReducer} from 'redux-form';


const store = createStore( combineReducers({
    form: formReducer,
    auth: reducer,
}), applyMiddleware(thunk));

export default store;