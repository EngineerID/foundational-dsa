// write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

function sortedSquaredArray(array) {
  // Initialize an array to hold the squared values
  const squaredArray = new Array(array.length).fill(0);
  
  // Two pointers for the start and end of the array
  let left = 0;
  let right = array.length - 1;

  // Fill the squaredArray from the end to the start
  for (let i = array.length - 1; i >= 0; i--) {
    const leftValue = array[left];
    const rightValue = array[right];

    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      squaredArray[i] = leftValue * leftValue;
      left++;
    } else {
      squaredArray[i] = rightValue * rightValue;
      right--;
    }
  }

  return squaredArray;
}

module.exports = sortedSquaredArray;