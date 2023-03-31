import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const FieldContainer = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: flex-start;
`

export const StyledField = styled(Field)`
  margin-top: 5px;
  padding: 5px 10px;
  border: 2px solid #F29E4C;
  border-radius: 3px;
  
  ${({ as }) => as === 'textarea' && css`
    min-height: 100px;
  `}

  ${({ as }) => as === 'select' && css`
    background-color: transparent;
  `}

  &:focus, &:focus-visible {
    border: 2px solid #A4036F;
    outline: none;
  }
`