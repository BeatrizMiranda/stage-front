import { getAreas } from 'api/Areas'
import { TArea } from 'api/Areas/types'
import { getProjects } from 'api/Projects'
import { TProject } from 'api/Projects/types'
import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react'

interface TGlobalContext {
  areas: TArea[],
  projects: TProject[]
}

export const GlobalContext = React.createContext<TGlobalContext | null>(null)

interface Props {
  children?: ReactNode
}

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [areas, setAreas] = useState<TArea[]>([])
  const [projects, setProjects] = useState<TProject[]>([])

  const fetchAreas = useCallback(
    async () => {
      const areas = await getAreas({})
      setAreas(areas)
    },
    [],
  )

  const fetchProjects = useCallback(
    async () => {
      const projects = await getProjects({})
      setProjects(projects)
    },
    [],
  )

  useEffect(() => {
    fetchAreas()
    fetchProjects()
  }, [])

  return (
    <GlobalContext.Provider value={{ areas, projects }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)

  if (context) return context

  throw new Error(
    'useGlobalContext must be used within a GlobalContextProvider.',
  )
}

export default GlobalContextProvider
