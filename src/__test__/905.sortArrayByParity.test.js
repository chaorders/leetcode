"use strict"

const sortArrayByParity = require('../905.sortArrayByParity');

const testCases = [
  { input: [3, 1, 2, 4], answer: [2, 4, 3, 1] },
  { input: [0, 1, 2], answer: [0, 2, 1] },
];

describe('../905.sortArrayByParrity', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(sortArrayByParity(t.input)).toEqual(t.answer);
    });
  });
});