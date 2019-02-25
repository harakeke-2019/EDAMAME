import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './components/App'
import reducer from './reducer'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
})
