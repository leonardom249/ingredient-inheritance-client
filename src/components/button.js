import React from 'react';
import { toggleInstructionsOn } from '../actions/actions';
import {connect} from 'react-redux';


function Button(props){
    
    return(
        <button
            onClick={()=> props.dispatch(toggleInstructionsOn())}
        >
        Instructions</button>
    )
 
}
export default connect()(Button)