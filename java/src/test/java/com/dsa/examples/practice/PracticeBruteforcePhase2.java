package com.dsa.examples.practice;

import com.dsa.examples.graphs.DFS;
import com.dsa.examples.graphs.Graph;
import com.dsa.examples.searching.ReservoirSampling;
import com.dsa.examples.trees.BST;
import com.dsa.examples.trees.TreeTraversals;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/** Small-n brute-force references for {@link PracticePropertyPhase2Test}. */
final class PracticeBruteforcePhase2 {

    private static final Map<Character, Character> PAREN_PAIRS = Map.of(
            ')', '(',
            ']', '[',
            '}', '{');

    private PracticeBruteforcePhase2() {
    }

    static boolean refValidParentheses(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char ch : s.toCharArray()) {
            if ("([{".indexOf(ch) >= 0) {
                stack.push(ch);
            } else if (")]}".indexOf(ch) >= 0) {
                if (stack.isEmpty() || stack.pop() != PAREN_PAIRS.get(ch)) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return stack.isEmpty();
    }

    static int refMinMeetingRooms(int[][] intervals) {
        if (intervals.length == 0) {
            return 0;
        }
        int[] starts = Arrays.stream(intervals).mapToInt(x -> x[0]).sorted().toArray();
        int[] ends = Arrays.stream(intervals).mapToInt(x -> x[1]).sorted().toArray();
        int rooms = 0;
        int maxRooms = 0;
        int i = 0;
        int j = 0;
        while (i < starts.length) {
            if (starts[i] < ends[j]) {
                rooms += 1;
                i += 1;
            } else {
                rooms -= 1;
                j += 1;
            }
            maxRooms = Math.max(maxRooms, rooms);
        }
        return maxRooms;
    }

    static List<Integer> refTopKFrequent(int[] nums, int k) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int n : nums) {
            counts.merge(n, 1, Integer::sum);
        }
        List<int[]> entries = new ArrayList<>();
        for (Map.Entry<Integer, Integer> e : counts.entrySet()) {
            entries.add(new int[] {e.getKey(), e.getValue()});
        }
        entries.sort((a, b) -> {
            int c = Integer.compare(b[1], a[1]);
            return c != 0 ? c : Integer.compare(a[0], b[0]);
        });
        List<Integer> out = new ArrayList<>();
        for (int i = 0; i < k && i < entries.size(); i++) {
            out.add(entries.get(i)[0]);
        }
        return out;
    }

    static int refLengthOfLongestSubstring(String s) {
        int best = 0;
        for (int i = 0; i < s.length(); i++) {
            Set<Character> seen = new HashSet<>();
            for (int j = i; j < s.length(); j++) {
                if (seen.contains(s.charAt(j))) {
                    break;
                }
                seen.add(s.charAt(j));
                best = Math.max(best, j - i + 1);
            }
        }
        return best;
    }

    static final class RefLRU {
        private final int cap;
        private final LinkedHashMap<Integer, Integer> map;

        RefLRU(int capacity) {
            cap = capacity;
            map = new LinkedHashMap<>(capacity, 0.75f, true);
        }

        int get(int key) {
            if (!map.containsKey(key)) {
                return -1;
            }
            return map.get(key);
        }

        void put(int key, int value) {
            if (map.containsKey(key)) {
                map.remove(key);
            } else if (map.size() >= cap) {
                Integer first = map.keySet().iterator().next();
                map.remove(first);
            }
            map.put(key, value);
        }
    }

    static int[][] refMergeIntervals(int[][] intervals) {
        if (intervals.length == 0) {
            return new int[0][];
        }
        int[][] sorted = new int[intervals.length][];
        for (int i = 0; i < intervals.length; i++) {
            sorted[i] = intervals[i].clone();
        }
        Arrays.sort(sorted, Comparator.comparingInt(a -> a[0]));
        List<int[]> merged = new ArrayList<>();
        merged.add(sorted[0].clone());
        for (int i = 1; i < sorted.length; i++) {
            int start = sorted[i][0];
            int end = sorted[i][1];
            int[] last = merged.get(merged.size() - 1);
            if (start <= last[1]) {
                last[1] = Math.max(last[1], end);
            } else {
                merged.add(new int[] {start, end});
            }
        }
        return merged.toArray(new int[0][]);
    }

    static List<List<Integer>> refLevelOrder(Integer[] values) {
        if (values.length == 0 || values[0] == null) {
            return List.of();
        }
        TreeNode root = new TreeNode(values[0]);
        ArrayDeque<TreeNode> q = new ArrayDeque<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < values.length) {
            TreeNode node = q.remove();
            if (i < values.length && values[i] != null) {
                node.left = new TreeNode(values[i]);
                q.add(node.left);
            }
            i++;
            if (i < values.length && values[i] != null) {
                node.right = new TreeNode(values[i]);
                q.add(node.right);
            }
            i++;
        }
        List<List<Integer>> out = new ArrayList<>();
        ArrayDeque<TreeNode> bfs = new ArrayDeque<>();
        bfs.add(root);
        while (!bfs.isEmpty()) {
            List<Integer> level = new ArrayList<>();
            int size = bfs.size();
            for (int k = 0; k < size; k++) {
                TreeNode node = bfs.remove();
                level.add(node.val);
                if (node.left != null) {
                    bfs.add(node.left);
                }
                if (node.right != null) {
                    bfs.add(node.right);
                }
            }
            out.add(level);
        }
        return out;
    }

    static boolean refWordSearch(char[][] board, String word) {
        if (word.isEmpty()) {
            return true;
        }
        int rows = board.length;
        int cols = board[0].length;
        char[][] g = new char[rows][cols];
        for (int r = 0; r < rows; r++) {
            g[r] = board[r].clone();
        }
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (dfsWord(g, r, c, word, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    private static boolean dfsWord(char[][] g, int r, int c, String word, int idx) {
        if (idx == word.length()) {
            return true;
        }
        if (r < 0 || c < 0 || r >= g.length || c >= g[0].length || g[r][c] != word.charAt(idx)) {
            return false;
        }
        char tmp = g[r][c];
        g[r][c] = '#';
        boolean ok = dfsWord(g, r + 1, c, word, idx + 1)
                || dfsWord(g, r - 1, c, word, idx + 1)
                || dfsWord(g, r, c + 1, word, idx + 1)
                || dfsWord(g, r, c - 1, word, idx + 1);
        g[r][c] = tmp;
        return ok;
    }

    static Integer[] refSerializeDeserialize(Integer[] values) {
        List<String> parts = new ArrayList<>();
        for (Integer v : values) {
            parts.add(v == null ? "#" : String.valueOf(v));
        }
        while (!parts.isEmpty() && "#".equals(parts.get(parts.size() - 1))) {
            parts.remove(parts.size() - 1);
        }
        String data = String.join(",", parts);
        if (data.isEmpty()) {
            return new Integer[0];
        }
        Integer[] vals = Arrays.stream(data.split(","))
                .map(t -> "#".equals(t) ? null : Integer.valueOf(t))
                .toArray(Integer[]::new);
        return refLevelOrderFlat(vals);
    }

    private static Integer[] refLevelOrderFlat(Integer[] values) {
        if (values.length == 0 || values[0] == null) {
            return new Integer[0];
        }
        TreeNode root = new TreeNode(values[0]);
        ArrayDeque<TreeNode> q = new ArrayDeque<>();
        q.add(root);
        int i = 1;
        while (!q.isEmpty() && i < values.length) {
            TreeNode node = q.remove();
            if (i < values.length && values[i] != null) {
                node.left = new TreeNode(values[i]);
                q.add(node.left);
            }
            i++;
            if (i < values.length && values[i] != null) {
                node.right = new TreeNode(values[i]);
                q.add(node.right);
            }
            i++;
        }
        List<Integer> out = new ArrayList<>();
        java.util.LinkedList<Object> bfs = new java.util.LinkedList<>();
        bfs.add(root);
        while (!bfs.isEmpty()) {
            Object item = bfs.remove();
            if (item == null) {
                out.add(null);
                continue;
            }
            TreeNode node = (TreeNode) item;
            out.add(node.val);
            bfs.add(node.left);
            bfs.add(node.right);
        }
        while (!out.isEmpty() && out.get(out.size() - 1) == null) {
            out.remove(out.size() - 1);
        }
        return out.toArray(new Integer[0]);
    }

    static int[] refMaxSlidingWindow(int[] nums, int k) {
        if (k <= 0) {
            throw new IllegalArgumentException("k must be positive");
        }
        int n = nums.length;
        if (n == 0) {
            return new int[0];
        }
        List<Integer> out = new ArrayList<>();
        for (int i = k - 1; i < n; i++) {
            int best = nums[i - k + 1];
            for (int j = i - k + 2; j <= i; j++) {
                best = Math.max(best, nums[j]);
            }
            out.add(best);
        }
        return out.stream().mapToInt(Integer::intValue).toArray();
    }

    static int refKmpFirst(String text, String pattern) {
        if (pattern.isEmpty()) {
            return 0;
        }
        return text.indexOf(pattern);
    }

    static boolean refTrieSearch(List<String> words, String word) {
        return words.contains(word);
    }

    static boolean refTrieStartsWith(List<String> words, String prefix) {
        for (String w : words) {
            if (w.startsWith(prefix)) {
                return true;
            }
        }
        return prefix.isEmpty();
    }

    static int[] refBinaryHeapExtractOrder(int[] inserts) {
        int[] copy = inserts.clone();
        Arrays.sort(copy);
        return copy;
    }

    static DfsPractice.Times refDfsTimes(int n, int[][] edges, int source, boolean directed) {
        Graph g = new Graph(n, directed, false);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1]);
        }
        DFS.DfsResult r = DFS.traverseRecursive(g, source);
        return new DfsPractice.Times(r.discovery(), r.finish());
    }

    static int[] refPriorityQueueExtractOrder(int[] inserts) {
        int[] copy = inserts.clone();
        Arrays.sort(copy);
        return copy;
    }

    static int[] refNextGreater(int[] nums) {
        int n = nums.length;
        int[] out = new int[n];
        Arrays.fill(out, -1);
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[j] > nums[i]) {
                    out[i] = nums[j];
                    break;
                }
            }
        }
        return out;
    }

    static BstRefState refBstState(List<int[]> inserts, int searchKey) {
        Map<Integer, String> map = new HashMap<>();
        for (int[] p : inserts) {
            map.put(p[0], "v" + p[0]);
        }
        List<Integer> inOrderKeys = new ArrayList<>(map.keySet());
        inOrderKeys.sort(Integer::compareTo);
        return new BstRefState(inOrderKeys, map.get(searchKey));
    }

    record BstRefState(List<Integer> inOrderKeys, String searchValue) {}

    record StackSimResult(List<Integer> pops, boolean empty, Integer peek) {}

    static StackSimResult refStackSim(int[] push, int popCount) {
        ArrayDeque<Integer> stack = new ArrayDeque<>();
        for (int v : push) {
            stack.push(v);
        }
        List<Integer> pops = new ArrayList<>();
        for (int i = 0; i < popCount; i++) {
            pops.add(stack.pop());
        }
        Integer peek = stack.isEmpty() ? null : stack.peek();
        return new StackSimResult(pops, stack.isEmpty(), peek);
    }

    record QueueSimResult(List<Integer> dequeues, boolean empty, Integer peek) {}

    static QueueSimResult refQueueSim(int[] enqueue, int dequeueCount) {
        ArrayDeque<Integer> q = new ArrayDeque<>();
        for (int v : enqueue) {
            q.addLast(v);
        }
        List<Integer> dequeues = new ArrayList<>();
        for (int i = 0; i < dequeueCount; i++) {
            dequeues.add(q.removeFirst());
        }
        Integer peek = q.isEmpty() ? null : q.peekFirst();
        return new QueueSimResult(dequeues, q.isEmpty(), peek);
    }

    record DequeSimResult(Integer removeFirst, Integer removeLast, Integer remainingValue, boolean empty) {}

    static DequeSimResult refDequeSim(
            int[] addLast, int[] addFirst, boolean removeFirst, boolean removeLast) {
        ArrayDeque<Integer> dq = new ArrayDeque<>();
        for (int v : addLast) {
            dq.addLast(v);
        }
        for (int v : addFirst) {
            dq.addFirst(v);
        }
        Integer rf = removeFirst ? dq.pollFirst() : null;
        Integer rl = removeLast ? dq.pollLast() : null;
        Integer remaining = dq.isEmpty() ? null : dq.pollFirst();
        return new DequeSimResult(rf, rl, remaining, dq.isEmpty());
    }

    static int refRabinFirst(String text, String pattern) {
        return text.indexOf(pattern);
    }

    record FenwickRefState(int[] prefix, int[] ranges) {}

    static FenwickRefState refFenwickState(int n, List<int[]> adds, int[] prefixAt, int[][] rangeQueries) {
        int[] arr = new int[n];
        for (int[] add : adds) {
            arr[add[0]] += add[1];
        }
        int[] prefix = new int[prefixAt.length];
        for (int i = 0; i < prefixAt.length; i++) {
            int s = 0;
            for (int j = 0; j <= prefixAt[i]; j++) {
                s += arr[j];
            }
            prefix[i] = s;
        }
        int[] ranges = new int[rangeQueries.length];
        for (int i = 0; i < rangeQueries.length; i++) {
            int l = rangeQueries[i][0];
            int r = rangeQueries[i][1];
            int s = 0;
            for (int j = l; j <= r; j++) {
                s += arr[j];
            }
            ranges[i] = s;
        }
        return new FenwickRefState(prefix, ranges);
    }

    static List<List<GraphNeighbor>> refGraphNeighbors(int n, boolean directed, boolean weighted, int[][] edges) {
        List<List<GraphNeighbor>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            int u = e[0];
            int v = e[1];
            int w = e.length == 3 ? e[2] : 1;
            adj.get(u).add(new GraphNeighbor(v, weighted ? w : 1));
            if (!directed) {
                adj.get(v).add(new GraphNeighbor(u, weighted ? w : 1));
            }
        }
        for (List<GraphNeighbor> list : adj) {
            list.sort(Comparator.comparingInt(a -> a.to));
        }
        return adj;
    }

    record GraphNeighbor(int to, int weight) {}

    static List<Integer> refKosarajuComponentSizes(int n, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
        }
        boolean[] visited = new boolean[n];
        List<Integer> order = new ArrayList<>();
        for (int v = 0; v < n; v++) {
            if (!visited[v]) {
                dfs1Kosaraju(adj, v, visited, order);
            }
        }
        List<List<Integer>> rev = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            rev.add(new ArrayList<>());
        }
        for (int u = 0; u < n; u++) {
            for (int w : adj.get(u)) {
                rev.get(w).add(u);
            }
        }
        Arrays.fill(visited, false);
        List<Integer> sizes = new ArrayList<>();
        for (int i = order.size() - 1; i >= 0; i--) {
            int v = order.get(i);
            if (!visited[v]) {
                List<Integer> comp = new ArrayList<>();
                dfs2Kosaraju(rev, v, visited, comp);
                sizes.add(comp.size());
            }
        }
        sizes.sort(Integer::compareTo);
        return sizes;
    }

    private static void dfs1Kosaraju(List<List<Integer>> adj, int v, boolean[] visited, List<Integer> order) {
        visited[v] = true;
        for (int w : adj.get(v)) {
            if (!visited[w]) {
                dfs1Kosaraju(adj, w, visited, order);
            }
        }
        order.add(v);
    }

    private static void dfs2Kosaraju(List<List<Integer>> adj, int v, boolean[] visited, List<Integer> comp) {
        visited[v] = true;
        comp.add(v);
        for (int w : adj.get(v)) {
            if (!visited[w]) {
                dfs2Kosaraju(adj, w, visited, comp);
            }
        }
    }

    static int refMaxFlow(int n, int[][] edges, int source, int sink) {
        if (source == sink) {
            return 0;
        }
        int[][] cap = new int[n][n];
        for (int[] e : edges) {
            cap[e[0]][e[1]] += e[2];
        }
        int flow = 0;
        while (true) {
            int[] parent = new int[n];
            Arrays.fill(parent, -1);
            parent[source] = source;
            ArrayDeque<Integer> q = new ArrayDeque<>();
            q.add(source);
            while (!q.isEmpty() && parent[sink] == -1) {
                int u = q.removeFirst();
                for (int v = 0; v < n; v++) {
                    if (parent[v] == -1 && cap[u][v] > 0) {
                        parent[v] = u;
                        q.addLast(v);
                    }
                }
            }
            if (parent[sink] == -1) {
                break;
            }
            long add = 1_000_000_000_000L;
            for (int v = sink; v != source; v = parent[v]) {
                add = Math.min(add, cap[parent[v]][v]);
            }
            for (int v = sink; v != source; v = parent[v]) {
                int u = parent[v];
                cap[u][v] -= (int) add;
                cap[v][u] += (int) add;
            }
            flow += (int) add;
        }
        return flow;
    }

    record DynamicArrayRefState(int size, int[] gets) {}

    static DynamicArrayRefState refDynamicArray(int[] values, int[] getIndices) {
        int[] arr = values.clone();
        int[] gets = new int[getIndices.length];
        for (int i = 0; i < getIndices.length; i++) {
            gets[i] = arr[getIndices[i]];
        }
        return new DynamicArrayRefState(arr.length, gets);
    }

    record ZIndexResult(int index, int[] z) {}

    static ZIndexResult refZIndex(String text, String pattern) {
        int idx = pattern.isEmpty() ? 0 : text.indexOf(pattern);
        return new ZIndexResult(idx, refZArray(text));
    }

    static int[] refZArray(String text) {
        int n = text.length();
        if (n == 0) {
            return new int[0];
        }
        int[] z = new int[n];
        z[0] = n;
        int l = 0;
        int r = 0;
        for (int i = 1; i < n; i++) {
            if (i <= r) {
                z[i] = Math.min(r - i + 1, z[i - l]);
            }
            while (i + z[i] < n && text.charAt(z[i]) == text.charAt(i + z[i])) {
                z[i]++;
            }
            if (i + z[i] - 1 > r) {
                l = i;
                r = i + z[i] - 1;
            }
        }
        return z;
    }

    static int refLongestPalindromeLength(String s) {
        int best = 0;
        for (int i = 0; i < s.length(); i++) {
            for (int lo = i, hi = i; lo >= 0 && hi < s.length() && s.charAt(lo) == s.charAt(hi); lo--, hi++) {
                best = Math.max(best, hi - lo + 1);
            }
            for (int lo = i, hi = i + 1; lo >= 0 && hi < s.length() && s.charAt(lo) == s.charAt(hi); lo--, hi++) {
                best = Math.max(best, hi - lo + 1);
            }
        }
        return best;
    }

    static List<Integer> refAhoHits(String text, List<String> patterns) {
        Set<Integer> hits = new HashSet<>();
        for (String pat : patterns) {
            if (pat.isEmpty()) {
                continue;
            }
            for (int i = 0; i + pat.length() <= text.length(); i++) {
                if (text.regionMatches(i, pat, 0, pat.length())) {
                    hits.add(i);
                }
            }
        }
        List<Integer> out = new ArrayList<>(hits);
        out.sort(Integer::compareTo);
        return out;
    }

    record TreeMapSearchResult(List<Integer> inOrderKeys, String searchValue) {}

    static TreeMapSearchResult refTreeMapSearch(List<int[]> inserts, int searchKey) {
        Map<Integer, String> map = new HashMap<>();
        for (int[] p : inserts) {
            map.put(p[0], "v" + p[0]);
        }
        List<Integer> keys = new ArrayList<>(map.keySet());
        keys.sort(Integer::compareTo);
        String searchValue = map.containsKey(searchKey) ? map.get(searchKey) : null;
        return new TreeMapSearchResult(keys, searchValue);
    }

    record ArrayListOpsResult(int getValue, int removeValue, int sizeAfter) {}

    static ArrayListOpsResult refArrayListOps(int[] addLast, int[] addFirst, int getIndex, int removeIndex) {
        ArrayDeque<Integer> arr = new ArrayDeque<>();
        for (int v : addLast) {
            arr.addLast(v);
        }
        for (int v : addFirst) {
            arr.addFirst(v);
        }
        List<Integer> list = new ArrayList<>(arr);
        int getValue = list.get(getIndex);
        int removeValue = list.remove(removeIndex);
        return new ArrayListOpsResult(getValue, removeValue, list.size());
    }

    record TreeTraversalsRef(List<Integer> inOrder, List<Integer> preOrder, List<Integer> postOrder) {}

    static TreeTraversalsRef refTreeTraversals(List<int[]> inserts) {
        BST<Integer, String> tree = new BST<>();
        for (int[] p : inserts) {
            tree.insert(p[0], "v" + p[0]);
        }
        return new TreeTraversalsRef(
                TreeTraversals.inOrderRecursive(tree.getRoot()),
                TreeTraversals.preOrderRecursive(tree.getRoot()),
                TreeTraversals.postOrderRecursive(tree.getRoot()));
    }

    record HashMapOpsResult(String getVal, boolean hadRemove, String afterRemove) {}

    static HashMapOpsResult refHashMapOpsIntString(List<int[]> ops, int getKey, int removeKey) {
        Map<Integer, String> map = new HashMap<>();
        for (int[] op : ops) {
            map.put(op[0], String.valueOf(op[1]));
        }
        String getVal = map.get(getKey);
        boolean hadRemove = map.remove(removeKey) != null;
        String afterRemove = map.get(getKey);
        return new HashMapOpsResult(getVal, hadRemove, afterRemove);
    }

    static Integer refSeparateChainingGet(List<int[]> ops, String getKey) {
        Map<String, Integer> map = new HashMap<>();
        for (int[] op : ops) {
            map.put("k" + op[0], op[1]);
        }
        return map.get(getKey);
    }

    static int[] refSuffixArray(String s) {
        List<Integer> suffixes = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            suffixes.add(i);
        }
        suffixes.sort((a, b) -> s.substring(a).compareTo(s.substring(b)));
        return suffixes.stream().mapToInt(Integer::intValue).toArray();
    }

    static Map<Integer, Integer> refTreapSearch(List<int[]> inserts, int[] searchKeys) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int[] p : inserts) {
            map.put(p[0], p[1]);
        }
        Map<Integer, Integer> out = new HashMap<>();
        for (int key : searchKeys) {
            out.put(key, map.getOrDefault(key, null));
        }
        return out;
    }

    record OrderStatisticRef(Integer selectKey, Map<Integer, Integer> ranks) {}

    static OrderStatisticRef refOrderStatistic(List<int[]> inserts, int selectK, int[] rankKeys) {
        Map<Integer, String> map = new HashMap<>();
        for (int[] p : inserts) {
            map.put(p[0], "x");
        }
        List<Integer> keys = new ArrayList<>(map.keySet());
        keys.sort(Integer::compareTo);
        Integer selectKey = selectK >= 1 && selectK <= keys.size() ? keys.get(selectK - 1) : null;
        Map<Integer, Integer> ranks = new HashMap<>();
        for (int rk : rankKeys) {
            if (keys.isEmpty()) {
                ranks.put(rk, 0);
            } else {
                int count = 0;
                for (int key : keys) {
                    if (key <= rk) {
                        count++;
                    }
                }
                ranks.put(rk, count);
            }
        }
        return new OrderStatisticRef(selectKey, ranks);
    }

    static List<List<Integer>> refIntervalOverlap(int[][] intervals, int qLow, int qHigh) {
        List<List<Integer>> overlaps = new ArrayList<>();
        for (int[] iv : intervals) {
            if (iv[0] <= qHigh && qLow <= iv[1]) {
                overlaps.add(List.of(iv[0], iv[1]));
            }
        }
        overlaps.sort(Comparator.comparingInt((List<Integer> a) -> a.get(0)).thenComparingInt(a -> a.get(1)));
        return overlaps;
    }

    static Map<Integer, Boolean> refBTreeSearch(List<Integer> keys, int t, int[] searchKeys) {
        Set<Integer> set = new HashSet<>(keys);
        Map<Integer, Boolean> out = new HashMap<>();
        for (int key : searchKeys) {
            out.put(key, set.contains(key));
        }
        return out;
    }

    static Set<String> refBloomAddedKeys(List<String> added) {
        return new HashSet<>(added);
    }

    static int refMstWeight(int n, int[][] edges) {
        return PracticeBruteforce.refMstWeight(n, edges);
    }

    static int refAStarPathLength(int n, int[][] edges, int source, int goal) {
        int d = PracticeBruteforce.refDijkstra(n, edges, source)[goal];
        return d >= PracticeBruteforce.INF ? -1 : d;
    }

    record ArticulationBridgesRef(List<Integer> articulationPoints, List<int[]> bridges) {}

    static ArticulationBridgesRef refArticulationBridges(int n, int[][] edges) {
        List<int[]> norm = new ArrayList<>();
        for (int[] e : edges) {
            norm.add(new int[] {Math.min(e[0], e[1]), Math.max(e[0], e[1])});
        }
        List<Integer> ap = new ArrayList<>();
        int baseComps = connectedWithoutVertex(norm, n, -1);
        for (int v = 0; v < n; v++) {
            if (connectedWithoutVertex(norm, n, v) > baseComps) {
                ap.add(v);
            }
        }
        List<int[]> bridges = new ArrayList<>();
        for (int[] e : norm) {
            boolean[] seen = connectedWithoutEdge(norm, n, e);
            if (!seen[e[0]] || !seen[e[1]]) {
                bridges.add(e);
            }
        }
        bridges.sort(Comparator.comparingInt((int[] a) -> a[0]).thenComparingInt(a -> a[1]));
        return new ArticulationBridgesRef(ap, bridges);
    }

    private static boolean[] connectedWithoutEdge(List<int[]> norm, int n, int[] ban) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : norm) {
            if (ban != null && e[0] == ban[0] && e[1] == ban[1]) {
                continue;
            }
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        boolean[] seen = new boolean[n];
        ArrayDeque<Integer> q = new ArrayDeque<>();
        q.add(0);
        seen[0] = true;
        while (!q.isEmpty()) {
            int u = q.removeFirst();
            for (int w : adj.get(u)) {
                if (!seen[w]) {
                    seen[w] = true;
                    q.add(w);
                }
            }
        }
        return seen;
    }

    private static int connectedWithoutVertex(List<int[]> norm, int n, int skip) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : norm) {
            if (e[0] == skip || e[1] == skip) {
                continue;
            }
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        int comps = 0;
        boolean[] seen = new boolean[n];
        if (skip >= 0) {
            seen[skip] = true;
        }
        for (int i = 0; i < n; i++) {
            if (seen[i]) {
                continue;
            }
            comps++;
            ArrayDeque<Integer> q = new ArrayDeque<>();
            q.add(i);
            seen[i] = true;
            while (!q.isEmpty()) {
                int u = q.removeFirst();
                for (int w : adj.get(u)) {
                    if (!seen[w]) {
                        seen[w] = true;
                        q.add(w);
                    }
                }
            }
        }
        return comps;
    }

    static int refHungarianMinCost(int[][] cost) {
        int n = cost.length;
        int best = Integer.MAX_VALUE;
        int[] perm = new int[n];
        for (int i = 0; i < n; i++) {
            perm[i] = i;
        }
        return hungarianVisit(cost, perm, 0, best);
    }

    private static int hungarianVisit(int[][] cost, int[] perm, int k, int best) {
        if (k == perm.length) {
            int sum = 0;
            for (int i = 0; i < perm.length; i++) {
                sum += cost[i][perm[i]];
            }
            return Math.min(best, sum);
        }
        for (int i = k; i < perm.length; i++) {
            int tmp = perm[k];
            perm[k] = perm[i];
            perm[i] = tmp;
            best = hungarianVisit(cost, perm, k + 1, best);
            tmp = perm[k];
            perm[k] = perm[i];
            perm[i] = tmp;
        }
        return best;
    }

    static int refLca(int[] parent, int u, int v) {
        Set<Integer> ancestors = new HashSet<>();
        int x = u;
        while (true) {
            ancestors.add(x);
            if (x == parent[x]) {
                break;
            }
            x = parent[x];
        }
        int y = v;
        while (!ancestors.contains(y)) {
            y = parent[y];
        }
        return y;
    }

    static int[] refSparseTableMin(int[] initial, int[][] queries) {
        int[] out = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int l = queries[i][0];
            int r = queries[i][1];
            int best = initial[l];
            for (int j = l + 1; j <= r; j++) {
                best = Math.min(best, initial[j]);
            }
            out[i] = best;
        }
        return out;
    }

    static List<Integer> refReservoirSample(int[] stream, int k, int seed) {
        return ReservoirSampling.sample(stream, k, seed);
    }

    private static final class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int val) {
            this.val = val;
        }
    }
}
