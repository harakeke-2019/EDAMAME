import React from 'react'
import { Route } from 'react-router-dom'

import Login from './Login'

const App = () => {
  return (
    <React.Fragment>
      <Route Login path="/" component={Login} />
    </React.Fragment>
  )
}

export default App
