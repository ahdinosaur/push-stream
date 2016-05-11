/* 

i wonder the minimal "push-stream" abstraction

the difference from this and `pull-stream` is that push streams
are subscribed to by listeners, and when any data is pushed
it is broadcasted to all listeners.

inspiration
- Raynos/geval
- Raynos/observ
- zenparsing/es-observable
- zenparsing/zen-observable

*/


function Event() {
    var listeners = []

    return { broadcast: broadcast, listen: event }

    function broadcast(value) {
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](value)
        }
    }

    function event(listener) {
        listeners.push(listener)

        return removeListener

        function removeListener() {
            var index = listeners.indexOf(listener)
            if (index !== -1) {
                listeners.splice(index, 1)
            }
        }
    }
}

function State (initialValue) {
  var source = Event()
  var value = initialValue === undefined ? null : initialValue

  return { broadcast: broadcast, listen: listen }

  function broadcast (nextValue) {
    value = nextValue
    source.broadcast(nextValue)
  }

  function listen (listener) {
    listener(value)
    source.listen(listener)
  }
}

var eventStream = Event()

eventStream.listen(function (value) {
  console.log('hello', value)
})

eventStream.listen(function (value) {
  console.log('world', value)
})

eventStream.broadcast('dinosaur')

var stateStream = State('kittens')

stateStream.listen(function (value) {
  console.log('meow', value)
})

stateStream.listen(function (value) {
  console.log('bark', value)
})

eventStream.broadcast('puppies')
