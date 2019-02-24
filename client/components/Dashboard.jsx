import React from 'react'
import ProgressBar from './ProgressBar'

import ProgressModule from './ProgressModule'

export default function Dashboard() {
  const placeHolderProps = {
    percentage: 20
  }
  return (
    <React.Fragment>
      <div className="progress-module">
        <ProgressModule placeholder={placeHolderProps} />
        <div>Module 1</div>

        <ProgressModule placeholder={placeHolderProps} />
        <div>Module 2</div>

        <ProgressModule placeholder={placeHolderProps} />
        <div>Module 3</div>

        <ProgressModule placeholder={placeHolderProps} />
        <div>Module 4</div>
      </div>
    </React.Fragment>
  )
}
