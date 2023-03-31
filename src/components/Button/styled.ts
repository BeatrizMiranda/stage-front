import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ variant?: 'primary' | 'outlined' }>`
  border: none;
  background-color: #A4036F;
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  min-width: 100px;

  box-shadow: 1px 2px 2px #b8adad;

  transition: all 300ms;

  &:hover, &:focus {        
    background-color: #a4036fcc;
  }
  
  ${({variant}) => variant === 'outlined' && css`
    background-color: transparent;
    border: 1px solid #F29E4Ccc;
    color: #333;

    &:hover, &:focus {        
      background-color: #F29E4Ccc;
      color: #fff;
    }
  `}
`
