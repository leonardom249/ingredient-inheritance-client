import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import {createRecipe, updateRecipePost, createNewRecipe } from '../actions/actions';
import {required, nonEmpty} from '../validators';
import { connect } from 'react-redux';
import Input from './input';
import TextArea from './textarea-input';
import '../component-css/form.css';



export class NotConnectedAddrecipeForm extends React.Component{ 
    componentDidMount(){
        this.props.dispatch(createNewRecipe());
    }
    
   onSubmit(value) {
       if(this.props.initialValues._id !== ''){
           this.props.dispatch(updateRecipePost(this.props.initialValues._id, value.title, value.ingredients, value.recipe));
        }
        
        else{
            this.props.dispatch(createRecipe(value.title, value.ingredients, value.recipe));
        }
        this.props.dispatch(createNewRecipe());
        this.props.dispatch(reset('recipe'))
    }
    
    render(){
        return(
            <form className="recipe-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
            )}
            >
            <label><p><strong>Title:</strong></p>
                <Field 
                    component={Input}
                    className="field"
                    type="text"
                    name="title"
                    id='title'
                    placeholder="Ex: Uncle Bob's Chili..."
                    validate={[required, nonEmpty]}
                />
            </label>
            
            <label><p><strong>Ingredients:</strong></p>
                <Field 
                    component={TextArea}
                    className="field"
                    type="text"
                    name="ingredients"
                    placeholder="Ex: 6 cans crushed tomatoes..."
                    validate={[required, nonEmpty]}
                    id="ingredients-size"

                />
            </label>
            
            <label><p><strong>Recipe:</strong></p>
                <Field 
                    component={TextArea}
                    className="field"
                    type="text"
                    name="recipe"
                    placeholder="Ex: Step 1. Crush garlic"
                    id="recipe-size"
                    validate={[required, nonEmpty]}

                />
            </label>

                <div className="form-button-div">
                    <button className='form-button'  type="submit">Save</button>
                </div>
            </form>
        )
    }
}

  
  let AddrecipeForm = reduxForm({
    form: 'recipe',
    enableReinitialize: true
  })(NotConnectedAddrecipeForm)
   
  
  AddrecipeForm = connect(
    state => ({
      initialValues: state.recipe.initialValues // pull initial values from recipe state reducer
    })
  )(AddrecipeForm)
  
  export default AddrecipeForm