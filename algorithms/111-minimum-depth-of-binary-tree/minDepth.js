/**
 * @name 二叉树的最小深度
 * @source https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * @author algorizen
 * @date @2020/04/27
 * @complexity
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given binary tree [3,9,20,null,null,15,7],
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * return its minimum depth = 2.
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

const minDepth = (root) => {
  if (!root) return 0
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  return root.left && root.right ? Math.min(left, right) + 1 : left + right + 1
}
