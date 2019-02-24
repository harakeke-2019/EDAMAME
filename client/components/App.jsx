import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'

const App = () => {
  return (
    <React.Fragment>
      <h1>[React development has begun!]</h1>
      <Route Login path="/" component={Login} />
      <Dashboard />
    </React.Fragment>
  )
}

export default App
