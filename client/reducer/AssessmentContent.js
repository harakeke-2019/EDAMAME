import {createStore} from 'redux'


// REDUCER 
// This reducer handles an array of objects filled with assessment info

// Rewrite the state within the parenthesis
const AssessmentContent = (state = initialWombatState, action) => {
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
