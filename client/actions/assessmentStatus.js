import request from 'superagent'

const url = 'http://localhost:3000/api/v1/users/student'

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

export function getAssessmentStatus (id) {
  return (dispatch) => {
    dispatch(requestAssessmentStatus())
    request.get(`${url}/${id}?view=modules`)
      .then(res => {
        dispatch(receiveAssessmentStatus(res.body))
      })
      .catch(err => console.log(err))
  }
}
