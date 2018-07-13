import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Header from './header';
import {goToLogin, goToRegistration} from '../actions/landing-page'
import '../component-css/main.css';
import { switchToRegister } from '../actions/actions';


import {connect} from 'react-redux';


export function LandingPage (props) {

    return(
      <div className="recipe-page">
        <div className="top-background">
                <Header/>
        </div>
        <div className="landing-page">
           <h2>Hello and welcome to Ingredient Inheritance</h2>
            <Link to="/login"><button className="colored">Login</button></Link>
            <Link to="/login"><button  onClick={()=> props.dispatch(switchToRegister())} className="colored">Register</button></Link>
        </div>

      </div>
    )
}
const mapStateToProps = (state) =>({
    loggedIn: state.auth.currentUser,
    toLogin: state.landingPage.toLogin,
    toRegistration: state.landingPage.toRegistration
   })

  
  export default connect(mapStateToProps)(LandingPage)
  

  
  

