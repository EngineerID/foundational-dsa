package com.dsa.examples.property;

import com.dsa.examples.strings.KMP;
import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.Random;

import static com.dsa.examples.support.PropertyHelpers.PROPERTY_TRIALS;
import static org.junit.jupiter.api.Assertions.assertEquals;

class PropertyStringsTest {

    @Test
    void kmpSearchMatchesStringIndexOf() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            String text = randomAscii(rng, 32);
            String pattern = randomAscii(rng, 10);
            assertEquals(text.indexOf(pattern), KMP.search(text, pattern));
        }
        assertEquals(0, KMP.search("abc", ""));
        assertEquals(0, KMP.search("", ""));
    }

    private static String randomAscii(Random rng, int maxLen) {
        int n = rng.nextInt(maxLen + 1);
        StringBuilder sb = new StringBuilder(n);
        for (int i = 0; i < n; i++) {
            sb.append((char) ('a' + rng.nextInt(5)));
        }
        return sb.toString();
    }
}
