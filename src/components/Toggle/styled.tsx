import styled from 'styled-components'

export const StyledToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: flex-start;

  gap: 5px;
`

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`

export const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #153B50;
  }

  &:checked + span:before {
    transform: translateX(29px);
  }
`

export const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #9da8b4;
  transition: 0.3s;
  border-radius: 30px;

  &:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 3px;
    bottom: 2.6px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }
`


