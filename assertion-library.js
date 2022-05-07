const { sum, subtract } = require('./math')


function sumTest() {
  const result = sum(7, 3)
  const expected = 9
  expect(result).toBe(expected)

}

test('Sum adds numbers', sumTest)


function subtractTest() {
  const result = subtract(3, 7)
  const expected = -4
  expect(result).toBe(expected)
}

test('Subtract subtracts numbers', subtractTest)


// Making more helpful error messages in by running all the tests
function test(title, callback) {
  // Como essa função pode lançar um erro, irei colocar dentro de um try
  try {
    callback()
    console.log(`✔️  ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error)
  }

}


function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}.`)
      }
    },
    toEqual(expected) { },
    toBeGreaterThan(expected) { }
  }

}