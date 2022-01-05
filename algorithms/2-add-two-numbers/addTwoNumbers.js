/**
 * @name 两树相加
 * @source https://leetcode.com/problems/add-two-numbers/
 * @author algorizen
 * @date 2019-08-05
 * @complexity
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 *
 *  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 *  Output: 7 -> 0 -> 8
 *  Explanation: 342 + 465 = 807.
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

const addTwoNumbers = (l1, l2) => {
  let res = new ListNode(-1)
  let dummy = res
  let sum = 0
  let carry = 0

  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    if (sum >= 10) {
      carry = 1
      sum -= 10
    }

    dummy.next = new ListNode(sum)
    dummy = dummy.next

    sum = carry
    carry = 0
  }

  return res.next
}
