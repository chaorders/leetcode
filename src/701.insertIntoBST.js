
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const insertIntoBST = (root, val) => {
  if (root == null) {
    return new TreeNode(val);
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }

  return root;
};


module.exports = { insertIntoBST, TreeNode };