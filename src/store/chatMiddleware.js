import { WEBSOCKET_MESSAGE } from '@giantmachines/redux-websocket'
import { LOAD_MESSAGES } from './messages/actions/loadMessages';
import { setUnreaded } from './messages/actions/setUnreaded';

export const chatMiddleware = ({ dispatch }) => (next) => (action) => {
  if (action.type === WEBSOCKET_MESSAGE) {
    try {
      const data = JSON.parse(action.payload.data)
      dispatch({
        type: LOAD_MESSAGES,
        payload: data
      })
      dispatch(setUnreaded(true))
    } catch (err) {}
  }

  next(action)
}
