package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class WordSearchGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "word-search-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            assertEquals(
                    c.get("expected"),
                    WordSearch.wordSearch(parseGrid(c.get("board")), (String) c.get("word")),
                    c.toString());
        }
    }

    @SuppressWarnings("unchecked")
    private static char[][] parseGrid(Object raw) {
        if (raw == null) {
            return new char[0][];
        }
        List<List<String>> rows = (List<List<String>>) raw;
        char[][] grid = new char[rows.size()][];
        for (int r = 0; r < rows.size(); r++) {
            List<String> row = rows.get(r);
            grid[r] = new char[row.size()];
            for (int c = 0; c < row.size(); c++) {
                grid[r][c] = row.get(c).charAt(0);
            }
        }
        return grid;
    }
}
