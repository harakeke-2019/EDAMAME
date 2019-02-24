import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

export default function ProgressModule(props) {
  const percentage = props.placeholder.percentage
  return (
    <React.Fragment>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </React.Fragment>
  )
}
