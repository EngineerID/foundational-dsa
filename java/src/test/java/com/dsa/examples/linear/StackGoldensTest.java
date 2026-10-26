package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class StackGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "stack-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Stack<Integer> stack = new Stack<>();
            @SuppressWarnings("unchecked")
            List<Number> push = (List<Number>) c.get("push");
            for (Number n : push) {
                stack.push(n.intValue());
            }
            @SuppressWarnings("unchecked")
            List<Number> popValues = (List<Number>) c.get("popValues");
            for (Number expected : popValues) {
                assertEquals(expected.intValue(), stack.pop());
            }
            Object peek = c.get("peek");
            if (peek == null || Boolean.TRUE.equals(c.get("empty"))) {
                assertTrue(stack.isEmpty());
                assertThrows(IllegalStateException.class, stack::peek);
            } else {
                assertEquals(((Number) peek).intValue(), stack.peek());
            }
        }
    }
}
