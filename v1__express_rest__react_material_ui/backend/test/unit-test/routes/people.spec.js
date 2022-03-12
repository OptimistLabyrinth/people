import { jest } from '@jest/globals'
import { controllersForTest as peopleController } from '../../../routes/people.js'

describe('test controllers in routes/people.js', () => {
  describe('controller readAll', () => {
    test('make sure the function exists', () => {
      expect(peopleController.readAll).toBeDefined()
    })

    test('make sure res.send is called inside the function', async () => {
      const req = {}
      const res = {
        send: jest.fn(() => {}),
      }
      await peopleController.readAll(req, res)
      expect(res.send).toHaveBeenCalled()
    })

    // eslint-disable-next-line
    test("sends object including 'msg' field", async () => {
      const req = {}
      const res = {
        send: jest.fn(() => {}),
      }
      await peopleController.readAll(req, res)
      expect(res.send.mock.calls[0][0]).toHaveProperty('msg')
    })

    test('on success, return data with "result" field', async () => {
      const req = {}
      const res = {
        send: jest.fn(() => {}),
      }
      await peopleController.readAll(req, res)
      expect(res.send.mock.calls[0][0]).toHaveProperty('result')
    })

    test('on success, "result" field contains array of zero-to-many person', async () => {
      const req = {}
      const res = {
        send: jest.fn(() => {}),
      }
      await peopleController.readAll(req, res)
      expect(res.send.mock.calls[0][0]['result'].length).toBeGreaterThanOrEqual(
        0
      )
    })

    test(
      'on success, each person in "result" array contains ' +
        'id, name, nickname, country, birthday, age, height, weight',
      async () => {
        const req = {}
        const res = {
          send: jest.fn(() => {}),
        }
        await peopleController.readAll(req, res)
        for (const eachPerson of res.send.mock.calls[0][0]['result']) {
          expect(eachPerson).toHaveProperty('id')
          expect(eachPerson).toHaveProperty('name')
          expect(eachPerson).toHaveProperty('nickname')
          expect(eachPerson).toHaveProperty('country')
          expect(eachPerson).toHaveProperty('birthday')
          expect(eachPerson).toHaveProperty('age')
          expect(eachPerson).toHaveProperty('height')
          expect(eachPerson).toHaveProperty('weight')
        }
      }
    )
  })
})
