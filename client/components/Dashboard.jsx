import React from 'react'

import Header from './Header'
import ProgressBar from './ProgressBar'
import ProgressModule from './ProgressModule'
import DropdownModule from './DropdownModule'

export default function Dashboard() {
  return (
    <React.Fragment>
      <div>
        <Header />
      </div>

      <div>
        <ProgressBar />
      </div>

      <div>
        <ProgressModule />
      </div>

      <div>
        <DropdownModule />
      </div>
    </React.Fragment>
  )
}
