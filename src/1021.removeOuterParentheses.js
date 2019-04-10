const removeOuterParentheses = (S) => {
  let parenthStack = [];
  let result = '';

  let str;
  for (let index = 0; index < S.length; index++) {
    str = S[index];

    if (str === ')') {
      parenthStack.pop();

      if (parenthStack.length > 0) {
        result += str;
      }
    } else {
      parenthStack.push(str);

      if (parenthStack.length > 1) {
        result += str;
      }
    }
  }

  return result;
}

module.exports = removeOuterParentheses;