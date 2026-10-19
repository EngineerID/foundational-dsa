#!/usr/bin/env node
import { findEdgeCaseGaps, formatEdgeCaseMarkdown } from './edge-case-coverage.mjs';

const gaps = findEdgeCaseGaps();
if (gaps.length) {
  console.error(formatEdgeCaseMarkdown(gaps));
  process.exit(1);
}
console.log('Edge-case themes: all five covered per item/language');
