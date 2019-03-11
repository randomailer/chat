import React from 'react'
import { connect } from 'react-redux'
import { Reset } from 'styled-reset'
import styled, { createGlobalStyle, css } from 'styled-components'
import { Menu } from './components/menu/Menu'
import { Chat } from './components/chat/Chat'
import { Settings } from './components/settings/Settings'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Pangolin');

  html, body, #root {
    font-family: 'Pangolin', cursive;
    font-size: 16px;
    height: 100%;
  }

  button {
    font-family: 'Pangolin', cursive;
    padding: 0;
  }
`

const MainCointainer = styled.div`
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const MainWrapper = () => {
  return <Router>
    <MainCointainer>
      <Reset />
      <GlobalStyle />

      <Menu />
      <Route path="/" exact component={Chat} />
      <Route path="/settings" component={Settings} />
    </MainCointainer>
  </Router>
}