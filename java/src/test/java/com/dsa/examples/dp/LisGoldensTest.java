package com.dsa.examples.dp;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LisGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "lis-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Number> arr = (List<Number>) c.get("arr");
            int[] a = arr.stream().mapToInt(Number::intValue).toArray();
            assertEquals(((Number) c.get("expected")).intValue(), LIS.length(a));
        }
    }
}
