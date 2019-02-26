import {getAssessments} from '../api/assessments'

function receiveAssessments (content) {
    return {
        type: 'RECEIVING_ASSESSMENTS',
        assessmentContent: content
    }
}

export function getAssessmentContent() {
    return function (dispatch){
        getAssessments()
        .then(content=>dispatch(receiveAssessments(content)))
    }
}