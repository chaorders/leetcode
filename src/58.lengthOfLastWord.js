/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.21%)
 * Total Accepted:    258.6K
 * Total Submissions: 802.6K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * Example:
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let isLastEmpty = true;
  let length = 0;
  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] === ' ') {
      if (isLastEmpty) {
        continue;
      } else {
        return length;
      }
    } else {
      isLastEmpty = false;
      length++;
    }
  }

  return length;
};

module.exports = lengthOfLastWord;