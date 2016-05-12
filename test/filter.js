const test = require('tape')

const FilterStream = require('../filter')

test('filter over function', function (t) {
  const filterStream = FilterStream(function (value) {
    return value % 2 === 0
  })
  var expected
  filterStream(function (value) {
    t.equal(value, expected, `${expected} % 2 === 0`)
  })
  filterStream.push(1)
  filterStream.push(expected = 2)
  filterStream.push(3)
  filterStream.push(expected = 4)
  filterStream.push(5)
  t.end()
})
