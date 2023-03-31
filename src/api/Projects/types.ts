import { TArea } from 'api/Areas/types'

export type TPeople = {
  name: string,
  cpf: string,
}

export type TSystems = {
  name: string,
  link?: string
}

export type TProject = {
  id: string, 
  description: string, 
  area: TArea,
  name: string
  parentProject?: string
  systemsUsed?: TSystems[]
  people?: TPeople[]
  documentation?: string
  status: 'active' | 'inactive'
}

export type TCreateProject = Omit<TProject, 'area'> & { areaId: string }
