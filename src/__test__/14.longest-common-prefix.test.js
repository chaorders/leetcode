"use strict"

const longestCommonPrefix = require('../14.longest-common-prefix');

const testCases = [
  { input: ["flower","flow","flight"], answer: "fl" },
  { input: ["dog","racecar","car"], answer: "" },
];

describe('14.longest common prefix', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(longestCommonPrefix(t.input)).toEqual(t.answer);
    });
  });
});