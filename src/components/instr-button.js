import React from 'react';
import { toggleInstructionsOff } from '../actions/actions';
import {connect} from 'react-redux';

export function InstructionButton(props){
    return(
        <button className='form-button' id="centered-button"
            onClick={()=> props.dispatch(toggleInstructionsOff())}
        >
        Back To Recipes</button>
    )
}
export default connect()(InstructionButton)