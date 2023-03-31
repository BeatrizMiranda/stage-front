import { areaMocked } from 'mocks/mocks'
import api from '../index'
import { TArea } from './types'

export const createArea = async (area: TArea) => {
  const response = await api.post<TArea>('area', area)

  return response.data
}

export const getAreas = async (params: Partial<TArea>) => {
  return [areaMocked, areaMocked, areaMocked, areaMocked]
  const response = await api.get<TArea[]>('area', {
    params,
  })

  return response.data
}

export const disableArea = async (id: string) => {
  const response = await api.patch<TArea>(`area/inactive/${id}`)

  return response.data
}

export const getAreaById = async (id: string) => {
  if (id === '') return null
  return areaMocked
  const response = await api.get<TArea>(`area/${id}`)

  return response.data
}

export const updateAreaById = async (id: string, area: TArea) => {
  const response = await api.patch<TArea>(`area/${id}`, area)

  return response.data
}
