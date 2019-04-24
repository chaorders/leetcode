"use strict"

const addBinary = require('../67.addBinary');

const testCases = [
  { input: ['11', '1'], answer: '100' },
  { input: ['1010', '1011'], answer: '10101' },
  { input: ['1', '0'], answer: '1' },
];

describe('67.addBinary', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(addBinary(t.input[0], t.input[1])).toEqual(t.answer);
    });
  });
});