package com.dsa.examples.strings;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ZAlgorithmGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "z-algorithm-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            String text = (String) c.get("text");
            String pattern = (String) c.get("pattern");
            assertEquals(((Number) c.get("index")).intValue(), ZAlgorithm.search(text, pattern));
            @SuppressWarnings("unchecked")
            List<Object> z = (List<Object>) c.get("z");
            int[] expected = z.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
            assertArrayEquals(expected, ZAlgorithm.zArray(text));
        }
    }
}
