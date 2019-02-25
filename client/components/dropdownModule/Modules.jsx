import React from 'react'
import Assessment from './Assessment'
import {connect} from 'react-redux'
import {getAssessmentContent} from '../../actions'

class Modules extends React.Component () {

  componentDidMount () {
    this.props.dispatch(getAssessmentContent())
  }
  render(){
    return (
      <React.Fragment>
        <h2>[Placeholder - Modules] </h2>
        <Assessment />
      </React.Fragment>
    )
  }  
}

export default connect (mapStateToProps)(Modules)
