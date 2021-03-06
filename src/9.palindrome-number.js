/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (42.24%)
 * Total Accepted:    526.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 * 
 * Input: 121
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 * 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   if (x == 0) {
//     return true;
//   }

//   if (x < 0 || x % 10 == 0) {
//     return false;
//   }

//   let reversedX = 0;
//   while (x > reversedX) {
//     reversedX = reversedX * 10 + x % 10;
//     x = Math.floor(x / 10);
//   }

//   return ((x == reversedX) || (x == Math.floor(reversedX / 10)));
// };
var isPalindrome = x => {
  if (x === 0) {
    return true;
  }

  if (x < 0) {
    return false;
  }

  let numStr = x.toString();

  let start = 0;
  let end = numStr.length - 1;
  while (start < end) {
    if (numStr[start] !== numStr[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;