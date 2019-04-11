const sortedSquares = require('../977.sortedSquares');

const testCases = [
  { input: [-4, -1, 0, 3, 10], answer: [0, 1, 9, 16, 100] },
  { input: [-7, -3, 2, 3, 11], answer: [4, 9, 9, 49, 121] },
];

describe('../977.sortedSquares', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(sortedSquares(t.input)).toEqual(t.answer);
    });
  });
});