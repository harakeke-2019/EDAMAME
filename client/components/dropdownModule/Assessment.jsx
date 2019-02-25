import React from 'react'
import Exercise from './Exercise'
import {connect} from 'react-redux'

const Assessment = () => {
  return (
    <React.Fragment>
      <Exercise />
    </React.Fragment>
  )
}

export default connect()(Assessment)
