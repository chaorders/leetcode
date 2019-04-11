"use strict"

const sortArrayByParity = require('../905.sortArrayByParity');

const testCases = [
  { input: [3, 1, 2, 4], answer: [2, 4, 1, 3] },
];

describe('../905.sortArrayByParrity', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(sortArrayByParity(t.input)).toEqual(t.answer);
    });
  });
});