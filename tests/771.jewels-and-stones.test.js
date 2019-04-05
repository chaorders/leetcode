const numJewelsInStones = require('../src/771.jewels-and-stones');

const testCases = [
  { inputs: ["aA", "aAAbbbb"], answer: 3 },
  { inputs: ["z", "ZZ"], answer: 0 }
];

testCases.map(t => {
  test(`case: ${t.inputs} -> ${t.answer}`, () => {
    expect(numJewelsInStones(t.inputs[0], t.inputs[1])).toEqual(t.answer);
  })
})

describe('numJewelsInStones', () => {
  it('should be failed', () => {
    expect(3).not.toEqual(2);
  })
})