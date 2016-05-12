const test = require('tape')

const MapAsyncStream = require('../mapAsync')

test('map over function', function (t) {
  const mapAsyncStream = MapAsyncStream(function (value, cb) {
    cb(value * value)
  })
  var i = 0
  mapAsyncStream(function (value) {
    const expected = i * i
    t.equal(value, expected, `value = ${i} * ${i}`)
  })
  mapAsyncStream.push(++i)
  mapAsyncStream.push(++i)
  mapAsyncStream.push(++i)
  t.end()
})
