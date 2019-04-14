"use strict"

const arrayToLinkedList = require('../arrayToLinkedList');

const testCases = [
  { input: [1, 2, 4], answer: { val: 1, next: { val: 2, next: { val: 4, next: null } } } },
  { input: [1, 3, 4], answer: { val: 1, next: { val: 3, next: { val: 4, next: null } } } },
];

describe('util: arrayToLinkedList', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(arrayToLinkedList(t.input)).toEqual(t.answer);
    });
  });
});