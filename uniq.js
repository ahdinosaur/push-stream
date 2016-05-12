var FilterStream = require('./filter')

module.exports = UniqStream

function UniqStream () {
  var lastValue

  return FilterStream(function (value) {
    var predicate = value !== lastValue
    lastValue = value
    return predicate
  })
}
