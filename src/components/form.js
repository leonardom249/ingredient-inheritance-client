import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { addrecipe, createRecipe, updateFullRecipe } from '../actions/actions';
import {required, nonEmpty} from '../validators';
import { connect } from 'react-redux'




export class AddrecipeForm extends React.Component{ 
   onSubmit(value) {
       if(this.props.initialValues._id !== ''){
           this.props.dispatch(updateFullRecipe(this.props.initialValues._id, value.title, value.ingredients, value.recipe))
       }
        
        else if(this.props.initialValues._id===''){
            this.props.dispatch(addrecipe(value));
            this.props.dispatch(createRecipe(value.title, value.ingredients, value.recipe));
            //API call=createRecipe
    }

    }
    
    render(){
        return(
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
            )}
            >
            <label htmlFor="add title">Title:</label>
                <Field 
                    component="input"
                    type="text"
                    name="title"
                    placeholder="Uncle Bob's Chili"
                    validate={[required, nonEmpty]}
                />
            <br/>
            <label htmlFor="add ingredients">Ingredients:</label>
                <Field 
                    component="textarea"
                    type="text"
                    name="ingredients"
                    placeholder="Ex: 6 cans crushed tomatoes..."
                    validate={[required, nonEmpty]}

                />
            <br/>
            <label htmlFor="add recipe">Recipe:</label>
                <Field 
                    component="textarea"
                    type="text"
                    name="recipe"
                    placeholder="Ex: Step 1. Crush garlic"
                    validate={[required, nonEmpty]}

                />


                <br/>
                <button type="submit">Save</button>
            </form>
        )
    }
}

  
  AddrecipeForm = reduxForm({
    form: 'recipe',
    enableReinitialize: true
  })(AddrecipeForm)
  
  
  AddrecipeForm = connect(
    state => ({
      initialValues: state.recipe.initialValues // pull initial values from recipe state reducer
    })
  )(AddrecipeForm)
  
  export default AddrecipeForm