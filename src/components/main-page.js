import React, { Component } from 'react';
import Instructions from './instructions';
import {connect} from 'react-redux';
import RecipePage from './recipe-page';
import TimerAlert from './timer-alert';






class MainPage extends Component {
    render() {
        if(this.props.instructions === true){
          return ( 
            <div className='instructions'>
              <Instructions/>
            </div>
          )
        }
        if(this.props.dialogAlert === true){
          return(
              <TimerAlert />
          )
      }
        else if (this.props.instructions === false){
        return(
          <div className="App">
            <RecipePage />
          </div>
        );
      }
    }
  }
  
  const mapStateToProps = (state) =>({
    instructions: state.recipe.instructions,
    dialogAlert: state.auth.dialogAlert
  })
  
  export default connect(mapStateToProps)(MainPage)
  
   
  
  