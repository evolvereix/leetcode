/**
 * @name 用队列实现栈
 * @source https://leetcode.com/problems/implement-stack-using-queues/
 * @author algorizen
 * @date 2019-08-
 * @complexity
 *
 * Implement the following operations of a stack using queues.
 *
 *  push(x) -- Push element x onto stack.
 *  pop() -- Removes the element on top of the stack.
 *  top() -- Get the top element.
 *  empty() -- Return whether the stack is empty.
 *
 * Example:
 *
 *  MyStack stack = new MyStack();
 *
 *  stack.push(1);
 *  stack.push(2);
 *  stack.top();   // returns 2
 *  stack.pop();   // returns 2
 *  stack.empty(); // returns false
 *
 * Note:
 *
 *  You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
 *  Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
 *  You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).
 *
 */

/**
 * Initialize your data structure here.
 */
class MyStack {
  constructor() {
    this.stack = []
  }

  /**
   * Push element x onto stack.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    let index = this.stack.length
    this.stack[index] = x
  }

  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop() {
    if (this.empty()) return undefined

    let index = this.stack.length - 1
    let value = this.stack[index]
    this.stack.length = index
    return value
  }

  /**
   * Get the top element.
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1]
  }

  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty() {
    return !this.stack.length
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
