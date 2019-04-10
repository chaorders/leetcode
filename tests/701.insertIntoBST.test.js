const { insertIntoBST, TreeNode } = require('../src/701.insertIntoBST');

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = this.right = null;
//   }
// };

const ROOT = new TreeNode(4);
ROOT.left = new TreeNode(2);
ROOT.left.left = new TreeNode(1);
ROOT.left.right = new TreeNode(3);
ROOT.right = new TreeNode(7);

testCases = [
  { input: [ROOT, 5] }
];

const checkBalance = root => {
  if (root) {
    if (root.left && root.val < root.left.val) {
      return false;
    }

    if (root.right && root.val > root.right.val) {
      return false;
    }

    return (checkBalance(root.left) && checkBalance(root.right));
  }

  return true;
}

describe('701. Insert into a Binary Search Tree', () => {
  it('checkBalance should return true', () => {
    expect(checkBalance(ROOT)).toBeTruthy();
  });

  it('checkBalance should return false', () => {
    expect(checkBalance({ val: 1, left: { val: 2 } })).toBeFalsy();
  });

  it('checkBalance should return false', () => {
    expect(checkBalance({ val: 1, right: { val: 0 } })).toBeFalsy();
  });

  testCases.map(t => {
    it(`Test: ${t.input}`, () => {
      expect(checkBalance(insertIntoBST(ROOT))).toBeTruthy();
    });
  });
});