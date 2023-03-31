import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  grid-column: span 3;
  display: flex;
  margin-top: 3rem;

  align-items: center;
  justify-content: space-between;
`

export const StyledForm = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  fieldset {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding: 2rem;
    border-radius: 3px
  }
  
  textarea {
    width: 100%;
  }
  
  input, select {
    width: 80%;
  }

  [data-testId="textarea"] {
    grid-column: span 3;
  }
`