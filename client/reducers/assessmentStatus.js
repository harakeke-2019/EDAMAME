const initialState = []

const AssessmentStatuses = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_STUDENT_ASSESSMENT_STATUS':
      return action.assessmentStatus
    default:
      return state
  }
}

export default AssessmentStatuses
