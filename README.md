# push-stream

minimal pipeable push stream

**ignore**

```shell
npm install --save push-stream
```

for a much better way of doing streaming, see [`pull-stream`](https://github.com/dominictarr/pull-stream).

the difference from this and `pull-stream` is that push streams are subscribed to by subscribers, and when any data is pushed it is broadcasted to all subscribers.

inspiration:

- [geval](https://github.com/Raynos/geval)
- [observ](https://github.com/Raynos/observ)
- [zen-observable](https://github.com/zenparsing/zen-observable)

## usage

a "push stream" is an object with

- `broadcast` function to send values to subscribers
- `listen` function to subscribe to stream, returns function to unlisten

### `push = require('push-stream')`

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
