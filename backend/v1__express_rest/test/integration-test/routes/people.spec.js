import request from 'supertest'
import app from '../../../app.js'

describe('test people ("/people") router', () => {
  test('GET / -> status 200', async () => {
    const response = await request(app).get('/people')
    expect(response.status).toBe(200)
  })

  test('GET / -> { msg: "...", result: [...] }', async () => {
    const response = await request(app).get('/people')
    expect(response.body).toHaveProperty('msg')
    expect(response.body).toHaveProperty('result')
  })
})
