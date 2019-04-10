const twoSum = require('../1.two-sum');

const testCases = [
  { input: { nums: [1, 3, 5, 75, 245], target: 80 }, anwser: [2, 3] },
  { input: { nums: [3, 6, 8, 15, 58], target: 61 }, anwser: [0, 4] },
  { input: { nums: [4, 8, 18, 42, 73, 144, 155, 851], target: 924 }, anwser: [4, 7] },
  { input: { nums: [2, 7, 11, 15], target: 9 }, anwser: [0, 1] },
];

test('test', () => {
  testCases.map((c) => {
    expect(twoSum(c.input.nums, c.input.target)).toEqual(c.anwser);
  });
});
