# push-stream

minimal pipeable push stream using [observer / observable](https://en.wikipedia.org/wiki/Observer_pattern) pattern

**ignore**

```shell
npm install --save push-stream
```

for more asynchronous use cases, see [`pull-stream`](https://github.com/dominictarr/pull-stream).

in `push-stream`, observers connect to stream using `listen`, then when any data is pushed using `broadcast` it is immediately sent to all observers.

inspiration:

- [geval](https://github.com/Raynos/geval)
- [observ](https://github.com/Raynos/observ)
- [es-observable](https://github.com/zenparsing/es-observable)

## usage

### `push = require('push-stream')`

### `removeListeners = push(a, b, c, ...)`

use `push` to connect a pipeline of streams together.

returns a function `removeListeners` to disconnect pipeline.

### `stream = push.Stream()`

a "push stream" is an object with the following keys:

- `listen`: a function to observe stream, returns a function to remove listener
- `broadcast`: a function to send values to all observers

when calling `listen` with a observer function it will return a `removeListener` function. you can call `removeListener` to remove your observer function from the stream. after you call it your observer function will not be called with any future values coming from the stream.

you can call `broadcast` each time you want to push a value to the stream. each time you call `broadcast` with a value, all observer functions that are observing the stream will be invoked with the value.

```js
var stream = push.Stream()

var removeListener = stream.listen(function (value) {
  console.log('observed', value)
})

stream.broadcast('hello') // observed hello
stream.broadcast('world') // observed world

removeListener()

stream.broadcast('meow') //
````

### `valueStream = push.values([1, 2, 3, 4, ...])`

### `mapStream = push.map(function (value) { return value })`

### `spyStream = push.spy(function (value) { console.log(value) })`

### TODO `filterStream = push.filter(function (value) { return true })`

### `watchStream = push.watch()`

when you observe `watchStream` with `.listen`, it will immediately return it's last value, if any.

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
