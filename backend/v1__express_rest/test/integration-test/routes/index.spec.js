import request from 'supertest'
import app from '../../../app.js'

describe('test index ("/") router', () => {
  test('GET /', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })
})
