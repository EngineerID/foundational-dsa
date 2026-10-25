package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class CoinChangeTest {

    @Test
    void minCoins() {
        assertEquals(3, CoinChange.minCoins(new int[] {1, 2, 5}, 11));
        assertEquals(-1, CoinChange.minCoins(new int[] {2}, 3));
        assertEquals(-1, CoinChange.minCoins(new int[0], 1));
    }

    @Test
    void invalidCoin() {
        assertThrows(IllegalArgumentException.class, () -> CoinChange.minCoins(new int[] {0}, 1));
    }
}
