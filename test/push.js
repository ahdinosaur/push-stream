const test = require('tape')

const push = require('../')

test('push creates pipeline', function (t) {
  var i = 0
  const removeListeners = push(
    push.values([0, 1, 2, 3]),
    push.map(function (value) {
      return value * value
    }),
    push.spy(function (value) {
      t.equal(i*i, value, 'value is correct')
      i++

      if (i > 3) {
        removeListeners()
        t.end()
      }
    })
  )
})
