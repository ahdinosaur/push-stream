var MapAsyncStream = require('./mapAsync')

module.exports = FilterStream

function FilterStream (lambda) {
  return MapAsyncStream(function (value, push) {
    if (lambda(value)) { push(value) }
  })
}
