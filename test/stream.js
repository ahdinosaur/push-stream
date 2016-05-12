const test = require('tape')

const Stream = require('../stream')

isStream(Stream)

module.exports = isStream

function isStream (Stream) {
  test('Stream', function (t) {
    const stream = Stream()
    t.equal(typeof stream, 'function', 'stream is function')
    t.equal(typeof stream.push, 'function', 'stream.push is function')
    t.end()
  })

  test('push broadcasts to listeners', function (t) {
    const stream = Stream()
    const expected = Math.random()
    t.plan(2)
    stream(function (value) {
      t.equal(value, expected, 'received expected')
    })
    stream(function (value) {
      t.equal(value, expected, 'received expected')
    })
    stream.push(expected)
  })

  test('removeListener stops listeners', function (t) {
    const stream = Stream()
    const expected = Math.random()
    const removeListener = stream(function (value) {
      t.ok(false, 'should not receive value')
    })
    stream(function (value) {
      t.equal(value, expected, 'received expected')
      t.end()
    })
    removeListener()
    stream.push(expected)
  })
}
