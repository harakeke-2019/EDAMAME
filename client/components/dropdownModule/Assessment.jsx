import React from 'react'
import Exercise from './Exercise'
import {connect} from 'react-redux'

const Assessment = () => {
  return (
    <React.Fragment>
      <h3>{this.props.assessement.assessementsTitle} </h3>
      <Exercise />
    </React.Fragment>
  )
}

export default connect()(Assessment)
