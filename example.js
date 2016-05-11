var push = require('./')

push(
  push.values([1, 2, 3, 4, 5]),
  push.map(function (value) {
    return value * value
  }),
  push.spy(function (value) {
    console.log(value)
  })
)
