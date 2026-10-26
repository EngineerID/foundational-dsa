package com.dsa.examples.hashing;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BloomFilterGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "bloom-filter-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int expectedItems = ((Number) c.get("expectedItems")).intValue();
            double rate = ((Number) c.get("falsePositiveRate")).doubleValue();
            BloomFilter bf = new BloomFilter(expectedItems, rate);
            @SuppressWarnings("unchecked")
            List<String> add = (List<String>) c.get("add");
            for (String item : add) {
                bf.add(item);
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> queries = (List<Map<String, Object>>) c.get("queries");
            for (Map<String, Object> q : queries) {
                assertEquals((Boolean) q.get("expected"), bf.mightContain((String) q.get("item")));
            }
        }
    }
}
