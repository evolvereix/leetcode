/**
 * @name 合并两个有序链表
 * @source https://leetcode.com/problems/merge-two-sorted-lists/
 * @author algorizen
 * @date 2019-08-07
 * @complexity
 *
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 *  Input: 1->2->4, 1->3->4
 *  Output: 1->1->2->3->4->4
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 ? l1 : l2

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
