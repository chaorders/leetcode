"use strict"

const removeElement = require('../27.removeElement');

const testCases = [
  { input: [[3, 2, 2, 3], 3], answer: 2 },
  { input: [[0, 1, 2, 2, 3, 0, 4, 2], 2], answer: 5 },
  { input: [[0, 1, 2, 2, 3, 9, 9, 9], 9], answer: 5 },
];

describe('27. Remove Element', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(removeElement(t.input[0], t.input[1])).toEqual(t.answer);
    });
  });
});