var push = require('./')

push(
  push.values([0, 1, 2, 3, 4, 5, 6, 7]),
  push.map(function (value) {
    return value * value
  }),
  push.spy(console.log)
)
