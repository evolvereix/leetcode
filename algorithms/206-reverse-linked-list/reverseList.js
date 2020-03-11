/**
 * @source https://leetcode.com/problems/reverse-linked-list/
 * @author algorizen
 * @date 2019-08-04
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 *  Input: 1->2->3->4->5->NULL
 *  Output: 5->4->3->2->1->NULL
 *
 * Follow up:
 *
 *  A linked list can be reversed either iteratively or recursively. Could you implement both?
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

const reverseList = (head) => {
  let [prev, cur] = [null, head]
  while (cur) {
    ;[cur.next, prev, cur] = [prev, cur, cur.next]
  }
  return prev
}