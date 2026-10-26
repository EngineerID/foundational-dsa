// Practice — Course schedule

const { Graph } = require('../graphs/graph');
const { kahn } = require('../graphs/topologicalSort');

/** @param {number} numCourses @param {number[][]} prerequisites [course, prereq] */
function canFinish(numCourses, prerequisites) {
  const g = new Graph(numCourses, true, false);
  for (const [course, prereq] of prerequisites) {
    g.addEdge(prereq, course);
  }
  return kahn(g).length === numCourses;
}

module.exports = { canFinish };
