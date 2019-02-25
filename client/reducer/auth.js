import {getToken} from '../utils/tokens'

const initialState = {
    error: null,
    loggedIn: !!getToken(), //Coerces object to boolean, so either returns true or false
    newRegistration: false,
    pending: false
}

export default authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'REGISTER_PENDING':
            return {
                ...state,
                loggedIn: false,
                pending: true
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                error: null,
                newRegistration: true,
                //able to access token
                loggedIn: true,
                pending: false
            }
        case 'REGISTER_ERROR':  
            return {
                ...state,
                error,
                loggedIn: false,
                pending: false

            }
        case 'LOGOUT':
            return {
                ...state,
                loggedIn: false
            }
        default:    
            return state
    }
}