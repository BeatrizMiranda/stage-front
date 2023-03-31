import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  box-shadow: 1px 1px 5px #7a7a7a52;
  padding: 1rem 2rem;
  
  display: flex;
  gap: 2rem;

  button {
    background-color: transparent;
    border: none;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  padding: 2rem 20px;
`