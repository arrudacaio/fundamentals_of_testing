const { sum, sumAsync, subtract, subtractAsync } = require('./math')


test('Sum adds numbers', () => {
  const result = sum(7, 3)
  const expected = 10
  expect(result).toBe(expected)
})


test('Subtract subtracts numbers', () => {
  const result = subtract(3, 7)
  const expected = -4
  expect(result).toBe(expected)
})

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(7, 3)
  const expected = 10
  expect(result).toBe(expected)
})

test('subAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})



// Making more helpful error messages in by running all the tests
async function test(title, callback) {
  // Como essa função pode lançar um erro, irei colocar dentro de um try
  try {
    await callback() // Without async, this function returns a Promise
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