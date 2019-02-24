import {getAssessments} from '../api'

export function receiveAssessments (assessmentContent) {
  return {
    type: 'RECEIVE_ASSESSMENTS',
    assessmentContent: assessmentContent
  }
}

export function fetchAssessments () {
  return function (dispatch) {
    // api call here to server route
    const assessmentContent = getAssessments()
    //console.log('assessment', assessmentContent)
    // receive res.body from api request
    dispatch(receiveAssessments(assessmentContent))
  }
}
