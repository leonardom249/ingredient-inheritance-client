import React from 'react';
import { toggleInstructionsOff } from '../actions/actions';
import {connect} from 'react-redux';

function InstructionButton(props){
    return(
        <button
            onClick={()=> props.dispatch(toggleInstructionsOff())}
        >
        Back To Recipes</button>
    )
}
export default connect()(InstructionButton)