function addTwoNumbers(left, right) {
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
