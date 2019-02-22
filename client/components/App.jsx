import React from 'react'
import { Route } from 'react-router-dom'
import DropdownModule from './dropdownModule/DropdownModule'
import Login from './Login'
import RegistrationForm from './RegistrationForm'
import signin from './signin'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <React.Fragment>
      <Route signin path="/signin" component={signin} />
      <Route Dashboard path="/" component={Dashboard} />

      <h1>[React development has begun!]</h1>
      <Route Login path="/" component={Login} />
      <Route path="/register" component={RegistrationForm} />
      <DropdownModule />
    </React.Fragment>
  )
}

export default App
