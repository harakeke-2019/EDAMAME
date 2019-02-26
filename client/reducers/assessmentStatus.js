import {createStore} from 'redux'

// Similar to Beers exercise, I am writing the initial state that changes depending on whatever is below.

// The properties in initialState are empty because depending on the actions in our reducer
// The actions in our reducer will fill our initial state with different things

const initialState = []
// Example assessment
// {
//   evidence: '',
//   excersiseTitle: '',
//   status: '',
//   assessmentTitle: '',
//   studentId: '',
//   moduleTitle: '',
//   assessmentDescription: ''
// }

// REDUCER FOR ASSESSMENT STATUSES
const AssessmentStatuses = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_STUDENT_ASSESSMENT_STATUS':
      return action.assessmentStatus
    default:
      return state
  }
}

// This reducer handles an array of objects filled with student statuses and evidence

export default AssessmentStatuses
