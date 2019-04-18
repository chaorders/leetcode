"use strict"

const lengthOfLastWord = require('../58.lengthOfLastWord');

const testCases =  [
  { input: 'Hello World', answer: 5 },
  { input: 'Hello World ', answer: 5 },
  { input: '', answer: 0 },
  { input: '    ', answer: 0 },
  { input: ' Hi    ', answer: 2 },
  { input: 'a ', answer: 1 },
  { input: 'abc ', answer: 3 },
];

describe('58. Length of Last Word', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(lengthOfLastWord(t.input)).toEqual(t.answer);
    });
  });
});