import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import RegistrationForm from './RegistrationForm'
import Signin from './Signin'

const App = () => {
  return (
    <React.Fragment>
      <h1>[React development has begun!]</h1>
      <Route Signin path="/signin" component={Signin} />
      <Route Dashboard path="/" component={Dashboard} />
      <Dashboard />

      <h1>[React development has begun!]</h1>
      <Route path="/register" component={RegistrationForm} />
    </React.Fragment>
  )
}

export default App
