import React from 'react';
import {connect} from 'react-redux';
import { switchToLogin } from '../actions/actions';

function LoginButton(props){
    return(
        <div className="login-button">
            <p>Already Have An Account? </p>
            <button
                onClick={()=> props.dispatch(switchToLogin())}
            >
            Go To Login</button>
        </div>
    )
}
export default connect()(LoginButton)