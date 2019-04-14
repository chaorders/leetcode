"use strict"

const mergeTwoSortedLists = require('../21.mergeTwoSortedLists');
const arrayToLinkedList = require('../utils/arrayToLinkedList');

const testCases = [
  {
    input: [
      arrayToLinkedList([1, 2, 4]),
      arrayToLinkedList([1, 3, 4])
    ],
    answer: arrayToLinkedList([1, 1, 2, 3, 4, 4])
  },
];

describe('21', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(mergeTwoSortedLists(t.input[0], t.input[1])).toEqual(t.answer);
    });
  });
});