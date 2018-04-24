import {loadAuthToken, clearAuthToken} from '../local-storage';
import jwtDecode from 'jwt-decode';

import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
    // ALMOST_TIMEOUT,
    // BACK_TO_LOGIN
} from '../actions/auth';


let authToken = loadAuthToken();
let currentUser;
if(authToken){
    const decodedToken = jwtDecode(authToken);
    currentUser = decodedToken.user.username;
}

const initialState = {
    authToken, 
    currentUser,
    loading: false,
    error: null,
    // dialogAlert: false,
    time: 5000
};

export default (state = initialState, action) => {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === CLEAR_AUTH) {
        clearAuthToken();
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        console.log(action.currentUser);
        return Object.assign({}, state, {
            loading: false,
            currentUser: action.currentUser
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
     }
    //else if (action.type === ALMOST_TIMEOUT) {
    //     return Object.assign({}, state, {
    //         dialogAlert: true
    //     });
    // }
    // else if (action.type === BACK_TO_LOGIN) {
    //     return Object.assign({}, state, {
    //         dialogAlert: false
    //     });
    // }
    return state;
}
