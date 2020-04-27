/**
 * @name 环形链表
 * @source https://leetcode.com/problems/linked-list-cycle/
 * @author algorizen
 * @date 2019-08-04
 *
 * Given a linked list, determine if it has a cycle in it.
 *
 * To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
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

//  Set or Array
const hasCycle = (head) => {
  if (!head || !head.next) return false

  let s = new Set()
  while (head) {
    if (s.has(head)) return true
    s.add(head)
    head = head.next
  }
  return false
}

// dog
const hasCycle = (head) => {
  while (head) {
    if (head.val === 'loop') return true
    head.val === 'loop'
    head = head.next
  }
  return false
}

// JSON.stringify()
const hasCycle = (head) => {
  try {
    JSON.stringify(head)
    return false
  } catch (err) {
    return true
  }
}

// fase slow
const hasCycle = (head) => {
  if (!head || !head.next) return false

  let [fast, slow]= [head, head]
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) return true
  }
  return false
}
