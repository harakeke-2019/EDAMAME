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
        {console.log('moduleSide', this.props.assessmentContent)}
        {/* {this.props.assessmentContent && this.props.assessmentContent.map(assessment => {
          return <Assessment assessment ={assessment} key={assessment.moduleId} />
        })} */}
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    assessmentContent: state.assessmentContent
  }
}

export default connect(mapStateToProps)(Modules)
