import { jest } from '@jest/globals'
import readAllService from '../../../../../routes/people/read-all/service.js'
import ReadAllDto from '../../../../../routes/people/read-all/dto.js'

describe('test function "readAllService" in routes/people/read-all/service.js', () => {
  test('0 person OK', async () => {
    const connection = {
      execute: jest.fn(() => {}),
      release: jest.fn(() => {}),
    }
    class ReadAllRepository {
      constructor(conn) {
        this.conn = conn
        this.readAll = this.readAll.bind(this)
        this.validateEachRow = this.validateEachRow.bind(this)
      }
      readAll = jest.fn(async () => {
        return []
      })
      validateEachRow = jest.fn(() => true)
    }
    const people = await readAllService(connection, ReadAllRepository)
    expect(people).toEqual([])
  })

  test('at lease 1 person OK', async () => {
    const connection = {
      execute: jest.fn(() => {}),
      release: jest.fn(() => {}),
    }
    class ReadAllRepository {
      constructor(conn) {
        this.conn = conn
        this.readAll = this.readAll.bind(this)
        this.validateEachRow = this.validateEachRow.bind(this)
      }
      readAll = jest.fn(async () => {
        const result = [
          [
            {
              id: 0,
              name: '',
              nickname: '',
              country: '',
              birthday: '',
              age: 0,
              height: 0,
              weight: 0,
            },
          ],
          {},
        ]
        const resultAsDto = result[0].map((eachRow, index) => {
          if (!this.validateEachRow(eachRow)) {
            throw new Error(
              `index: ${index}, ${JSON.stringify(eachRow)} is an invalid row`
            )
          }
          return new ReadAllDto(eachRow)
        })
        return resultAsDto
      })
      validateEachRow = jest.fn(() => true)
    }
    const people = await readAllService(connection, ReadAllRepository)
    expect(people.length).toBe(1)
  })

  test(
    'at lease 1 person ' +
      'but ERROR is thrown if method validateEachRow returns false',
    async () => {
      let errorFinally = null
      try {
        const connection = {
          execute: jest.fn(() => {}),
          release: jest.fn(() => {}),
        }
        class ReadAllRepository {
          constructor(conn) {
            this.conn = conn
            this.readAll = this.readAll.bind(this)
            this.validateEachRow = this.validateEachRow.bind(this)
          }
          readAll = jest.fn(async () => {
            const result = [
              [
                {
                  id: 0,
                  name: '',
                  nickname: '',
                  country: '',
                  birthday: '',
                  age: 0,
                  height: 0,
                  weight: 0,
                },
              ],
              {},
            ]
            const resultAsDto = result[0].map((eachRow, index) => {
              if (!this.validateEachRow(eachRow)) {
                throw new Error(
                  `index: ${index}, ${JSON.stringify(
                    eachRow
                  )} is an invalid row`
                )
              }
              return new ReadAllDto(eachRow)
            })
            return resultAsDto
          })
          validateEachRow = jest.fn(() => false)
        }
        await readAllService(connection, ReadAllRepository)
      } catch (error) {
        errorFinally = error
      }
      expect(errorFinally).not.toBeNull()
    }
  )
})
