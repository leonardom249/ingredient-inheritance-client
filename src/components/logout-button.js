import React from 'react';
import {connect} from 'react-redux';
import { clearAuth } from '../actions/auth';
import { switchToLogin } from '../actions/actions';

function LogoutButton(props){
    return(
        <button
            onClick={()=> {
                props.dispatch(clearAuth())
                props.dispatch(switchToLogin())
            }}
        >
        Logout</button>
    )
}
export default connect()(LogoutButton)