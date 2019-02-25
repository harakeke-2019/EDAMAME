import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import Login from './Login'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={RegistrationForm} />
    </Switch>
  )
}

export default App
