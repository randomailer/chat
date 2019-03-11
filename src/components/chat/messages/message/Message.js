import React from 'react'
import styled, { css } from 'styled-components'
import { textParser } from './textParser'


const MessageWrapper = styled.div`
  position: relative;
  margin: 32px 0 0;
  text-align: ${({ right }) => right ? 'right' : 'left'};
`

const MessageContainer = styled.div`
  display: inline-block;
  text-align: left;
`

const UserName = styled.div`
  font-size: 12px;
  ${({ right }) => right ? css`
    margin: 0 35px 0 0;
    text-align: right;
  ` : css`
    margin: 0 0 0 35px;
    text-align: left;
  `}
`

const Text = styled.div`
  border: 2px solid #000;
  border-radius: 20px;
  padding: 6px 8px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent #000 transparent;
    ${({ right }) => right ? css`
      border-width: 0 0 22px 16px;
      top: -20px;
      right: 14px;
      transform: rotate(12deg);
    ` : css`
      border-width: 0 16px 22px 0;
      top: -20px;
      left: 14px;
      transform: rotate(-12deg);
    `}
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    ${({ right }) => right ? css`
      border-width: 0 0 18px 10px;
      top: -15px;
      right: 17px;
      transform: rotate(15deg);
    ` : css`
      border-width: 0 10px 18px 0;
      top: -15px;
      left: 17px;
      transform: rotate(-15deg);
    `}
  }
`

export const Message = ({ right, userName, date, text }) => {
  return <MessageWrapper right={ right }>
    <MessageContainer>
    <UserName right={ right }>
      {userName && <span>{userName}, </span>}
      {date}
    </UserName>
    <Text right={ right }>{ textParser(text) }</Text>
  </MessageContainer>
</MessageWrapper>
}