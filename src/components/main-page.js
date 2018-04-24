import React, { Component } from 'react';
import RecipeList from './recipe-list';
import AddRecipeForm from './form';
import Header from './header';
import Button from './button';
import Instructions from './instructions';
import {connect} from 'react-redux';



class MainPage extends Component {
    render() {
        if(this.props.instructions === true){
          return ( 
            <div className='instructions'>
              <Instructions/>
            </div>
          )
        }
        else if (this.props.instructions === false){
        return(
            <div className="App">
            <Header/>
            <Button/>
            <AddRecipeForm />
            <RecipeList />
          </div>
        );
      }
    }
  }
  
  const mapStateToProps = (state) =>({
    instructions: state.recipe.instructions
  })
  
  export default connect(mapStateToProps)(MainPage)
  
   
  
  