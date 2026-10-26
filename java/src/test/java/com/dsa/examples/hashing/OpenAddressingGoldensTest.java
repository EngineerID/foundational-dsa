package com.dsa.examples.hashing;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
class OpenAddressingGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "open-addressing-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            HashTableOpenAddressing<Integer, String> table =
                    new HashTableOpenAddressing<>(HashTableOpenAddressing.ProbingStrategy.LINEAR);
            @SuppressWarnings("unchecked")
            List<List<Object>> ops = (List<List<Object>>) c.get("ops");
            for (List<Object> op : ops) {
                table.put(((Number) op.get(1)).intValue(), (String) op.get(2));
            }
            @SuppressWarnings("unchecked")
            Map<String, Object> get = (Map<String, Object>) c.get("get");
            assertEquals(get.get("value"), table.get(((Number) get.get("key")).intValue()));
            @SuppressWarnings("unchecked")
            Map<String, Object> remove = (Map<String, Object>) c.get("remove");
            assertEquals((Boolean) remove.get("present"), table.remove(((Number) remove.get("key")).intValue()));
            @SuppressWarnings("unchecked")
            Map<String, Object> after = (Map<String, Object>) c.get("getAfterRemove");
            assertNull(table.get(((Number) after.get("key")).intValue()));
        }
    }
}
