function cipherEncoder(shift, text, action) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  if(action === 'decode') alphabet.reverse()
  let result = ''
  for (let i = 0; i < text.length; i++) {
    if (alphabet.indexOf(text[i].toLowerCase()) < 0) {
      result += text[i];
      continue
    }

    let index = alphabet.indexOf(text[i].toLowerCase()) + +shift;
    if(index < 0) {
      Math.abs(index) > alphabet.length ? index = alphabet.length + (index % alphabet.length) :
          index = alphabet.length + index
    }

    if (index >= alphabet.length) {
      index = index % alphabet.length;
    }

    if (text[i] === text[i].toUpperCase()) {
      result += alphabet[index].toUpperCase()
      continue
    }
    result += alphabet[index]
  }
  return result + '\n'
}

module.exports = cipherEncoder
