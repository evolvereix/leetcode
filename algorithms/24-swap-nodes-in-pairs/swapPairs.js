/**
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
  if (!head) return null

  let arr = []

  while (head) {
    let next = head.next
    head.next = null
    arr.push(head)
    head = next
  }

  const len = arr.length

  for (let i = 0; i < len; i += 2) {
    let a = arr[i]
    let b = arr[i + 1]

    if (!b) continue

    arr[i] = b
    arr[i + 1] = a
  }

  for (let i = 0; i < len - 1; i++) {
    arr[i].next = arr[i + 1]
  }

  return arr[0]
}