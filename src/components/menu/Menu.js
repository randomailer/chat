import React from 'react'
import styled from 'styled-components'
import { handDrawnBorder } from '../styles'
import { NavLink } from 'react-router-dom'

const MenuContainer = styled.div`
  ${handDrawnBorder}
  padding: 6px;
`

const activeStyle = {
  'borderBottom': '2px solid #000'
}

const StyledNavLink = styled(NavLink)`
  margin-left: 8px;
  color: #000;
  border-radius: 0px 0px 52px 400px / 0px 0px 5px 35px;
  text-decoration: none;
`

export const Menu = () => {
  return <MenuContainer>
    <StyledNavLink to="/" exact activeStyle={activeStyle}>Chat</StyledNavLink>
    <StyledNavLink to="/settings" activeStyle={activeStyle}>Settings</StyledNavLink>
  </MenuContainer>
}