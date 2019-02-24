import {combineReducers} from 'redux'
import assessments from './assessments'
import isLoading from './isLoading'

export default combineReducers({
  assessments,
  isLoading
})
