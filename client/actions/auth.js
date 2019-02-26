import {setToken} from '../utils/tokens'
import {register as registerApi} from '../api/auth'

export const registerPending = _ => {
  return {
    type: 'REGISTER_PENDING'
  }
}

export const registerSuccess = _ => {
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
