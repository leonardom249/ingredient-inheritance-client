import React from 'react';
import {connect} from 'react-redux';


export function GoToRecipesButton(props){
    
    return(
        <button className='colored'>
            <a className="go-to-recipes" href="#saved-recipes">
                Go To Recipes
            </a>
        </button>
    )
 
}
export default connect()(GoToRecipesButton)