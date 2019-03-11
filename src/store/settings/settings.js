import { RESET_SETTINGS } from './actions/resetSettings'
import { SET_SETTINGS } from './actions/setSettings'

const initialState = {
  userName: '',
  style: 'light',
  clockType: '24',
  ctrlEnter: '1'
}

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        ...action.payload
      }
    case RESET_SETTINGS:
      return initialState
    default:
      return state
  }
}