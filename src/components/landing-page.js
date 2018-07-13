import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import Header from './header';
import '../component-css/main.css';
import { switchToRegister } from '../actions/actions';


import {connect} from 'react-redux';


export function LandingPage (props) {

    return(
      <div className="recipe-page">
        <div className="top-background">
                <Header/>
                <nav>
                  <Link to="/login" className="links"><button className="colored link">Login</button></Link>
                  <Link to="/login" className="links"><button  onClick={()=> props.dispatch(switchToRegister())} className="colored link">Register</button></Link>
                </nav>
        </div>
        <div className="landing-page">
           <h2>Hello and welcome to Ingredient Inheritance</h2>
        </div>

      </div>
    )
}


  
  export default connect()(LandingPage)
  

  
  

