import React from 'react'
import {Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import RegistrationForm from './RegistrationForm'
import SignIn from './SignIn'

const App = () => {
  return (
    <React.Fragment>
      <Route SignIn path="/signin" component={SignIn} />
      <Route Dashboard path="/" component={Dashboard} />
      <Route path="/register" component={RegistrationForm} />
    </React.Fragment>
  )
}

export default App
