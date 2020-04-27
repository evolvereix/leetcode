/**
 * @name 两两交换链表中的节点
 * @source https://leetcode.com/problems/swap-nodes-in-pairs/
 * @author algorizen
 * @date 2019-08-08
 * @complexity 
 * 
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * 
 * Example:
 * 
 *  Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
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
 * @return {ListNode}
 */

const swapPairs = (head) => {
  if (!head || !head.next) return head
  let self = new ListNode(null)
  self.next = head
  let prev = self
  while (prev.next && prev.next.next) {
    let [a, b] = [prev.next, prev.next.next]
    ;[prev.next, a.next, b.next] = [b, b.next, a]
    prev = a
  }
  return self.next
}

// 递归
const swapPairs = (head) => {
  if (!head || !head.next) return head
  let [a, b] = [head, head.next]
  ;[a.next, b.next] = [swapPairs(b.next), a]
  return b
}