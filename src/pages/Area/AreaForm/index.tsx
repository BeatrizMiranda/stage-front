import { getAreaById } from 'api/Areas';
import { TArea } from 'api/Areas/types';
import Button from 'components/Button';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonsContainer, StyledForm } from './styled';
import { ErrorMessage, Formik } from 'formik';
import FormField from 'components/FormField';
import { Toggle } from 'components/Toggle';
import { toggleLabel } from 'utils';

const AreaForm = () => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<TArea>({
    id: '',
    name: '',
    description: '',
    status: 'active'
  })
  const { areaId } = useParams()
  const isEdit = areaId !== undefined
  const title = isEdit ? 'Editar área' : 'Nova área'
  const onCancel = () => navigate(isEdit ? `/area/${areaId}` : '/')

  const getInitialValues = useCallback(
    async () => {
      if (!isEdit) return null
      const areaDetails = await getAreaById(areaId)
      if (areaDetails) return setInitialValues(areaDetails)
    },
    [],
  )

  const submitForm = useCallback(
    async (values: TArea) => {
      console.log(values)

      navigate(`/area/${areaId}`)
    },
    [],
  )

  const onSubmit = isEdit ? submitForm : submitForm

  useEffect(() => {
    getInitialValues()
  }, [])

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
            <FormField type="text" name="name" value={values.name} label="Name" errorMsg={<ErrorMessage name="name" component="p" />} />
            <Toggle label={`Status ${toggleLabel(values.status)}`} isActive={values.status === 'active'} onClick={(newValue: boolean) => setFieldValue('status', newValue ? 'active' : 'inactive')} />
            <FormField name="description" as="textarea" value={values.description} label="Description" errorMsg={<ErrorMessage name="description" component="p" />} />
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

export default AreaForm