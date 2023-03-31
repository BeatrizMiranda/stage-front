import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  grid-column: span 2;
  display: flex;
  margin-top: 3rem;

  align-items: center;
  justify-content: space-between;
`

export const StyledForm = styled.form`

  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  label:nth-child(3) {
    grid-column: span 2;
    
    textarea {
      width: 100%;
    }
  }
  
`