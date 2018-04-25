import React from 'react';
import { createNewRecipe } from '../actions/actions';
import {connect} from 'react-redux';


function CreateButton(props){
    
    return(
        <button
            onClick={()=> props.dispatch(createNewRecipe())}
        >
        +Create New Recipe</button>
    )
 
}
export default connect()(CreateButton)