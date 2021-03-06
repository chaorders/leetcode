"use strict"

/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 *
 * https://leetcode.com/problems/flipping-an-image/description/
 *
 * algorithms
 * Easy (72.02%)
 * Total Accepted:    85K
 * Total Submissions: 118K
 * Testcase Example:  '[[1,1,0],[1,0,1],[0,0,0]]'
 *
 * Given a binary matrix A, we want to flip the image horizontally, then invert
 * it, and return the resulting image.
 * 
 * To flip an image horizontally means that each row of the image is reversed.
 * For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
 * 
 * To invert an image means that each 0 is replaced by 1, and each 1 is
 * replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,1,0],[1,0,1],[0,0,0]]
 * Output: [[1,0,0],[0,1,0],[1,1,1]]
 * Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
 * Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
 * Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 * Explanation: First reverse each row:
 * [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
 * Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 * 
 * 
 * Notes:
 * 
 * 
 * 1 <= A.length = A[0].length <= 20
 * 0 <= A[i][j] <= 1
 * 
 * 
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) => {
  let array;
  let innerLength;
  let innerMidIndex;
  for (let outerIndex = 0; outerIndex < A.length; outerIndex++) {
    array = A[outerIndex];
    innerLength = array.length;
    innerMidIndex = (innerLength - 1) / 2;

    // invert middle of odd length array
    if (((innerLength - 1) % 2) === 0) {
      array[innerMidIndex] = array[innerMidIndex] ^ 1;
    }

    for (let innerIndex = 0; innerIndex < innerMidIndex; innerIndex++) {
      // skip unnecessary swap and invert
      if (array[innerIndex] !== array[innerLength - innerIndex - 1]) {
        continue;
      } else {
        array[innerIndex] = array[innerIndex] ^ 1;
        array[innerLength - innerIndex - 1] = array[innerLength - innerIndex - 1] ^ 1;
      }
    }
  }

  return A;
};

module.exports = flipAndInvertImage;