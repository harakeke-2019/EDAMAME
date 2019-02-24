const initialAssessments = []
const assessmentContent = (state = initialAssessments, action) => {
  switch (action.type) {
    case 'RECEIVE_ASSESSMENTS':
      //console.log('action', action.assessmentContent)
      return action.assessmentContent
    default:
      return state
  }
}

export default assessmentContent
