// Script: twoNumberSum.js

function twoNumberSum(array, targetSum) {
    if (array.length < 2) {
        return undefined;
    }
    for (let i = 0; i < array.length; i++) {
        const firstNum = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum];
            }
        }
    }
    return undefined;
}
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;

// Test cases
function runTests() {
    function assertEqual(actual, expected, testName) {
        const actualStr = JSON.stringify(actual);
        const expectedStr = JSON.stringify(expected);
        if (actualStr === expectedStr) {
            console.log(`PASSED [${testName}]`);
        } else {
            console.log(`FAILED [${testName}] Expected ${expectedStr}, but got ${actualStr}`);
        }
    }

    // Test case 1: returns two numbers that sum up to the target
    assertEqual(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10), [11, -1], 'returns two numbers that sum up to the target');

    // Test case 2: returns undefined when no two numbers sum up to the target
    assertEqual(twoNumberSum([1, 2, 3, 4, 5], 10), undefined, 'returns undefined when no two numbers sum up to the target');

    // Test case 3: returns undefined for an empty array
    assertEqual(twoNumberSum([], 10), undefined, 'returns undefined for an empty array');

    // Test case 4: handles negative numbers correctly
    assertEqual(twoNumberSum([-3, -1, -7, -5], -8), [-3, -5], 'handles negative numbers correctly');

    // Test case 5: returns undefined for an array with fewer than two elements
    assertEqual(twoNumberSum([14], 15), undefined, 'returns undefined for an array with fewer than two elements');
}

// Run tests
runTests();
  