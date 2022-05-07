const { sum, subtract } = require('./math')

let result = sum(7, 3)

let expected = 10

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(3, 7)

expected = -4

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}


