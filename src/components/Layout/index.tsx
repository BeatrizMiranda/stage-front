import { Outlet, useNavigate } from 'react-router-dom';
import ReactLogo from 'assets/company.svg';
import { Header, Container, Wrapper } from 'styles';

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <button type="button" onClick={() => navigate('/')}>
          <img src={ReactLogo} alt="React Logo" />
        </button>
        <p>Empresa C3PO4</p>
      </Header>
      <Wrapper>
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
    </>
  );
}

export default Layout;