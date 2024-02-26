/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode(-1, head);
  let prev = dummyHead;
  let current = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
      current = prev.next;
    } else {
      current = current.next;
      prev = prev.next;
    }
  }

  return dummyHead.next;
};
// @lc code=end