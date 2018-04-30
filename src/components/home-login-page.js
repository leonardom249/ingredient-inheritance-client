import React from 'react';
import {Redirect} from 'react-router-dom';
import RegistrationForm from './register-form';
import LoginForm from './login';
import LoginButton from './login-button';
import Header from './header';
import RegisterButton from './register-button';
import {connect} from 'react-redux';
import '../component-css/buttons-nav.css';
import '../component-css/home-login.css';




function HomeLoginPage (props) {
    if(props.userLoggedIn){
        return <Redirect to='/mainpage'/>
    }
    if(props.register===false){ 
      return(
            <div>
              <div classname="login-header">
                <Header />
              </div>
              <LoginForm/>
              <RegisterButton />
            </div>
          )}
    if(props.register===true){ 
      return(
            <div>
            <div classname="login-header">
                <Header />
              </div>
              <RegistrationForm/>
               <LoginButton /> 
            </div>
          )}
}

const mapStateToProps = (state) =>({
   userLoggedIn: state.auth.currentUser,
   register: state.recipe.register
  })
  
  export default connect(mapStateToProps)(HomeLoginPage)
  

  
  

