const test = require('tape')

test('push-stream', function (t) {
  const push = require('../')
  t.equal(push, require('../push'), 'push is present')
  Object.keys(push).forEach(function (key) {
    t.equal(push[key], require(`../${key}`), `push.${key} is present`)
  })
  t.end()
})
