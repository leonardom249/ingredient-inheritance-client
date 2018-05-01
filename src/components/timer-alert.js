import React from 'react';
import {connect} from 'react-redux';
import {backToLogin} from '../actions/auth';
import '../component-css/timer-alert.css';


export function TimerAlert(props){
    return(
        <div className="timer-alert">
            <h1>Your session will finish in 1 minute</h1>
            <p>Please click the button below to stay on the page</p>
            <p>Otherwise you will be redirected to the login page</p>
            <p>Thanks for using Ingredient Inheritance!</p>
            <button className="timer-alert"
                onClick={()=> props.dispatch(backToLogin())}
            >
                Stay On Page
            </button>
        </div>
    )
}

export default connect()(TimerAlert)