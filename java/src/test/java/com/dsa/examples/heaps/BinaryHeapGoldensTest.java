package com.dsa.examples.heaps;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BinaryHeapGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "binary-heap-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            if (c.containsKey("inserts")) {
                BinaryHeap<Integer> heap = new BinaryHeap<>();
                @SuppressWarnings("unchecked")
                List<Object> inserts = (List<Object>) c.get("inserts");
                for (Object v : inserts) {
                    heap.insert(((Number) v).intValue());
                }
                List<Integer> order = new ArrayList<>();
                while (heap.size() > 0) {
                    order.add(heap.extractMin());
                }
                @SuppressWarnings("unchecked")
                List<Object> expected = (List<Object>) c.get("extractOrder");
                assertEquals(expected.stream().map(n -> ((Number) n).intValue()).toList(), order);
            }
            if (c.containsKey("heapify")) {
                BinaryHeap<Integer> heap = new BinaryHeap<>();
                @SuppressWarnings("unchecked")
                List<Object> items = (List<Object>) c.get("heapify");
                List<Integer> vals = items.stream().map(n -> ((Number) n).intValue()).toList();
                heap.heapify(vals);
                assertEquals(((Number) c.get("peek")).intValue(), heap.peek());
                assertEquals(((Number) c.get("extractMin")).intValue(), heap.extractMin());
            }
        }
    }
}
