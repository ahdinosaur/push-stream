# push-stream

minimal pipeable push streams using [observable pattern](https://en.wikipedia.org/wiki/Observer_pattern)

```shell
npm install --save push-stream
```

in a "push stream" (also known as an observable), an observer subscribes to a stream by calling it as a function.

```js
stream(function observer (value) {
  console.log('observed', value)
})
```

then when any data is published to the stream using `push` it is immediately sent to all observers.

```js
stream.push('hello') // "observed hello"
stream.push('world') // "observed world"
```

when subscribing, the stream returns a function to remove the observer from the stream.

```js
var removeObserver = stream(...)

// do some stuff

// when done
removeObserver()
```

for more asynchronous use cases, see [`pull-stream`](https://github.com/dominictarr/pull-stream).

## usage

### `push = require('push-stream')`

the top-level `push` module is a grab bag of all `push-stream/*` modules.

you can also require each module separately like `require('push-stream/push')`.

### `removeObservers = push(a, b, c, ...)`

use `push` to connect a pipeline of streams together.

returns a function `removeObservers` to disconnect pipeline.

### `stream = push.stream()`

`stream` is the most basic "push stream" constructor.

it returns a function, that if you call with an observer function, that observer will be sent any values pushed into the stream.

when you call a stream with a observer function it will also return a `removeObserver` function. you can call `removeObserver` to remove your observer function from the stream. after you call it your observer function will not be called with any future values coming from the stream.

a stream also contains a `push` function that send values to all observers. you can call `push` each time you want to push a value to the stream. each time you call `push` with a value, all observer functions that are observing the stream will be invoked with the value.

```js
var stream = push.Stream()

var removeObserver = stream(function (value) {
  console.log('observed', value)
})

stream.push('hello') // observed hello
stream.push('world') // observed world

removeObserver()

stream.push('meow') //
````

### `valueStream = push.values(array)`

returns a stream that on next tick, pushes each item in array of values.

```js
push(
  push.values([0, 1, 2, 3]),
  push.spy(console.log)
)
```

### `mapStream = push.map(mapFn)`

returns a stream that transforms pushed data with map function.

```js
push(
  push.values([0, 1, 2, 3]),
  push.map(function (value) {
    return value * value // second power
  }),
  push.spy(console.log)
)
// "0"
// "1"
// "4"
// "9"
```

### `filterStream = push.filter(filterFn)`

returns a stream that filters pushed data with filter function.

```js
push(
  push.values([0, 1, 2, 3]),
  push.filter(function (value) {
    return value % 2 === 0 // is even?
  }),
  push.spy(console.log)
)
// "0"
// "2"
```

### `stateStream = push.state(initialState)`

returns a stream with a pool of the current state.

when you observe the state stream, it will immediately call the observer with the current state.

```js
push(
  push.state(0)
  push.spy(console.log)
)
// "0"
```

_special case_: if you call the state stream with `null` or `undefined`, it will return the current state.

```
var state = pull.state(10)
console.log(state()) // "0"
```

### `mapAsyncStream = push.mapAsync(asyncMapFn)`

returns a stream that asynchronously transforms pushed data with async map function.

```js
push(
  push.values([0, 1, 2, 3]),
  push.asyncMap(function (value, next) {
    setTimeout(function () {
      for (var i = 0; i < value; i++) {
        next(value)
      }
    }, value * 1000)
  }),
  push.spy(console.log)
)
// ... guess
// and then see for yourself :)
```

### `readableStream = push.readable(stream)`

returns a read-only copy of the given stream without `push`.

### `uniqStream = push.uniq()`

returns a stream that passes along only unique values.

### `spyStream = push.spy(spyFn)`

returns a stream that is a pass-through allows you to tap into the stream to see but not touch.

## inspiration

- [geval](https://github.com/Raynos/geval)
- [observ](https://github.com/Raynos/observ)
- [observable](https://github.com/dominictarr/observable)
- [rxjs](http://reactivex.io/rxjs/)
- [es-observable](https://github.com/zenparsing/es-observable)
- [kefir](https://rpominov.github.io/kefir/)
- [baconjs](https://baconjs.github.io/)

## license

The Apache License

Copyright &copy; 2016 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
