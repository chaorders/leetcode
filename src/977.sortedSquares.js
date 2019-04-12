'use strict';

/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (72.43%)
 * Total Accepted:    51.1K
 * Total Submissions: 70.6K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * Given an array of integers A sorted in non-decreasing order, return an array
 * of the squares of each number, also in sorted non-decreasing order.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A is sorted in non-decreasing order.
 * 
 * 
 * 
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = (A) => {
  let minPosIntIndex = A.length - 1;
  for (let index = 0; index < A.length; index++) {
    if (A[index] >= 0) {
      minPosIntIndex = index;
      break;
    } else {
      A[index] = Math.abs(A[index]);
    }
  }

  let result = [];
  let negIndex = minPosIntIndex - 1;
  let posIndex = minPosIntIndex;
  while (negIndex !== -1 && posIndex < A.length) {
    let neg = A[negIndex];
    let pos = A[posIndex];
    if (neg <= pos) {
      result.push(neg ** 2);
      negIndex--;
    } else {
      result.push(pos ** 2);
      posIndex++;
    }
  }

  while (negIndex !== -1) {
    result.push(A[negIndex] ** 2);
    negIndex--;
  }

  while (posIndex < A.length) {
    result.push(A[posIndex] ** 2);
    posIndex++;
  }

  return result;
};

module.exports = sortedSquares;