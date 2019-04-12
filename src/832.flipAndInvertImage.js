"use strict"

const flipAndInvertImage = (A) => {
  let array;
  let tmp;
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
      if (array[innerIndex] ^ array[innerLength - innerIndex - 1]) {
        continue;
      }

      tmp = array[innerIndex];
      array[innerIndex] = array[innerLength - innerIndex - 1] ^ 1;
      array[innerLength - innerIndex - 1] = tmp ^ 1;
    }
  }

  return A;
};

module.exports = flipAndInvertImage;