module.exports = push

function push () {
  var removeListenerCbs = []

  if (arguments.length === 1) {
    return removeListeners
  }

  var source, sink
  for (var i = 0; i < arguments.length - 1; i++) {
    source = arguments[i]
    sink = arguments[i + 1]
    // TODO unlisteners?
    var removeListener = source.listen(sink.broadcast)
    removeListenerCbs.push(removeListener)
  }

  return removeListeners

  function removeListeners () {
    for (var i = 0; i < removeListenerCbs.length; i++) {
      removeListenerCbs[i]()
    }
  }
}
