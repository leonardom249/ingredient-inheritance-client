import React from 'react';
import { createNewRecipe } from '../actions/actions';
import {connect} from 'react-redux';
import {reset} from 'redux-form';


export function ClearButton(props){
    
    return(
        <button className='colored'
            onClick={()=> 
                {
                    props.dispatch(createNewRecipe());
                    props.dispatch(reset('recipe'));
                }}
        >
        Clear Form</button>
    )
 
}
export default connect()(ClearButton)