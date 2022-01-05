/**
 * @name 有效的括号
 * @source https://leetcode.com/problems/valid-parentheses/
 * @author algorizen
 * @date 2019-08-09
 * @complexity
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 *
 * Note that an empty string is also considered valid.
 *
 * Note:
 *
 *  The solution set must not contain duplicate triplets.
 *
 * Example 1:
 *
 *  Input: "()"
 *  Output: true
 *
 * Example 2:
 *
 *  Input: "()[]{}"
 *  Output: true
 *
 * Example 3:
 *
 *  Input: "(]"
 *  Output: false
 *
 * Example 4:
 *
 *  Input: "([)]"
 *  Output: false
 *
 * Example 5:
 *
 *  Input: "{[]}"
 *  Output: true
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  const parentheses = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  let stack = []
  for (const c of s) {
    if (!parentheses.has(c)) {
      stack.push(c)
    } else if (parentheses.get(c) !== stack.pop()) {
      return false
    }
  }
  return !stack.length
}

const isValid = (s) => {
  let length
  do {
    length = s.length
    s = s.replace('()', '').replace('[]', '').replace('{}', '')
  } while (length !== s.length)
  return !s.length
}

console.log(isValid('([)]'))
