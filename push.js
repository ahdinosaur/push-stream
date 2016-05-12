module.exports = push

function push () {
  var length = arguments.length
  var removeObserverCbs = []

  if (length === 1) {
    return removeObservers
  }

  for (var i = 1; i < length; i++) {
    source = arguments[length - i - 1]
    sink = arguments[length - i]
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
