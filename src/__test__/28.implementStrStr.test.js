"use strict"

const implementStrStr = require('../28.implementStrStr');

const testCases = [
  { input: ['hello', 'll'], answer: 2 },
  { input: ['aaaaa', 'bba'], answer: -1 },
  { input: ['', ''], answer: 0 },
];

describe('28. Implement strStr', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(implementStrStr(t.input[0], t.input[1])).toEqual(t.answer);
    });
  });
});