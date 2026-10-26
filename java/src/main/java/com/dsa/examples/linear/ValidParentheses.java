// Linear — Valid parentheses

package com.dsa.examples.linear;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;

/**
 * Check balanced nesting of ()[]{} brackets.
 * Technique: Stack
 * Invariant: Stack holds unmatched open brackets in order.
 * isValidParentheses: Time O(n); Space O(n).
 */
public final class ValidParentheses {

    private static final Map<Character, Character> PAIRS = Map.of(
            ')', '(',
            ']', '[',
            '}', '{');

    private ValidParentheses() {
    }

    /**
     * Returns whether {@code s} uses only {@code ()[]{} } and is correctly nested.
     * {@code null} is treated as empty (valid). Time: O(n); Space O(n).
     */
    public static boolean isValidParentheses(String s) {
        if (s == null || s.isEmpty()) {
            return true;
        }
        Deque<Character> stack = new ArrayDeque<>();
        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            } else if (PAIRS.containsKey(ch)) {
                if (stack.isEmpty() || stack.pop() != PAIRS.get(ch)) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return stack.isEmpty();
    }
}
