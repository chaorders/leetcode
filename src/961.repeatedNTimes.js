const repeatedNTimes = (A) => {
  const set = {};
  let num;
  for (let index = 0; index < A.length; index++) {
    num = A[index];
    if (set[num] !== undefined) {
      return num;
    }

    set[num] = null;
  }
};

module.exports = repeatedNTimes;