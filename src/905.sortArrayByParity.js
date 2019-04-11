"use strict"

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