import React from 'react'
import {Route} from 'react-router-dom'

import signin from './signin'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <React.Fragment>
      <Route signin path="/signin" component={signin} />
      <Route Dashboard path="/" component={Dashboard} />

    </React.Fragment>
  )
}

export default App
