module.exports = Stream

function Stream () {
  var observers = []

  function stream (observer) {
    observers.push(observer)

    return removeObserver 

    function removeObserver () {
      var index = observers.indexOf(observer)
      if (index !== -1) {
        observers.splice(index, 1)
      }
    }
  }

  stream.push = push

  return stream

  function push (value) {
    for (var i = 0; i < observers.length; i++) {
      observers[i](value)
    }
  }
}
