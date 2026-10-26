package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DoublyLinkedListGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "doubly-linked-list-goldens.json")
                .toAbsolutePath()
                .normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            DoublyLinkedList<Integer> list = new DoublyLinkedList<>();
            for (Number n : intList(c.get("addLast"))) {
                list.addLast(n.intValue());
            }
            for (Number n : intList(c.get("addFirst"))) {
                list.addFirst(n.intValue());
            }
            assertEquals(((Number) c.get("getValue")).intValue(), list.get(((Number) c.get("getIndex")).intValue()));
            assertEquals(
                    ((Number) c.get("removeValue")).intValue(),
                    list.remove(((Number) c.get("removeIndex")).intValue()));
            assertEquals(((Number) c.get("sizeAfter")).intValue(), list.size());
        }
    }

    @SuppressWarnings("unchecked")
    private static List<Number> intList(Object raw) {
        return (List<Number>) raw;
    }
}
