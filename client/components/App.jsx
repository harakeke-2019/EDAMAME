import React from 'react'
import { Route } from 'react-router-dom'
import DropdownModule from './dropdownModule/DropdownModule'
import RegistrationForm from './RegistrationForm'
import SignIn from './SignIn'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <React.Fragment>
      <h1>React development has begun!</h1>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/register" component={RegistrationForm} />
      <DropdownModule />
    </React.Fragment>
  )
}

export default App
