import { arithmeticModuleForTest as arithmetic } from '../../../modules/arithmetic.js'

test('should 1 + 2 equals 3', () => {
  expect(arithmetic.addTwoNumbers(1, 2)).toBe(3)
})
