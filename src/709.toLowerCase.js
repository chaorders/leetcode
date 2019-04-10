const a_CHAR_CODE = 97;
const A_CHAR_CODE = 65;
const Z_CHAR_CODE = 90;
const CASE_DIFF = a_CHAR_CODE - A_CHAR_CODE;

const toLowerCase = str => {
  let char;
  let result = '';
  for (let index = 0; index < str.length; index++) {
    char = str[index].charCodeAt(0);
    if (char >= A_CHAR_CODE && char <= Z_CHAR_CODE) {
      result += String.fromCharCode(char + CASE_DIFF);
    } else {
      result += str[index];
    }
  }
  
  return result;
};

module.exports = toLowerCase;