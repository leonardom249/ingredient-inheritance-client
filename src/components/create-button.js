import React from 'react';
import { createNewRecipe } from '../actions/actions';
import {connect} from 'react-redux';
import {reset} from 'redux-form';


export function CreateButton(props){
    
    return(
        <button className='colored'
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