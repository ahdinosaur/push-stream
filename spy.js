var Stream = require('./stream')

module.exports = spy

function spy (lambda) {
  var stream = Stream()

  return { broadcast: broadcast, listen: stream.listen }

  function broadcast (value) {
    lambda(value)
    stream.broadcast(value)
  }
}
