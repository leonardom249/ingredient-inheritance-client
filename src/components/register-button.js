import React from 'react';
import {connect} from 'react-redux';
import { switchToRegister } from '../actions/actions';

export function RegisterButton(props){
    return(
        <div className="register">
            <p className='register-question'>Don't Have An Account Yet?
            <br/>
            <a className='colored'
                onClick={()=> props.dispatch(switchToRegister())}
            >
            Register</a>
            </p>
            
        </div>
    )
}
export default connect()(RegisterButton)
