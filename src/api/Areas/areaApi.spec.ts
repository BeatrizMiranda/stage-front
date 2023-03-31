import { areaMocked } from 'mocks/mocks'
import {
  createArea,
  getAreas,
  disableArea,
  updateAreaById,
  getAreaById
} from '.'

describe('Test AreaApi requests', () => {
  it('Should test createArea function', async () => {
    const area = await createArea(areaMocked)
    expect(area.id).toBe('pessoas')
  })

  it('Should test disableArea function', async () => {
    const area = await disableArea(areaMocked.id || '')

    expect(area.status).toBe('inactive')
  })

  it('Should test getAreaById function', async () => {
    const area = await getAreaById(areaMocked.id)

    expect(area).toBeDefined()
  })

  it('Should test getAreas function', async () => {
    const areas = await getAreas({})

    expect(areas).toBeDefined()
  })

  it('Should test updateAreaById function', async () => {
    const area = await updateAreaById('pessoas', areaMocked)

    expect(area).toBeDefined()
  })
})
