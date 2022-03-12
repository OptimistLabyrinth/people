import { jest } from '@jest/globals'
import { routerForTest as indexRouter } from '../../../routes/index'

describe('test routes/index.js functions', () => {
  test('home : make sure res.render is called', async () => {
    const req = {}
    const res = {
      render: jest.fn((fileName, args) => [fileName, args]),
    }
    await indexRouter.home(req, res)
    expect(res.render).toHaveBeenCalled()
  })
})
