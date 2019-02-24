const initialState = false

function isLoading (state = initialState, action) {
  switch (action.type) {
    case 'REQUESTING_Assessments':
      return true

    default:
      return false
  }
}

export default isLoading
