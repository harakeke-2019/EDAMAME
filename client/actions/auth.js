import {setToken} from '../utils/tokens'
import {register as registerApi, signin as signinApi} from '../api/auth'

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

export const registerPending = () => {
  return {
    type: 'REGISTER_PENDING'
  }
}

export const registerSuccess = () => {
  return {
    type: 'REGISTER_SUCCESS'
  }
}

export const registerError = error => {
  return {
    type: 'REGISTER_ERROR',
    error
  }
}

export const signin = (user) => dispatch => {
  dispatch(signinPending())
  return signinApi(user)
    .then(res => {
      setToken(res.body.token)
      dispatch(signinSuccess())
    })
    .catch(err => dispatch(signinError(err.response.body.error)))
}

export const register = (user) => dispatch => {
  dispatch(registerPending())
  return registerApi(user)
    .then(res => {
      setToken(res.body.token)
      dispatch(registerSuccess())
    })
    .catch(err => dispatch(registerError(err.response.body.error)))
}

export const logout = _ => {
  return {
    type: 'LOGOUT'
  }
}
