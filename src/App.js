import React, { Component } from 'react';
import MainPage from './components/main-page';
import HomeLoginPage from './components/home-login-page';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {refreshAuthToken} from './actions/auth';


class App extends Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        this.timedRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        this.stopTimedRefresh();
    }
    }

    componentWillUnmount() {
        this.stopTimedRefresh();
    }

    timedRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            59 * 60* 1000 // 59 min
        );
    }

    stopTimedRefresh() {
        if (!this.refreshInterval) {
            return;
        }
        clearInterval(this.refreshInterval);
    }


  render() {
    return(
      <div className="full-app">
        <Route exact path='/' component={HomeLoginPage} />
        <Route exact path='/mainpage' component={MainPage}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));