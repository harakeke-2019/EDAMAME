const initialAssessments = []
const assessmentContent = (state = initialAssessments, action) => {
  switch (action.type) {
    case 'RECEIVE_ASSESSMENTS':
      return action.assessmentContent
    default:
      return state
  }
}

export default assessmentContent
