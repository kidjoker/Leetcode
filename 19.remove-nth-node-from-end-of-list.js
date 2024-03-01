/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(-1, head);
  let left = dummyHead;
  let right = left;

  let distance = 0;
  while (distance < n) {
    right = right.next;
    distance++;
  }

  while (right.next) {
    left = left.next;
    right = right.next;
  }
  1;

  left.next = left.next.next;
  return dummyHead.next;
};
// @lc code=end