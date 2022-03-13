import { arithmeticModuleForTest as arithmetic } from '../../../modules/arithmetic.js'

describe('test arithmetic module', () => {
  test('should 1 + 2 equals 3', () => {
    expect(arithmetic.addTwoNumbers(1, 2)).toBe(3)
  })

  test('should 1 + "2" equals null', () => {
    expect(arithmetic.addTwoNumbers(1, '2')).toBeNull()
  })

  test('should { data: 1 } (object) + 2 equals null', () => {
    expect(arithmetic.addTwoNumbers({ data: 1 }, 2)).toBeNull()
  })

  test('should 1 + null equals null', () => {
    expect(arithmetic.addTwoNumbers(1, null)).toBeNull()
  })

  test('should 1 + undefined equals null', () => {
    expect(arithmetic.addTwoNumbers(1, undefined)).toBeNull()
  })
})
