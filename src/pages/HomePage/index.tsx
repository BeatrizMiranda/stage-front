import Card from 'components/Card'
import { useGlobalContext } from 'context/GlobalContext'
import { useNavigate } from 'react-router-dom'
import { StyledCardContainer, StyledTwoLines } from 'components/Card/styled'
import Button from 'components/Button'
import { StyledArticle } from './styled'

const HomePage = () => {
  const { areas, projects } = useGlobalContext()
  const navigate = useNavigate();
  const toggleLabel = (status: string) => status === 'active' ? 'Ativo' : 'Inativo'

  return (
    <main>
      <h1>Empresa C3PO4</h1>

      <StyledArticle>
        <header>
          <h2>Áreas</h2>
          <Button onClick={() => navigate('/area/create')}>Nova área</Button>
        </header>
        <StyledCardContainer>
          {areas.map(item => (
            <Card key={item.id} onClick={() => navigate(`area/${item.id}`)}>
              <h3>{item.name}</h3>
              <StyledTwoLines>
                <p>
                  {item.description}
                </p>
              </StyledTwoLines>
              <p>{toggleLabel(item.status)}</p>
            </Card>
          ))}
        </StyledCardContainer>
      </StyledArticle>
      <StyledArticle>
        <header>
          <h2>Projetos</h2>
          <Button onClick={() => navigate('/project/create')}>Novo Projeto</Button>
        </header>
        <StyledCardContainer>
          {projects.map(item => (
            <Card key={item.id} onClick={() => navigate(`project/${item.id}`)}>
              <h3>{item.name}</h3>
              <p>{item.area.name}</p>
              <StyledTwoLines>
                <p>
                  {item.description}
                </p>
              </StyledTwoLines>
              <p>{toggleLabel(item.status)}</p>
            </Card>
          ))}
        </StyledCardContainer>
      </StyledArticle>
    </main>
  )
}

export default HomePage