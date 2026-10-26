const { Queue } = require('../linear/queue');

class QueuePractice {
  constructor() {
    this.queue = new Queue();
  }

  enqueue(value) {
    this.queue.enqueue(value);
  }

  dequeue() {
    return this.queue.dequeue();
  }

  peek() {
    return this.queue.peek();
  }

  isEmpty() {
    return this.queue.isEmpty();
  }
}

module.exports = { QueuePractice };
