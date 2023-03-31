import styled, { css } from 'styled-components'
import React from 'react';
import { ReactComponent as LoadingIcon } from 'assets/Loading.svg'

const StyledLoading = styled.div<{ color?: string, fullPage?: boolean }>`
  margin: auto;
  ${(props) => props.fullPage && css`
    display: flex;
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
  `};
  
  circle {
    fill: #153B50;
  }
`

const Loading: React.FC<{ color?: string, fullPage?: boolean }> = ({ color, fullPage }) => {
  return (
    <StyledLoading color={color} fullPage={fullPage}><LoadingIcon /></StyledLoading>
  )
}

export default Loading