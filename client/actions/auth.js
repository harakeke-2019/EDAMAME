import {setToken} from '../utils/tokens'
import {signin as signinApi} from '../api/auth'

export const signinPending = _ => {
  return {
    type: 'SIGNIN_PENDING'
  }
}

export const signinSuccess = _ => {
  return {
    type: 'SIGNIN_SUCCESS'
  }
}

export const signinError = error => {
  return {
    type: 'SIGNIN_ERROR',
    error
  }
}

// user = {name, surname, password}
export const signin = (user) => dispatch => {
  dispatch(signinPending())
  return signinApi(user)
    .then(res => {
      setToken(res.body.token)
      dispatch(signinSuccess())
    })
    .catch(err => dispatch(signinError(err.response.body.error)))
}
