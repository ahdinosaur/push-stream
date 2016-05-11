var Stream = require('./stream')

module.exports = map

function map (lambda) {
  var stream = Stream()

  return { broadcast: broadcast, listen: stream.listen }

  function broadcast (value) {
    stream.broadcast(lambda(value))
  }
}
