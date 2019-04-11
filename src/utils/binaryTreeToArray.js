const binaryTreeToArray = root => {
  let result = [];

  binaryTreeToArray0(root, 0, 1, result);
  // binaryTreeToArray1(root, result);

  return result;
}

const binaryTreeToArray0 = (root, level, numOfLevel, array) => {
  if (!root) {
    return;
  }

  let index = Math.pow(2, level) + numOfLevel - 2;
  array[index] = root.val;

  binaryTreeToArray0(root.left, level + 1, numOfLevel * 2 - 1, array);
  binaryTreeToArray0(root.right, level + 1, numOfLevel * 2, array);
}

const binaryTreeToArray1 = (root, array) => {
  if (!root) {
    return;
  }

  let queue = [];
  queue.push(root);
  let node;
  while(queue.length) {
    node = queue.shift();
    array.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}

module.exports = binaryTreeToArray;