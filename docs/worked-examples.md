# Worked examples

Short, language-neutral walkthroughs for three core topics. Implementations live under `java/`, `python/dsa/`, and `javascript/src/` with the same behavior.

## Binary search on a sorted array

**Goal:** Find index of key `7` in `[1, 3, 5, 7, 9, 11]`.

| Step | `lo` | `hi` | `mid` | `arr[mid]` | Action |
|------|------|------|-------|------------|--------|
| 1 | 0 | 5 | 2 | 5 | `5 < 7` → search right half (`lo = 3`) |
| 2 | 3 | 5 | 4 | 11 | `11 > 7` → search left half (`hi = 3`) |
| 3 | 3 | 3 | 3 | 7 | Match → return index **3** |

If the key were `8`, step 2 would set `lo = 5`, step 3 would have `lo > hi` → return **-1**.

**API:** `search(sortedArray, key)` in each language (see [binary-search](items/searching/binary-search.md)).

## Merge sort (top-down)

**Input:** `[38, 27, 43, 3]`

1. Split: `[38, 27]` and `[43, 3]`
2. Split leaves: `[38]`, `[27]`, `[43]`, `[3]`
3. Merge pairs: `[27, 38]`, `[3, 43]`
4. Merge halves: `[3, 27, 38, 43]`

Merge of `[27, 38]` with `[3, 43]` compares fronts (`3` vs `27`, take `3`; …) producing the sorted four-element array.

**API:** `sort(array)` returns a new sorted array (Python/JS) or sorts in place depending on algorithm module; merge sort returns a copy in all three ports.

## KMP pattern search

**Text:** `ababcababa`  
**Pattern:** `aba`

Build LPS for `aba` → `[0, 0, 1]` (longest proper prefix that is also suffix).

Scan highlights:

- Match `aba` at index 0, then continue; mismatch after partial `ab` uses LPS to shift pattern without moving text index backward.
- Next full match at index **5** (substring `ababa` contains `aba` at offset 5).

**Empty pattern:** By convention in this repo, `search(text, "")` returns **0** (vacuous match), same as `str.find` / `String.indexOf`.

**API:** `search(text, pattern)` → first index or `-1` (see [kmp](items/strings/kmp.md)).

## Try it locally

```bash
npm run demo -- binary-search
npm run demo -- merge-sort
npm run demo -- kmp
```

Optional language filter: `npm run demo -- kmp python`.
