import { projectMocked, projectToCreateMocked } from 'mocks/mocks'
import {
  createProject,
  disableProject,
  getProjects,
  updateProjectById
} from '.'

describe('Test ProjectsApi requests', () => {
  it('Should test createProject function', async () => {
    const project = await createProject(projectToCreateMocked)
    expect(project.id).toBe('projectId')
  })

  it('Should test disableProject function', async () => {
    const project = await disableProject(projectMocked.id)

    expect(project.status).toBe('inactive')
  })


  it('Should test getProjects function', async () => {
    const projects = await getProjects({})

    expect(projects).toBeDefined()
  })

  it('Should test updateProjectById function', async () => {
    const project = await updateProjectById('projectId', projectMocked)

    expect(project).toBeDefined()
  })
})
