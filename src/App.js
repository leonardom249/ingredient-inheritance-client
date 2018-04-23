import React, { Component } from 'react';
import RecipeList from './components/recipe-list';
import AddRecipeForm from './components/form';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AddRecipeForm />
        <RecipeList />
      </div>
    );
  }
}


 

