import React, { Component } from 'react';
import LoginForm from './components/login';
import MainPage from './components/main-page';
import HomeLoginPage from './components/home-login-page';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';




class App extends Component {
  render() {
    return(
      <div className="full-app">
        <Route exact path='/' component={HomeLoginPage} />
        <Route exact path='/mainpage' component={MainPage}/>
      </div>
    )
  }
}



export default withRouter(connect()(App));