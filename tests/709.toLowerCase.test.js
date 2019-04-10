const toLowerCase = require('../src/709.toLowerCase');

const testCases = [
  { input: 'Hello', answer: 'hello' },
  { input: 'here', answer: 'here' },
  { input: 'LOVELY', answer: 'lovely' },
];

describe('709. To Lower Case', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(toLowerCase(t.input)).toEqual(t.answer);
    });
  });
});