import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  border-radius: 10px;
  max-width: 300px;
  max-height: 300px;
  object-fit: contain;
`

const Iframe = styled.iframe`
  width: 300px;
  height: 300px;
`

export const textParser = (text) => {
  return <React.Fragment>
    {text.split(' ').map(mediaParser)}
  </React.Fragment>
}

const mediaParser = (str) => {
  if (/^https?:\/\/(w{3}\.)?youtu\.?be/.test(str)) {
    const videoId = str.match(/([\d\w])+$/)[0]

    return <Iframe src={ `https://www.youtube.com/embed/${videoId}` } frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
  } else if (/^https?/.test(str)) {
    return <a href={ str } target="_blank" rel="noopener noreferrer"><Img src={ str } /></a>
  } else {
    return <span>{ str }{' '}</span>
  }
}