const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {

let replaceChar = morseCodeStr => {
  if (/^[*]{10}$/.test(morseCodeStr)) return ' ';
  let char = morseCodeStr.replace(/10/g,'.').replace(/11/g,'-').replace(/0/g, '');
  return MORSE_TABLE[char];
};

  let result = '';
  for (let i = 0; i < expr.length; i += 10) {
      result += replaceChar(expr.substring(i, i + 10));
  }
  return result;
}

module.exports = {
  decode
};
