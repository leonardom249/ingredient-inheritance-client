import React from 'react';
import {Redirect} from 'react-router-dom';
import RegistrationForm from './register-form';
import LoginForm from './login';
import {connect} from 'react-redux';


function HomeLoginPage (props) {
    if(props.userLoggedIn){
      console.log(props.userLoggedIn);
        return <Redirect to='/mainpage'/>
    }
    
    return(
      <div>
        <LoginForm/>
        <RegistrationForm/>
      </div>
    )
}

const mapStateToProps = (state) =>({
   userLoggedIn: state.auth.currentUser
  })
  
  export default connect(mapStateToProps)(HomeLoginPage)
  

  
  

