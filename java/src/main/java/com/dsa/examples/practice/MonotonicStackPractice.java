// Practice — Next greater element (monotonic stack)

package com.dsa.examples.practice;

import com.dsa.examples.linear.MonotonicStack;

public final class MonotonicStackPractice {

    private MonotonicStackPractice() {
    }

    public static int[] nextGreater(int[] nums) {
        return MonotonicStack.nextGreaterElement(nums);
    }
}
