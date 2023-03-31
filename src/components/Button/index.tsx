import React, { ReactNode } from 'react';
import { StyledButton } from './styled';

type TButton = {
  variant?: 'primary' | 'outlined'
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
}

const Button: React.FC<TButton> = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick}>{children}</StyledButton>
  )
}

export default Button