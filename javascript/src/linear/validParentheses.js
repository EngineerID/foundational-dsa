// Linear — Valid parentheses

/**
 * Check balanced nesting of ()[]{} brackets.
 * Technique: Stack
 * Invariant: Stack holds unmatched open brackets in order.
 * isValidParentheses: Time O(n); Space O(n).
 */

const PAIRS = { ')': '(', ']': '[', '}': '{' };

function isValidParentheses(s) {
  if (!s || s.length === 0) return true;
  const stack = [];
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);
    else if (Object.prototype.hasOwnProperty.call(PAIRS, ch)) {
      if (!stack.length || stack.pop() !== PAIRS[ch]) return false;
    } else return false;
  }
  return stack.length === 0;
}

module.exports = { isValidParentheses };
