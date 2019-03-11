export const SET_UNREADED = 'set unreaded'

export const setUnreaded = (unreaded) => (dispatch) => {
  if (document.hidden && unreaded) {
    document.title = 'You have unreaded messages'
  } else {
    document.title = 'Chat'
  }
  dispatch({ type: SET_UNREADED, payload: unreaded })
}