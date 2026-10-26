package com.dsa.examples.strings;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class SuffixArrayGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "suffix-array-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Object> expected = (List<Object>) c.get("sa");
            int[] exp = expected.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
            assertArrayEquals(exp, SuffixArray.build((String) c.get("s")));
        }
    }
}
