import { jest } from '@jest/globals'
import { routerForTest as usersRouter } from '../../../routes/users'

describe('test routes/users.js', () => {
  test('home : make sure res.send is called', async () => {
    const req = {}
    const res = {
      text: '',
      send: jest.fn((text) => [text]),
    }
    await usersRouter.home(req, res)
    expect(res.send).toHaveBeenCalled()
  })
})
