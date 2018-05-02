import React from 'react';
import {Redirect} from 'react-router-dom';
import Header from './header';
import Button from './button';
import LogoutButton from './logout-button';
import AddRecipeForm from './form';
import RecipeList from './recipe-list';
import CreateButton from './create-button';
import '../component-css/main.css';


import {connect} from 'react-redux';


function RecipePage (props) {
    console.log('recipe page', props.loggedIn);
    
    if(!props.loggedIn){
        console.log('hit redirect to / in recipe page');
        return <Redirect to='/'/>
    }
    
    return(
      <div className="recipe-page">
        <div className="top-background">
                <Header/>
            <nav>
                <Button/>
                <CreateButton />
                <LogoutButton/>

            </nav>
        </div>
        <div className="recipe-form-list">
            <AddRecipeForm />
            <RecipeList />
        </div>

      </div>
    )
}

const mapStateToProps = (state) =>({
   loggedIn: state.auth.currentUser
  })
  
  export default connect(mapStateToProps)(RecipePage)
  

  
  

