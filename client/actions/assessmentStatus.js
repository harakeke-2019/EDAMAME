export default {
  REQUEST_STUDENT_ASSESSMENT_STATUS,
  RECEIVE_STUDENT_ASSESSMENT_STATUS
}

// Write the actions as functions as you can see in the actions file for redux minimal

function REQUEST_STUDENT_ASSESSMENT_STATUS () {
  return {
    type: request,
    assessment: assessment
  }
}

function RECEIVE_STUDENT_ASSESSMENT_STATUS () {
  return {
    type: receive,
    RECEIVE_STUDENT_ASSESSMENT_STATUS: RECEIVE_STUDENT_ASSESSMENT_STATUS
  }
}
