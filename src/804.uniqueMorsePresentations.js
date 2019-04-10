const MORSE_ARRAY = [
  ".-", "-...", "-.-.",
  "-..", ".", "..-.",
  "--.", "....", "..",
  ".---", "-.-", ".-..",
  "--", "-.", "---",
  ".--.", "--.-", ".-.",
  "...", "-", "..-",
  "...-", ".--", "-..-",
  "-.--", "--.."
];

const uniqueMorsePresentations = words => {
  let morseCodes = new Set();
  let charCode;
  let word;
  for (let outIndex = 0; outIndex < words.length; outIndex++) {
    word = words[outIndex];

    let result = '';
    for (let innderIndex = 0; innderIndex < word.length; innderIndex++) {
      charCode = word.charCodeAt(innderIndex) - 97;
      result += MORSE_ARRAY[charCode];
    }
    morseCodes.add(result);
  }

  return morseCodes.size;
};

module.exports = uniqueMorsePresentations;