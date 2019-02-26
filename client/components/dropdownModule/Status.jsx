import React from 'react'
import {connect} from 'react-redux'
import {getAssessmentStatus} from '../../actions/assessmentStatus'

class Status extends React.Component {
  componentDidMount () {
    // Replace with current userId
    this.props.dispatch(getAssessmentStatus(1))
  }

  render () {
    return (
      <React.Fragment>
        <h3>[Status Component]</h3>
        <span className="dropdown">
          <select className="STATUS">
            <option value="Not Complete">Not Complete</option>
            <option value="In Progress">In Progress</option>
            <option value="Review">Under Review</option>
            <option value="Complete">Complete</option>
          </select>
        </span>
      </React.Fragment>
    )
  }
}

export default connect()(Status)
