"use strict"

const searchInsertPosition = require('../35.searchInsertPosition');

const testCases = [
  { input: [[1, 3, 5, 6], 5], answer: 2 },
  { input: [[1, 3, 5, 6], 2], answer: 1 },
  { input: [[1, 3, 5, 6], 7], answer: 4 },
  { input: [[1, 3, 5, 6], 0], answer: 0 },
];

describe('35. Search Insert Position', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(searchInsertPosition(t.input[0], t.input[1])).toEqual(t.answer);
    });
  });
});