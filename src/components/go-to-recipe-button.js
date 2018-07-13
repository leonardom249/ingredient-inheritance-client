import React from 'react';
import {connect} from 'react-redux';


export function GoToRecipesButton(props){
    
    return(
            <a className="go-to-recipes" href="#saved-recipes">
            <button className="go-to">
                Go To Recipes
                </button>
            </a>
    )
 
}
export default connect()(GoToRecipesButton)