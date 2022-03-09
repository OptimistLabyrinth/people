import { jest } from '@jest/globals'
import request from 'supertest'
import app from '../../../app.js'
import { routerForTest as indexRouter } from '../../../routes/index'

describe('test index ("/") router', () => {
  test('GET /', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })

  test('GET / : make sure res.render is called', async () => {
    const req = {}
    const res = {
      render: jest.fn((fileName, args) => [fileName, args]),
    }
    await indexRouter.home(req, res)
    expect(res.render).toHaveBeenCalled()
  })
})
