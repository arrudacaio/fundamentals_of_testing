const sum = (a, b) => a + b
const subtract = (a, b) => a - b


// Simulates async code
const sumAsync = (...args) => Promise.resolve(sum(...args))
const subtractAsync = (...args) => Promise.resolve(subtract(...args))

module.exports = {
  sum,
  subtract,
  sumAsync,
  subtractAsync
}