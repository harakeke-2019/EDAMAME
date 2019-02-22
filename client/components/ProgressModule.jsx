import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'

export default function ProgressModule(props) {
  const percentage = props.placeHolderTallyNumber
  return (
    <React.Fragment>
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </React.Fragment>
  )
}
