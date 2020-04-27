/**
 * @name 环形链表 II
 * @source https://leetcode.com/problems/linked-list-cycle-ii/
 * @author algorizen
 * @date 2019-08-04
 *
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 *
 * To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
 *
 * Note: Do not modify the linked list.
 * 
 * Example 1:
 *
 *  Input: head = [3,2,0,-4], pos = 1
 *  Output: true
 *  Explanation: There is a cycle in the linked list, where tail connects to the second node.
 *
 * Example 2:
 *
 *  Input: head = [1,2], pos = 0
 *  Output: true
 *  Explanation: There is a cycle in the linked list, where tail connects to the first node.
 *
 * Example 3:
 *
 *  Input: head = [1], pos = -1
 *  Output: false
 *  Explanation: There is no cycle in the linked list.
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
 * @return {boolean}
 */

// fase slow
const hasCycle = (head) => {
  if (!head || !head.next) return null

  let [fast, slow]= [head, head]
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) return slow
  }
  return null
}

//  Set or Array
const hasCycle = (head) => {
  if (!head || !head.next) return null

  let temp = []
  while (head) {
    if (temp.includes(head)) return head
    temp.push(head)
    head = head.next
  }
  return null
}
