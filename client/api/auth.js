import request from 'superagent'

export const signin = (name, surname, password) => dispatch => {
  dispatch(signinPending())
  return request
    .post('/api/v1/auth/signin')
    .send({name, surname, password})
    .then(res => {
      setToken(res.body.token)
      dispatch(signinSuccess())
    })
    .catch(err => dispatch(signinFailure(err.response.body.message)))
}

export const setToken = token => localStorage.setItem('ACCESS-TOKEN', token)

export const signinPending = () => ({
    type: 'SIGNIN_PENDING'
})

export const signinSuccess = () => ({
    type: 'SIGNIN_SUCCESS'
})

export const signinFailure = error => ({
    type: 'SIGNIN_FAILURE', error
})

