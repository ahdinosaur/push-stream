var MapAsyncStream = require('./mapAsync')

module.exports = MapStream

function MapStream (lambda) {
  return MapAsyncStream(function (value, push) {
    push(lambda(value))
  })
}
