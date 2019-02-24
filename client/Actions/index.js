import {getAssessments} from '../api'

export function requestAssessments () {
  return {
    type: 'REQUEST_ASSESSMENTS'
  }
}

export function receiveAssessments (assessments) {
  return {
    type: 'RECEIVE_ASSESSMENTS',
    assessments: assessments
  }
}

export function fetchAssessments () {
  return function (dispatch) {
    dispatch(requestAssessments())
    // api call here to server route
    const assessments = getAssessments()
    //console.log(assessments)
    // receive res.body from api request
    dispatch(receiveAssessments(assessments))
  }
}
