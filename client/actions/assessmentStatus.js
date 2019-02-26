export function requestAssessmentStatus () {
  return {
    type: 'REQUEST_STUDENT_ASSESSMENT_STATUS'
  }
}

export function receiveAssessmentStatus (assessmentStatus) {
  return {
    type: 'RECEIVE_STUDENT_ASSESSMENT_STATUS',
    assessmentStatus: assessmentStatus
  }
}
