import {createStore} from 'redux' // creates a store

// The untouched state
const initialAssessmentState = {

}

// Reducer and actions
// Handles an array of objects which are filled with assessment info
const AssessmentContent = (state = initialAssessmentState, action) => {
  switch (action.type) {
    case 'REQUEST_STUDENT_ASSESSMENT_STATUS':
      return {
        assessment: ?
      }
    case 'RECIEVE_STUDENT_ASSESSMENT_STATUS':
      return {
        assessment: ?
      }
      default:
      return state
  }
}

// Enables us to view our store in the redux devtools
const store = createStore(AssessmentContent, 
  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
  )