import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import SignIn from './SignIn'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={RegistrationForm} />
    </Switch>
  )
}

export default App
