import React from 'react';
import {connect} from 'react-redux';
import { clearAuth } from '../actions/auth';

function LogoutButton(props){
    return(
        <button
            onClick={()=> props.dispatch(clearAuth())}
        >
        Logout</button>
    )
}
export default connect()(LogoutButton)