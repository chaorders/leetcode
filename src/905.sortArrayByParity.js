"use strict"

/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 *
 * https://leetcode.com/problems/sort-array-by-parity/description/
 *
 * algorithms
 * Easy (72.44%)
 * Total Accepted:    81.1K
 * Total Submissions: 111.9K
 * Testcase Example:  '[3,1,2,4]'
 *
 * Given an array A of non-negative integers, return an array consisting of all
 * the even elements of A, followed by all the odd elements of A.
 * 
 * You may return any answer array that satisfies this condition.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= A.length <= 5000
 * 0 <= A[i] <= 5000
 * 
 * 
 * 
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = (A) => {
  let evenIndex = 0;
  let tmp;
  let value;

  for (let index = 0; index < A.length; index++) {
    value = A[index];
    if ((value & 1) === 0) {
      if (evenIndex === index) {
        evenIndex++;
        continue;
      }

      tmp = A[evenIndex];
      A[evenIndex] = value;
      A[index] = tmp;
      evenIndex++;
    } 
  }

  return A;
};

module.exports = sortArrayByParity;