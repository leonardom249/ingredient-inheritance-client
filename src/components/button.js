import React from 'react';
import { toggleInstructionsOn } from '../actions/actions';
import {connect} from 'react-redux';


export function Button(props){
    
    return(
        <button className='colored'
            onClick={()=> props.dispatch(toggleInstructionsOn())}
        >
        Instructions</button>
    )
 
}
export default connect()(Button)