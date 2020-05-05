/**
 * @name 杨辉三角
 * @source https://leetcode.com/problems/pascals-triangle/
 * @author algorizen
 * @date @2020/05/05
 * @complexity
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 *
 *
 * Example:
 *
 *  Input: 5
 *  Output:
 *  [
 *       [1],
 *      [1,1],
 *     [1,2,1],
 *    [1,3,3,1],
 *   [1,4,6,4,1]
 *  ]
 *
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (!numRows) return []
  let r = Array(numRows)
  r[0] = [1]
  for (let i = 1; i < numRows; i++) {
    r[i] = []
    r[i - 1].reduce((acc, cur) => {
      r[i].push(acc + cur)
      return cur
    }, 0)
    r[i].push(1)
  }
  return r
}
