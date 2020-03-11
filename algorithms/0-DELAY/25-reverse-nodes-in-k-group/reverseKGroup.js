/**
 * @source https://leetcode.com/problems/reverse-nodes-in-k-group/
 * @author algorizen
 * @date 2019-08-08
 * @complexity
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
 *
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 *
 * Example:
 *
 *  Given this linked list: 1->2->3->4->5
 *  For k = 2, you should return: 2->1->4->3->5
 *  For k = 3, you should return: 3->2->1->4->5
 *
 * Note:
 *
 *  Only constant extra memory is allowed.
 *  You may not alter the values in the list's nodes, only nodes itself may be changed.
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
 * @param {number} k
 * @return {ListNode}
 */

// TODO
const reverseKGroup = (head, k) => {
  let cur = head
  let count = 0
  while (cur && count !== k) {
    cur = cur.next
    count++
  }
  
}
