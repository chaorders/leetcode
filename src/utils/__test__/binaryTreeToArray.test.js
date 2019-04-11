const binaryTreeToArray = require('../binaryTreeToArray');

const testCases = [
  { input: { val: 0 }, answer: [0] },
  { input: { val: 1, left: { val: 0 }, right: { val: 2 } }, answer: [1, 0, 2] },
  {
    input: {
      val: 8,
      left: {
        val: 5,
        left: { val: 1 },
        right: { val: 4 }
      },
      right: {
        val: 7,
        left: { val: 3 },
        right: { val: 6 }
      }
    }, answer: [8, 5, 7, 1, 4, 3, 6]
  },
  {
    input: {
      val: 8,
      left: {
        val: 5,
        right: { val: 4 }
      },
      right: {
        val: 7,
        left: { val: 3 },
        right: { val: 6 }
      }
    }, answer: [8, 5, 7, undefined, 4, 3, 6]
  },
]

describe('util listToArray', () => {
  testCases.map(t => {
    it(`Test: ${t.answer}`, () => {
      expect(binaryTreeToArray(t.input)).toEqual(t.answer);
    });
  });
});