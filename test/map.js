const test = require('tape')

const MapStream = require('../map')

test('map over function', function (t) {
  const mapStream = MapStream(function (value) {
    return value * value
  })
  var i = 0
  mapStream(function (value) {
    const expected = i * i
    t.equal(value, expected, `value = ${i} * ${i}`)
  })
  mapStream.push(++i)
  mapStream.push(++i)
  mapStream.push(++i)
  t.end()
})
