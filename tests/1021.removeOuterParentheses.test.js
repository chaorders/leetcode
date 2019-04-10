const removeOuterParentheses = require('../src/1021.removeOuterParentheses');

testCases = [
  { input: '(()())(())', answer: '()()()' },
  { input: '(()())(())(()(()))', answer: '()()()()(())' },
  { input: '()()', answer: '' },
  { input: '(((())))((()))(())()', answer: '((()))(())()' }
];

describe('1021: Remove Outermost Parenthese', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(removeOuterParentheses(t.input)).toEqual(t.answer);
    })
  });
});