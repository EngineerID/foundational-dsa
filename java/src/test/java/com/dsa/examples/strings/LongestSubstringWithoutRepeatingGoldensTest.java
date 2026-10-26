package com.dsa.examples.strings;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LongestSubstringWithoutRepeatingGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "longest-substring-without-repeating-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            String s = (String) c.get("s");
            int expected = ((Number) c.get("expected")).intValue();
            assertEquals(expected, LongestSubstringWithoutRepeating.lengthOfLongestSubstring(s), c.toString());
        }
    }
}
