import { FieldAttributes } from 'formik'
import React, { ReactNode } from 'react'
import { FieldContainer, StyledField } from './styled'

const FormField: React.FC<FieldAttributes<unknown> & { label: string, errorMsg?: ReactNode }> = (props) => {
  return (
    <FieldContainer data-testId={props.as}>
      {props.label}
      <StyledField {...props}>{props.children}</StyledField>
      {props.errorMsg || null}
    </FieldContainer>
  )
}

export default FormField