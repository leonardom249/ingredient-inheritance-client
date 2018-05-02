import React from 'react';
import {connect} from 'react-redux';
import { fetchrecipes, setInitialValues, deleteRecipe } from '../actions/actions';
import '../component-css/recipe-list.css';


class recipeList extends React.Component{ 
    componentDidMount(){
        this.props.dispatch(fetchrecipes())
    }
    
    render(){
        console.log(this.props.recipes);

        const recipeList = this.props.recipes.map((recipe, index)=>{
            let title= recipe.title
            if(title.length>8){
                title = title.substring(0,8);
            }
            return(
                <li key={recipe._id}> 
                    <a 
                        href={recipe._id}
                        onClick={(e)=>{
                            e.preventDefault();
                            this.props.dispatch(setInitialValues(recipe._id, recipe.title));
                            console.log(this.props.initialValues)
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
    recipes: state.recipe.recipes,
    initialValues: state.recipe.initialValues
})

export default connect(mapStateToProps)(recipeList);