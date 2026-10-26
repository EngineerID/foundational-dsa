// Graphs — shared unreachable distance sentinel

/** Matches Java `Integer.MAX_VALUE / 4`, Python `2147483647 // 4`, and shared JSON goldens. */
const GRAPH_UNREACHABLE = Math.floor(2147483647 / 4);

module.exports = { GRAPH_UNREACHABLE };
