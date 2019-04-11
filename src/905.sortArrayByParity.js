"use strict"

const sortArrayByParity = (A) => {
  let result = new Array(A.length);
  let evenIndex = 0;
  let oddIndex = A.length - 1;

  let value;
  for (let index = 0; index < A.length; index++) {
    value = A[index];
    if (value % 2 === 0) {
      result[evenIndex] = value;
      evenIndex++;
    } else {
      result[oddIndex] = value;
      oddIndex--;
    }
  }

  return result;
};

module.exports = sortArrayByParity;