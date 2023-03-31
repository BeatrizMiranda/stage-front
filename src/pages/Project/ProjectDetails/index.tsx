import { TProject } from 'api/Projects/types';
import Button from 'components/Button';
import Loading from 'components/Loading';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledHeader } from './styled';
import { getProjectById } from 'api/Projects';

const ProjectDetails = () => {
  const [projectDetails, setProjectDetails] = useState<TProject>()
  const navigate = useNavigate();
  const { projectId = '' } = useParams()

  const getProjectDetails = useCallback(
    async () => {
      const projectDetails = await getProjectById(projectId)
      if (projectDetails) setProjectDetails(projectDetails)
    },
    [],
  )

  useEffect(() => {
    getProjectDetails()
  }, [])

  if (!projectDetails) return <Loading fullPage />

  return (
    <main>
      <StyledHeader>
        <h1>{projectDetails.name}</h1>
        <Button onClick={() => navigate('edit')}>Editar</Button>
      </StyledHeader>
      <p>{projectDetails.description}</p>
    </main>
  )
}

export default ProjectDetails