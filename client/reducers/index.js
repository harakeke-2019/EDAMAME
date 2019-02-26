import {combineReducers} from 'redux'
import assessmentStatus from './assessmentStatus'
import auth from './auth'

export default combineReducers({
  assessmentStatus,
  auth
})
