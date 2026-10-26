package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class OrderStatisticTreeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "order-statistic-tree-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            OrderStatisticTree<Integer, String> tree = new OrderStatisticTree<>();
            @SuppressWarnings("unchecked")
            List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
            if (inserts.isEmpty()) {
                assertThrows(IllegalArgumentException.class, () -> tree.select(1));
                assertEquals(((Number) c.get("rank5")).intValue(), tree.rank(5));
                continue;
            }
            for (List<Object> pair : inserts) {
                tree.insert(((Number) pair.get(0)).intValue(), (String) pair.get(1));
            }
            if (c.get("selectK") != null) {
                assertEquals(
                        ((Number) c.get("selectKey")).intValue(),
                        tree.select(((Number) c.get("selectK")).intValue()));
                assertEquals(
                        1,
                        tree.rank(((Number) c.get("rankKey")).intValue()));
                continue;
            }
            assertEquals(((Number) c.get("select3")).intValue(), tree.select(3));
            assertEquals(((Number) c.get("rank5")).intValue(), tree.rank(5));
        }
    }
}
