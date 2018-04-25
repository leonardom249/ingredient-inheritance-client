import React from 'react';
import {connect} from 'react-redux';
import { fetchrecipes, setInitialValues } from '../actions/actions';

class recipeList extends React.Component{ 
    componentDidMount(){
        this.props.dispatch(fetchrecipes())
    }
    
    render(){
        console.log(this.props.recipes);

        const recipeList = this.props.recipes.map((recipe, index)=>{
            return(
                <li key={index}> 
                   <a 
                   href='#'
                   onClick={()=>{
                    this.props.dispatch(setInitialValues(recipe._id, recipe.title));
                    console.log(this.props.initialValues)
                    }}
                   >
                     {recipe.title}
                    </a> 
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