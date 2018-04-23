import React, { Component } from 'react';
import RecipeList from './components/recipe-list';
import AddRecipeForm from './components/form';
import Header from './components/header';
import Button from './components/button';
import Instructions from './components/instructions';





export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Instructions/>
        {/* <Header/>
        <Button/>
        <AddRecipeForm />
        <RecipeList /> */}
      </div>
    );
  }
}


 

