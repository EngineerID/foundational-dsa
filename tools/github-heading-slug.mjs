/**
 * Approximate GitHub markdown heading anchor slugs (ASCII-focused headings).
 */
export function githubHeadingSlug(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function collectHeadingSlugs(markdown) {
  const slugs = new Set();
  for (const m of markdown.matchAll(/^#{1,6}\s+(.+)$/gm)) {
    slugs.add(githubHeadingSlug(m[1]));
  }
  return slugs;
}
