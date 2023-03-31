import styled from 'styled-components'

export const StyledContainer = styled.button`
  display: flex;

  background: none;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 4px #bdbbbb;
  border: 1px solid transparent;
  transition: all 300ms;
  border-radius: 5px;
  
  padding: 1rem;
  
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;

  &:hover, &:focus {
    box-shadow: 1px 1px 4px #5a5858;
    border: 1px solid #f29e4c;
  }
  
  p, h3 {
    margin: 0;
    text-align: start;
  }
`

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 1rem;
`

export const StyledTwoLines = styled.div`
  overflow: hidden;

  p {
    text-align: initial;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
  }
`
