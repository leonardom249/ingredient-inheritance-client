import React from 'react';
import {connect} from 'react-redux';
import { switchToLogin } from '../actions/actions';



function LoginButton(props){
    return(
        <div className="register login">
            <p>Already Have An Account? </p>
            <button className="colored"
                onClick={()=> props.dispatch(switchToLogin())}
            >
            Go To Login</button>
        </div>
    )
}
export default connect()(LoginButton)