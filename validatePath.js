function validatePath(...args) {
  let fs = require('fs')
  args.forEach(e => {
    if (!fs.existsSync(e)) {
      process.stderr.write('file/files does not exist at the given path')
      process.exit(3)
    }
  })
}

module.exports = validatePath