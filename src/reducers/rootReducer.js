import { combineReducers } from 'redux-immutable'
import { charactersReducer } from './characters'
import { uiReducer } from './ui'

const rootReducer = combineReducers({
  data: charactersReducer,
  ui: uiReducer,
})

export default rootReducer