import {getAssessments} from '../api/assessments'

function receiveAssessments (assessmentContent) {
  return {
    type: 'RECEIVE_ASSESSMENTS',
    assessmentContent: assessmentContent
  }
}

export function fetchAssessments () {
  return function (dispatch) {
    // api call here to server route
    const assessmentContent = getAssessments()
    // receive res.body from api request
    dispatch(receiveAssessments(assessmentContent))
  }
}
