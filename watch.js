var Stream = require('./stream')

module.exports = Watch

function Watch () {
  var stream = Stream()
  var lastValue

  return { broadcast: broadcast, listen: listen }

  function broadcast (value) {
    lastValue = value
    stream.broadcast(value)
  }

  function listen (listener) {
    if (lastValue) {
      listener(lastValue)
    }
    stream.listen(listener)
  }
}
