const initialAssessments = []
const assessments = (state = initialAssessments, action) => {
  switch (action.type) {
    case 'RECEIVING_Assessments':
      return action.assessments
    default:
      return state
  }
}

export default assessments
