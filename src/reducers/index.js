import { combineReducers } from 'redux'
import { reducer as formReducer } from "redux-form";
import counter from './counter'
import user from './user'

export default combineReducers({
  counter,
  user,
  form: formReducer
})