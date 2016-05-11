var Stream = require('./stream')

module.exports = push

function push () {
  var stream = Stream()

  if (argument.length === 1) {
    return arguments[0]
  }

  for (var i = 0; i < arguments.length - 1; i++) {
    var source = arguments[i]
    var sink = arguments[i + 1]
    source.listen(sink.broadcast)
  }

  var last = arguments[arguments.length - 1]
  return last
}
