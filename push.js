module.exports = push

function push () {
  var removeObserverCbs = []

  if (arguments.length === 1) {
    return removeObservers
  }

  var source, sink
  for (var i = 0; i < arguments.length - 1; i++) {
    source = arguments[i]
    sink = arguments[i + 1]
    var removeObserver = source(sink.push)
    removeObserverCbs.push(removeObserver)
  }

  return removeObservers

  function removeObservers () {
    for (var i = 0; i < removeObserverCbs.length; i++) {
      removeObserverCbs[i]()
    }
  }
}
