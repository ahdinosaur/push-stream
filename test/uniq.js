const test = require('tape')

const UniqStream = require('../uniq')

test('uniq', function (t) {
  const uniqStream = UniqStream()
  var expected
  uniqStream(function (value) {
    t.equal(value, expected, `${expected} is unique`)
    expected = undefined
  })
  uniqStream.push(expected = 1)
  uniqStream.push(1)
  uniqStream.push(expected = 2)
  uniqStream.push(expected = 3)
  uniqStream.push(3)
  t.end()
})
