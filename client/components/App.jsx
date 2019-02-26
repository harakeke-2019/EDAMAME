import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import Evidence from './Evidence'
import Home from './Home'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/student/:id" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/evidence" component={Evidence} />
    </Switch>
  )
}

export default App
