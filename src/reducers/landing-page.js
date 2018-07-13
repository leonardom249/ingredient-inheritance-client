import{GO_TO_LOGIN, GO_TO_REGISTRATION} from '../actions/landing-page'


const initialState={
  toLogin:false,
  toRegistration:false
}

export default (state=initialState, action) =>{
    if(action.type === GO_TO_LOGIN){
      return Object.assign({}, state, {
        toLoginIn: true,
        toRegistration:false
      })
    }
    else if(action.type === GO_TO_REGISTRATION){
      return Object.assign({}, state, {
        toLoginIn: false,
        toRegistration:true
      })
    }
    
      return state;
  }