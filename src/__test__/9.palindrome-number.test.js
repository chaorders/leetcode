const isPalindrome = require('../9.palindrome-number');

const testCases = [
  { input: 121, anwser: true },
  { input: -121, anwser: false },
  { input: 10, anwser: false },
  { input: 11, anwser: true },
]

testCases.map(c => {
  test(`case: ${c.input}`, () => {
    expect(isPalindrome(c.input)).toBe(c.anwser);
  })
})