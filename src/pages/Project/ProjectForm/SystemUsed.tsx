import { TSystems } from 'api/Projects/types'
import FormField from 'components/FormField'

const SystemUsed: React.FC<{ systemsUsed: TSystems }> = ({ systemsUsed }) => {
  return (
    <>
      <FormField type="text" name="name" value={systemsUsed.name} label="Nome" />
      <FormField type="text" name="name" value={systemsUsed.link} label="Link" />
    </>
  )
}

export default SystemUsed