var Stream = require('./stream')

module.exports = ValuesStream

function ValuesStream (array) {
  var stream = Stream()

  process.nextTick(function () {
    for (var i = 0; i < array.length; i++) {
      stream.push(array[i])
    }
  })

  return stream
}
