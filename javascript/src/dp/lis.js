function length(arr) {
  if (!arr || arr.length === 0) return 0;
  const tails = [];
  for (const x of arr) {
    let lo = 0;
    let hi = tails.length;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (tails[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    if (lo === tails.length) tails.push(x);
    else tails[lo] = x;
  }
  return tails.length;
}

module.exports = { length };
