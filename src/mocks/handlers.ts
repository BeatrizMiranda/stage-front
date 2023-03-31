import { StatusCodes } from 'http-status-codes'
import { rest } from 'msw'
import { areaMocked, projectMocked } from './mocks'

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost/'

const areaApi = [
  rest.post(`${BASE_URL}area`, (_, res, ctx) => {
    return res(ctx.status(StatusCodes.OK), ctx.json(areaMocked))
  }),
  rest.get(`${BASE_URL}area`, (_, res, ctx) => {
    return res(ctx.status(StatusCodes.OK), ctx.json([areaMocked]))
  }),
  rest.patch(`${BASE_URL}area/inactive/:id`, (_, res, ctx) => {
    return res(ctx.status(StatusCodes.OK), ctx.json({ ...areaMocked, status: 'inactive' }))
  }),
  rest.patch(`${BASE_URL}area/:id`, (req, res, ctx) => {
    return res(ctx.status(StatusCodes.OK))
  }),
  rest.get(`${BASE_URL}area/:id`, (req, res, ctx) => {
    return res(ctx.status(StatusCodes.OK), ctx.json(areaMocked))
  })
]

const projectsApi = [
  rest.post(`${BASE_URL}project`, (_, res, ctx) => {
    return res(ctx.status(StatusCodes.OK), ctx.json(projectMocked))
  }),
  rest.get(`${BASE_URL}projects`, (_, res, ctx) => {
    return res(ctx.status(StatusCodes.OK), ctx.json([projectMocked]))
  }),
  rest.patch(`${BASE_URL}project/inactive/:id`, (_, res, ctx) => {
    return res(ctx.status(StatusCodes.OK), ctx.json({ ...projectMocked, status: 'inactive' }))
  }),
  rest.patch(`${BASE_URL}project/:id`, (req, res, ctx) => {
    return res(ctx.status(StatusCodes.OK))
  })
]

export const handlers = [
 ...areaApi,
 ...projectsApi
]
