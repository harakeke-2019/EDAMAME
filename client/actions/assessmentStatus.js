// Import these actions into your reducer file
export default {
  REQUEST_STUDENT_ASSESSMENT_STATUS,
  RECEIVE_STUDENT_ASSESSMENT_STATUS
}

// Write the actions as functions as you can see in the actions file for redux minimal

function REQUEST_STUDENT_ASSESSMENT_STATUS () {
  return {
    type: request,
    assessmentStatus: assessmentStatus
  }
}

function RECEIVE_STUDENT_ASSESSMENT_STATUS () {
  return {
    type: RECEIVE_STUDENT_ASSESSMENT_STATUS,
    assessmentStatus: assessmentStatus
  }
}

// OFFICIATE ACTIONS
