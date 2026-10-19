// Strings — Aho-Corasick multi-pattern search

/**
 * Find all occurrences of multiple patterns in text.
 * Technique: Aho-Corasick automaton
 * Invariant: Failure links preserve matched prefixes.
 * search: Time O(n+m+z); Space O(m).
 */

function search(text, patterns) {
  if (!patterns.length || !text) return [];
  const goto = [{}];
  const out = [[]];
  const fail = [0];

  function addPattern(pid, pat) {
    let state = 0;
    for (const ch of pat) {
      if (goto[state][ch] == null) {
        const nxt = goto.length;
        goto[state][ch] = nxt;
        goto.push({});
        out.push([]);
        fail.push(0);
      }
      state = goto[state][ch];
    }
    out[state].push(pid);
  }

  for (let i = 0; i < patterns.length; i += 1) {
    if (patterns[i]) addPattern(i, patterns[i]);
  }

  const q = [];
  for (const ch of Object.keys(goto[0])) {
    const nxt = goto[0][ch];
    fail[nxt] = 0;
    q.push(nxt);
  }
  for (let qi = 0; qi < q.length; qi += 1) {
    const r = q[qi];
    for (const ch of Object.keys(goto[r])) {
      const s = goto[r][ch];
      q.push(s);
      let f = fail[r];
      while (f && goto[f][ch] == null) f = fail[f];
      fail[s] = goto[f][ch] != null ? goto[f][ch] : 0;
      out[s].push(...out[fail[s]]);
    }
  }

  const hits = [];
  let state = 0;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    while (state && goto[state][ch] == null) state = fail[state];
    state = goto[state][ch] != null ? goto[state][ch] : 0;
    if (out[state].length) {
      for (const pid of out[state]) {
        const pat = patterns[pid];
        hits.push(i - pat.length + 1);
      }
    }
  }
  return [...new Set(hits)].sort((a, b) => a - b);
}

module.exports = { search };
