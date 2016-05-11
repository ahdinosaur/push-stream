var Stream = require('./stream')

module.exports = values

function values (array) {
  var stream = Stream()

  process.nextTick(function () {
    for (var i = 0; i < array.length; i++) {
      stream.broadcast(array[i])
    }
  })

  return stream
}
