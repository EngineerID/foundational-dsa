package com.dsa.examples.searching;

import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ReservoirSamplingGoldensTest {

    private static final Pattern CASE = Pattern.compile(
            "\"stream\":\\s*(\\[[^\\]]*\\])\\s*,\\s*\"k\":\\s*(\\d+)\\s*,\\s*\"seed\":\\s*(\\d+)\\s*,\\s*\"expected\":\\s*(\\[[^\\]]*\\])");

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "reservoir-sampling-goldens.json").toAbsolutePath().normalize();
        String content = Files.readString(json);
        Matcher matcher = CASE.matcher(content);
        while (matcher.find()) {
            int[] stream = parseIntArray(matcher.group(1));
            int k = Integer.parseInt(matcher.group(2));
            int seed = Integer.parseInt(matcher.group(3));
            List<Integer> expected = parseIntList(matcher.group(4));
            assertEquals(expected, ReservoirSampling.sample(stream, k, seed));
        }
    }

    private static int[] parseIntArray(String bracketed) {
        return parseIntList(bracketed).stream().mapToInt(Integer::intValue).toArray();
    }

    private static List<Integer> parseIntList(String bracketed) {
        String inner = bracketed.substring(1, bracketed.length() - 1).trim();
        if (inner.isEmpty()) {
            return List.of();
        }
        List<Integer> out = new ArrayList<>();
        for (String p : inner.split(",")) {
            out.add(Integer.parseInt(p.trim()));
        }
        return out;
    }
}
