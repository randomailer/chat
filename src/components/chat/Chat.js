import React from 'react'
import { EnterMessage } from './enterMessage/EnterMessage'
import { Messages } from './messages/Messages'
import styled from 'styled-components'

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 4px 0;
  min-height: 0;
`

export const Chat = () => {
  return <ChatContainer>
    <Messages />
    <EnterMessage />
  </ChatContainer>
}