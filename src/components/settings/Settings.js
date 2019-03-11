import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { handDrawnBorder } from '../styles'
import { setSettings } from '../../store/settings/actions/setSettings'
import { resetSettings } from '../../store/settings/actions/resetSettings'

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 4px 0 0;
`

const SettingsForm = styled.form`
  ${handDrawnBorder}
  flex-grow: 1;
  margin: 0 0 32px;
`

const FormRow = styled.div`
  margin: 32px 5% 0;
  width: 250px;
`

const Label = styled.label`
  display: block;
  margin: 0 0 4px;
`

const InlineLabel = styled.label`
  margin: 0 12px 0 4px;
`

const ResetToDefaultsButton = styled.button`
  ${handDrawnBorder}
  font-size: 16px;
  margin: 4px 0 7px;
  flex: 0 0 auto;
  outline: none;
  height: 32px;
  background: transparent;
`

const UserName = styled.input`
  ${handDrawnBorder}
  padding: 4px;
`

class SettingsComponent extends PureComponent {

  handleClickReset = () => {
    this.props.resetSettings()
  }

  handleChangeSetting = (event) => {
    this.props.setSettings({ [event.target.name]: event.target.value })

  }

  render () {
    const settings = this.props.settings

    return <SettingsContainer>
      <SettingsForm>
        <FormRow>
          <Label htmlFor="userName">User name</Label>
          <UserName
            type="text"
            name="userName"
            id="userName"
            value={settings.userName}
            onChange={this.handleChangeSetting}
          />
        </FormRow>
        <FormRow>
          <Label>Interface color</Label>
          <input
            type="radio"
            name="style"
            id="styleLight"
            value="light"
            checked={settings.style === 'light'}
            onChange={this.handleChangeSetting}
          />
          {' '}
          <InlineLabel htmlFor="styleLight">Light</InlineLabel>
          <input
            type="radio"
            name="style"
            id="styleDark"
            value="dark"
            checked={settings.style === 'dark'}
            onChange={this.handleChangeSetting}
          />
          {' '}
          <InlineLabel htmlFor="styleDark">Dark</InlineLabel>
        </FormRow>
        <FormRow>
          <Label>Clock display</Label>
          <input
            type="radio"
            name="clockType"
            id="12hours"
            value="12"
            checked={settings.clockType === '12'}
            onChange={this.handleChangeSetting}
          />
          {' '}
          <InlineLabel htmlFor="12hours">12 Hours</InlineLabel>
          <input
            type="radio"
            name="clockType"
            id="24hours"
            value="24"
            checked={settings.clockType === '24'}
            onChange={this.handleChangeSetting}
          />
          {' '}
          <InlineLabel htmlFor="24hours">24 Hours</InlineLabel>
        </FormRow>
        <FormRow>
          <Label>Send messages on CTRL+ENTER</Label>
          <input
            type="radio"
            name="ctrlEnter"
            id="ctrlOn"
            value="1"
            checked={settings.ctrlEnter === '1'}
            onChange={this.handleChangeSetting}
          />
          {' '}
          <InlineLabel htmlFor="ctrlOn">On</InlineLabel>
          <input
            type="radio"
            name="ctrlEnter"
            id="ctrlOff"
            value="0"
            checked={settings.ctrlEnter === '0'}
            onChange={this.handleChangeSetting}
          />
          {' '}
          <InlineLabel htmlFor="ctrlOff">Off</InlineLabel>
        </FormRow>
      </SettingsForm>
      <ResetToDefaultsButton type="button" onClick={this.handleClickReset}>Reset to defaults</ResetToDefaultsButton>
    </SettingsContainer>
  }
}

export const Settings = connect(
  ({ settings }) => ({ settings }),
  {
    setSettings,
    resetSettings
  }
)(SettingsComponent)