import { combineReducers } from 'redux'
import { messagesReducer } from './messages/messages'
import { settingsReducer } from './settings/settings'

export const reducers = combineReducers({
  messages: messagesReducer,
  settings: settingsReducer
})
