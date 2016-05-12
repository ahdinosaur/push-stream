var Stream = require('./stream')

module.exports = MapAsyncStream

function MapAsyncStream (lambda) {
  var stream = Stream()

  var _push = stream.push
  stream.push = push

  return stream

  function push (value) {
    lambda(value, _push)
  }
}
