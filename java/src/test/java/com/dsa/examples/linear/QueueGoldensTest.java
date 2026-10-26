package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class QueueGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "queue-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Queue<Integer> q = new Queue<>();
            @SuppressWarnings("unchecked")
            List<Number> enqueue = (List<Number>) c.get("enqueue");
            for (Number n : enqueue) {
                q.enqueue(n.intValue());
            }
            @SuppressWarnings("unchecked")
            List<Number> dequeues = (List<Number>) c.get("dequeueValues");
            for (Number expected : dequeues) {
                assertEquals(expected.intValue(), q.dequeue());
            }
            Object peek = c.get("peek");
            if (peek == null || Boolean.TRUE.equals(c.get("empty"))) {
                assertTrue(q.isEmpty());
                assertThrows(IllegalStateException.class, q::peek);
            } else {
                assertEquals(((Number) peek).intValue(), q.peek());
            }
        }
    }
}
