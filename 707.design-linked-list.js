/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start
class LinkedNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}
var MyLinkedList = function() {
    this.dummyHead = new LinkedNode(0, null);
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let result;
    let cur = this.dummyHead;
    for(let i = 0; i <= index; i++) {
        if(!cur) break;
        cur = cur.next;
    }

    return cur ? cur.val : -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let firstNode = this.dummyHead.next;
    let newNode = new LinkedNode(val,firstNode);
    this.dummyHead.next = newNode;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new LinkedNode(val,null);
    let cur = this.dummyHead;
    while(cur.next !== null) {
        cur = cur.next;
    }

    cur.next = newNode;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let prev = this.dummyHead;
    let cur = this.dummyHead.next;
    for(let i = 0; i < index; i++) {
        prev = cur;
        cur = cur?.next;
    }
    if(!prev && !cur) return;
    let newNode = new LinkedNode(val,cur);
    prev.next = newNode;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let prev = this.dummyHead;
    let cur = this.dummyHead.next;
    for(let i = 0; i < index; i++) {
        if(!cur) break;
        prev = cur;
        cur = cur.next;
    }
    cur === null ? prev.next = null : prev.next = cur.next;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end