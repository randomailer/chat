import { WEBSOCKET_CONNECT } from '@giantmachines/redux-websocket'

export const initChat = () => async (dispatch) => {
  dispatch({
    type: WEBSOCKET_CONNECT,
    payload: {
      url: 'ws://localhost:3001'
    }
  })
}