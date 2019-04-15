"use strict"

const removeDuplicatesFromSortedArray = require('../26.removeDuplicatesFromSortedArray');

const testCases = [
  { input: [1, 1, 2], answer: 2 },
  { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], answer: 5 },
  { input: [], answer: 0 },
  { input: [1, 1, 1, 1, 1], answer: 1 },
  { input: [1, 2, 3, 4, 5], answer: 5 },
  { input: [1, 2, 3, 4, 5, 6, 7, 8, 9], answer: 9 },
];

describe('26. Remove Duplicates from Sorted Array', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(removeDuplicatesFromSortedArray(t.input)).toEqual(t.answer);
    });
  });
});