package com.dsa.examples.practice;

import com.dsa.examples.graphs.Graph;
import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Seeded property tests: practice phase 2 vs {@link PracticeBruteforcePhase2}.
 *
 * <p>practice-property-topics: valid-parentheses meeting-rooms-ii top-k-frequent-elements
 * longest-substring-without-repeating lru-cache merge-intervals level-order-traversal word-search
 * serialize-binary-tree sliding-window-maximum kmp trie binary-heap dfs priority-queue monotonic-stack
 * bst stack queue deque rabin-karp segment-tree fenwick-tree graph tarjan-scc kosaraju edmonds-karp
 * dynamic-array z-algorithm manacher aho-corasick avl-tree red-black-tree singly-linked-list
 * doubly-linked-list tree-traversals separate-chaining open-addressing suffix-array treap
 * order-statistic-tree interval-tree b-tree bloom-filter boruvka-mst a-star articulation-bridges hungarian
 * lca-binary-lifting sparse-table reservoir-sampling
 */
class PracticePropertyPhase2Test {

    private static final int TRIALS = 25;

    @Test
    void propertyValidParentheses() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String s = randomParen(rng);
            assertEquals(PracticeBruteforcePhase2.refValidParentheses(s), ValidParentheses.solve(s));
        }
    }

    @Test
    void propertyMeetingRoomsIi() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[][] intervals = randomIntervals(rng, 6);
            int[][] copy = cloneIntervals(intervals);
            assertEquals(
                    PracticeBruteforcePhase2.refMinMeetingRooms(intervals),
                    MeetingRooms.minRooms(copy));
        }
    }

    @Test
    void propertyTopKFrequentElements() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] nums = randomIntArray(rng, 12);
            if (nums.length == 0) {
                continue;
            }
            int k = 1 + rng.nextInt(Math.min(3, nums.length));
            assertEquals(PracticeBruteforcePhase2.refTopKFrequent(nums, k), TopKFrequent.solve(nums, k));
        }
    }

    @Test
    void propertyLongestSubstringWithoutRepeating() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String s = randomString(rng, 10);
            assertEquals(
                    PracticeBruteforcePhase2.refLengthOfLongestSubstring(s),
                    LongestSubstring.lengthOfLongestSubstring(s));
        }
    }

    @Test
    void propertyLruCache() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int cap = 1 + rng.nextInt(4);
            PracticeBruteforcePhase2.RefLRU ref = new PracticeBruteforcePhase2.RefLRU(cap);
            LRUCacheDesign cache = new LRUCacheDesign(cap);
            int ops = 4 + rng.nextInt(8);
            for (int i = 0; i < ops; i++) {
                if (rng.nextDouble() < 0.55) {
                    int k = rng.nextInt(6);
                    int v = rng.nextInt(20);
                    ref.put(k, v);
                    cache.put(k, v);
                } else {
                    int k = rng.nextInt(6);
                    assertEquals(ref.get(k), cache.get(k));
                }
            }
        }
    }

    @Test
    void propertyMergeIntervals() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[][] intervals = randomIntervals(rng, 6);
            assertArrayEquals(
                    PracticeBruteforcePhase2.refMergeIntervals(intervals),
                    MergeIntervals.merge(cloneIntervals(intervals)));
        }
    }

    @Test
    void propertyLevelOrderTraversal() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            Integer[] values = randomTreeValues(rng);
            assertEquals(
                    PracticeBruteforcePhase2.refLevelOrder(values),
                    LevelOrderTraversal.levelOrder(values));
        }
    }

    @Test
    void propertyWordSearch() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            char[][] board = randomBoard(rng);
            String word = rng.nextDouble() < 0.5
                    ? "" + board[0][0] + (board[0].length > 1 ? board[0][1] : "")
                    : randomString(rng, 4).toUpperCase();
            char[][] copy = cloneBoard(board);
            assertEquals(
                    PracticeBruteforcePhase2.refWordSearch(board, word),
                    WordSearch.exists(copy, word));
        }
    }

    @Test
    void propertySerializeBinaryTree() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            Integer[] values = randomTreeValues(rng);
            String data = TreeCodecPractice.serialize(values);
            assertArrayEquals(
                    PracticeBruteforcePhase2.refSerializeDeserialize(values),
                    TreeCodecPractice.deserialize(data));
        }
    }

    @Test
    void propertySlidingWindowMaximum() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] nums = randomNonNegative(rng, 10);
            if (nums.length == 0) {
                continue;
            }
            int k = 1 + rng.nextInt(nums.length);
            assertArrayEquals(
                    PracticeBruteforcePhase2.refMaxSlidingWindow(nums, k),
                    SlidingWindowMax.maxSlidingWindow(nums, k));
        }
    }

    @Test
    void propertyKmp() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String text = randomString(rng, 12);
            String pattern = randomString(rng, 5);
            assertEquals(
                    PracticeBruteforcePhase2.refKmpFirst(text, pattern),
                    KmpPractice.firstIndex(text, pattern));
        }
    }

    @Test
    void propertyTrie() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            List<String> words = new ArrayList<>();
            int n = rng.nextInt(6);
            for (int i = 0; i < n; i++) {
                words.add(randomString(rng, 4));
            }
            TriePractice trie = new TriePractice();
            for (String w : words) {
                trie.insert(w);
            }
            String probe = randomString(rng, 3);
            assertEquals(PracticeBruteforcePhase2.refTrieSearch(words, probe), trie.search(probe));
            assertEquals(PracticeBruteforcePhase2.refTrieStartsWith(words, probe), trie.startsWith(probe));
        }
    }

    @Test
    void propertyBinaryHeap() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] inserts = randomIntArray(rng, 10);
            assertArrayEquals(
                    PracticeBruteforcePhase2.refBinaryHeapExtractOrder(inserts),
                    BinaryHeapPractice.extractOrder(inserts));
        }
    }

    @Test
    void propertyDfs() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            boolean directed = rng.nextDouble() < 0.5;
            List<int[]> edgeList = new ArrayList<>();
            for (int i = 1; i < n; i++) {
                edgeList.add(new int[] {i - 1, i});
            }
            if (rng.nextDouble() < 0.3 && n > 2) {
                edgeList.add(new int[] {0, n - 1});
            }
            int[][] edges = edgeList.toArray(new int[0][]);
            int source = rng.nextInt(n);
            DfsPractice.Times got = DfsPractice.traverse(n, edges, source, directed);
            DfsPractice.Times want = PracticeBruteforcePhase2.refDfsTimes(n, edges, source, directed);
            assertArrayEquals(want.discovery(), got.discovery());
            assertArrayEquals(want.finish(), got.finish());
        }
    }

    @Test
    void propertyPriorityQueue() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] inserts = randomIntArray(rng, 10);
            assertArrayEquals(
                    PracticeBruteforcePhase2.refPriorityQueueExtractOrder(inserts),
                    PriorityQueuePractice.extractOrder(inserts));
        }
    }

    @Test
    void propertyMonotonicStack() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] nums = randomIntArray(rng, 10);
            if (nums.length == 0) {
                continue;
            }
            assertArrayEquals(
                    PracticeBruteforcePhase2.refNextGreater(nums),
                    MonotonicStackPractice.nextGreater(nums));
        }
    }

    @Test
    void propertyBst() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 1 + rng.nextInt(8);
            List<int[]> inserts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int key = rng.nextInt(15);
                inserts.add(new int[] {key, key});
            }
            int searchKey = rng.nextInt(15);
            BstPractice tree = new BstPractice();
            for (int[] p : inserts) {
                tree.insert(p[0], "v" + p[0]);
            }
            PracticeBruteforcePhase2.BstRefState want = PracticeBruteforcePhase2.refBstState(inserts, searchKey);
            assertEquals(want.inOrderKeys(), tree.inOrderKeys());
            assertEquals(want.searchValue(), tree.search(searchKey));
        }
    }

    @Test
    void propertyStack() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] push = randomIntArray(rng, 8);
            int popCount = Math.min(push.length, rng.nextInt(push.length + 1));
            PracticeBruteforcePhase2.StackSimResult want = PracticeBruteforcePhase2.refStackSim(push, popCount);
            StackPractice stack = new StackPractice();
            for (int v : push) {
                stack.push(v);
            }
            for (int expected : want.pops()) {
                assertEquals(expected, stack.pop());
            }
            if (want.empty()) {
                assertTrue(stack.isEmpty());
                assertThrows(IllegalStateException.class, stack::peek);
            } else {
                assertEquals(want.peek(), stack.peek());
            }
        }
    }

    @Test
    void propertyQueue() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] enqueue = randomIntArray(rng, 8);
            int dequeueCount = Math.min(enqueue.length, rng.nextInt(enqueue.length + 1));
            PracticeBruteforcePhase2.QueueSimResult want = PracticeBruteforcePhase2.refQueueSim(enqueue, dequeueCount);
            QueuePractice q = new QueuePractice();
            for (int v : enqueue) {
                q.enqueue(v);
            }
            for (int expected : want.dequeues()) {
                assertEquals(expected, q.dequeue());
            }
            if (want.empty()) {
                assertTrue(q.isEmpty());
                assertThrows(IllegalStateException.class, q::peek);
            } else {
                assertEquals(want.peek(), q.peek());
            }
        }
    }

    @Test
    void propertyDeque() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] addLast = randomIntArray(rng, 4);
            int[] addFirst = randomIntArray(rng, 4);
            boolean removeFirst = addLast.length + addFirst.length > 0 && rng.nextDouble() < 0.7;
            boolean removeLast = addLast.length + addFirst.length > 1 && rng.nextDouble() < 0.7;
            PracticeBruteforcePhase2.DequeSimResult want =
                    PracticeBruteforcePhase2.refDequeSim(addLast, addFirst, removeFirst, removeLast);
            DequePractice dq = new DequePractice();
            for (int v : addLast) {
                dq.addLast(v);
            }
            for (int v : addFirst) {
                dq.addFirst(v);
            }
            if (removeFirst) {
                assertEquals(want.removeFirst(), dq.removeFirst());
            }
            if (removeLast) {
                assertEquals(want.removeLast(), dq.removeLast());
            }
            if (want.remainingValue() != null) {
                assertEquals(want.remainingValue(), dq.removeFirst());
            }
            assertEquals(want.empty(), dq.isEmpty());
        }
    }

    @Test
    void propertyRabinKarp() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String text = randomString(rng, 12);
            String pattern = randomString(rng, 5);
            assertEquals(
                    PracticeBruteforcePhase2.refRabinFirst(text, pattern),
                    RabinKarpPractice.firstIndex(text, pattern));
        }
    }

    @Test
    void propertySegmentTree() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] initial = randomIntArray(rng, 8);
            if (initial.length < 2) {
                continue;
            }
            SegmentTreePractice st = new SegmentTreePractice(initial);
            List<int[]> queries = new ArrayList<>();
            for (int q = 0; q < 3; q++) {
                int l = rng.nextInt(initial.length);
                int r = l + rng.nextInt(initial.length - l);
                queries.add(new int[] {l, r});
            }
            int[] arr = initial.clone();
            for (int[] qr : queries) {
                int s = rangeSum(arr, qr[0], qr[1]);
                assertEquals(s, st.rangeSum(qr[0], qr[1]));
            }
            int idx = rng.nextInt(arr.length);
            int val = rng.nextInt(10);
            st.update(idx, val);
            arr[idx] = val;
            for (int[] qr : queries) {
                int s = rangeSum(arr, qr[0], qr[1]);
                assertEquals(s, st.rangeSum(qr[0], qr[1]));
            }
        }
    }

    @Test
    void propertyFenwickTree() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(8);
            FenwickTreePractice ft = new FenwickTreePractice(n);
            List<int[]> adds = new ArrayList<>();
            for (int i = 0; i < 4; i++) {
                adds.add(new int[] {rng.nextInt(n), rng.nextInt(5)});
            }
            int[] arr = new int[n];
            for (int[] add : adds) {
                ft.add(add[0], add[1]);
                arr[add[0]] += add[1];
            }
            for (int i = 0; i < 3; i++) {
                int at = rng.nextInt(n);
                assertEquals(prefixSum(arr, at), ft.prefixSum(at));
            }
            for (int i = 0; i < 3; i++) {
                int l = rng.nextInt(n);
                int r = l + rng.nextInt(n - l);
                assertEquals(rangeSum(arr, l, r), ft.rangeSum(l, r));
            }
        }
    }

    @Test
    void propertyGraph() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            boolean directed = rng.nextDouble() < 0.5;
            boolean weighted = rng.nextDouble() < 0.5;
            List<int[]> edgeList = new ArrayList<>();
            for (int i = 1; i < n; i++) {
                if (weighted) {
                    edgeList.add(new int[] {i - 1, i, 1 + rng.nextInt(3)});
                } else {
                    edgeList.add(new int[] {i - 1, i});
                }
            }
            int[][] edges = edgeList.toArray(new int[0][]);
            Graph g = GraphPractice.build(n, directed, weighted, edges);
            List<List<PracticeBruteforcePhase2.GraphNeighbor>> want =
                    PracticeBruteforcePhase2.refGraphNeighbors(n, directed, weighted, edges);
            for (int v = 0; v < n; v++) {
                List<int[]> got = new ArrayList<>();
                for (Graph.Edge e : g.neighbors(v)) {
                    if (weighted) {
                        got.add(new int[] {e.to(), e.weight()});
                    } else {
                        got.add(new int[] {e.to()});
                    }
                }
                List<int[]> exp = new ArrayList<>();
                for (PracticeBruteforcePhase2.GraphNeighbor e : want.get(v)) {
                    if (weighted) {
                        exp.add(new int[] {e.to(), e.weight()});
                    } else {
                        exp.add(new int[] {e.to()});
                    }
                }
                assertIntMatrixListEquals(exp, got);
            }
        }
    }

    @Test
    void propertyTarjanScc() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            List<int[]> edgeList = pathWithOptionalBackEdge(rng, n);
            int[][] edges = edgeList.toArray(new int[0][]);
            assertEquals(
                    PracticeBruteforcePhase2.refKosarajuComponentSizes(n, edges),
                    TarjanSccPractice.componentSizesSorted(n, edges));
        }
    }

    @Test
    void propertyKosaraju() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            List<int[]> edgeList = pathWithOptionalBackEdge(rng, n);
            int[][] edges = edgeList.toArray(new int[0][]);
            assertEquals(
                    PracticeBruteforcePhase2.refKosarajuComponentSizes(n, edges),
                    KosarajuPractice.componentSizesSorted(n, edges));
        }
    }

    @Test
    void propertyEdmondsKarp() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 3 + rng.nextInt(3);
            int source = 0;
            int sink = n - 1;
            List<int[]> edgeList = new ArrayList<>();
            edgeList.add(new int[] {0, 1, 2 + rng.nextInt(3)});
            if (n > 2) {
                edgeList.add(new int[] {1, 2, 1 + rng.nextInt(3)});
            }
            if (rng.nextDouble() < 0.4) {
                edgeList.add(new int[] {0, sink, 1 + rng.nextInt(2)});
            }
            int[][] edges = edgeList.toArray(new int[0][]);
            assertEquals(
                    PracticeBruteforcePhase2.refMaxFlow(n, edges, source, sink),
                    EdmondsKarpPractice.maxFlow(n, edges, source, sink));
        }
    }

    @Test
    void propertyDynamicArray() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] values = randomIntArray(rng, 10);
            DynamicArrayPractice arr = new DynamicArrayPractice();
            for (int v : values) {
                arr.add(v);
            }
            int queryCount = Math.min(3, values.length);
            int[] getIndices = new int[queryCount];
            for (int i = 0; i < queryCount; i++) {
                getIndices[i] = rng.nextInt(values.length);
            }
            PracticeBruteforcePhase2.DynamicArrayRefState want =
                    PracticeBruteforcePhase2.refDynamicArray(values, getIndices);
            assertEquals(want.size(), arr.size());
            for (int i = 0; i < getIndices.length; i++) {
                assertEquals(want.gets()[i], arr.get(getIndices[i]));
            }
        }
    }

    @Test
    void propertyZAlgorithm() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String text = randomString(rng, 10);
            String pattern = randomString(rng, 4);
            PracticeBruteforcePhase2.ZIndexResult want = PracticeBruteforcePhase2.refZIndex(text, pattern);
            assertEquals(want.index(), ZAlgorithmPractice.search(text, pattern));
            assertArrayEquals(want.z(), ZAlgorithmPractice.zArray(text));
        }
    }

    @Test
    void propertyManacher() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String s = randomString(rng, 10);
            assertEquals(
                    PracticeBruteforcePhase2.refLongestPalindromeLength(s),
                    ManacherPractice.longestPalindromeLength(s));
        }
    }

    @Test
    void propertyAhoCorasick() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String text = randomString(rng, 10);
            List<String> patterns = new ArrayList<>();
            int pn = 1 + rng.nextInt(3);
            for (int i = 0; i < pn; i++) {
                patterns.add(randomString(rng, 3));
            }
            assertEquals(
                    PracticeBruteforcePhase2.refAhoHits(text, patterns),
                    AhoCorasickPractice.search(text, patterns));
        }
    }

    @Test
    void propertyAvlTree() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            List<int[]> inserts = randomKeyInserts(rng, 6, 12);
            int searchKey = rng.nextInt(12);
            AvlTreePractice tree = new AvlTreePractice();
            for (int[] p : inserts) {
                tree.insert(p[0], "v" + p[0]);
            }
            PracticeBruteforcePhase2.TreeMapSearchResult want =
                    PracticeBruteforcePhase2.refTreeMapSearch(inserts, searchKey);
            assertEquals(want.inOrderKeys(), tree.inOrderKeys());
            assertEquals(want.searchValue(), tree.search(searchKey));
        }
    }

    @Test
    void propertyRedBlackTree() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            List<int[]> inserts = randomKeyValueInserts(rng, 6, 12);
            RedBlackTreePractice tree = new RedBlackTreePractice();
            Map<Integer, Integer> refMap = new HashMap<>();
            for (int[] p : inserts) {
                tree.insert(p[0], p[1]);
                refMap.put(p[0], p[1]);
            }
            for (int i = 0; i < 3; i++) {
                int key = rng.nextInt(12);
                Integer want = refMap.get(key);
                assertEquals(want, tree.search(key));
            }
        }
    }

    @Test
    void propertySinglyLinkedList() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] addLast = randomIntArray(rng, 6);
            if (addLast.length == 0) {
                continue;
            }
            int getIndex = rng.nextInt(addLast.length);
            int removeIndex = rng.nextInt(addLast.length);
            PracticeBruteforcePhase2.ArrayListOpsResult want =
                    PracticeBruteforcePhase2.refArrayListOps(addLast, new int[0], getIndex, removeIndex);
            SinglyLinkedListPractice list = new SinglyLinkedListPractice();
            for (int v : addLast) {
                list.addLast(v);
            }
            assertEquals(want.getValue(), list.get(getIndex));
            assertEquals(want.removeValue(), list.remove(removeIndex));
            assertEquals(want.sizeAfter(), list.size());
        }
    }

    @Test
    void propertyDoublyLinkedList() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] addLast = randomIntArray(rng, 4);
            int[] addFirst = randomIntArray(rng, 4);
            if (addLast.length == 0 && addFirst.length == 0) {
                continue;
            }
            int combinedLen = addFirst.length + addLast.length;
            int getIndex = rng.nextInt(combinedLen);
            int removeIndex = rng.nextInt(combinedLen);
            PracticeBruteforcePhase2.ArrayListOpsResult want =
                    PracticeBruteforcePhase2.refArrayListOps(addLast, addFirst, getIndex, removeIndex);
            DoublyLinkedListPractice list = new DoublyLinkedListPractice();
            for (int v : addLast) {
                list.addLast(v);
            }
            for (int v : addFirst) {
                list.addFirst(v);
            }
            assertEquals(want.getValue(), list.get(getIndex));
            assertEquals(want.removeValue(), list.remove(removeIndex));
            assertEquals(want.sizeAfter(), list.size());
        }
    }

    @Test
    void propertyTreeTraversals() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            List<int[]> inserts = randomKeyInserts(rng, 6, 12);
            TreeTraversalsPractice tree = new TreeTraversalsPractice();
            for (int[] p : inserts) {
                tree.insert(p[0], "v" + p[0]);
            }
            PracticeBruteforcePhase2.TreeTraversalsRef want = PracticeBruteforcePhase2.refTreeTraversals(inserts);
            assertEquals(want.inOrder(), tree.inOrder());
            assertEquals(want.preOrder(), tree.preOrder());
            assertEquals(want.postOrder(), tree.postOrder());
        }
    }

    @Test
    void propertySeparateChaining() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            List<int[]> ops = new ArrayList<>();
            for (int i = 0; i < 5; i++) {
                ops.add(new int[] {rng.nextInt(8), rng.nextInt(20)});
            }
            String getKey = "k" + rng.nextInt(8);
            SeparateChainingPractice table = new SeparateChainingPractice();
            for (int[] op : ops) {
                table.put("k" + op[0], op[1]);
            }
            Integer want = PracticeBruteforcePhase2.refSeparateChainingGet(ops, getKey);
            if (want == null) {
                assertNull(table.get(getKey));
            } else {
                assertEquals(want, table.get(getKey));
            }
        }
    }

    @Test
    void propertyOpenAddressing() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            List<int[]> ops = new ArrayList<>();
            for (int i = 0; i < 5; i++) {
                ops.add(new int[] {rng.nextInt(6), rng.nextInt(20)});
            }
            int getKey = ops.isEmpty() ? 0 : ops.get(ops.size() - 1)[0];
            int removeKey = getKey;
            OpenAddressingPractice table = new OpenAddressingPractice();
            for (int[] op : ops) {
                table.put(op[0], String.valueOf(op[1]));
            }
            PracticeBruteforcePhase2.HashMapOpsResult want =
                    PracticeBruteforcePhase2.refHashMapOpsIntString(ops, getKey, removeKey);
            assertEquals(want.getVal(), table.get(getKey));
            assertEquals(want.hadRemove(), table.remove(removeKey));
            assertNull(table.get(getKey));
        }
    }

    @Test
    void propertySuffixArray() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String s = randomString(rng, 8);
            assertArrayEquals(PracticeBruteforcePhase2.refSuffixArray(s), SuffixArrayPractice.build(s));
        }
    }

    @Test
    void propertyTreap() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            long seed = rng.nextInt(1000);
            List<int[]> inserts = randomKeyValueInserts(rng, 6, 12);
            int[] searchKeys = {rng.nextInt(12), rng.nextInt(12)};
            TreapPractice treap = new TreapPractice(seed);
            for (int[] p : inserts) {
                treap.insert(p[0], p[1]);
            }
            Map<Integer, Integer> want = PracticeBruteforcePhase2.refTreapSearch(inserts, searchKeys);
            for (int key : searchKeys) {
                assertEquals(want.get(key), treap.search(key));
            }
        }
    }

    @Test
    void propertyOrderStatisticTree() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            List<int[]> inserts = randomKeyInserts(rng, 6, 10);
            int selectK = 1 + rng.nextInt(5);
            int[] rankKeys = {5, rng.nextInt(10)};
            OrderStatisticTreePractice tree = new OrderStatisticTreePractice();
            for (int[] p : inserts) {
                tree.insert(p[0], "x");
            }
            PracticeBruteforcePhase2.OrderStatisticRef want =
                    PracticeBruteforcePhase2.refOrderStatistic(inserts, selectK, rankKeys);
            if (want.selectKey() == null) {
                assertThrows(IllegalArgumentException.class, () -> tree.select(selectK));
            } else {
                assertEquals(want.selectKey(), tree.select(selectK));
            }
            for (int rk : rankKeys) {
                assertEquals(want.ranks().get(rk), tree.rank(rk));
            }
        }
    }

    @Test
    void propertyIntervalTree() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[][] intervals = randomIntervals(rng, 5);
            int qLow = rng.nextInt(8);
            int qHigh = qLow + rng.nextInt(6);
            IntervalTreePractice tree = new IntervalTreePractice();
            for (int[] iv : intervals) {
                tree.insert(iv[0], iv[1]);
            }
            assertEquals(
                    PracticeBruteforcePhase2.refIntervalOverlap(intervals, qLow, qHigh),
                    tree.overlapSorted(qLow, qHigh));
        }
    }

    @Test
    void propertyBTree() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            BTreePractice tree = new BTreePractice(3);
            List<Integer> keys = new ArrayList<>();
            for (int i = 0; i < 8; i++) {
                int key = rng.nextInt(20);
                keys.add(key);
                tree.insert(key);
            }
            int[] searchKeys = {keys.get(0), rng.nextInt(25)};
            Map<Integer, Boolean> want = PracticeBruteforcePhase2.refBTreeSearch(keys, 3, searchKeys);
            for (int key : searchKeys) {
                assertEquals(want.get(key), tree.search(key));
            }
        }
    }

    @Test
    void propertyBloomFilter() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            List<String> added = new ArrayList<>();
            for (int i = 0; i < 4; i++) {
                added.add("item" + rng.nextInt(20));
            }
            BloomFilterPractice bfFilter = new BloomFilterPractice(32, 0.01);
            for (String item : added) {
                bfFilter.add(item);
            }
            Set<String> addedSet = PracticeBruteforcePhase2.refBloomAddedKeys(added);
            for (String item : addedSet) {
                assertTrue(bfFilter.mightContain(item));
            }
        }
    }

    @Test
    void propertyBoruvkaMst() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            int[][] edges = new int[n - 1][3];
            for (int i = 1; i < n; i++) {
                edges[i - 1] = new int[] {i - 1, i, 1 + rng.nextInt(5)};
            }
            int want = PracticeBruteforcePhase2.refMstWeight(n, edges);
            assertEquals(want, BoruvkaMstPractice.totalWeight(n, edges));
        }
    }

    @Test
    void propertyAStar() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(4);
            int[][] edges = new int[n - 1][3];
            for (int i = 1; i < n; i++) {
                edges[i - 1] = new int[] {i - 1, i, 1 + rng.nextInt(4)};
            }
            int source = 0;
            int goal = n - 1;
            assertEquals(
                    PracticeBruteforcePhase2.refAStarPathLength(n, edges, source, goal),
                    AStarPractice.shortestPathLength(n, edges, source, goal));
        }
    }

    @Test
    void propertyArticulationBridges() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 3 + rng.nextInt(3);
            List<int[]> edgeList = new ArrayList<>();
            for (int i = 1; i < n; i++) {
                edgeList.add(new int[] {i - 1, i});
            }
            if (rng.nextDouble() < 0.4 && n >= 4) {
                edgeList.add(new int[] {1, 3});
            }
            int[][] edges = edgeList.toArray(new int[0][]);
            ArticulationBridgesPractice.Result got = ArticulationBridgesPractice.find(n, edges);
            PracticeBruteforcePhase2.ArticulationBridgesRef want =
                    PracticeBruteforcePhase2.refArticulationBridges(n, edges);
            assertEquals(want.articulationPoints(), got.articulationPoints());
            List<int[]> sortedBridges = new ArrayList<>(got.bridges());
            sortedBridges.sort(bridgeOrder());
            assertIntMatrixListEquals(want.bridges(), sortedBridges);
        }
    }

    @Test
    void propertyHungarian() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(3);
            int[][] cost = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    cost[i][j] = rng.nextInt(9) + 1;
                }
            }
            assertEquals(
                    PracticeBruteforcePhase2.refHungarianMinCost(cost),
                    HungarianPractice.minCost(cost));
        }
    }

    @Test
    void propertyLcaBinaryLifting() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            int[] parent = randomParentTree(rng, n);
            LcaBinaryLiftingPractice lca = new LcaBinaryLiftingPractice(parent);
            int u = rng.nextInt(n);
            int v = rng.nextInt(n);
            assertEquals(PracticeBruteforcePhase2.refLca(parent, u, v), lca.query(u, v));
        }
    }

    @Test
    void propertySparseTable() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] initial = randomIntArray(rng, 10);
            if (initial.length < 2) {
                continue;
            }
            SparseTablePractice st = new SparseTablePractice(initial);
            List<int[]> queries = new ArrayList<>();
            for (int i = 0; i < 4; i++) {
                int l = rng.nextInt(initial.length);
                int r = l + rng.nextInt(initial.length - l);
                queries.add(new int[] {l, r});
            }
            int[][] qArr = queries.toArray(new int[0][]);
            int[] want = PracticeBruteforcePhase2.refSparseTableMin(initial, qArr);
            for (int i = 0; i < queries.size(); i++) {
                int[] qr = queries.get(i);
                assertEquals(want[i], st.query(qr[0], qr[1]));
            }
        }
    }

    @Test
    void propertyReservoirSampling() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] stream = randomIntArray(rng, 12);
            int k = stream.length == 0 ? 0 : rng.nextInt(Math.min(4, stream.length + 1));
            int seed = rng.nextInt(1000);
            assertEquals(
                    PracticeBruteforcePhase2.refReservoirSample(stream, k, seed),
                    ReservoirSamplingPractice.sample(stream, k, seed));
        }
    }

    private static void assertIntMatrixListEquals(List<int[]> expected, List<int[]> actual) {
        assertEquals(expected.size(), actual.size());
        for (int i = 0; i < expected.size(); i++) {
            assertArrayEquals(expected.get(i), actual.get(i));
        }
    }

    private static List<int[]> pathWithOptionalBackEdge(Random rng, int n) {
        List<int[]> edgeList = new ArrayList<>();
        for (int i = 1; i < n; i++) {
            edgeList.add(new int[] {i - 1, i});
        }
        if (rng.nextDouble() < 0.35) {
            edgeList.add(new int[] {n - 1, 0});
        }
        return edgeList;
    }

    private static Comparator<int[]> bridgeOrder() {
        return Comparator.comparingInt((int[] a) -> a[0]).thenComparingInt(a -> a[1]);
    }

    private static int prefixSum(int[] arr, int at) {
        int s = 0;
        for (int j = 0; j <= at; j++) {
            s += arr[j];
        }
        return s;
    }

    private static int rangeSum(int[] arr, int l, int r) {
        int s = 0;
        for (int i = l; i <= r; i++) {
            s += arr[i];
        }
        return s;
    }

    private static int[] randomIntArray(Random rng, int maxLen) {
        int n = rng.nextInt(maxLen + 1);
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = rng.nextInt(21) - 10;
        }
        return arr;
    }

    private static int[] randomNonNegative(Random rng, int maxLen) {
        int n = rng.nextInt(maxLen + 1);
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = rng.nextInt(12);
        }
        return arr;
    }

    private static String randomString(Random rng, int maxLen) {
        int n = rng.nextInt(maxLen + 1);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append((char) ('a' + rng.nextInt(3)));
        }
        return sb.toString();
    }

    private static String randomParen(Random rng) {
        String pool = "()[]{}";
        int n = rng.nextInt(10);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append(pool.charAt(rng.nextInt(pool.length())));
        }
        return sb.toString();
    }

    private static int[][] randomIntervals(Random rng, int maxN) {
        int n = rng.nextInt(maxN + 1);
        int[][] out = new int[n][2];
        for (int i = 0; i < n; i++) {
            int a = rng.nextInt(10);
            out[i] = new int[] {a, a + 1 + rng.nextInt(8)};
        }
        return out;
    }

    private static Integer[] randomTreeValues(Random rng) {
        int n = 1 + rng.nextInt(7);
        Integer[] vals = new Integer[n];
        for (int i = 0; i < n; i++) {
            vals[i] = rng.nextDouble() < 0.25 ? null : rng.nextInt(20);
        }
        if (vals[0] == null) {
            vals[0] = rng.nextInt(10) + 1;
        }
        return vals;
    }

    private static char[][] randomBoard(Random rng) {
        int rows = 2 + rng.nextInt(2);
        int cols = 2 + rng.nextInt(2);
        String letters = "ABCDEF";
        char[][] board = new char[rows][cols];
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                board[r][c] = letters.charAt(rng.nextInt(letters.length()));
            }
        }
        return board;
    }

    private static int[] randomParentTree(Random rng, int n) {
        int[] parent = new int[n];
        parent[0] = 0;
        for (int i = 1; i < n; i++) {
            parent[i] = rng.nextInt(i);
        }
        return parent;
    }

    private static List<int[]> randomKeyInserts(Random rng, int count, int keyRange) {
        List<int[]> inserts = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            int key = rng.nextInt(keyRange);
            inserts.add(new int[] {key, key});
        }
        return inserts;
    }

    private static List<int[]> randomKeyValueInserts(Random rng, int count, int keyRange) {
        List<int[]> inserts = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            int key = rng.nextInt(keyRange);
            inserts.add(new int[] {key, key * 10 + 1});
        }
        return inserts;
    }

    private static int[][] cloneIntervals(int[][] intervals) {
        int[][] copy = new int[intervals.length][];
        for (int i = 0; i < intervals.length; i++) {
            copy[i] = intervals[i].clone();
        }
        return copy;
    }

    private static char[][] cloneBoard(char[][] board) {
        char[][] copy = new char[board.length][];
        for (int i = 0; i < board.length; i++) {
            copy[i] = board[i].clone();
        }
        return copy;
    }
}
