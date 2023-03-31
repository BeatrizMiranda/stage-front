import React, { ReactNode } from 'react'
import { StyledContainer } from './styled'

const Card: React.FC<{ children: ReactNode, onClick: () => void }> = ({ children, onClick }) => {
  return (
    <StyledContainer onClick={onClick}>{children}</StyledContainer>
  )
}

export default Card