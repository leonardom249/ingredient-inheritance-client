import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { addrecipe, createRecipe } from '../actions/actions';
import {required, nonEmpty} from '../validators';



export class AddrecipeForm extends React.Component{ 
   onSubmit(value) {
        this.props.dispatch(addrecipe(value));
        this.props.dispatch(createRecipe(value.title, value.ingredients, value.recipe));

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

export default reduxForm({
    form: 'recipe',
})(AddrecipeForm);
