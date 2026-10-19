package com.dsa.examples.searching;

import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LinearSearchGoldensTest {

    private static final Pattern ROW = Pattern.compile(
            "\"arr\":\\s*\\[([^\\]]*)\\]\\s*,\\s*\"target\":\\s*(-?\\d+)\\s*,\\s*\"expected\":\\s*(-?\\d+)");

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "linear-search-goldens.json").toAbsolutePath().normalize();
        String content = Files.readString(json);
        Matcher matcher = ROW.matcher(content);
        while (matcher.find()) {
            int[] arr = parseArr(matcher.group(1));
            int target = Integer.parseInt(matcher.group(2));
            int expected = Integer.parseInt(matcher.group(3));
            assertEquals(expected, LinearSearch.indexOf(arr, target));
        }
    }

    private static int[] parseArr(String inner) {
        if (inner.isBlank()) {
            return new int[0];
        }
        String[] parts = inner.split(",");
        List<Integer> out = new ArrayList<>();
        for (String p : parts) {
            out.add(Integer.parseInt(p.trim()));
        }
        return out.stream().mapToInt(Integer::intValue).toArray();
    }
}
