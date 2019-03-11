import { LOAD_MESSAGES } from './actions/loadMessages'
import { SET_UNREADED } from './actions/setUnreaded'

const initialState = {
  unreaded: false,
  messages: []
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return {
        ...state,
        messages: [].concat(state.messages, action.payload)
      }
    case SET_UNREADED:
      return {
        ...state,
        unreaded: action.payload
      }
    default:
      return state
  }
}