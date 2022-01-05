/**
 * @name 合并K个排序链表
 * @source https://leetcode.com/problems/merge-k-sorted-lists/
 * @author algorizen
 * @date 2019-08-08
 * @complexity
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 *
 * Example:
 *
 *  Input:
 *  [
 *    1->4->5,
 *    1->3->4,
 *    2->6
 *  ]
 *
 *  Output: 1->1->2->3->4->4->5->6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = (lists) => {
  let ans = []

  lists.forEach((item) => {
    while (item) {
      ans.push(new ListNode(item.val))
      item = item.next
    }
  })

  ans.sort((a, b) => a.val - b.val)

  if (!ans.length) return null

  for (let i = 0, len = ans.length - 1; i < len; i++) {
    ans[i].next = ans[i + 1]
  }

  return ans[0]
}
