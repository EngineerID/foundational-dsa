// Strings — Aho-Corasick

package com.dsa.examples.strings;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

/**
 * Find all pattern occurrences in text.
 * search: Time O(n+m+z); Space O(m).
 */
public final class AhoCorasick {

    private AhoCorasick() {
    }

    /**
     * Returns sorted start indices where any pattern occurs.
     * Time: O(|text| + sum|patterns| + matches); Space: O(sum|patterns|).
     */
    public static List<Integer> search(String text, List<String> patterns) {
        if (patterns == null || patterns.isEmpty() || text == null || text.isEmpty()) {
            return List.of();
        }
        return search(text, patterns.toArray(new String[0]));
    }

    public static List<Integer> search(String text, String[] patterns) {
        if (patterns.length == 0 || text.isEmpty()) {
            return List.of();
        }
        List<Map<Character, Integer>> trans = new ArrayList<>();
        trans.add(new HashMap<>());
        List<List<Integer>> out = new ArrayList<>();
        out.add(new ArrayList<>());
        List<Integer> fail = new ArrayList<>();
        fail.add(0);

        for (int pid = 0; pid < patterns.length; pid++) {
            String pat = patterns[pid];
            if (pat.isEmpty()) {
                continue;
            }
            int state = 0;
            for (char ch : pat.toCharArray()) {
                Integer nxt = trans.get(state).get(ch);
                if (nxt == null) {
                    nxt = trans.size();
                    trans.get(state).put(ch, nxt);
                    trans.add(new HashMap<>());
                    out.add(new ArrayList<>());
                    fail.add(0);
                }
                state = nxt;
            }
            out.get(state).add(pid);
        }

        Queue<Integer> q = new ArrayDeque<>();
        for (Map.Entry<Character, Integer> e : trans.get(0).entrySet()) {
            fail.set(e.getValue(), 0);
            q.add(e.getValue());
        }
        while (!q.isEmpty()) {
            int r = q.poll();
            for (Map.Entry<Character, Integer> e : trans.get(r).entrySet()) {
                int s = e.getValue();
                q.add(s);
                int f = fail.get(r);
                while (f != 0 && !trans.get(f).containsKey(e.getKey())) {
                    f = fail.get(f);
                }
                fail.set(s, trans.get(f).getOrDefault(e.getKey(), 0));
                out.get(s).addAll(out.get(fail.get(s)));
            }
        }

        Set<Integer> hits = new HashSet<>();
        int state = 0;
        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            while (state != 0 && !trans.get(state).containsKey(ch)) {
                state = fail.get(state);
            }
            state = trans.get(state).getOrDefault(ch, 0);
            for (int pid : out.get(state)) {
                hits.add(i - patterns[pid].length() + 1);
            }
        }
        List<Integer> sorted = new ArrayList<>(hits);
        sorted.sort(Integer::compareTo);
        return sorted;
    }
}
