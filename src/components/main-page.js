import React, { Component } from 'react';
import Instructions from './instructions';
import {connect} from 'react-redux';
import RecipePage from './recipe-page';
import TimerAlert from './timer-alert';
import { fetchrecipes } from '../actions/actions';






class MainPage extends Component {
  componentDidMount(){
        if(!this.props.loading){
          this.props.dispatch(fetchrecipes())
          }
      }
       render() {
        if(this.props.instructions){
          return ( 
            <div className='instructions'>
              <Instructions/>
            </div>
          )
        }
        if(this.props.dialogAlert){
          return(
              <TimerAlert />
          )
      }
      // if(this.props.loading){
      //   return(
      //     <div className="loading">Loading</div>
      //   )
      // }
      
        return(
          <div className="App">
            <RecipePage />
          </div>
        );
      
    }
  }
  
  const mapStateToProps = (state) =>({
    instructions: state.recipe.instructions,
    dialogAlert: state.auth.dialogAlert,
    loading: state.recipe.loading

  })
  
  export default connect(mapStateToProps)(MainPage)
  
   
  
  