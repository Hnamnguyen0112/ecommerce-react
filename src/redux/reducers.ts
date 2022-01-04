import { combineReducers } from 'redux'
import message from './common/message/message.slices'
const reducers = combineReducers({
  message
})

export default reducers
