import { TArea } from 'api/Areas/types';
import { TCreateProject, TProject } from 'api/Projects/types';

export const mockPeople = {
  name: 'Feluriana',
  cpf: '12332547854',
}

export const mockSystems = {
  name: 'Figma',
  link: 'www.figma.com'
}

export const areaMocked: TArea = {
  id: 'pessoas',
  name: 'Pessoas',
  description: 'Essa área tem como objetivo consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  status: 'active'
}

export const projectToCreateMocked: TCreateProject = {
  id: 'projectId', 
  areaId: 'pessoas',
  description: 'Esse projeto tem como objetivo consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  name: 'Recrutamento e Seleção',
  systemsUsed: [mockSystems],
  people: [mockPeople],
  documentation: '## Hello',
  status: 'active'
}

export const projectMocked: TProject = {
  id: 'projectId', 
  area: {
    id: 'pessoas',
    name: 'Pessoas',
    description: 'Essa área tem como objetivo consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    status: 'active'
  }, 
  description: 'Esse projeto tem como objetivo consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  name: 'Recrutamento e Seleção',
  systemsUsed: [mockSystems],
  people: [mockPeople],
  documentation: '## Hello',
  status: 'active'
}

export const subProjectMocked: TProject = {
  id: 'subProjectId', 
  area: {
    id: 'pessoas',
    name: 'Pessoas',
    description: 'Essa área tem como objetivo consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    status: 'active'
  }, 
  description: 'Esse projeto tem como objetivo consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  name: 'Desafio Técninco',
  parentProject: 'projectId',
  systemsUsed: [mockSystems],
  people: [mockPeople],
  documentation: '## Hello',
  status: 'active'
}