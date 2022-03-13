import ReadAllDto from '../../../../../routes/people/read-all/dto.js'

describe('test class ReadAllDto', () => {
  test('constructor : if "id" is null or undefined, initialized 0', () => {
    const newData = new ReadAllDto({})
    expect(newData).toHaveProperty('id')
    expect(newData.id).toBe(0)
  })

  test('constructor : if "name" is null or undefined, initialized null', () => {
    const newData = new ReadAllDto({})
    expect(newData).toHaveProperty('name')
    expect(newData.name).toBeNull()
  })

  test('constructor : if "nickname" is null or undefined, initialized null', () => {
    const newData = new ReadAllDto({})
    expect(newData).toHaveProperty('nickname')
    expect(newData.nickname).toBeNull()
  })

  test('constructor : if "country" is null or undefined, initialized null', () => {
    const newData = new ReadAllDto({})
    expect(newData).toHaveProperty('country')
    expect(newData.country).toBeNull()
  })

  test('constructor : if "birthday" is null or undefined, initialized null', () => {
    const newData = new ReadAllDto({})
    expect(newData).toHaveProperty('birthday')
    expect(newData.birthday).toBeNull()
  })

  test('constructor : if "birthday" is Date type, value if formatted YYYY-MM-DD', () => {
    const newData = new ReadAllDto({ birthday: new Date('2020-12-22') })
    expect(newData).toHaveProperty('birthday')
    expect(newData.birthday).toBe('2020-12-22')
  })

  test('constructor : if month of "birthday" is less than 10, prepend 0', () => {
    const newData = new ReadAllDto({ birthday: new Date('2020-2-22') })
    expect(newData).toHaveProperty('birthday')
    expect(newData.birthday).toBe('2020-02-22')
  })

  test('constructor : if date of "birthday" is less than 10, prepend 0', () => {
    const newData = new ReadAllDto({ birthday: new Date('2020-12-2') })
    expect(newData).toHaveProperty('birthday')
    expect(newData.birthday).toBe('2020-12-02')
  })

  test('constructor : if "age" is null or undefined, initialized null', () => {
    const newData = new ReadAllDto({})
    expect(newData).toHaveProperty('age')
    expect(newData.age).toBeNull()
  })

  test('constructor : if "height" is null or undefined, initialized null', () => {
    const newData = new ReadAllDto({})
    expect(newData).toHaveProperty('height')
    expect(newData.height).toBeNull()
  })

  test('constructor : if "weight" is null or undefined, initialized null', () => {
    const newData = new ReadAllDto({})
    expect(newData).toHaveProperty('weight')
    expect(newData.weight).toBeNull()
  })

  test('make sure toJson method exists', () => {
    const instance = new ReadAllDto({})
    expect(instance.toJson).toBeDefined()
  })

  test('toJson : check if all properties exist', () => {
    const instance = new ReadAllDto({})
    const result = instance.toJson()
    expect(result).toHaveProperty('id')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('nickname')
    expect(result).toHaveProperty('country')
    expect(result).toHaveProperty('birthday')
    expect(result).toHaveProperty('age')
    expect(result).toHaveProperty('height')
    expect(result).toHaveProperty('weight')
  })
})
