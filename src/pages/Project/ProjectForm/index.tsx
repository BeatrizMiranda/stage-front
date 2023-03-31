import { getProjectById } from 'api/Projects';
import { TCreateProject } from 'api/Projects/types';
import Button from 'components/Button';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonsContainer, StyledForm } from './styled';
import { ErrorMessage, Formik } from 'formik';
import FormField from 'components/FormField';
import { Toggle } from 'components/Toggle';
import { useGlobalContext } from 'context/GlobalContext';

const ProjectForm: React.FC<{ parentProject?: string }> = ({ parentProject = '' }) => {
  const navigate = useNavigate();
  const { areas, projects } = useGlobalContext()
  const [initialValues, setInitialValues] = useState<TCreateProject>({
    id: '',
    description: '',
    areaId: '',
    name: '',
    parentProject,
    systemsUsed: [],
    people: [],
    documentation: '',
    status: 'active',
  })
  const { projectId } = useParams()
  const isEdit = projectId !== undefined
  const title = isEdit ? 'Editar projeto' : 'Novo Projeto'
  const onCancel = () => navigate(isEdit ? `/project/${projectId}` : '/')

  const getInitialValues = useCallback(
    async () => {
      if (!isEdit) return null
      const projectInfo = await getProjectById(projectId)
      if (!projectInfo) return null

      const { area, ...projectDetails } = projectInfo
      const value = { ...projectDetails, areaId: area.id } as TCreateProject
      if (projectDetails) return setInitialValues(value)
    },
    [],
  )

  const submitForm = useCallback(
    async (values: TCreateProject) => {
      console.log(values)

      navigate(`/project/${projectId}`)
    },
    [],
  )
  const onSubmit = isEdit ? submitForm : submitForm

  useEffect(() => {
    getInitialValues()
  }, [])

  const toggleLabel = (status: string) => status === 'active' ? 'Ativo' : 'Inativo'

  return (
    <main>
      <h1>{title}</h1>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({
          values,
          setFieldValue,
          handleSubmit,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <fieldset>
              <legend>Dados do projeto</legend>
              <FormField type="text" name="name" value={values.name} label="Name" errorMsg={<ErrorMessage name="name" component="p" />} />
              <FormField name="areaId" as="select" value={values.areaId} label="Area" errorMsg={<ErrorMessage name="area" component="p" />}>
                {areas.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </FormField>
              <FormField name="parentProject" as="select" value={values.parentProject} label="Projeto Pai" errorMsg={<ErrorMessage name="parentProject" component="p" />}>
                {projects.map(item => (
                  <option key={item.id} value={item.id}>{item.name}</option>
                ))}
              </FormField>
              <Toggle label={`Status ${toggleLabel(values.status)}`} isActive={values.status === 'active'} onClick={(newValue: boolean) => setFieldValue('status', newValue ? 'active' : 'inactive')} />
              <FormField name="description" as="textarea" value={values.description} label="Descrição" errorMsg={<ErrorMessage name="description" component="p" />} />
              <FormField name="documentation" as="textarea" value={values.description} label="Documentação" errorMsg={<ErrorMessage name="documentation" component="p" />} />
            </fieldset>
            <ButtonsContainer>
              <Button variant='outlined' onClick={onCancel}>Cancelar</Button>
              <Button type="submit">Salvar</Button>
            </ButtonsContainer>
          </StyledForm>
        )}
      </Formik>
    </main >
  )
}

export default ProjectForm