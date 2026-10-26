/**
 * Map practice catalogTopic ids to shared golden JSON under tools/ (practice tests).
 */
import { CORE_GOLDENS, STATEFUL_GOLDENS } from './golden-fixtures.mjs';

/** BFS practice uses a dedicated fixture (shortest-path array shape). */
export const PRACTICE_BFS_GOLDENS = 'practice-bfs-goldens.json';

const TOPIC_TO_JSON = new Map();

for (const [id, meta] of Object.entries(CORE_GOLDENS)) {
  TOPIC_TO_JSON.set(id, meta.json);
}
for (const meta of STATEFUL_GOLDENS) {
  TOPIC_TO_JSON.set(meta.id, meta.json);
}

/**
 * @param {string} catalogTopic
 * @returns {string | null} basename under tools/, or null if unmapped
 */
export function practiceGoldenJsonForTopic(catalogTopic) {
  if (catalogTopic === 'bfs') return PRACTICE_BFS_GOLDENS;
  return TOPIC_TO_JSON.get(catalogTopic) ?? null;
}

export function allPracticeGoldenJsonBasenames() {
  const out = new Set(TOPIC_TO_JSON.values());
  out.add(PRACTICE_BFS_GOLDENS);
  return [...out].sort();
}
