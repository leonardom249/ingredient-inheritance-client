import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { addrecipe } from '../actions/actions';


export class AddrecipeForm extends React.Component{ 
   onSubmit(value) {
        return this.props.dispatch(addrecipe(value))
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
                />
            <br/>
            <label htmlFor="add ingredients">Ingredients:</label>
                <Field 
                    component="textarea"
                    type="text"
                    name="ingredients"
                    placeholder="Ex: 6 cans crushed tomatoes..."
                />
            <br/>
            <label htmlFor="add recipe">Recipe:</label>
                <Field 
                    component="textarea"
                    type="text"
                    name="recipe"
                    placeholder="Ex: Step 1. Crush garlic"
                />


                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'recipe',
})(AddrecipeForm);
