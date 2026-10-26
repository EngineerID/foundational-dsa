/** Small-n brute-force references for practice property tests. */

const { GRAPH_UNREACHABLE: INF } = require('../../src/graphs/graphInf');

function refSorted(arr) {
  return [...arr].sort((a, b) => a - b);
}

function refLinearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }
  return -1;
}

function refBinarySearch(sorted, key) {
  let lo = 0;
  let hi = sorted.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (sorted[mid] === key) return mid;
    if (sorted[mid] < key) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

function refTwoSumSorted(sorted, target) {
  let lo = 0;
  let hi = sorted.length - 1;
  while (lo < hi) {
    const s = sorted[lo] + sorted[hi];
    if (s === target) return [lo + 1, hi + 1];
    if (s < target) lo += 1;
    else hi -= 1;
  }
  return [-1, -1];
}

function refTrap(heights) {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  while (left < right) {
    if (heights[left] <= heights[right]) {
      leftMax = Math.max(leftMax, heights[left]);
      water += leftMax - heights[left];
      left += 1;
    } else {
      rightMax = Math.max(rightMax, heights[right]);
      water += rightMax - heights[right];
      right -= 1;
    }
  }
  return water;
}

function refKthLargest(nums, k) {
  const sorted = [...nums].sort((a, b) => a - b);
  return sorted[sorted.length - k];
}

function refMaxSubarray(nums) {
  let best = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
  }
  return best;
}

function refCoinChange(coins, amount) {
  if (amount === 0) return 0;
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let a = 1; a <= amount; a++) {
    for (const c of coins) {
      if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

function refKnapsack(weights, values, capacity) {
  const n = weights.length;
  let best = 0;
  for (let mask = 0; mask < 1 << n; mask++) {
    let w = 0;
    let v = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        w += weights[i];
        v += values[i];
      }
    }
    if (w <= capacity) best = Math.max(best, v);
  }
  return best;
}

function refLcs(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function refLis(nums) {
  const dp = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return dp.length ? Math.max(...dp) : 0;
}

function refEditDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
}

function refMatrixChain(dims) {
  const n = dims.length - 1;
  if (n <= 0) return 0;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i + len - 1 < n; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1];
        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }
  return dp[0][n - 1];
}

function refRodCutting(prices, n) {
  const dp = Array(n + 1).fill(0);
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i <= len; i++) {
      dp[len] = Math.max(dp[len], prices[i - 1] + dp[len - i]);
    }
  }
  return dp[n];
}

function refPartitionEqual(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  for (const x of nums) {
    for (let t = target; t >= x; t--) {
      dp[t] = dp[t] || dp[t - x];
    }
  }
  return dp[target];
}

function refLps(s) {
  const n = s.length;
  if (n === 0) return 0;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = 2 + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}

function refBfs(n, edges, source) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  const dist = Array(n).fill(-1);
  dist[source] = 0;
  const q = [source];
  for (let qi = 0; qi < q.length; qi++) {
    const u = q[qi];
    for (const v of adj[u]) {
      if (dist[v] === -1) {
        dist[v] = dist[u] + 1;
        q.push(v);
      }
    }
  }
  return dist;
}

function refUfConnected(n, unions, a, b) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of unions) {
    adj[u].push(v);
    adj[v].push(u);
  }
  const seen = Array(n).fill(false);
  const q = [a];
  seen[a] = true;
  for (let qi = 0; qi < q.length; qi++) {
    const u = q[qi];
    for (const v of adj[u]) {
      if (!seen[v]) {
        seen[v] = true;
        q.push(v);
      }
    }
  }
  return seen[b];
}

function refDijkstra(n, edges, source) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
  }
  const dist = Array(n).fill(INF);
  dist[source] = 0;
  const seen = Array(n).fill(false);
  for (let iter = 0; iter < n; iter++) {
    let u = -1;
    let best = INF;
    for (let i = 0; i < n; i++) {
      if (!seen[i] && dist[i] < best) {
        best = dist[i];
        u = i;
      }
    }
    if (u === -1) break;
    seen[u] = true;
    for (const [v, w] of adj[u]) {
      if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
    }
  }
  return dist;
}

function refNumIslands(grid) {
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;
  const g = grid.map((row) => row.slice());
  let count = 0;
  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] === '0') return;
    g[r][c] = '0';
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (g[r][c] === '1') {
        count += 1;
        dfs(r, c);
      }
    }
  }
  return count;
}

function refCanFinish(numCourses, edges) {
  const adj = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of edges) adj[b].push(a);
  const state = Array(numCourses).fill(0);
  const dfs = (u) => {
    if (state[u] === 1) return false;
    if (state[u] === 2) return true;
    state[u] = 1;
    for (const v of adj[u]) {
      if (!dfs(v)) return false;
    }
    state[u] = 2;
    return true;
  };
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
}

function refTopoValid(n, edges, order) {
  if (order.length !== n) return false;
  const pos = new Map(order.map((v, i) => [v, i]));
  for (const [u, v] of edges) {
    if (pos.get(u) >= pos.get(v)) return false;
  }
  return true;
}

function refMstWeight(n, edges) {
  const parent = Array.from({ length: n }, (_, i) => i);
  const find = (x) => {
    while (parent[x] !== x) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    return x;
  };
  const sorted = [...edges].sort((a, b) => a[2] - b[2]);
  let total = 0;
  let used = 0;
  for (const [u, v, w] of sorted) {
    const pu = find(u);
    const pv = find(v);
    if (pu !== pv) {
      parent[pu] = pv;
      total += w;
      used += 1;
      if (used === n - 1) return total;
    }
  }
  return 1e9;
}

function refBipartite(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }
  const color = Array(n).fill(-1);
  for (let start = 0; start < n; start++) {
    if (color[start] !== -1) continue;
    color[start] = 0;
    const q = [start];
    for (let qi = 0; qi < q.length; qi++) {
      const u = q[qi];
      for (const v of adj[u]) {
        if (color[v] === -1) {
          color[v] = color[u] ^ 1;
          q.push(v);
        } else if (color[v] === color[u]) return false;
      }
    }
  }
  return true;
}

function refTsp(dist) {
  const n = dist.length;
  if (n <= 1) return 0;
  let best = Infinity;
  const perm = Array.from({ length: n - 1 }, (_, i) => i + 1);
  const visit = (k) => {
    if (k === perm.length) {
      let cost = 0;
      let prev = 0;
      for (const city of perm) {
        cost += dist[prev][city];
        prev = city;
      }
      cost += dist[prev][0];
      best = Math.min(best, cost);
      return;
    }
    for (let i = k; i < perm.length; i++) {
      [perm[k], perm[i]] = [perm[i], perm[k]];
      visit(k + 1);
      [perm[k], perm[i]] = [perm[i], perm[k]];
    }
  };
  visit(0);
  return best;
}

module.exports = {
  refSorted,
  refLinearSearch,
  refBinarySearch,
  refTwoSumSorted,
  refTrap,
  refKthLargest,
  refMaxSubarray,
  refCoinChange,
  refKnapsack,
  refLcs,
  refLis,
  refEditDistance,
  refMatrixChain,
  refRodCutting,
  refPartitionEqual,
  refLps,
  refBfs,
  refUfConnected,
  refDijkstra,
  refNumIslands,
  refCanFinish,
  refTopoValid,
  refMstWeight,
  refBipartite,
  refTsp,
};
