const validatePath = require('./validatePath')

function validateArguments(options) {
  if (!options.action || !options.shift) {
    process.stderr.write('Required parameters not passed (action / shift)')
    process.exit(2)
  }
  if (options.action !== 'encode' && options.action !== 'decode' ) {
    process.stderr.write('The action argument is invalid (valid options: encode / decode)')
    process.exit(4)
  }
  if (options.input) {
    validatePath(options.input)
  }
  if (options.output) {
    validatePath(options.output)
  }
  return options
}

module.exports = validateArguments