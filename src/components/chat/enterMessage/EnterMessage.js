import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { handDrawnBorder } from '../../styles'
import { sendMessage } from '../../../store/messages/actions/sendMessage'

const Wrapper = styled.div`
  display: flex;
  margin: 2px 0;
  align-items: center;
`

const Field = styled.input`
  ${handDrawnBorder}
  outline: none;
  padding: 4px;
  flex-grow: 1;
  margin: 4px 0 2px;
`

const EnterButton = styled.button`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 40px;
  border-color: transparent transparent transparent #41403E;
  background: transparent;
  margin: 0 5px;
  outline: none;
`

class EnterMessageComponent extends PureComponent {

  setTextInputRef = (element) => {
    this.textField = element
  }

  sendMessage () {
    const value = this.textField.value

    if (value) {
      this.props.sendMessage(value)
      this.textField.value = ''
    }
  }

  handleKeyEnter = (evt) => {
    if (evt.keyCode === 13 && (this.props.ctrlEnter !== '1' || evt.ctrlKey)) {
      this.sendMessage()
    }
  }

  handleEnterClick = () => {
    this.sendMessage()
  }

  render () {
    return <Wrapper>
      <Field type="text" ref={this.setTextInputRef} onKeyDown={this.handleKeyEnter} />
      <EnterButton onClick={this.handleEnterClick} />
    </Wrapper>
  }
}

export const EnterMessage = connect(({ settings }) => ({ ctrlEnter: settings.ctrlEnter }), {
  sendMessage
})(EnterMessageComponent)