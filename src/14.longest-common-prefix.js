/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.24%)
 * Total Accepted:    438.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  let index = 0;
  let char;

  outter:
  while (true) {
    char = strs[0][index];

    for (let sIndex = 1; sIndex < strs.length; sIndex++) {
      if (strs[sIndex][index] === undefined || strs[sIndex][index] !== char) {
        break outter;
      }
    }

    index++;
  }

  if (index === 0) {
    return '';
  }
  return strs[0].substr(0, index);
};

module.exports = longestCommonPrefix;