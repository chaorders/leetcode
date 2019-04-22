"use strict"

const longestSubstringWithoutRepeatingCharacters = require('../3.longestSubstringWithoutRepeatingCharacters');

const testCases =  [
  { input: 'abcabcbb', answer: 3 },
  { input: 'bbbbb', answer: 1 },
  { input: 'pwwkew', answer: 3 },
  { input: 'abcabcdbb', answer: 4 },
  { input: 'dvdf', answer: 3 },
];

describe('3. Longest Substring Without Repeating Characters', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(longestSubstringWithoutRepeatingCharacters(t.input)).toEqual(t.answer);
    });
  });
});