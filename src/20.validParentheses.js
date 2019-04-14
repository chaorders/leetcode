/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.23%)
 * Total Accepted:    557.8K
 * Total Submissions: 1.5M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */

const BRACKET_PAIR = {
  '(': ')',
  '{': '}',
  '[': ']',
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let pairs = [];
  let char;
  for (let index = 0; index < s.length; index++) {
    char = BRACKET_PAIR[s[index]];

    if (char) {
      pairs.push(s[index]);
    } else {
      if (BRACKET_PAIR[pairs.pop()] === s[index]) {
        continue;
      }

      return false;
    }
  }

  if (pairs.length) {
    return false;
  } else {
    return true;
  }
};

module.exports = isValid;