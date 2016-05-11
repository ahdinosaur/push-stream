module.exports = push

function push () {
  if (arguments.length === 1) {
    return arguments[0]
  }

  var source, sink
  for (var i = 0; i < arguments.length - 1; i++) {
    source = arguments[i]
    sink = arguments[i + 1]
    // TODO unlisteners?
    source.listen(sink.broadcast)
  }

  return sink
}
