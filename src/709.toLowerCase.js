/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 *
 * https://leetcode.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (76.47%)
 * Total Accepted:    92.2K
 * Total Submissions: 120.5K
 * Testcase Example:  '"Hello"'
 *
 * Implement function ToLowerCase() that has a string parameter str, and
 * returns the same string in lowercase.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "Hello"
 * Output: "hello"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "here"
 * Output: "here"
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "LOVELY"
 * Output: "lovely"
 * 
 * 
 * 
 * 
 * 
 */

const a_CHAR_CODE = 97;
const A_CHAR_CODE = 65;
const Z_CHAR_CODE = 90;
const CASE_DIFF = a_CHAR_CODE - A_CHAR_CODE;

/**
 * @param {string} str
 * @return {string}
 */
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