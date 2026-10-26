package com.dsa.examples.heaps;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PriorityQueueGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "priority-queue-goldens.json")
                .toAbsolutePath()
                .normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            PriorityQueue<Integer> pq = new PriorityQueue<>();
            for (Number n : intList(c.get("inserts"))) {
                pq.insert(n.intValue());
            }
            List<Integer> order = new ArrayList<>();
            while (pq.size() > 0) {
                order.add(pq.extractMin());
            }
            List<Integer> expected = intList(c.get("extractOrder")).stream()
                    .map(Number::intValue)
                    .toList();
            assertEquals(expected, order);
        }
    }

    @SuppressWarnings("unchecked")
    private static List<Number> intList(Object raw) {
        return (List<Number>) raw;
    }
}
