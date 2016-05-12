# push-stream

minimal pipeable push stream using [observer / observable](https://en.wikipedia.org/wiki/Observer_pattern) pattern

**ignore**

```shell
npm install --save push-stream
```

for more asynchronous use cases, see [`pull-stream`](https://github.com/dominictarr/pull-stream).

in `push-stream`, observers subscribe to stream by calling it, then when any data is pushed using `push` it is immediately sent to all observers.

inspiration:

- [geval](https://github.com/Raynos/geval)
- [observ](https://github.com/Raynos/observ)
- [observable](https://github.com/dominictarr/observable)
- [rxjs](http://reactivex.io/rxjs/)
- [es-observable](https://github.com/zenparsing/es-observable)
- [kefir](https://rpominov.github.io/kefir/)
- [baconjs](https://baconjs.github.io/)

this is a work in progress.

## usage

### `push = require('push-stream')`

### `removeListeners = push(a, b, c, ...)`

use `push` to connect a pipeline of streams together.

returns a function `removeListeners` to disconnect pipeline.

### `stream = push.stream()`

a "push stream" is function that you call to observe stream, and returns a function to disconnect observer. it also contains a `push` function that send values to all observers.

when calling stream with a observer function it will return a `removeListener` function. you can call `removeListener` to remove your observer function from the stream. after you call it your observer function will not be called with any future values coming from the stream.

you can call `push` each time you want to push a value to the stream. each time you call `broadcast` with a value, all observer functions that are observing the stream will be invoked with the value.

```js
var stream = push.Stream()

var removeListener = stream(function (value) {
  console.log('observed', value)
})

stream.push('hello') // observed hello
stream.push('world') // observed world

removeListener()

stream.push('meow') //
````

### `valueStream = push.values([1, 2, 3, 4, ...])`

### `mapStream = push.map(function (value) { return value })`

### `filterStream = push.filter(function (value) { return true })`

### `stateStream = push.state(initialState)`

when you observe `stateStream`, it will immediately call the observer with the current state.

if you call `stateStream` with `null` or `undefined`, it will return the current state.

### `spyStream = push.spy(function (value) { console.log(value) })`

### `uniqStream = push.uniq()`

### `readableStream = push.readable(stream)`

returns a read-only copy of the given stream (without `push`).

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
