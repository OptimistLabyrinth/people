import request from 'supertest'
import app from '../../../app.js'

describe('test user ("/users") router', () => {
  test('GET /users', async () => {
    const response = await request(app).get('/users')
    expect(response.status).toBe(200)
    expect(response.text).toBe('respond with a resource')
  })
})
