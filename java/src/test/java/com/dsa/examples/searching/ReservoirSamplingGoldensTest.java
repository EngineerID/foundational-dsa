package com.dsa.examples.searching;

import com.dsa.examples.support.GoldenIntArrays;
import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ReservoirSamplingGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "reservoir-sampling-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[] stream = GoldenIntArrays.parse(c.get("stream"));
            int k = ((Number) c.get("k")).intValue();
            int seed = ((Number) c.get("seed")).intValue();
            List<Integer> expected = toIntList(c.get("expected"));
            assertEquals(expected, ReservoirSampling.sample(stream, k, seed), c.toString());
        }
    }

    @SuppressWarnings("unchecked")
    private static List<Integer> toIntList(Object raw) {
        List<Object> rows = (List<Object>) raw;
        return rows.stream().map(n -> ((Number) n).intValue()).toList();
    }
}
