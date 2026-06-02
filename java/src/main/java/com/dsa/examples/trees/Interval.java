// Trees — Interval value type

package com.dsa.examples.trees;

/**
 * Closed interval [low, high].
 */
public record Interval(int low, int high) {

    public Interval {
        if (low > high) {
            throw new IllegalArgumentException("low > high");
        }
    }

    public boolean overlaps(Interval other) {
        return low <= other.high && other.low <= high;
    }
}
