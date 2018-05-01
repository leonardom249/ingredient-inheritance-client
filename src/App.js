import React, { Component } from 'react';
import MainPage from './components/main-page';
import HomeLoginPage from './components/home-login-page';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {refreshAuthToken, clearAuth, almostTimeout, backToLogin} from './actions/auth';


class App extends Component {

    componentDidMount(){
        let timeOut;
        let alertTimeOut;
        document.addEventListener('click', ()=>{
            clearTimeout(alertTimeOut);
           alertTimeOut=
           setTimeout(()=>{
                console.log('times almost up');
                this.props.dispatch(almostTimeout())
                console.log(this.props.dialogAlert)
           },  57* 60* 1000)

            clearTimeout(timeOut);
           timeOut=
             setTimeout(()=>{
                console.log('time')
                this.props.dispatch(clearAuth())
                this.props.dispatch(backToLogin())
            }, 58 * 60* 1000)
        })
    }

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
  loggedIn: state.auth.currentUser !== null,
  dialogAlert: state.auth.dialogAlert
});

export default withRouter(connect(mapStateToProps)(App));