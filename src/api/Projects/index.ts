import { projectMocked } from 'mocks/mocks'
import api from '../index'
import { TCreateProject, TProject } from './types'

export const createProject = async (project: TCreateProject) => {
  const response = await api.post<TProject>('project', project)

  return response.data
}

export const getProjects = async (params: Partial<TCreateProject>) => {
  return [projectMocked, projectMocked, projectMocked, projectMocked, projectMocked, projectMocked ]
  const response = await api.get<TProject[]>('projects', {
    params,
  })

  return response.data
}

export const getProjectById = async (id: string) => {
  if (id === '') return null
  return projectMocked
  const response = await api.get<TProject>(`project/${id}`)

  return response.data
}

export const disableProject = async (id: string) => {
  const response = await api.patch<TProject>(`project/inactive/${id}`)

  return response.data
}

export const updateProjectById = async (id: string, project: TProject) => {
  const response = await api.patch<TProject>(`project/${id}`, project)

  return response.data
}
