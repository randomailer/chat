import { WEBSOCKET_SEND } from '@giantmachines/redux-websocket'

export const sendMessage = (message) => (dispatch, getState) => {
  const { settings } = getState()
  dispatch({
    type: WEBSOCKET_SEND,
    payload: {
      message,
      userName: settings.userName
    }
  })
}