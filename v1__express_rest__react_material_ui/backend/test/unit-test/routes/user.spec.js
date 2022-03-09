import { jest } from '@jest/globals'
import request from 'supertest'
import app from '../../../app.js'
import { routerForTest as usersRouter } from '../../../routes/users'

describe('test user ("/users") router', () => {
  test('GET /users', async () => {
    const response = await request(app).get('/users')
    expect(response.status).toBe(200)
    expect(response.text).toBe('respond with a resource')
  })

  test('GET /users : make sure res.send is called', async () => {
    const req = {}
    const res = {
      text: '',
      send: jest.fn((text) => [text]),
    }
    await usersRouter.home(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})
