import { getAreaById } from 'api/Areas';
import { TArea } from 'api/Areas/types';
import Button from 'components/Button';
import Loading from 'components/Loading';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledHeader } from './styled';
import { TProject } from 'api/Projects/types';
import { getProjects } from 'api/Projects';
import Card from 'components/Card';
import { StyledCardContainer, StyledTwoLines } from 'components/Card/styled';
import { toggleLabel } from 'utils';

const AreaDetails = () => {
  const [projects, setProjects] = useState<TProject[]>([])
  const [areaDetails, setAreaDetails] = useState<TArea>()
  const navigate = useNavigate();
  const { areaId = '' } = useParams()

  const getAreaDetails = useCallback(
    async () => {
      const areaDetails = await getAreaById(areaId)
      if (areaDetails) setAreaDetails(areaDetails)

      const projectByArea = await getProjects({ areaId })
      if (projectByArea) setProjects(projectByArea)
    },
    [],
  )

  useEffect(() => {
    getAreaDetails()
  }, [])

  if (!areaDetails) return <Loading fullPage />

  return (
    <main>
      <StyledHeader>
        <h1>{areaDetails.name}</h1>
        <Button onClick={() => navigate('edit')}>Editar</Button>
      </StyledHeader>
      <p>{areaDetails.description}</p>
      <h2 style={{ marginTop: '3rem' }}>Projetos</h2>
      <StyledCardContainer>
        {projects.map(item => (
          <Card key={item.id} onClick={() => navigate(`/project/${item.id}`)}>
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
    </main>
  )
}

export default AreaDetails