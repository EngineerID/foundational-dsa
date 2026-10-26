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
            for (Number n : intList(c.get("addLast"))) {
                dq.addLast(n.intValue());
            }
            for (Number n : intList(c.get("addFirst"))) {
                dq.addFirst(n.intValue());
            }
            assertEquals(((Number) c.get("removeFirst")).intValue(), dq.removeFirst());
            assertEquals(((Number) c.get("removeLast")).intValue(), dq.removeLast());
            assertEquals(((Number) c.get("remainingValue")).intValue(), dq.removeFirst());
            assertTrue(dq.isEmpty());
        }
    }

    @SuppressWarnings("unchecked")
    private static List<Number> intList(Object raw) {
        return (List<Number>) raw;
    }
}
