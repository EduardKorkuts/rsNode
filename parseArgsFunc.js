function parseArguments(args) {
  const commander = require('commander');
  commander
      .option('-s, --shift <shiftValue>', 'a shift')
      .option('-i, --input <inputPath>', 'an input file')
      .option('-o, --output <outputPath>', 'an output file')
      .option('-a, --action <actionOption>', 'an action encode/decode')
  commander.parse(args)
  return commander.opts();
}

module.exports = parseArguments