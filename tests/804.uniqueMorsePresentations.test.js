const uniqueMorsePresentations = require('../src/804.uniqueMorsePresentations');

const testCases = [
  { input: ['gin', 'zen', 'gig', 'msg'], answer: new Set().add('--...-.').add('--...--.').size },
]

describe('804. Unique Morse Code Words', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(uniqueMorsePresentations(t.input)).toEqual(t.answer);
    });
  });
});