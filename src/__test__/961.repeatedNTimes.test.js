const repeated = require('../961.repeatedNTimes');

const testCases = [
  { input: [1, 2, 3, 3], answer: 3 },
  { input: [2, 1, 2, 5, 3, 2], answer: 2 },
  { input: [5, 1, 5, 2, 5, 3, 5, 4], answer: 5 },
];

describe('../961.repeatedNTimes', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(repeated(t.input)).toEqual(t.answer);
    });
  });
});