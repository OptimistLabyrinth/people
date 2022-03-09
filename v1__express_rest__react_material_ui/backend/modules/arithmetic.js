function addTwoNumbers(left, right) {
  if (typeof left !== 'number' || typeof right !== 'number') {
    return null
  }
  return left + right
}

const arithmeticModule = {
  addTwoNumbers,
}

const arithmeticModuleForTest = {
  ...arithmeticModule,
}

export default arithmeticModule

export { arithmeticModuleForTest }
