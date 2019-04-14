"use strict"

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 
 * @param {any[]} array 
 */
const arrayToLinkedList = (array) => {
  const dumHead = new ListNode();
  let pre = dumHead;
  array.map(e => {
    pre.next = new ListNode(e);
    pre = pre.next;
  });

  return dumHead.next;
};

module.exports = arrayToLinkedList;