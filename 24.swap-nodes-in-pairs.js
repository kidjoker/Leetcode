/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummyHead = new ListNode(-1, head);
  let prev = dummyHead;

  while (prev.next) {
    let left = prev.next;
    let right = left?.next;
    let rightnext = right?.next;

    if (right) {
      right.next = left;
      left.next = rightnext;
      prev.next = right;
    }

    prev = left;
  }

  return dummyHead.next;
};
// @lc code=end
