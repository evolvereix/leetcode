/**
 * @source https://leetcode.com/problems/design-circular-deque/
 * @author algorizen
 * @date 2019-08-16
 * @complexity 
 * 
 * Design your implementation of the circular double-ended queue (deque).
 * Your implementation should support following operations:
 * 
 *  MyCircularDeque(k): Constructor, set the size of the deque to be k.
 *  insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
 *  insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
 *  deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
 *  deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
 *  getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
 *  getRear(): Gets the last item from Deque. If the deque is empty, return -1.
 *  isEmpty(): Checks whether Deque is empty or not. 
 *  isFull(): Checks whether Deque is full or not.
 * 
 * Note:
 * 
 *  All values will be in the range of [0, 1000].
 *  The number of operations will be in the range of [1, 1000].
 *  Please do not use the built-in Deque library.
 * 
 * Example:
 * 
 *  MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
 *  circularDeque.insertLast(1); // return true
 *  circularDeque.insertLast(2); // return true
 *  circularDeque.insertFront(3); // return true
 *  circularDeque.insertFront(4); // return false, the queue is full
 *  circularDeque.getRear(); // return 2
 *  circularDeque.isFull(); // return true
 *  circularDeque.deleteLast(); // return true
 *  circularDeque.insertFront(4); // return true
 *  circularDeque.getFront(); // return 4
 */

class MyCircularDeque {
  constructor(k) {
    this.k = k
    this.deque = new Array(k)
    this.head = -1 // 头部指针
    this.tail = -1 // 尾部指针
    this.len = 0 // 队列长度
  }

  // Adds an item at the front of Deque. Return true if the operation is successful.
  insertFront(value) {
    if (this.isFull()) return false

  }

  // Adds an item at the rear of Deque. Return true if the operation is successful.
  insertLast(value) {

  }

  // Deletes an item from the front of Deque. Return true if the operation is successful.
  deleteFront() {

  }

  // Deletes an item from the rear of Deque. Return true if the operation is successful.
  deleteLast() {
    if (this.isEmpty()) return false
    this.head++
    this.len--
    if (this.len === 0) {
      this.head = -1
      this.tail = -1
    }
    return true
  }

  // Gets the front item from the Deque. If the deque is empty, return -1.
  getFront() {
    return this.len === 0 ? -1 : this.deque[this.head]
  }

  // Gets the last item from Deque. If the deque is empty, return -1.
  getRear() {
    return this.len === 0 ? -1 : this.deque[this.tail]
  }

  // Checks whether Deque is empty or not. 
  isEmpty() {
    return this.len === 0
  }

  // Checks whether Deque is full or not.
  isFull() {
    return this.len === this.k
  }
}