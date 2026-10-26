// Graphs — Course schedule

/**
 * Whether all courses can be finished given prerequisite pairs [course, prereq].
 * Technique: Kahn topological sort
 * Invariant: DAG iff topological order has all courses.
 * canFinish: Time O(V+E); Space O(V).
 */

const { Graph } = require('./graph');
const { kahn } = require('./topologicalSort');

function canFinish(numCourses, prerequisites) {
  if (numCourses <= 0) return true;
  const g = new Graph(numCourses, true, false);
  if (prerequisites) {
    for (const [course, prereq] of prerequisites) {
      g.addEdge(prereq, course);
    }
  }
  return kahn(g).length === numCourses;
}

module.exports = { canFinish };
