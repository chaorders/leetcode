/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let index = 1;
  let length = Math.min(a.length, b.length);
  let result = [];
  let cp = 0;

  let aChar, bChar;
  while (index <= length) {
    aChar = a[a.length - index];
    bChar = b[b.length - index];

    result.unshift(aChar ^ bChar ^ cp);
    cp = ((aChar & bChar) | ((aChar | bChar) & cp));

    index++;
  }

  while (index <= a.length) {
    aChar = a[a.length - index];

    result.unshift(aChar ^ cp);
    cp = aChar & cp;

    index++;
  }

  while (index <= b.length) {
    bChar = b[b.length - index];

    result.unshift(bChar ^ cp);
    cp = bChar & cp;

    index++;
  }

  if (cp) {
    result.unshift(1);
  }

  return result.join('');
};

module.exports = addBinary;