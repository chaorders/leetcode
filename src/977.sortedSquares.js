'use strict';

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