import React from 'react';
import {connect} from 'react-redux';
import { fetchrecipes, setInitialValues, deleteRecipe } from '../actions/actions';

class recipeList extends React.Component{ 
    componentDidMount(){
        this.props.dispatch(fetchrecipes())
    }
    
    render(){
        console.log(this.props.recipes);

        const recipeList = this.props.recipes.map((recipe, index)=>{
            return(
                <li key={recipe._id}> 
                    <a 
                        href={`#${recipe._id}`}
                        onClick={(e)=>{
                            e.preventDefault();
                            this.props.dispatch(setInitialValues(recipe._id, recipe.title));
                            console.log(this.props.initialValues)
                        }}
                    >
                        {`${recipe.title}   `}
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
            <div>
                <h4>My Family Recipes</h4>
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