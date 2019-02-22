import React from 'react'
import {Route} from 'react-router-dom'

import Login from './Login'
import RegistrationForm from './ResgistrationForm'

const App = () => {
  return (
    <React.Fragment>
      <Route Login path="/" component={Login} />
      <Route path="/register" component={RegistrationForm}/>
    </React.Fragment>
  )
}

export default App
