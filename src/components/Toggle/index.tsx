import { useState } from 'react'
import { StyledInput, StyledLabel, StyledSpan, StyledToggleContainer } from './styled'

type TToggle = {
  label: string
  isActive: boolean
  onClick: (newValue: boolean) => void
}

export const Toggle: React.FC<TToggle> = ({ label, isActive, onClick }) => {
  const [isToggled, toggle] = useState(isActive)

  const callback = () => {
    toggle(!isToggled)
    onClick(!isToggled)
  }

  return (
    <StyledToggleContainer>
      {label}
      <StyledLabel aria-labelledby={label}>
        <StyledInput type="checkbox" defaultChecked={isToggled} onClick={callback} />
        <StyledSpan />
      </StyledLabel>
    </StyledToggleContainer>
  )
}