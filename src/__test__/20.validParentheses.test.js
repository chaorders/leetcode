"use strict"

const validParentheses = require('../20.validParentheses');

const testCases = [
  { input: '()', answer: true },
  { input: '()[]{}', answer: true },
  { input: '(]', answer: false },
  { input: '([)]', answer: false },
  { input: '{[]}', answer: true },
];

describe('20.validParentheses', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(validParentheses(t.input)).toEqual(t.answer);
    });
  });
});