const test = require('tape')

const isStream = require('./stream')
const StateStream = require('../state')

isStream(StateStream)

test('broadcasts last state on listen', function (t) {
  const stateStream = StateStream()
  const expected = Math.random()

  stateStream.push(expected)

  stateStream(function (value) {
    t.equal(value, expected, 'received expected value')
    t.end()
  })
})

test('calling with no arguments returns state', function (t) {
  const stateStream = StateStream()
  var expected

  t.equal(stateStream(), expected, 'returns expected value')

  expected = Math.random()

  stateStream.push(expected)

  t.equal(stateStream(), expected, 'returns expected value')
  t.end()
})

test('sets initialState', function (t) {
  const expected = Math.random()
  const stateStream = StateStream(expected)

  t.equal(stateStream(), expected, 'returns expected value')

  stateStream(function (value) {
    t.equal(value, expected, 'received expected value')
    t.end()
  })
})
