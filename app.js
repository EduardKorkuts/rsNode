process.stdin.setEncoding('utf8')
process.on('exit', (code) => {
  console.log(`\nexit code: ${code}`)
})

const fs = require('fs')
const cipherEncoder = require("./cipherEncoderFunc")
const parseArgs = require("./parseArgsFunc")
const transform = require('./createTransformStream')
const validateArguments = require('./validateArguments')
const options = validateArguments(parseArgs(process.argv))
const transformStream = transform(options, cipherEncoder)

if (options.input) {
  const readableStream = fs.createReadStream(options.input, 'utf-8')
  if (options.output) {
    const writableStream = fs.createWriteStream(options.output, {flags: 'a'})
    readableStream.pipe(transformStream).pipe(writableStream)
  } else {
    readableStream.pipe(transformStream).pipe(process.stdout)
  }
}

if (!options.input) {
  if (options.output) {
    const writableStream = fs.createWriteStream(options.output, {flags: 'a'})
    process.stdin.pipe(transformStream).pipe(writableStream)
  } else {
    process.stdin.setEncoding('utf8')
    process.stdin.pipe(transformStream).pipe(process.stdout)
  }
}




















