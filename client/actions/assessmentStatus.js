export default {
  REQUEST_STUDENT_ASSESSMENT_STATUS,
  RECEIVE_STUDENT_ASSESSMENT_STATUS
}

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
