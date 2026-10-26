/**
 * Shared unreachable-distance sentinel for weighted-graph implementations and JSON goldens.
 * Java: Integer.MAX_VALUE / 4 · Python: 2147483647 // 4 · JavaScript: graphInf.js
 */
export const GRAPH_UNREACHABLE = Math.floor(2147483647 / 4);
