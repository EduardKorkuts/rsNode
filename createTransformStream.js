const {Transform: CreateTransformStream} = require('stream')
const transformText = (options, transformFunc) => {
  return new CreateTransformStream(
      {
        transform(chunk, encoding, callback) {
         let result = transformFunc(options.shift, chunk.toString(), options.action)
         callback(null, result)
        }
      }
  )
}
module.exports = transformText