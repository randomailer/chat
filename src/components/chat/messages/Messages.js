import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { handDrawnBorder } from '../../styles'
import { Message } from './message/Message'
import { timeFormat } from '../../../utils/timeFormat';

const MessagesContainer = styled.div`
  ${handDrawnBorder}
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const ScrolledMessagesContainer = styled.div`
  overflow-y: auto;
  margin: 5px 5%;
  padding-bottom: 10px;
`

export class MessagesComponent extends PureComponent {

  setScrolledElement = (element) => {
    this.scrolledElement = element
  }

  componentDidUpdate () {
    this.scrolledElement.scrollTop = this.scrolledElement.scrollHeight
  }

  render () {
    const { clockType, messages } = this.props
    return <MessagesContainer>
      <ScrolledMessagesContainer ref={this.setScrolledElement}>
        {messages.map(({ userName, text, date, yours }, key) => {
          return <Message
            right={ yours }
            userName={ yours ? null : userName }
            date={ timeFormat(date, clockType === '12') }
            key={ key }
            text={ text }
          />
        })}
      </ScrolledMessagesContainer>
    </MessagesContainer>
  }
}

export const Messages = connect(({ messages, settings }) => ({ messages: messages.messages, clockType: settings }))(MessagesComponent)