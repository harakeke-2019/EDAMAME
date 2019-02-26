import {requestAssessmentStatus, receiveAssessmentStatus} from '../../client/actions/assessmentStatus'

test('requestAssessmentStatus returns an action', () => {
  const expected = {
    type: 'REQUEST_STUDENT_ASSESSMENT_STATUS'
  }
  const actual = requestAssessmentStatus()
  expect(actual).toEqual(expected)
})

test('receiveAssessmentStatus returns an action', () => {
  const assessmentStatus = 'status'
  const expected = {
    type: 'RECEIVE_STUDENT_ASSESSMENT_STATUS',
    assessmentStatus
  }
  const actual = receiveAssessmentStatus(assessmentStatus)
  expect(actual).toEqual(expected)
})
