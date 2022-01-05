/**
 * @name 简化路径
 * @source https://leetcode.com/problems/simplify-path/
 * @author algorizen
 * @date 2019-08-11
 * @complexity
 *
 * Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.
 *
 * In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level. For more information, see: Absolute path vs relative path in Linux/Unix
 *
 * Note that the returned canonical path must always begin with a slash /, and there must be only a single slash / between two directory names. The last directory name (if it exists) must not end with a trailing /. Also, the canonical path must be the shortest string representing the absolute path.
 *
 *
 * Example 1:
 *
 *  Input: "/home/"
 *  Output: "/home"
 *  Explanation: Note that there is no trailing slash after the last directory name.
 *
 * Example 2:
 *
 *  Input: "/../"
 *  Output: "/"
 *  Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
 *
 * Example 3:
 *
 *  Input: "/home//foo/"
 *  Output: "/home/foo"
 *  Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
 *
 * Example 4:
 *
 *  Input: "/a/./b/../../c/"
 *  Output: "/c"
 *
 * Example 5:
 *
 *  Input: "/a/../../b/../c//.//"
 *  Output: "/c"
 *
 * Example 6:
 *
 *  Input: "/a//b////c/d//././/.."
 *  Output: "/a/b/c"
 *
 */

/**
 * @param {string} path
 * @return {string}
 */

// use stack 1
const simplifyPath = (path) => {
  let stack = []
  let skip = new Set(['..', '.', ''])
  let k = path.split('/')

  for (const v of k) {
    if (v === '..' && stack.length) {
      stack.pop()
    } else if (!skip.has(v)) {
      stack.push(v)
    }
  }
  return '/' + stack.join('/')
}

// use stack 2
const simplifyPath = (path) => {
  let stack = []
  let k = path.split('/').filter((p) => {
    return p && p !== '.'
  })

  for (const v of k) {
    v === '..' ? stack.pop() : stack.push(v)
  }

  return '/' + stack.join('/')
}

// I don't understand.
// use regexp
const simplifyPath = (path) => {
  path = path.replace(/\/{2,}/g, '/').replace(/(\/\.(?=\/|\/$)|\/$)/g, '')
  console.log('path', path)

  while (
    path !==
    (p = path.replace(/(^.*?)((?:\/\.\.(?=\/|$))+)/, (match, dirs, dd) =>
      dirs.replace(new RegExp(`(\\/[^\\/]+){0,${dd.length / 3}}$`), '')
    ))
  )
    path = p
  return path || '/'
}
