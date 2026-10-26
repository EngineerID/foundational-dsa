#!/usr/bin/env node
/**
 * Append minimal edge-theme cases to tools/*-goldens.json (idempotent).
 * Run: node tools/expand-shared-golden-edges.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { CORE_GOLDENS, STATEFUL_GOLDENS } from './golden-fixtures.mjs';
import { GRAPH_UNREACHABLE as INF } from './graph-sentinel.mjs';
import { requiredThemes, themesInCases } from './shared-golden-themes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TOOLS = path.join(ROOT, 'tools');

function allFixtures() {
  const out = [];
  for (const [id, meta] of Object.entries(CORE_GOLDENS)) {
    out.push({ id, json: meta.json });
  }
  for (const meta of STATEFUL_GOLDENS) {
    out.push({ id: meta.id, json: meta.json });
  }
  return out;
}

function caseKey(c) {
  return JSON.stringify(c);
}

function mergeCases(existing, extras) {
  const seen = new Set(existing.map(caseKey));
  const out = [...existing];
  for (const c of extras) {
    const k = caseKey(c);
    if (!seen.has(k)) {
      out.push(c);
      seen.add(k);
    }
  }
  return out;
}

function missingThemes(id, cases) {
  const have = themesInCases(cases);
  return requiredThemes(id).filter((t) => !have.has(t));
}

function extrasFor(id, cases) {
  const need = new Set(missingThemes(id, cases));
  if (need.size === 0) return [];
  const c0 = cases[0];
  const out = [];

  if ('input' in c0 && 'sorted' in c0) {
    if (need.has('empty')) out.push({ input: [], sorted: [] });
    if (need.has('single')) out.push({ input: [4], sorted: [4] });
    if (need.has('duplicate')) out.push({ input: [2, 2], sorted: [2, 2] });
    return out;
  }

  if ('arr' in c0 && 'key' in c0 && 'expected' in c0) {
    if (need.has('empty')) out.push({ arr: [], key: 1, expected: -1 });
    if (need.has('single')) out.push({ arr: [5], key: 5, expected: 0 });
    if (need.has('duplicate')) out.push({ arr: [3, 3, 3], key: 3, expected: 0 });
    if (need.has('boundary')) out.push({ arr: [1, 2, 3], key: 9, expected: -1 });
    return out;
  }

  if ('weights' in c0 && 'values' in c0 && 'capacity' in c0) {
    if (need.has('empty')) {
      out.push({ weights: [], values: [], capacity: 0, expected: 0 });
    }
    if (need.has('single')) out.push({ weights: [1], values: [2], capacity: 1, expected: 2 });
    if (need.has('boundary')) out.push({ weights: [5], values: [10], capacity: 0, expected: 0 });
    return out;
  }

  if ('nums' in c0 && 'expected' in c0 && !('weights' in c0)) {
    if (need.has('empty')) out.push({ nums: [], expected: true });
    if (need.has('single')) out.push({ nums: [7], expected: false });
    return out;
  }

  if ('prices' in c0 && 'length' in c0 && 'expected' in c0) {
    if (need.has('empty')) out.push({ prices: [], length: 0, expected: 0 });
    if (need.has('single')) out.push({ prices: [3], length: 1, expected: 3 });
    return out;
  }

  if ('s' in c0 && 'expected' in c0 && !('patterns' in c0)) {
    if (need.has('empty')) out.push({ s: '', expected: 0 });
    if (need.has('single')) out.push({ s: 'a', expected: 1 });
    return out;
  }

  if ('text' in c0 && 'pattern' in c0) {
    if (need.has('empty')) out.push({ text: '', pattern: 'a', index: -1 });
    if (need.has('single')) out.push({ text: 'a', pattern: 'a', index: 0 });
    if (need.has('duplicate')) out.push({ text: 'aa', pattern: 'a', index: 0 });
    return out;
  }

  if ('text' in c0 && 'patterns' in c0) {
    if (need.has('empty')) out.push({ text: '', patterns: ['x'], hits: [] });
    if (need.has('single')) out.push({ text: 'a', patterns: ['a'], hits: [0] });
    return out;
  }

  if ('s' in c0 && 'sa' in c0) {
    if (need.has('empty')) out.push({ s: '', sa: [] });
    if (need.has('single')) out.push({ s: 'a', sa: [0] });
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'source' in c0 && 'distances' in c0) {
    if (need.has('single') || need.has('empty')) {
      out.push({
        n: 1,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? true,
        edges: [],
        source: 0,
        distances: [0],
      });
    }
    if (need.has('boundary')) {
      out.push({
        n: 2,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? true,
        edges: [],
        source: 0,
        distances: [0, INF],
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'source' in c0 && 'discovery' in c0) {
    if (need.has('single') || need.has('empty')) {
      out.push({
        n: 1,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? false,
        edges: [],
        source: 0,
        discovery: [0],
        finish: [1],
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'componentCount' in c0) {
    if (need.has('single') || need.has('empty')) {
      out.push({
        n: 1,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? false,
        edges: [],
        componentCount: 1,
        componentSizes: [1],
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'totalWeight' in c0) {
    if (need.has('single') || need.has('empty')) {
      out.push({
        n: 1,
        directed: c0.directed ?? false,
        weighted: c0.weighted ?? true,
        edges: [],
        totalWeight: 0,
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'articulationPoints' in c0) {
    if (need.has('single') || need.has('empty')) {
      out.push({
        n: 1,
        directed: c0.directed ?? false,
        weighted: c0.weighted ?? false,
        edges: [],
        articulationPoints: [],
        bridges: [],
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'source' in c0 && 'goal' in c0 && 'length' in c0) {
    if (need.has('single') || need.has('empty')) {
      out.push({
        n: 1,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? true,
        edges: [],
        source: 0,
        goal: 0,
        length: 0,
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'pairs' in c0) {
    if (need.has('single') || need.has('empty')) {
      out.push({
        n: 1,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? true,
        edges: [],
        pairs: [[0, 0, 0]],
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'hasNegativeCycle' in c0) {
    if (need.has('single') || need.has('empty')) {
      out.push({
        n: 1,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? true,
        edges: [],
        source: 0,
        distances: [0],
        hasNegativeCycle: false,
      });
    }
    return out;
  }

  if ('push' in c0 && 'popValues' in c0) {
    if (need.has('empty')) out.push({ push: [], popValues: [], empty: true, peek: null });
    if (need.has('single')) out.push({ push: [1], popValues: [1], empty: true, peek: null });
    return out;
  }

  if ('enqueue' in c0 && 'dequeueValues' in c0) {
    if (need.has('empty')) {
      out.push({ enqueue: [], dequeueValues: [], peek: null, empty: true });
    }
    if (need.has('single')) {
      out.push({ enqueue: [1], dequeueValues: [1], peek: null, empty: true });
    }
    return out;
  }

  if ('n' in c0 && 'adds' in c0 && 'checks' in c0) {
    if (need.has('empty')) {
      out.push({ n: 1, adds: [], checks: [{ prefixAt: 0, expected: 0 }] });
    }
    if (need.has('single')) {
      out.push({ n: 1, adds: [[0, 5]], checks: [{ prefixAt: 0, expected: 5 }] });
    }
    return out;
  }

  if ('operations' in c0) {
    if (need.has('empty')) out.push({ operations: [] });
    if (need.has('single')) out.push({ operations: [{ op: 'size', expected: 0 }] });
    return out;
  }

  if ('a' in c0 && 'b' in c0 && 'expected' in c0) {
    if (need.has('empty')) out.push({ a: '', b: '', expected: 0 });
    if (need.has('single')) out.push({ a: 'x', b: 'y', expected: 1 });
    return out;
  }

  if ('seed' in c0 && Array.isArray(c0.inserts) && c0.searchResults) {
    if (need.has('empty')) {
      out.push({ seed: 0, inserts: [], searchResults: [{ key: 1, value: null }] });
    }
    if (need.has('single')) {
      out.push({ seed: 0, inserts: [[4, 40]], searchResults: [{ key: 4, value: 40 }, { key: 9, value: null }] });
    }
    return out;
  }

  if ('inserts' in c0 && 'inOrder' in c0) {
    if (need.has('empty')) {
      out.push({ inserts: [], inOrder: [], preOrder: [], postOrder: [] });
    }
    if (need.has('single')) {
      out.push({ inserts: [[1, 'a']], inOrder: [1], preOrder: [1], postOrder: [1] });
    }
    return out;
  }

  if ('inserts' in c0 && 'inOrderKeys' in c0) {
    if (need.has('empty')) {
      out.push({ inserts: [], inOrderKeys: [], searchKey: 1, searchValue: null });
    }
    if (need.has('single')) {
      out.push({ inserts: [[2, 'v']], inOrderKeys: [2], searchKey: 2, searchValue: 'v' });
    }
    return out;
  }

  if ('inserts' in c0 && 'searches' in c0 && Array.isArray(c0.searches) && c0.searches[0]?.found !== undefined) {
    if (need.has('empty')) {
      out.push({ t: c0.t ?? 2, inserts: [], searches: [{ key: 1, found: false }] });
    }
    if (need.has('single')) {
      out.push({
        t: c0.t ?? 2,
        inserts: [8],
        searches: [{ key: 8, found: true }, { key: 99, found: false }],
      });
    }
    return out;
  }

  if ('amount' in c0 && 'coins' in c0) {
    if (need.has('empty')) out.push({ amount: 0, coins: [1], expected: 0 });
    if (need.has('single')) out.push({ amount: 1, coins: [1], expected: 1 });
    return out;
  }

  if ('addLast' in c0 && 'addFirst' in c0) {
    if (need.has('empty')) {
      out.push({ addLast: [], addFirst: [], removeFirst: null, removeLast: null, remainingValue: null, empty: true });
    }
    if (need.has('single')) {
      out.push({ addLast: [5], addFirst: [], removeFirst: 5, empty: true });
    }
    return out;
  }

  if ('kruskalWeight' in c0) {
    if (need.has('single')) {
      out.push({
        n: 1,
        directed: false,
        weighted: true,
        edges: [],
        kruskalWeight: 0,
        kruskalEdgeCount: 0,
        primWeight: 0,
      });
    }
    if (need.has('boundary')) {
      out.push({
        n: 2,
        directed: false,
        weighted: true,
        edges: [],
        kruskalWeight: 0,
        kruskalEdgeCount: 0,
        primWeight: 0,
      });
    }
    return out;
  }

  if ('str1' in c0 && 'str2' in c0) {
    if (need.has('empty')) out.push({ str1: '', str2: '', expected: 0 });
    if (need.has('single')) out.push({ str1: 'a', str2: 'b', expected: 1 });
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'expectedOrder' in c0) {
    if (need.has('single')) {
      out.push({
        n: 1,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? false,
        edges: [],
        expectedOrder: [0],
      });
    }
    return out;
  }

  if ('initial' in c0 && 'rangeSum' in c0) {
    if (need.has('empty')) {
      out.push({
        initial: [],
        rangeSum: [{ left: 0, right: 0, sum: 0 }],
        update: { index: 0, value: 0 },
        rangeSumAfter: [{ left: 0, right: 0, sum: 0 }],
      });
    }
    if (need.has('single')) {
      out.push({
        initial: [3],
        rangeSum: [{ left: 0, right: 0, sum: 3 }],
        update: { index: 0, value: 4 },
        rangeSumAfter: [{ left: 0, right: 0, sum: 4 }],
      });
    }
    return out;
  }

  if (
    'ops' in c0 &&
    Array.isArray(c0.ops) &&
    (c0.ops.length === 0 || Array.isArray(c0.ops[0])) &&
    c0.get &&
    typeof c0.get.key === 'string'
  ) {
    if (need.has('empty')) {
      out.push({
        ops: [],
        get: { key: 'solo', value: null },
        getMissing: { key: 'solo', value: null },
      });
    }
    if (need.has('single')) {
      out.push({
        ops: [['put', 'solo', 5]],
        get: { key: 'solo', value: 5 },
        getMissing: { key: 'z', value: null },
      });
    }
    if (need.has('duplicate')) {
      out.push({
        ops: [
          ['put', 'dup', 1],
          ['put', 'dup', 2],
        ],
        get: { key: 'dup', value: 2 },
        getMissing: { key: 'z', value: null },
      });
    }
    return out;
  }

  if ('expectedItems' in c0 && 'add' in c0) {
    if (need.has('empty')) {
      out.push({
        expectedItems: 10,
        falsePositiveRate: 0.01,
        add: [],
        queries: [{ item: 'x', expected: false }],
      });
    }
    if (need.has('single')) {
      out.push({
        expectedItems: 10,
        falsePositiveRate: 0.01,
        add: ['solo'],
        queries: [{ item: 'solo', expected: true }],
      });
    }
    if (need.has('duplicate')) {
      out.push({
        expectedItems: 10,
        falsePositiveRate: 0.01,
        add: ['dup', 'dup'],
        queries: [{ item: 'dup', expected: true }],
      });
    }
    return out;
  }

  if ('capacity' in c0 && 'steps' in c0) {
    if (need.has('empty')) {
      out.push({ capacity: 1, steps: [{ op: 'get', key: 1, expected: -1 }] });
    }
    if (need.has('single')) {
      out.push({
        capacity: 1,
        steps: [
          { op: 'put', key: 1, value: 1 },
          { op: 'get', key: 1, expected: 1 },
        ],
      });
    }
    return out;
  }

  if ('inserts' in c0 && 'extractOrder' in c0) {
    if (need.has('empty')) out.push({ inserts: [], extractOrder: [] });
    if (need.has('single')) out.push({ inserts: [4], extractOrder: [4] });
    return out;
  }

  if ('inserts' in c0 && 'search' in c0 && Array.isArray(c0.search)) {
    if (need.has('empty')) {
      out.push({ inserts: [], search: [{ word: 'x', expected: false }], startsWith: [{ prefix: 'x', expected: false }] });
    }
    if (need.has('single')) {
      out.push({
        inserts: ['a'],
        search: [{ word: 'a', expected: true }],
        startsWith: [{ prefix: 'a', expected: true }],
      });
    }
    return out;
  }

  if ('n' in c0 && 'unions' in c0) {
    if (need.has('single')) {
      out.push({
        n: 1,
        unions: [],
        connected: [{ a: 0, b: 0, expected: true }],
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'mstWeight' in c0) {
    if (need.has('single')) {
      out.push({
        n: 1,
        directed: c0.directed ?? false,
        weighted: c0.weighted ?? true,
        edges: [],
        mstWeight: 0,
      });
    }
    if (need.has('boundary')) {
      out.push({
        n: 2,
        directed: c0.directed ?? false,
        weighted: c0.weighted ?? true,
        edges: [],
        mstWeight: 0,
      });
    }
    return out;
  }

  if ('nums' in c0 && 'k' in c0) {
    if (need.has('single')) out.push({ nums: [4], k: 1, expected: [4] });
    if (need.has('boundary')) out.push({ nums: [1, 3, 2], k: 5, expected: [] });
    return out;
  }

  if ('stream' in c0 && 'k' in c0) {
    if (need.has('boundary')) out.push({ stream: [1], k: 1, expected: [1] });
    return out;
  }

  if ('arr' in c0 && 'k' in c0 && 'expected' in c0 && !('key' in c0)) {
    if (need.has('empty')) out.push({ arr: [], k: 1, expected: -1 });
    if (need.has('duplicate')) out.push({ arr: [2, 2, 2], k: 1, expected: 2 });
    if (need.has('boundary')) out.push({ arr: [1, 2, 3], k: 10, expected: -1 });
    return out;
  }

  if ('keys' in c0 && 'ops' in c0) {
    if (need.has('empty')) out.push({ keys: [], ops: [] });
    if (need.has('single')) out.push({ keys: ['a'], ops: [{ op: 'search', key: 'a', found: true }] });
    return out;
  }

  if ('capacity' in c0 && 'ops' in c0) {
    if (need.has('empty')) out.push({ capacity: 1, ops: [] });
    if (need.has('single')) out.push({ capacity: 1, ops: [{ op: 'put', key: 1, value: 1 }] });
    return out;
  }

  if ('size' in c0 && 'ops' in c0) {
    if (need.has('empty')) out.push({ size: 3, ops: [] });
    if (need.has('single')) out.push({ size: 3, ops: [{ op: 'add', key: 'x' }] });
    return out;
  }

  if ('values' in c0 && 'queries' in c0) {
    if (need.has('empty')) out.push({ values: [], queries: [] });
    if (need.has('single')) out.push({ values: [1], queries: [{ l: 0, r: 0, expected: 1 }] });
    return out;
  }

  if ('nodes' in c0 && 'ops' in c0) {
    if (need.has('empty')) out.push({ nodes: [], ops: [] });
    if (need.has('single')) out.push({ nodes: [1], ops: [{ op: 'pushFront', value: 1 }] });
    return out;
  }

  if ('addLast' in c0 && 'getIndex' in c0) {
    if (need.has('empty')) {
      out.push({ addLast: [], getIndex: 0, getValue: null, removeIndex: 0, removeValue: null, sizeAfter: 0 });
    }
    if (need.has('single')) {
      out.push({ addLast: [6], getIndex: 0, getValue: 6, removeIndex: 0, removeValue: 6, sizeAfter: 0 });
    }
    return out;
  }

  if (('dims' in c0 || 'dimensions' in c0) && 'expected' in c0) {
    const key = 'dimensions' in c0 ? 'dimensions' : 'dims';
    if (need.has('empty')) out.push({ [key]: [], expected: 0 });
    if (need.has('single')) out.push({ [key]: [5], expected: 0 });
    return out;
  }

  if ('append' in c0 && 'get' in c0) {
    if (need.has('empty')) out.push({ append: [], get: [], size: 0 });
    if (need.has('single')) out.push({ append: [4], get: [{ index: 0, value: 4 }], size: 1 });
    return out;
  }

  if ('values' in c0 && 'left' in c0 && 'right' in c0) {
    if (need.has('empty')) out.push({ values: [], left: 0, right: 0, expected: 0 });
    if (need.has('single')) out.push({ values: [2], left: 0, right: 0, expected: 2 });
    return out;
  }

  if ('inserts' in c0 && 'kth' in c0) {
    if (need.has('empty')) out.push({ inserts: [], kth: 1, expected: null });
    if (need.has('single')) out.push({ inserts: [4], kth: 1, expected: 4 });
    return out;
  }

  if ('pairs' in c0 && 'expected' in c0 && !('n' in c0)) {
    if (need.has('boundary')) out.push({ pairs: [[0, 1, 1e18]], expected: 1e18 });
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'expected' in c0 && !('distances' in c0)) {
    if (need.has('single')) {
      out.push({ n: 1, directed: false, weighted: false, edges: [], expected: true });
    }
    if (need.has('boundary')) {
      out.push({
        n: 3,
        directed: false,
        weighted: false,
        edges: [
          [0, 1],
          [1, 2],
          [2, 0],
        ],
        expected: false,
      });
    }
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'vertices' in c0 && 'neighborCount' in c0) {
    if (need.has('single')) {
      out.push({
        n: 1,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? true,
        edges: [],
        vertices: 1,
        neighborCount: { 0: 0 },
        edgeTo: { 0: [] },
      });
    }
    if (need.has('boundary')) {
      out.push({
        n: 2,
        directed: c0.directed ?? true,
        weighted: c0.weighted ?? true,
        edges: [],
        vertices: 2,
        neighborCount: { 0: 0, 1: 0 },
        edgeTo: { 0: [], 1: [] },
      });
    }
    return out;
  }

  if ('ops' in c0 && 'size' in c0 && !('nodes' in c0)) {
    if (need.has('empty')) out.push({ size: 4, ops: [] });
    if (need.has('single')) out.push({ size: 4, ops: [{ op: 'insert', value: 1 }] });
    return out;
  }

  if ('heapOps' in c0) {
    if (need.has('empty')) out.push({ heapOps: [{ op: 'isEmpty', expected: true }] });
    if (need.has('single')) out.push({ heapOps: [{ op: 'insert', value: 1 }, { op: 'peek', expected: 1 }] });
    return out;
  }

  if ('unionOps' in c0) {
    if (need.has('single')) out.push({ unionOps: [{ op: 'makeSet', x: 0 }, { op: 'find', x: 0, expected: 0 }] });
    return out;
  }

  if ('nums' in c0 && 'expected' in c0 && !('weights' in c0) && !('amount' in c0)) {
    if (need.has('single')) out.push({ nums: [2], expected: 1 });
    return out;
  }

  if ('arr' in c0 && 'expected' in c0 && !('key' in c0)) {
    if (need.has('single')) out.push({ arr: [4], expected: 1 });
    return out;
  }

  if ('inserts' in c0 && 'select3' in c0) {
    if (need.has('empty')) out.push({ inserts: [], select3: null, rank5: 0 });
    if (need.has('single')) out.push({ inserts: [[3, '3']], select3: 3, rank5: 1 });
    return out;
  }

  if ('n' in c0 && 'edges' in c0 && 'pairs' in c0 && need.has('boundary')) {
    out.push({
      n: 2,
      directed: true,
      weighted: true,
      edges: [],
      pairs: [
        [0, 0, 0],
        [0, 1, 9007199254740991],
      ],
    });
    return out;
  }

  if ('input' in c0 && ('sorted' in c0 || 'expected' in c0)) {
    if (need.has('single') && 'expected' in c0) {
      out.push({ input: [2], mode: c0.mode ?? 'sort', expected: [2] });
    }
    if (need.has('single') && 'sorted' in c0) {
      out.push({ input: [1], sorted: [1] });
    }
    return out;
  }

  return out;
}

function main() {
  let changed = 0;
  for (const { id, json } of allFixtures()) {
    const p = path.join(TOOLS, json);
    const cases = JSON.parse(fs.readFileSync(p, 'utf8'));
    let merged = cases;
    for (let pass = 0; pass < 3; pass++) {
      const extra = extrasFor(id, merged);
      if (extra.length === 0) break;
      merged = mergeCases(merged, extra);
    }
    if (caseKey(merged) !== caseKey(cases)) {
      fs.writeFileSync(p, `${JSON.stringify(merged, null, 2)}\n`);
      changed++;
    }
  }
  console.log(`expand-shared-golden-edges: updated ${changed} fixture file(s).`);
}

main();
