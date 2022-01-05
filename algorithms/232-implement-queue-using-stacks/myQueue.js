/**
 * @name 用栈实现队列
 * @source https://leetcode.com/problems/implement-queue-using-stacks/
 * @author algorizen
 * @date 2019-08-
 * @complexity
 *
 * Implement the following operations of a queue using stacks.
 *
 *  push(x) -- Push element x to the back of queue.
 *  pop() -- Removes the element from in front of queue.
 *  peek() -- Get the front element.
 *  empty() -- Return whether the queue is empty.
 *
 * Example:
 *
 *  MyQueue queue = new MyQueue();
 *
 *  queue.push(1);
 *  queue.push(2);
 *  queue.peek();  // returns 1
 *  queue.pop();   // returns 1
 *  queue.empty(); // returns false
 *
 * Note:
 *
 *  You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
 *  Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
 *  You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).
 *
 */

/**
 * Initialize your data structure here.
 */

class MyQueue {
  constructor() {
    this.input = []
    this.output = []
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.input.push(x)
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    if (!this.output.length) {
      while (this.input.length) {
        this.output.push(this.input.pop())
      }
    }
    return this.output.pop()
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    if (!this.output.length) {
      while (this.input.length) {
        this.output.push(this.input.pop())
      }
    }
    let index = this.output.length - 1
    return this.output[index]
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return !this.output.length && !this.input.length
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
