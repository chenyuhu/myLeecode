/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  const arr = []
  if (head) {
    while (head.next) {
      arr.push(head.val)
      head = head.next
    }
    arr.push(head.val)
    var arr1 = arr.filter(item => item<x).concat(arr.filter(item => item >= x))
    var list = new ListNode(0)
    var node = list
    arr1.forEach(item => {
      node.next = new ListNode(item)
      node= node.next
    })
    return list.next
  }
  return head
};
