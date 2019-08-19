/**
 * @source https://leetcode.com/problems/design-circular-queue/
 * @author algorizen
 * @date 2019-08-
 * @complexity 
 * 
 * Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
 * 
 * One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
 * 
 * Your implementation should support following operations:
 * 
 *  MyCircularQueue(k): Constructor, set the size of the queue to be k.
 *  Front: Get the front item from the queue. If the queue is empty, return -1.
 *  Rear: Get the last item from the queue. If the queue is empty, return -1.
 *  enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.
 *  deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
 *  isEmpty(): Checks whether the circular queue is empty or not.
 *  isFull(): Checks whether the circular queue is full or not.
 * 
 * 
 * Example:
 * 
 *  MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
 *  circularQueue.enQueue(1);  // return true
 *  circularQueue.enQueue(2);  // return true
 *  circularQueue.enQueue(3);  // return true
 *  circularQueue.enQueue(4);  // return false, the queue is full
 *  circularQueue.Rear();  // return 3
 *  circularQueue.isFull();  // return true
 *  circularQueue.deQueue();  // return true
 *  circularQueue.enQueue(4);  // return true
 *  circularQueue.Rear();  // return 4
 * 
 * Note:
 *  
 *  All values will be in the range of [0, 1000].
 *  The number of operations will be in the range of [1, 1000].
 *  Please do not use the built-in Queue library.
 * 
 */

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */

//  Constructor, set the size of the queue to be k.
class MyCircularQueue {
  constructor(k) {
    this.k = k
    this.head = -1 // 头部指针
    this.tail = -1 // 尾部指针
    this.len = 0 // 队列长度
    this.queue = new Array(k)
  }

  // Get the front item from the queue. If the queue is empty, return -1.
  Front() {
    return this.len === 0 ? -1 : this.queue[this.head]
  }

  // Get the last item from the queue. If the queue is empty, return -1.
  Rear() {
    return this.len === 0 ? -1 : this.queue[this.tail]
  }

  // Insert an element into the circular queue. Return true if the operation is successful.
  enQueue(value) {
    if (this.len === this.k) return false // 队列已满
    if (this.tail === this.head && this.tail === -1) this.head++
    this.tail = (this.tail === this.k - 1) ? 0 : this.tail + 1
    this.len++
    this.queue[this.tail] = value
    return true
  }

  // Delete an element from the circular queue. Return true if the operation is successful.
  deQueue() {
    if (this.len === 0) return false
    delete this.queue[this.head]
    this.head++
    this.len--
    if (this.len === 0) {
      this.head = -1
      this.tail = -1
    }
    if (this.head == this.k && this.len !== 0) {
      this.head = 0
    }
    return true
  }

  // Checks whether the circular queue is empty or not.
  isEmpty() {
    return this.len === 0
  }

  // Checks whether the circular queue is full or not.
  isFull () {
    return this.len === this.k
  }
}


/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */