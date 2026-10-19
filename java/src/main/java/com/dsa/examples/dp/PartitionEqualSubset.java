// Dynamic Programming — Partition equal subset

package com.dsa.examples.dp;

/**
 * Whether nums can be partitioned into two equal-sum subsets.
 * canPartition: Time O(n·sum); Space O(sum).
 */
public final class PartitionEqualSubset {

    private PartitionEqualSubset() {
    }

    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int x : nums) {
            total += x;
        }
        if (total % 2 != 0) {
            return false;
        }
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int x : nums) {
            if (x < 0) {
                throw new IllegalArgumentException("negative value");
            }
            for (int s = target; s >= x; s--) {
                dp[s] = dp[s] || dp[s - x];
            }
        }
        return dp[target];
    }
}
