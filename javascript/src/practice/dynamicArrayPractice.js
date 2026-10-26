const { DynamicArray } = require('../linear/dynamicArray');

class DynamicArrayPractice {
  constructor() {
    this.array = new DynamicArray();
  }

  add(value) {
    this.array.add(value);
  }

  get(index) {
    return this.array.get(index);
  }

  size() {
    return this.array.size();
  }
}

module.exports = { DynamicArrayPractice };
