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



// Now we need to run use following command:
// node --require ./setup-global.js ./assertion-library.js