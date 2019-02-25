import {getToken} from '../utils/tokens'

const initialState = {
  error: null,
  loggedIn: !!getToken(), 
  newRegistration: false,
  pending: false
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
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
        loggedIn: true,
        pending: false
      }
    case 'REGISTER_ERROR':
      return {
        ...state,
        error: true,
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
