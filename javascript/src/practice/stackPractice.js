const { Stack } = require('../linear/stack');

class StackPractice {
  constructor() {
    this.stack = new Stack();
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.peek();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }
}

module.exports = { StackPractice };
