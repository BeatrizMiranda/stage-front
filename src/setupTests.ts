import '@testing-library/jest-dom'
import { server } from './mocks'

jest.setTimeout(30000)

beforeAll(() => {
  server.listen()
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
