import React from 'react';
import { Link} from 'react-router-dom';
import Header from './header';
import '../component-css/main.css';
import '../component-css/landing-page.css';
import { switchToRegister } from '../actions/actions';
import { switchToLogin } from '../actions/actions';



import {connect} from 'react-redux';


export function LandingPage (props) {

    return(
      <div className="recipe-page">
        <div className="top-background">
                <Header/>
                <nav>
                  <Link to="/login" className="links"><button onClick={()=> props.dispatch(switchToLogin())} className="colored link">Login</button></Link>
                  <Link to="/login" className="links"><button  onClick={()=> props.dispatch(switchToRegister())} className="colored link">Register</button></Link>
                </nav>
        </div>
        <div className="landing-page">
            <h2 className="landing-title">Welcome to Ingredient Inheritance</h2>
            <p className="landing-p">
              This web app was built as a way to store secret family recipes.  By being a password protected site, you are able to safely store your favorite delicious homecooked secrets while having peace of mind that no one else has access to them.  Please login or register via the buttons above to continue.
            </p>
            <h3>Happy Cooking!</h3>
            <p className="landing-p tagline">
              Created 2018 by Megan Leonardo
            </p>
        </div>

      </div>
    )
}


  
  export default connect()(LandingPage)
  

  
  

