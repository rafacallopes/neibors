import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import JobReducer from './JobReducer';
// import AddReducer from './AddReducer'



export default combineReducers({
  auth: AuthReducer,
  job: JobReducer
  // add: AddReducer,
})