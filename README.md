# foundational-dsa

[![License](https://img.shields.io/github/license/EngineerID/foundational-dsa)](./LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/EngineerID/foundational-dsa)](https://github.com/EngineerID/foundational-dsa/commits/master)
[![Languages](https://img.shields.io/github/languages/top/EngineerID/foundational-dsa)](https://github.com/EngineerID/foundational-dsa)
[![Stars](https://img.shields.io/github/stars/EngineerID/foundational-dsa?style=social)](https://github.com/EngineerID/foundational-dsa/stargazers)

Personal practice repo for core data structures and algorithms (interview prep). Python is primary; JavaScript and Java are included where present. Implementations are kept readable and testable, not production-polished.

**About:** This is foundational DSA practice material maintained by Ivan Damnjanovic — useful for general interview preparation and demonstrating algorithmic fundamentals.

Prior Ambient Systems context is archived in [docs/ambient-transfer-note.md](./docs/ambient-transfer-note.md).

## Prerequisites

- **Python** 3.8+
- **Node.js** 18+
- **JDK** 11+ (for Java samples)

## Running code

Install Node dependencies once:

```bash
npm ci
```

Run all tests (Python, JavaScript, Java):

```bash
npm test
```

Run per language:

```bash
npm run test:python    # Python unit tests (per-problem folders)
npm run test:js        # Jest
npm run test:java      # Compile and run Java files with main()
```

**Python:** Tests live next to each solution (`unit_test.py` or `unit-test.py`). On Windows use `py`; on macOS/Linux use `python3`. You can also run a single folder manually:

```bash
cd "Data-Structures/Arrays/01-TwoNumberSum"
py -m unittest unit_test.py -v
```

**JavaScript:** Jest discovers `**/*.test.js` under the repo (excluding `node_modules`).

**Java:** Samples are reference implementations. Only files with a `public static void main` method are executed by the runner (currently `TopThree.java`).

## Repomix export

Generate a single markdown bundle for AI review:

```bash
npm run repomix   # writes repomix-output.md
```

## [Data Structures](./Data-Structures)

**[Arrays](./Data-Structures/Arrays)**
* Two Number Sum (Python, JavaScript)
* Three Number Sum (Python)
* Validate Subsequence (Python)
* Sorted Squared Array (Python, JavaScript)
* Merge Overlapping Intervals (Python)
* Array of Products (Python)
* Largest Range (Python)

**[Disjoint Sets](./Data-Structures/Disjoint%20Sets)**
_Examples coming soon._

**[Graphs](./Data-Structures/Graphs)**
_Examples coming soon._

**[Hash Tables](./Data-Structures/Hash%20Tables)**
* Hash Table with Chaining (Python)
* Hash Table with Open Addressing (Python)
* Bloom Filters (Python)

**[Heaps](./Data-Structures/Heaps)**
* Min Heap Construction (Python)
* Merge Sorted Arrays (_Coming soon._)
* Laptop Rentals  (_Coming soon._)
* Continuous Median (Python)

**[Linked Lists](./Data-Structures/Linked%20Lists)**
* Linked List Construction (Python)
* LRU (Least Recently Used) Cache (Python)

**[Matrices & Grids](./Data-Structures/Matrices%20&%20Grids)**
_Examples coming soon._

**[Queues](./Data-Structures/Queues)**
_Examples coming soon._

**[Sets](./Data-Structures/Sets)**
_Examples coming soon._

**[Stacks](./Data-Structures/Stacks)**
* Min Max Stack Construction (Python)

**[Trees - Binary & Search Trees](./Data-Structures/Trees)**
* Binary Trees - Branch Sum (Python)
* Binary Search Tree Construction (Python)

**[Trees (Advanced)](./Data-Structures/Advanced%20Trees)**
* AVL Trees (_Coming soon._)
* Suffix Trie (Python)
* (a,b)-Trees (_Coming soon._)
* Skip Lists (_Coming soon._)
* Multi String Search (Python)

## [Algorithms](./Algorithms)

**[Divide & Conquer](./Algorithms/Divide%20&%20Conquer)**
* Divide & Conquer (_Coming soon._)
* Closest Pair of Points (_Coming soon._)
* Strassen's Matrix Multiplication (_Coming soon._)
* Binary Search (_Coming soon._)

**[Dynamic Programming](./Algorithms/Dynamic%20Programming)**
* Knapsack Problem (Python)
* Kadane's Algorithm (Python)
* Longest Common Subsequence (_Coming soon._)
* Matrix Chain Multiplication (_Coming soon._)
* Min Number of Jumps (Python)

**[Graph Algorithms](./Algorithms/Graphs)**
* Depth-first Search (DFS) (Python)
* Breadth-first Search (BFS) (Python)
* Dijkstra's Algorithm (Python)
* Bellman-Ford (_Coming soon._)
* A* Algorithm (Python)
* Cycle in Graph (Python)
* Topological Sort (_Coming soon._)
* Detect Arbitrage (Python)

**[Greedy Algorithms](./Algorithms/Greedy%20Algorithms)**
* Minimum Waiting Time (Python)
* Class Photos  (_Coming soon._)
* Task Assignment  (_Coming soon._)
* Optimal Freelancing  (_Coming soon._)
* Tandem Bicycle (_Coming soon._)

**[Recursion](./Algorithms/Recursion)**
* Product Sum  (Python)

**[Searching](./Algorithms/Searching)**
* Binary Search (Python, Java)
* Linear Search (Python)

**[Sorting](./Algorithms/Sorting)**
* Bubble Sort (Python)
* Insertion Sort (Python)
* Selection Sort (Python)

**[Strings](./Algorithms/Strings)**
* Palindrome Check (Python)

## [Algorithm Analysis](./Algorithm-Analysis)

**[Big-O Complexity](./Algorithm-Analysis/Big-O_Complexity.md)** _Coming soon._

**[Recurrence Relations](./Algorithm-Analysis/Recurrence_Relations.md)** _Coming soon._

**[Loop Invariants](./Algorithm-Analysis/Loop_Invariants.md)** _Coming soon._

**[NP Completeness](./Algorithm-Analysis/NP_Completeness.md)** _Coming soon._

**[Amortized Analysis](./Algorithm-Analysis/Amortized_Analysis.md)** _Coming soon._

## License

This project is licensed under the **Apache License 2.0**.
See the [LICENSE](./LICENSE) file for details.
