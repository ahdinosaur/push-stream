module.exports = ReadableStream

function ReadableStream (stream) {
  return function readableStream (observer) {
    return stream(observer)
  }
}
