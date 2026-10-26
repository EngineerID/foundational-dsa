package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class DequeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "deque-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Deque<Integer> dq = new Deque<>();
            List<Number> addLast = intList(c.get("addLast"));
            List<Number> addFirst = intList(c.get("addFirst"));
            if (Boolean.TRUE.equals(c.get("empty")) && addLast.isEmpty() && addFirst.isEmpty()) {
                assertTrue(dq.isEmpty());
                continue;
            }
            for (Number n : addLast) {
                dq.addLast(n.intValue());
            }
            for (Number n : addFirst) {
                dq.addFirst(n.intValue());
            }
            Object removeFirst = c.get("removeFirst");
            if (removeFirst != null) {
                assertEquals(((Number) removeFirst).intValue(), dq.removeFirst());
            }
            Object removeLast = c.get("removeLast");
            if (removeLast != null) {
                assertEquals(((Number) removeLast).intValue(), dq.removeLast());
            }
            Object remaining = c.get("remainingValue");
            if (remaining != null) {
                assertEquals(((Number) remaining).intValue(), dq.removeFirst());
            }
            assertTrue(dq.isEmpty());
        }
    }

    @SuppressWarnings("unchecked")
    private static List<Number> intList(Object raw) {
        return (List<Number>) raw;
    }
}
