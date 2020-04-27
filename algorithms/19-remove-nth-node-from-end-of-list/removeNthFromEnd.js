/**
 * @name 删除链表的倒数第N个节点
 * @source https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @author algorizen
 * @date 2019-08-05
 * @complexity 
 * 
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 
 * Example:
 * 
 *  Given linked list: 1->2->3->4->5, and n = 2.
 * 
 *  After removing the second node from the end, the linked list becomes 1->2->3->5.
 * 
 * Note:
 * 
 *  Given n will always be valid.
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
 * @param {number} n
 * @return {ListNode}
 */

const removeNthFromEnd = (head, n) => {
  var arr = []

  while (head) {
    arr.push(new ListNode(head.val))
    head = head.next
  }

  arr.splice(-n, 1)

  for (let i = 0; i < arr.length; i++) {
    arr[i].next = arr[i + 1]
  }

  return arr.length === 0 ? null : arr[0]
}