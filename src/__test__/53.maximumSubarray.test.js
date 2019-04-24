"use strict"

const maximumSubarray = require('../53.maximumSubarray');

const testCases = [
  { input: [-2, 1, -3, 4, -1, 2, 1, -5, 4], answer: 6 },
  { input: [-1], answer: -1 },
  { input: [-2, -1], answer: -1 }
];

describe('53.maximumSubarray', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(maximumSubarray(t.input)).toEqual(t.answer);
    });
  });
});