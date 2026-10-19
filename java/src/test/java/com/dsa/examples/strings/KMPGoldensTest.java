package com.dsa.examples.strings;

import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.jupiter.api.Assertions.assertEquals;

class KMPGoldensTest {

    private static final Pattern ROW = Pattern.compile(
            "\"text\":\\s*\"([^\"]*)\"\\s*,\\s*\"pattern\":\\s*\"([^\"]*)\"\\s*,\\s*\"expected\":\\s*(-?\\d+)");

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "kmp-goldens.json").toAbsolutePath().normalize();
        String content = Files.readString(json);
        Matcher matcher = ROW.matcher(content);
        List<String> texts = new ArrayList<>();
        List<String> patterns = new ArrayList<>();
        List<Integer> expected = new ArrayList<>();
        while (matcher.find()) {
            texts.add(matcher.group(1));
            patterns.add(matcher.group(2));
            expected.add(Integer.parseInt(matcher.group(3)));
        }
        if (expected.isEmpty()) {
            throw new AssertionError("no golden rows parsed from " + json);
        }
        for (int i = 0; i < expected.size(); i++) {
            assertEquals(expected.get(i), KMP.search(texts.get(i), patterns.get(i)));
        }
    }
}
