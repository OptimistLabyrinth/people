import { jest } from '@jest/globals'
import { controllersForTest as peopleController } from '../../../routes/people.js'

describe('test router/people.js functions', () => {
  test('home : make sure the function exists', () => {
    expect(peopleController.readAll).toBeDefined()
  })

  test('home : make sure res.send is called', async () => {
    const req = {}
    const res = {
      send: jest.fn(() => {}),
    }
    await peopleController.readAll(req, res)
    expect(res.send).toHaveBeenCalled()
  })

  // eslint-disable-next-line
  test("home : res.send function sends object including 'msg' field", async () => {
    const req = {}
    const res = {
      send: jest.fn(() => {}),
    }
    await peopleController.readAll(req, res)
    expect(res.send.mock.calls[0][0]).toHaveProperty('msg')
  })
})
