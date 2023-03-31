import styled from 'styled-components';

export const StyledArticle = styled.article`
  + article {
  margin-top: 5rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
`