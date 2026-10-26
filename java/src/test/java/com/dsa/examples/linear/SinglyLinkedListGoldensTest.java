package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SinglyLinkedListGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "singly-linked-list-goldens.json")
                .toAbsolutePath()
                .normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            SinglyLinkedList<Integer> list = new SinglyLinkedList<>();
            @SuppressWarnings("unchecked")
            List<Number> addLast = (List<Number>) c.get("addLast");
            if (addLast.isEmpty()) {
                assertEquals(0, list.size());
                continue;
            }
            for (Number n : addLast) {
                list.addLast(n.intValue());
            }
            assertEquals(((Number) c.get("getValue")).intValue(), list.get(((Number) c.get("getIndex")).intValue()));
            assertEquals(
                    ((Number) c.get("removeValue")).intValue(),
                    list.remove(((Number) c.get("removeIndex")).intValue()));
            assertEquals(((Number) c.get("sizeAfter")).intValue(), list.size());
        }
    }
}
