import React from 'react'
import DropdownModule from './dropdownModule/DropdownModule';
import { Route } from 'react-router-dom'

import Login from './Login'

const App = () => {
  return (
    <React.Fragment>
      <h1>[React development has begun!]</h1>
      <Route Login path="/" component={Login} />
      < DropdownModule />
    </React.Fragment>
  )
}

export default App
