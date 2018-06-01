import React from 'react';
import {connect} from 'react-redux';
import { switchToLogin } from '../actions/actions';



export function LoginButton(props){
    return(
        <div className="register login">
            <p className='login-question'>Already Have An Account? 
                <br/>
                <a className="colored"
                    onClick={()=> props.dispatch(switchToLogin())}
                >Go To Login</a>          
            </p>
            
            
        </div>
    )
}
export default connect()(LoginButton)