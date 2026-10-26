package com.dsa.examples.unionfind;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UnionFindGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "union-find-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            UnionFind uf = new UnionFind(n);
            @SuppressWarnings("unchecked")
            List<List<Object>> unions = (List<List<Object>>) c.get("unions");
            for (List<Object> pair : unions) {
                uf.union(((Number) pair.get(0)).intValue(), ((Number) pair.get(1)).intValue());
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> connected = (List<Map<String, Object>>) c.get("connected");
            for (Map<String, Object> q : connected) {
                int a = ((Number) q.get("a")).intValue();
                int b = ((Number) q.get("b")).intValue();
                assertEquals((Boolean) q.get("expected"), uf.connected(a, b));
            }
        }
    }
}
