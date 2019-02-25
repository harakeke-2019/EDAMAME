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

export const register = (name, surname, password) => {
  //API call
}