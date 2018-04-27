import React from 'react';
import {connect} from 'react-redux';
import { switchToLogin } from '../actions/actions';

function LoginButton(props){
    return(
        <div className='colored'>
            <p>Already Have An Account? </p>
            <button
                onClick={()=> props.dispatch(switchToLogin())}
            >
            Go To Login</button>
        </div>
    )
}
export default connect()(LoginButton)