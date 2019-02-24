import React from 'react'
import Assessment from './Assessment'
import {connect} from 'react-redux'
import {fetchAssessments} from '../../Actions'
class Modules extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchAssessments())
  }

  render () {
    return (
      <React.Fragment>
        <h2>{this.props.isLoading && <span> Loading</span>}</h2>
        {this.props.assessments && this.props.assessments.map(assessment => {
          return <Assessment assessment ={assessment} key={assessment.moduleId} />
        })}
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    assessments: state.assessments,
    isLoading: state.isLoading
  }
}
export default connect(mapStateToProps)(Modules)
