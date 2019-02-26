import {createStore} from 'redux'

// Similar to Beers exercise, I am writing the initial state that changes depending on whatever is below.

// In initialState we set our properties to nothing. Because depending on the actions in our reducer, it will fill in these properties with different things.

const initialState = {
  evidence: '',
  excersiseTitle: '',
  status: '',
  assessmentTitle: '',
  studentId: '',
  moduleTitle: '',
  assessmentDescription: ''
}
// REDUCER
// This reducer handles an array of objects filled with assessment info

const AssessmentStatuses = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_STUDENT_ASSESSMENT_STATUS':
      return {

      }
    case 'RECEIVE_STUDENT_ASSESSMENT_STATUS':
      return {

      }
    default:
      return state
  }
}
