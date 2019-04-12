"use strict"

const flipAndInvertImage = require('../832.flipAndInvertImage');

const testCases = [
  { input: [[1, 1, 0], [1, 0, 1], [0, 0, 0]], answer: [[1, 0, 0], [0, 1, 0], [1, 1, 1]] },
  { input: [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]], answer: [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]] },
];

describe('832', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(flipAndInvertImage(t.input)).toEqual(t.answer);
    });
  });
});