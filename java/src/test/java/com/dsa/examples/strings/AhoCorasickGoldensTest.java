package com.dsa.examples.strings;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AhoCorasickGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "aho-corasick-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            String text = (String) c.get("text");
            @SuppressWarnings("unchecked")
            List<String> patterns = (List<String>) c.get("patterns");
            @SuppressWarnings("unchecked")
            List<Object> expected = (List<Object>) c.get("hits");
            assertEquals(expected.stream().map(n -> ((Number) n).intValue()).toList(), AhoCorasick.search(text, patterns));
        }
    }
}
