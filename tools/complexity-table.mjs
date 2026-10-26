/**
 * Parse doc-spec complexity strings and render per-topic markdown tables.
 */
export function parseTimeSpace(complexity) {
  if (!complexity) {
    return { time: '—', space: '—' };
  }
  const time = complexity.match(/Time O\([^)]+\)/i)?.[0] ?? '—';
  const space = complexity.match(/Space O\([^)]+\)/i)?.[0] ?? '—';
  return { time, space };
}

export function complexityTableMarkdown(complexity) {
  const { time, space } = parseTimeSpace(complexity);
  return ['', '| | Time | Space |', '|---|------|-------|', `| Primary | ${time} | ${space} |`, ''].join('\n');
}

export function normalizeComplexityCell(s) {
  return s
    .replace(/·/g, '*')
    .replace(/\s+/g, '')
    .replace(/charsstored/gi, 'totalchars')
    .toLowerCase();
}
