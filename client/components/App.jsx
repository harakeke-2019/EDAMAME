import React from 'react'
import { Route } from 'react-router-dom'
import DropdownModule from './dropdownModule/DropdownModule'
import RegistrationForm from './ResgistrationForm'
import SignIn from './Signin'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <React.Fragment>
      <Route SignIn path="/signin" component={SignIn} />
      <Route Dashboard path="/" component={Dashboard} />

      <h1>[React development has begun!]</h1>
      <Route path="/register" component={RegistrationForm} />
      <DropdownModule />
    </React.Fragment>
  )
}

export default App
