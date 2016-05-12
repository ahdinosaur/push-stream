const test = require('tape')

const push = require('../')

test('push creates pipeline', function (t) {
  var i = 0
  const removeObservers = push(
    push.values([0, 1, 2, 3]),
    push.map(function (value) {
      return value * value
    }),
    push.spy(function (value) {
      t.equal(value, i*i, 'value is correct')
      i++

      if (i > 3) {
        removeObservers()
        t.end()
      }
    })
  )
})

test('push creates pipeline for state input', function (t) {
  const removeObservers = push(
    push.state(5),
    push.map(function (value) {
      return value * value
    }),
    push.spy(function (value) {
      t.equal(value, 25, 'value is correct')
    })
  )
  removeObservers()
  t.end()
})
