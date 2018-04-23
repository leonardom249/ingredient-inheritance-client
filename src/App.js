import React, { Component } from 'react';
import RecipeList from './components/recipe-list';
import AddRecipeForm from './components/form';
import Header from './components/header';
import Button from './components/button';
import Instructions from './components/instructions';
import LoginForm from './components/login';
import {connect} from 'react-redux';






class App extends Component {
  render() {
    //   if(this.props.instructions === true){
    //     return ( 
    //       <div className='instructions'>
    //         <Instructions/>
    //       </div>
    //     )
    //   }
    //   else if (this.props.instructions === false){
    //   return(
    //       <div className="App">
    //       <Header/>
    //       <Button/>
    //       <AddRecipeForm />
    //       <RecipeList />
    //     </div>
    //   );
    // }
    return(<div><LoginForm/></div>)
  }
}

const mapStateToProps = (state) =>({
  instructions: state.auth.instructions
})

export default connect(mapStateToProps)(App)

 

