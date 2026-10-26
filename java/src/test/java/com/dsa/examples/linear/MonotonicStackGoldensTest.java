package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenIntArrays;
import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class MonotonicStackGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "monotonic-stack-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[] nums = GoldenIntArrays.parse(c.get("nums"));
            if (Boolean.TRUE.equals(c.get("expectError"))) {
                assertThrows(IllegalArgumentException.class, () -> MonotonicStack.nextGreaterElement(nums), c.toString());
            } else {
                assertArrayEquals(
                        GoldenIntArrays.parse(c.get("expected")),
                        MonotonicStack.nextGreaterElement(nums),
                        c.toString());
            }
        }
    }
}
