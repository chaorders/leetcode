const numUniqueEmails = require('../929.numUniqueEmails');

const testCases = [
  {
    input: [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com'
    ],
    answer: 2
  },
  {
    input: [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
      'testemail@lee.tcode.com'
    ],
    answer: 2
  },
];

describe('929. Unique Email Addresses', () => {
  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(numUniqueEmails(t.input)).toEqual(t.answer);
    });
  });
});