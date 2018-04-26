import React from 'react';
import {Redirect} from 'react-router-dom';
import Header from './header';
import Button from './button';
import LogoutButton from './logout-button';
import AddRecipeForm from './form';
import RecipeList from './recipe-list';
import CreateButton from './create-button';


import {connect} from 'react-redux';


function RecipePage (props) {
    if(!props.userLoggedIn){
        return <Redirect to='/'/>
    }
    
    return(
      <div className="recipe-page">
            <Header/>
        <nav>
            <Button/>
            <LogoutButton/>
            <CreateButton />
        </nav>
        <div className="recipe-form">
            <AddRecipeForm />
        </div>
            <RecipeList />
      </div>
    )
}

const mapStateToProps = (state) =>({
   userLoggedIn: state.auth.currentUser
  })
  
  export default connect(mapStateToProps)(RecipePage)
  

  
  

