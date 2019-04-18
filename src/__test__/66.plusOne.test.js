"use strict"

const plusOne = require('../66.plusOne');

const testCases = [
  { input: [1, 2, 3], answer: [1, 2, 4] },
  { input: [4, 3, 2, 1], answer: [4, 3, 2, 2] },
  { input: [9], answer: [1, 0] },
  { input: [1, 9], answer: [2, 0] },
];

describe('66. Plus One', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(plusOne(t.input)).toEqual(t.answer);
    });
  });
});