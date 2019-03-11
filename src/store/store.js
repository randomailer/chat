import { createStore, applyMiddleware } from 'redux'
import websocket from '@giantmachines/redux-websocket'
import { reducers } from './reducers'
import thunk from 'redux-thunk'
import { chatMiddleware } from './chatMiddleware'
import { initAction } from '../initAction'



export const store = createStore(
  reducers,
  applyMiddleware(
    websocket,
    chatMiddleware,
    thunk
  )
)

store.dispatch(initAction())