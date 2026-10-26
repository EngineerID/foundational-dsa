package com.dsa.examples.linear;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ValidParenthesesTest {

    @Test
    void isValidParentheses() {
        assertTrue(ValidParentheses.isValidParentheses("()[]{}"));
        assertFalse(ValidParentheses.isValidParentheses("(]"));
        assertTrue(ValidParentheses.isValidParentheses(""));
    }
}
