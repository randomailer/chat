export const LOAD_MESSAGES = 'load messages'

export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  payload: messages
})