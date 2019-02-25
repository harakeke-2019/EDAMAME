import React from 'react'
import { Route } from 'react-router-dom'
import DropdownModule from './dropdownModule/DropdownModule'
import RegistrationForm from './RegistrationForm'
import SignIn from './SignIn'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <React.Fragment>
      <Route exact path ="/signin" component={SignIn} />
      <Route exact path="/" render = {() => (
        <React.Fragment>
          <Dashboard/>
          <DropdownModule/>
        </React.Fragment>
      )}/>
      <Route path="/register" component={RegistrationForm} />
    </React.Fragment>
  )
}

export default App
