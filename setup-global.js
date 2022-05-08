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

global.test = test
global.expect = expect