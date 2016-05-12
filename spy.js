var MapAsyncStream = require('./mapAsync')

module.exports = SpyStream

function SpyStream (lambda) {
  return MapAsyncStream(function (value, push) {
    lambda(value)
    push(value)
  })
}
