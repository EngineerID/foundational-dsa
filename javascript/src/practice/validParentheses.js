// Practice — Valid parentheses

const PAIRS = { ')': '(', ']': '[', '}': '{' };

/** @param {string} s */
function isValidParentheses(s) {
  const stack = [];
  for (const ch of s) {
    if ('([{'.includes(ch)) {
      stack.push(ch);
    } else if (')]}'.includes(ch)) {
      if (stack.pop() !== PAIRS[ch]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

module.exports = { isValidParentheses };
