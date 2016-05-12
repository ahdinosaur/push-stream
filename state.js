var Stream = require('./stream')

module.exports = StateStream

function StateStream (initialState) {
  var stream = Stream()
  var currentState = initialState

  function stateStream (observer) {
    if (observer == null) {
      return currentState
    }
    if (currentState != null) {
      observer(currentState)
    }
    return stream(observer)
  }

  var _push = stream.push
  stateStream.push = push

  return stateStream

  function push (state) {
    currentState = state
    _push(state)
  }
}
