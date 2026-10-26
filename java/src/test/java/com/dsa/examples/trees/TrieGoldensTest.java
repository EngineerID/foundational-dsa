package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TrieGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "trie-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Trie trie = new Trie();
            @SuppressWarnings("unchecked")
            List<String> inserts = (List<String>) c.get("inserts");
            for (String w : inserts) {
                trie.insert(w);
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> search = (List<Map<String, Object>>) c.get("search");
            for (Map<String, Object> row : search) {
                assertEquals((Boolean) row.get("expected"), trie.search((String) row.get("word")));
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> prefixes = (List<Map<String, Object>>) c.get("startsWith");
            for (Map<String, Object> row : prefixes) {
                assertEquals((Boolean) row.get("expected"), trie.startsWith((String) row.get("prefix")));
            }
        }
    }
}
