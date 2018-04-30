import React from 'react';
import {connect} from 'react-redux';
import { switchToRegister } from '../actions/actions';

function RegisterButton(props){
    return(
        <div className="register">
            <p>Don't Have An Account Yet?</p>
            <button className='colored'
                onClick={()=> props.dispatch(switchToRegister())}
            >
            Register</button>
        </div>
    )
}
export default connect()(RegisterButton)