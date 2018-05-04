import React from 'react';
import {connect} from 'react-redux';
import { setInitialValues, deleteRecipe } from '../actions/actions';
import '../component-css/recipe-list.css';


export class recipeList extends React.Component{ 
    
    render(){

        const recipeList = this.props.recipes.map((recipe, index)=>{
            let title= recipe.title
            if(title.length>8){
                title = title.substring(0,8) +'...';
            }
            return(
                <li key={recipe._id}> 
                    <a 
                        href={recipe._id}
                        id="link"
                        onClick={(e)=>{
                            e.preventDefault();
                            this.props.dispatch(setInitialValues(recipe._id, recipe.title));
                        }}
                    >
                        {`${title}   `}
                    </a> 

                    <button 
                        className='delete-button'
                        onClick={(e)=>{
                            e.preventDefault();
                            this.props.dispatch(deleteRecipe(recipe._id))
                        }}
                    >
                        X
                    </button>
                </li>
            )
        })
        return(
            <div className="recipe-list">
                <h2>My Family Recipes</h2>
                <ul>
                    {recipeList}
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    loading: state.recipe.loading,
    recipes: state.recipe.recipes,
    initialValues: state.recipe.initialValues
})

export default connect(mapStateToProps)(recipeList);