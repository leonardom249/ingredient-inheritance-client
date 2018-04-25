import React from 'react';
import { createNewRecipe } from '../actions/actions';
import {connect} from 'react-redux';
import {reset} from 'redux-form';


function CreateButton(props){
    
    return(
        <button
            onClick={()=> 
                {
                    props.dispatch(createNewRecipe());
                    props.dispatch(reset('recipe'));
                }}
        >
        +Create New Recipe</button>
    )
 
}
export default connect()(CreateButton)