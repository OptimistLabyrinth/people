import { jest } from '@jest/globals'
import ReadAllRepository from '../../../../../routes/people/read-all/repository.js'

describe('test routes/people/read-all/repository.js', () => {
  test('make sure method readAll exists', async () => {
    const readAllRepository = new ReadAllRepository({})
    expect(readAllRepository.readAll).toBeDefined()
  })

  test('readAll : works OK when there is 0 rows in table people', async () => {
    const connection = {
      execute: jest.fn(() => [[], {}]),
    }
    const readAllRepository = new ReadAllRepository(connection)
    const result = await readAllRepository.readAll()
    expect(result).toEqual([])
  })

  test('make sure method validateEachRow exists', () => {
    const readAllRepository = new ReadAllRepository({})
    expect(readAllRepository.validateEachRow).toBeDefined()
  })

  test(
    'validateEachRow : works OK when eachRow has all the expecting fields. ' +
      '(id, name, nickname, country, birthday, age, height, weight)',
    () => {
      const mockSqlResult = {
        id: 0,
        name: '',
        nickname: '',
        country: '',
        birthday: '',
        age: 0,
        height: 0,
        weight: 0,
      }
      const readAllRepository = new ReadAllRepository({})
      const result = readAllRepository.validateEachRow(mockSqlResult)
      expect(result).toBeTruthy()
    }
  )

  test(
    'readAll : works OK when each row from SQL result ' +
      'has all the expecting fields. ' +
      '(id, name, nickname, country, birthday, age, height, weight)',
    async () => {
      const connection = {
        execute: jest.fn(() => [
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
            {
              id: 1,
              name: 'x',
              nickname: 'x',
              country: 'x',
              birthday: 'x',
              age: 1,
              height: 1,
              weight: 1,
            },
          ],
          {},
        ]),
      }
      const readAllRepository = new ReadAllRepository(connection)
      const result = await readAllRepository.readAll()
      expect(result.length).toBe(2)
    }
  )

  test(
    'readAll : throws ERROR when SQL result ' +
      'lacks either of the expecting fields. ' +
      '(id, name, nickname, country, birthday, age, height, weight)',
    async () => {
      let errorFinally = null
      try {
        const connection = {
          execute: jest.fn(() => [[{}], {}]),
        }
        const readAllRepository = new ReadAllRepository(connection)
        await readAllRepository.readAll()
      } catch (error) {
        errorFinally = error
      }
      expect(errorFinally).not.toBeNull()
    }
  )
})
