import { initChat } from './store/messages/actions/initChat'
import { setUnreaded } from './store/messages/actions/setUnreaded';

export const initAction = () => (dispatch) => {
  dispatch(initChat())


  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      dispatch(setUnreaded(false))
    }
  }, false);
}