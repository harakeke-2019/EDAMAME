import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/App'
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

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
